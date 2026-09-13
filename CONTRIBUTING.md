# Contributing to koinos_marketing

Contributions from writers, designers, developers, researchers, translators, community organizers, node operators, and ecosystem builders are welcome.

## Before starting

1. Read the [message house](brand/message-house.md).
2. Check the [campaign index](campaigns/README.md) and [action board](operations/action-board.md) for related work.
3. Search existing issues and pull requests to avoid parallel drafts that do not know about each other.
4. Confirm whether the work is a fact check, proposal, draft, approved asset, or published material.

## Ways to contribute

- Propose a campaign using the GitHub campaign issue form.
- Improve source-backed Koinos explanations.
- Review copy for accuracy, accessibility, or audience fit.
- Translate approved source material without changing its factual meaning.
- Create reusable visual or editorial assets based on the official brand system.
- Add verified campaign results or correct outdated references.
- Identify missing evidence without converting rumors into facts.

## Standard workflow

### 1. Brief

Start with [the campaign brief](templates/campaign-brief.md) or [the content brief](templates/content-brief.md). Define:

- one primary audience;
- one desired action;
- one accountable owner;
- a distribution channel;
- evidence and review needs;
- a success signal;
- a stop or review date.

### 2. Research

Prefer primary sources and capture the date on which time-sensitive evidence was checked. When evidence conflicts, preserve the disagreement in the research notes instead of choosing the more attractive claim.

### 3. Draft

Place new work in the most relevant folder. Keep working status visible at the top of the document:

```text
Status: proposal | research | draft | in review | approved | published | archived
Owner: GitHub handle or community name
Last verified: YYYY-MM-DD
Publication authority: unconfirmed | confirmed by [role]
```

Do not use `approved` to mean “the author likes the draft.” Approval must come from the person or group responsible for the destination channel.

### 4. Review

Use the [editorial review checklist](templates/editorial-review-checklist.md). At least one reviewer other than the author is recommended for official or high-impact communication.

### 5. Publish and verify

Publication is a distinct action. Confirm the exact destination and final material before sending or publishing. After publication:

- open the public URL;
- verify text, links, images, formatting, and destination;
- record the URL and publication time;
- update the campaign status and metrics.

## Pull requests

Keep each pull request focused. Explain:

- the audience and objective;
- what changed;
- which sources support factual claims;
- which checks were performed;
- whether the change is a draft or is already published;
- whether any content needs an authorized external action.

Do not mix unrelated dataset regeneration, documentary changes, campaign copy, and visual assets in one pull request.

## Documentary chronology rule

The English documentary at the repository root is the source of truth for the interactive Koinos history. If it changes, follow the repository instructions in `AGENTS.md`, synchronize the website history, inspect the generated content, and build the website in the same task.

## Language and localization

- Use English as the canonical source for campaigns aimed at an international audience unless a brief explicitly names another source language.
- Translations should link to their source edition and state when they were last synchronized.
- Adapt examples and calls to action to the audience, but do not change technical facts or invent local endorsements.
- Prefer plain language; explain specialist terms when the audience is not exclusively technical.

## Safety and integrity

- Never commit credentials or private keys.
- Do not publish private correspondence as evidence.
- Do not make investment promises or imply guaranteed returns.
- Clearly distinguish native KOIN from wrapped representations such as vKOIN.
- Verify current contract addresses, markets, availability, and legal or regulatory claims before publication.
- Disclose sponsorships and material relationships.
- Credit contributors precisely; message volume or visibility does not establish authorship or leadership.
