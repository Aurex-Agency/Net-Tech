import { describe, expect, it } from 'vitest';
import { posts } from '@/data/posts';
import { staticPaths } from '@/App';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

describe('commercial growth articles', () => {
  it('has four new articles whose resource and related-content links resolve', () => {
    const slugs = new Set(['choosing-it-provider-medical-rehab-practice', 'prepare-business-network-assessment', 'business-it-employee-offboarding-checklist', 'second-business-location-it-acceptance-tests']);
    const added = posts.filter(post => slugs.has(post.slug));
    expect(added).toHaveLength(4);
    for (const post of added) {
      expect(staticPaths).toContain(`/blog/${post.slug}`);
      for (const block of post.body.filter(block => block.type === 'link')) expect(staticPaths).toContain(block.href);
      for (const slug of post.relatedPosts) expect(posts.some(post => post.slug === slug)).toBe(true);
      expect(post.cta?.service).toBeTruthy();
    }
  });
});

it('does not initialize analytics on previews or localhost', () => {
  const html = readFileSync('index.html', 'utf8');
  const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
  expect(script).toBeTruthy();
  for (const hostname of ['localhost', '127.0.0.1', 'net-tech-preview.vercel.app']) {
    const window = { location: { hostname } };
    runInNewContext(script!, { window });
    expect(window).not.toHaveProperty('gtag');
    expect(window).not.toHaveProperty('dataLayer');
  }
});

it('initializes production analytics once even when load and interaction both fire', () => {
  const script = readFileSync('index.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)?.[1];
  const events = new Map<string, () => void>();
  const appended: { src?: string }[] = [];
  const window = {
    location: { hostname: 'nettech.ms' },
    dataLayer: [] as IArguments[],
    addEventListener: (name: string, callback: () => void) => events.set(name, callback),
  };
  const document = {
    readyState: 'loading',
    createElement: () => ({}),
    head: { appendChild: (script: { src?: string }) => appended.push(script) },
  };
  runInNewContext(script!, { window, document });
  expect(window.dataLayer.map(entry => entry[0])).toEqual(['js', 'config']);
  expect(appended).toHaveLength(0);
  events.get('pointerdown')!();
  events.get('load')!();
  events.get('scroll')!();
  expect(appended).toHaveLength(1);
  expect(appended[0].src).toBe('https://www.googletagmanager.com/gtag/js?id=G-81YTRTKY6S');
});
