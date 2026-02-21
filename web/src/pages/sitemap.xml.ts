import type { APIRoute } from 'astro';
import yaml from 'js-yaml';
import type { MailServices } from '../types/MailServices';
import { makeKey } from '../utils/transform-data';
import config from '../utils/config';

export const GET: APIRoute = async ({ site }) => {
  const base = site?.href ?? 'https://email-comparison.as93.net/';

  const providers = await fetch(config.yamlUrl)
    .then(res => res.text())
    .then(text => (yaml.load(text) as unknown as MailServices).mailProviders)
    .catch(() => []);

  const staticPages = ['', 'about/', 'email-security-tips/'];
  const providerPages = providers.map(p => `email/${makeKey(p.name)}/`);
  const allPages = [...staticPages, ...providerPages];

  const urls = allPages
    .map(page => `  <url><loc>${new URL(page, base).href}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
