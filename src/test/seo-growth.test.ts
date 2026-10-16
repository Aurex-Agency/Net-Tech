import { describe, expect, it } from 'vitest';
import { posts } from '@/data/posts';
import { staticPaths } from '@/App';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

describe('commercial growth articles', () => {
  it('has four new articles whose resource and related-content links resolve', () => {
    const added = posts.filter(post => post.date === '2026-10-16');
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
