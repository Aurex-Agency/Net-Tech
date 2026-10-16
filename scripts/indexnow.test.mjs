import { test } from 'node:test';
import assert from 'node:assert/strict';
import { prepareSubmission, submit } from './indexnow.mjs';
const sitemap = '<loc>https://nettech.ms/</loc><loc>https://nettech.ms/services/managed-it</loc>';
const key = 'test-key-12345678';
test('deduplicates canonical public routes and rejects unsafe/private input', () => {
  assert.equal(prepareSubmission(['/', '/'], sitemap, key).urlList.length, 1);
  for (const path of ['/support-form', '//evil.example', '/?utm_source=test', '/services/../contact', 'https://nettech.ms/', '/#x']) assert.throws(() => prepareSubmission([path], sitemap, key));
  assert.throws(() => prepareSubmission(['/'], sitemap, '../bad'));
});
test('never submits outside explicit production confirmation', async () => {
  await assert.rejects(() => submit({}, {}, () => { throw new Error('must not fetch'); }), /production/);
});
test('requires deployed verification and handles rate limiting without retry storms', async () => {
  const payload = prepareSubmission(['/'], sitemap, key);
  const env = { VERCEL_ENV: 'production', INDEXNOW_CONFIRM_PRODUCTION: 'true' };
  await assert.rejects(() => submit(payload, env, async () => new Response('wrong')), /verification/);
  let calls = 0;
  await assert.rejects(() => submit(payload, env, async () => ++calls === 1 ? new Response(key) : new Response('', { status: 429 })), /Rate limited/);
  assert.equal(calls, 2);
});
