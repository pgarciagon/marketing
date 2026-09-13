# Campaigns

This is the index for coordinated, time-bounded communication intended to achieve a defined outcome.

## Campaign lifecycle

```text
proposed -> researched -> ready -> active -> measuring -> complete
                    \-> paused
                    \-> cancelled
```

Every active campaign needs an owner, next action, destination, evidence set, success signal, and review date. A plan without an owner remains a proposal.

## Current campaign plans

| Campaign | Status | Owner | Plan |
| --- | --- | --- | --- |
| CoinMarketCap News source integration | Proposed | Unassigned | [Communications plan](../koinos-coinmarketcap-news-communications-plan.md) |

The table is a navigation index. Operational status belongs in the [action board](../operations/action-board.md).

## Starting a campaign

1. Search for an existing plan or GitHub issue.
2. Copy the [campaign brief](../templates/campaign-brief.md) into a new campaign folder or open the campaign proposal issue form.
3. Name the folder with a durable slug, for example `developer-onboarding` rather than `october-push`.
4. Add a `README.md` containing the approved brief, status, owner, source links, deliverables, and results.
5. Store channel adaptations and assets inside the campaign folder when they are campaign-specific.
6. Link the campaign here and on the action board.

## Campaign folder example

```text
campaigns/developer-onboarding/
├── README.md
├── research.md
├── messages.md
├── assets/
├── distribution.md
└── results.md
```

Do not create folders merely to make the repository look complete. Create them when a campaign has actual work or evidence to preserve.
