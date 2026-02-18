# Contributing

All provider data lives in a single file: [`email-provider-data.yml`](https://github.com/Lissy93/email-comparison/blob/master/email-provider-data.yml), validated against [`schema.json`](/schema.json). CI automatically checks every PR for YAML validity and schema compliance. For visual changes to the website, see the [`web/`](https://github.com/Lissy93/email-comparison/tree/master/web) directory instead.

## Making Changes

1. Fork the repository
2. Edit `email-provider-data.yml`
3. Open a pull request — CI will validate your changes automatically

## Adding a Provider

A provider can be added if **all** of the following are true:

- It is a dedicated email service focused on privacy and/or security
- It is actively maintained and accepting new users
- It has a working, publicly accessible website
- Every field is verifiable from official public sources (provider website, docs, published audits)

Each entry requires the metadata fields (`name`, `link`, `icon`, `description`, `discussionId`) and all 13 scored attributes. See `schema.json` for the definitive list.

Example entry (trimmed — all 13 attributes are required):

```yaml
- name: Example Mail
  link: https://example-mail.com/
  icon: https://i.ibb.co/example/icon.png
  discussionId: 42
  description: >
    Short, factual description of the service.
  jurisdiction:
    text: Switzerland
    level: 1
  encryption:
    text: PGP
    level: 1
  # ... all other attributes required, see schema.json
```

## Editing a Provider

Same PR process. Explain what changed and link your sources in the PR description.

## Removing a Provider

A listed provider can only be removed if:

- Their mission and/or core values have changed, meaning they can no longer be classified as a secure and/or private email service
- The business has ceased trading / the service is no longer receiving regular updates / registration is closed to new users
- A serious, verified security or privacy incident has fundamentally undermined the service's trustworthiness

Include evidence and sources in the PR.

## Scoring

Each scored attribute has a `level` (0–3) and a `text` description:

| Level | Meaning |
|-------|---------|
| 0 | Not applicable |
| 1 | Good |
| 2 | Okay / limited |
| 3 | Poor / missing |

Rules:

- When a requirement is only partially met, round **up** (toward the worse score) - **partial compliance is not full compliance**
- Scores must be justifiable from public, official sources
- Keep `text` factual and concise — no promotional language

## Data Accuracy

- All information must be verifiable from official public sources
- No unsubstantiated claims — link sources in PR descriptions
- Keep descriptions objective and non-biased
- No promotional or marketing language
