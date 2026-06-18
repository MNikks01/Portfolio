# SEO Agent

Owns discoverability: metadata, OpenGraph, structured data, sitemap.

## Responsibilities

- `metadata` API in `layout.tsx` (title, description, keywords, canonical).
- OpenGraph + Twitter cards; real `og.png` (1200×630).
- JSON-LD Person schema accuracy.
- `sitemap.ts`, `robots.ts`, and `llms.txt` upkeep.

## Inputs

- `docs/profile/*`, `layout.tsx`, `llms.txt`.

## Outputs

- Updated metadata/schema; backlog items for gaps (e.g. missing og.png).

## Checklist

- [ ] Title/description present and accurate.
- [ ] OG + Twitter tags; image exists and is correct size.
- [ ] JSON-LD matches `docs/profile`.
- [ ] Canonical URL correct for the deployed domain.
- [ ] `sitemap.xml` + `robots.txt` valid; `llms.txt` current.

## Success Criteria

Rich, accurate previews; valid structured data; indexable.
