import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const origin = 'https://nettech.ms';
export function prepareSubmission(paths, sitemap, key) {
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(key ?? '')) throw new Error('Configure a valid INDEXNOW_KEY.');
  if (!Array.isArray(paths) || !paths.length || paths.length > 10000) throw new Error('Supply 1-10000 changed paths.');
  const indexable = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]));
  const urlList = [...new Set(paths.map(path => {
    if (typeof path !== 'string' || !/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(path)) throw new Error('Only clean canonical paths are allowed.');
    const url = origin + path;
    if (!indexable.has(url)) throw new Error(`Path is not in the production sitemap: ${path}`);
    return url;
  }))];
  return { host: 'nettech.ms', key, keyLocation: `${origin}/${key}.txt`, urlList };
}

export async function submit(payload, env, fetcher = fetch) {
  if (env.VERCEL_ENV !== 'production' || env.INDEXNOW_CONFIRM_PRODUCTION !== 'true') throw new Error('Submission requires explicit production confirmation.');
  const verification = await fetcher(payload.keyLocation, { redirect: 'error', signal: AbortSignal.timeout(15000) });
  if (!verification.ok || (await verification.text()).trim() !== payload.key) throw new Error('Production verification file does not match.');
  const response = await fetcher('https://api.indexnow.org/indexnow', {
    method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload), signal: AbortSignal.timeout(20000), redirect: 'error',
  });
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow returned ${response.status}. ${response.status === 429 ? 'Rate limited; wait before manually retrying.' : 'Check configuration before retrying.'}`);
  return { status: response.status, count: payload.urlList.length, receivedAt: new Date().toISOString(), note: 'Receipt only; indexing and rankings are not guaranteed.' };
}

async function main() {
  const pathsFile = process.argv.find(arg => arg.startsWith('--paths='))?.slice(8);
  if (!pathsFile) throw new Error('Pass --paths=docs/seo-changed-paths.json. Default is dry-run; --submit opts in.');
  const payload = prepareSubmission(JSON.parse(readFileSync(pathsFile, 'utf8')), readFileSync('dist/sitemap.xml', 'utf8'), process.env.INDEXNOW_KEY);
  if (!process.argv.includes('--submit')) { console.log(JSON.stringify({ dryRun: true, host: payload.host, urlList: payload.urlList }, null, 2)); return; }
  const result = await submit(payload, process.env);
  mkdirSync('logs', { recursive: true });
  writeFileSync('logs/indexnow-last.json', JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result));
}

export function writeVerification(env, dist = 'dist') {
  if (env.VERCEL_ENV !== 'production' || !env.INDEXNOW_KEY) return;
  const key = env.INDEXNOW_KEY;
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error('Invalid INDEXNOW_KEY');
  if (!existsSync(dist)) throw new Error('Build directory missing.');
  writeFileSync(resolve(dist, `${key}.txt`), key);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) main().catch(error => { console.error(error.message); process.exitCode = 1; });
