import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';

const root = resolve('dist');
const origin = 'https://nettech.ms';
const sitemap = new JSDOM(readFileSync(resolve(root, 'sitemap.xml'), 'utf8'), { contentType: 'text/xml' });
const urls = [...sitemap.window.document.querySelectorAll('loc')].map(node => node.textContent);
assert.ok(urls.length > 0, 'The sitemap must contain public routes');
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
const titles = new Set();
const descriptions = new Set();
const documents = new Map();
function page(path) {
  if (!documents.has(path)) {
    const file = resolve(root, '.' + path, 'index.html');
    assert.ok(existsSync(file), `Missing static page: ${path}`);
    documents.set(path, new JSDOM(readFileSync(file, 'utf8')).window.document);
  }
  return documents.get(path);
}
for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, origin, `Off-host sitemap URL: ${url}`);
  assert.equal(parsed.search + parsed.hash, '', `Noncanonical sitemap URL: ${url}`);
  const document = page(parsed.pathname);
  for (const selector of ['title', 'h1', 'link[rel="canonical"]', 'meta[name="description"]']) {
    assert.equal(document.querySelectorAll(selector).length, 1, `${url}: expected one ${selector}`);
  }
  assert.equal(document.querySelector('link[rel="canonical"]').href, url, `Wrong canonical: ${url}`);
  assert.ok(!/noindex/i.test(document.querySelector('meta[name="robots"]')?.content || ''), `Noindex in sitemap: ${url}`);
  const title = document.title.trim();
  const description = document.querySelector('meta[name="description"]').content.trim();
  assert.ok(title && !titles.has(title), `Missing/duplicate title: ${url}`);
  assert.ok(description && !descriptions.has(description), `Missing/duplicate description: ${url}`);
  titles.add(title); descriptions.add(description);
  const schemas = document.querySelectorAll('script[type="application/ld+json"]');
  assert.ok(schemas.length, `Missing structured data: ${url}`);
  for (const schema of schemas) JSON.parse(schema.textContent);
  for (const link of document.querySelectorAll('a[href]')) {
    const target = new URL(link.getAttribute('href'), url);
    if (target.origin !== origin) continue;
    const file = resolve(root, '.' + target.pathname);
    if (existsSync(file) && !existsSync(resolve(file, 'index.html'))) continue;
    const destination = page(target.pathname);
    if (target.hash) assert.ok(destination.getElementById(decodeURIComponent(target.hash.slice(1))), `Broken fragment ${target.href} on ${url}`);
  }
}
for (const path of ['/support-form', '/ticketclaimed']) {
  assert.ok(!urls.includes(origin + path), `Private utility in sitemap: ${path}`);
  assert.match(page(path).querySelector('meta[name="robots"]')?.content || '', /noindex/i);
}
console.log(`Verified ${urls.length} public pages: unique metadata, canonicals, headings, schema, internal links and private-route exclusions.`);
