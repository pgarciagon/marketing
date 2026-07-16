# Koinos: Quantitative Analysis of Community Contributions

Cutoff date: **2026-07-15**. Every date in the tables is expressed as a UTC calendar day.

This report answers two different questions:

1. Who ranks highest when measuring only the verifiable volume of Telegram and Discord messages, X posts, articles, and videos?
2. Which people reached at least **10 contributions** distributed across **two or more days**?

The result is an **activity** index, not a measure of quality, technical impact, leadership, difficulty, or historical value. A short message and a research article each count as one unit in their respective columns. The total is therefore useful for discovering continuity and overlooked names, but it should not be turned into a hierarchy of importance by itself.

## Overall result

- **14 public groups** reviewed from beginning to end.
- **481,192 human messages** counted after excluding bots, channel-authored posts, and Telegram service actions.
- **107,405 human messages on the official Discord server** according to an authenticated author-type search; bots and webhooks are excluded.
- **40,862 Discord messages attributed exactly to 13 public identities** through individual author searches. The remainder of the server has not yet been broken down by person in this table.
- **5,373 human IDs** observed before removing deleted accounts without a usable identity.
- **1,405 deleted accounts** excluded from the named lists.
- **3,962 identifiable human or pseudonymous Telegram accounts**, plus one external editorial profile without a safe Telegram match.
- **955 people** meet `combined total >= 10` with verifiable activity on at least two dates.
- **89 profiles with more than 500 contributions** receive qualitative summaries: 23 brief summaries, 46 expanded summaries, and 20 entries in the priority list above 5,000.

The complete ranking of all 3,963 profiles is available in [`koinos-community-contribution-ranking.csv`](koinos-community-contribution-ranking.csv). The threshold list is also available as [`koinos-community-contributors-10-two-days.csv`](koinos-community-contributors-10-two-days.csv).

## Methodology and limitations

### Telegram

The complete accessible history of the following public megagroups was reviewed. Messages were unified by each user's stable ID; display-name changes within the same account do not create new people. A user active in several groups appears only once, with an accumulated total.

| Public group | Existing messages | Human messages counted | First | Last |
|---|---:|---:|---|---|
| [Koinos](https://t.me/koinos_community) | 276054 | 259493 | 2020-11-16 | 2026-07-15 |
| [Koinos Army](https://t.me/thekoinosarmy) | 154495 | 149712 | 2021-11-07 | 2026-07-13 |
| [Koincast / Koinos Hispano](https://t.me/koinoshispano) | 33479 | 32327 | 2020-11-18 | 2026-01-11 |
| [Koinos TCB](https://t.me/KoinosTCB) | 4678 | 4533 | 2025-05-04 | 2026-07-15 |
| [Koincity](https://t.me/Koincity) | 8324 | 7942 | 2023-04-28 | 2026-02-22 |
| [KoinDX](https://t.me/koindx) | 15592 | 14603 | 2022-11-09 | 2026-02-14 |
| [Koinos Social Sharing](https://t.me/koinsocials) | 4524 | 4161 | 2023-01-26 | 2025-08-05 |
| [Koin Crew](https://t.me/koincrewgroup) | 3997 | 3650 | 2023-10-22 | 2026-07-08 |
| [Koinos Germany](https://t.me/koinosgermany) | 805 | 691 | 2021-12-02 | 2025-05-16 |
| [Koinos Italia](https://t.me/KoinosItalia) | 3158 | 3014 | 2023-04-27 | 2025-11-19 |
| [Koinos China](https://t.me/KoinsNetwork_china) | 303 | 178 | 2021-11-13 | 2026-02-23 |
| [Koinos Degens](https://t.me/koinosdegens) | 558 | 440 | 2023-11-15 | 2025-05-14 |
| [Koinos Holders Representative](https://t.me/koinosholders) | 592 | 446 | 2023-11-15 | 2023-11-16 |
| [Koinos News Site](https://t.me/koinosnewssite) | 21 | 2 | 2024-09-16 | 2024-09-16 |

Private groups and direct messages were not included. Phone numbers, private email addresses, message text, and other personal data are not published. Accounts marked by Telegram as bots, channel or organization senders, service actions, and deleted accounts without a stable identity are excluded.

### Discord

The official Koinos server was queried through an authenticated session using the **author type: user** filter. The global search returned **107,405 messages**, excluding bots and webhooks. Discord limits the interface to 400 pages per query and applies rate limits, so it was not possible to produce an exhaustive per-member breakdown of all 107,405 messages from the interface.

The `Discord†` column contains **exact** counts only for identities whose public connection between Discord and the Telegram person was already documented. Each person was searched by author, the total was recorded, and the results were ordered oldest-first and newest-first to obtain the dates. In all other rows, `0` means **“Discord not individually inventoried,”** not “this person never wrote on Discord.” Similar names, abandoned accounts, and identities supported only by inference were not merged.

| Person | Discord username | Messages† | First | Last |
|---|---|---:|---|---|
| Kui He / motoengineer | `motoengineer` | 17758 | 2020-05-16 | 2025-10-31 |
| Andrew Levine | `andrarchy` | 4667 | 2019-11-18 | 2025-03-06 |
| Steve Gerbino | `Steve` | 3520 | 2020-10-06 | 2025-03-18 |
| Julián González / Jga | `jga` | 3421 | 2020-10-20 | 2026-03-21 |
| Luke Willis | `luke.koin` | 2560 | 2021-11-10 | 2024-06-10 |
| Roamin | `_roamin_` | 2340 | 2022-01-20 | 2024-07-22 |
| VonLooten | `VonLooten` | 2327 | 2021-06-30 | 2024-03-23 |
| Justin Welch / Justin W. | `justinw` | 1806 | 2020-10-14 | 2025-02-11 |
| Michael Vandeberg | `Vandeberg` | 901 | 2020-10-07 | 2025-03-19 |
| MiXiBo | `MiXiBo` | 630 | 2021-03-06 | 2025-04-13 |
| Pablo García / pgarcgo | `pgarcgo` | 396 | 2020-04-16 | 2025-04-26 |
| Ederaleng | `ederaleng` | 356 | 2020-04-16 | 2025-03-18 |
| Ron Hamenahem | `brklyn8900` | 180 | 2019-12-22 | 2025-06-21 |

### X, articles, and videos

Columns marked with `*` are **verifiable minimums within the chronology's documentary corpus**, not complete downloads of each account's lifetime activity:

- **X:** unique individual posts linked from the chronology. Profiles without post-level links receive `0`, meaning “no individual post inventoried,” not “never posted.”
- **Articles:** verifiable personal archives on Hive, Medium, and WordPress, plus pieces with explicit individual authorship. Collective Koinos Network, Koinos Group, KoinDX, Koinos Army, or Koinos en Español articles are not automatically assigned to a person.
- **Videos:** documented original works and channel series with verifiable counts. Audio-only podcasts are not included; for example, the 57 episodes of *The Koin Press* remain outside the requested total.
- **Minimum total:** `Telegram + Discord† + X + articles + videos`. This is not a weighted score. Because Discord and external-source coverage is partial by author, it is a verifiable minimum rather than a biographical total.
- **First / Last:** the first and last dates among the contributions actually counted for that row. They do not claim to identify the person's absolute first or last biographical action outside the corpus.
- **Minimum days:** the minimum number of distinct dates demonstrated in the combined corpus. When Telegram history exists, its exact number of days is retained; for other platforms, different first and last dates prove at least two days even when every intermediate day cannot be reconstructed.

### Qualitative summaries by volume

For the 89 identities above 500 contributions, the public history of all fourteen Telegram groups was reviewed again and signals were calculated for period, groups, topics, and mentioned products. A limited sample of substantive messages was compared against attributions already investigated in the chronology. The summaries describe **what a person discussed and which documented role they performed**; they are not automated sentiment analysis and do not turn frequency, promotion, or mentions into code, leadership, or authorship.

## Analysis 1: quantitative ranking

The table shows the top 100 positions; the linked CSV contains **all** identifiable accounts, ordered by descending minimum total. Discord can move a person upward when an exact individual count exists, but a `0` is not evidence of inactivity: it marks coverage that is still pending.

| # | Person | Telegram | Discord† | X* | Articles* | Videos* | Minimum total | Minimum days | First | Last |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| 1 | Kui He / motoengineer (@kuixihe) | 44234 | 17758 | 0 | 15 | 30 | 62037 | 1368 | 2020-05-16 | 2026-07-11 |
| 2 | G Millie / DeGemsCrew (@DeGemsCrew) | 36303 | 0 | 0 | 0 | 0 | 36303 | 1154 | 2021-11-07 | 2026-06-26 |
| 3 | Koinos The Goat (@KoinosTheGoat) | 24885 | 0 | 0 | 0 | 1 | 24886 | 1434 | 2021-03-05 | 2026-06-09 |
| 4 | Diamond Hands (@diamondhands12345) | 21385 | 0 | 0 | 0 | 0 | 21385 | 744 | 2023-08-17 | 2025-09-17 |
| 5 | Carlos Welele (@Weleleliano) | 18338 | 0 | 0 | 0 | 0 | 18338 | 1187 | 2021-03-08 | 2026-06-26 |
| 6 | Andrew Levine (@andrarchy) | 11430 | 4667 | 11 | 11 | 0 | 16119 | 1009 | 2019-11-18 | 2026-02-11 |
| 7 | Saleh Hawi (@saleh_hawi) | 12180 | 0 | 0 | 0 | 0 | 12180 | 748 | 2023-01-06 | 2026-04-07 |
| 8 | VonLooten (@von9000) | 9063 | 2327 | 0 | 5 | 0 | 11395 | 790 | 2021-06-30 | 2024-04-13 |
| 9 | Techno🔮 (@T5chn0) | 9968 | 0 | 0 | 0 | 0 | 9968 | 850 | 2021-01-31 | 2024-11-04 |
| 10 | Steve Gerbino (@sgerbino) | 5873 | 3520 | 0 | 0 | 0 | 9393 | 507 | 2020-10-06 | 2026-03-22 |
| 11 | Julián González / Jga (@joticajulian) | 5743 | 3421 | 0 | 36 | 0 | 9200 | 942 | 2020-10-20 | 2026-07-01 |
| 12 | q t (@quietester) | 8875 | 0 | 0 | 0 | 0 | 8875 | 790 | 2022-11-21 | 2026-07-04 |
| 13 | edje Ӄ (@edje42) | 8688 | 0 | 0 | 0 | 0 | 8688 | 409 | 2020-11-18 | 2026-01-28 |
| 14 | Pablo García / pgarcgo (@pgarcgo) | 7971 | 396 | 0 | 0 | 0 | 8367 | 875 | 2020-04-16 | 2026-07-15 |
| 15 | Justin Welch / Justin W. (@justinw_t) | 5390 | 1806 | 0 | 0 | 0 | 7196 | 629 | 2020-10-14 | 2026-05-12 |
| 16 | Tobi (@TellingMountains) | 6979 | 0 | 0 | 0 | 0 | 6979 | 903 | 2021-04-05 | 2026-06-27 |
| 17 | Nomad100x (@nomad100x) | 6346 | 0 | 0 | 0 | 0 | 6346 | 965 | 2021-02-05 | 2026-07-11 |
| 18 | Ӄirky Ӄirk 🔮 (@kirkykirk92) | 5987 | 0 | 0 | 0 | 0 | 5987 | 604 | 2021-08-29 | 2025-02-24 |
| 19 | Luke Willis (@lukemwillis) | 3225 | 2560 | 0 | 1 | 0 | 5786 | 431 | 2021-11-10 | 2024-06-14 |
| 20 | MiXiBo (@mixibo_koincity) | 4884 | 630 | 0 | 4 | 0 | 5518 | 483 | 2021-03-06 | 2026-05-04 |
| 21 | Alberto / Transeunte (@transeunte) | 4743 | 0 | 0 | 34 | 2 | 4779 | 523 | 2021-11-02 | 2026-06-11 |
| 22 | Jm - Kantian (@Jmpre) | 4755 | 0 | 0 | 0 | 0 | 4755 | 240 | 2023-09-20 | 2025-05-31 |
| 23 | MoonMan (@The_MoonMan) | 4719 | 0 | 0 | 0 | 0 | 4719 | 478 | 2022-03-17 | 2025-03-06 |
| 24 | Tonimontana (@tonimontana0328) | 4099 | 0 | 0 | 0 | 0 | 4099 | 426 | 2020-11-16 | 2024-03-22 |
| 25 | Yo Yo (@yoyo420yo) | 3970 | 0 | 0 | 0 | 0 | 3970 | 147 | 2024-10-11 | 2025-09-27 |
| 26 | Sergio🔮 (@Sergiocx2020) | 3793 | 0 | 0 | 0 | 0 | 3793 | 612 | 2021-12-24 | 2025-12-31 |
| 27 | J Lo 🔮 (@jlo401) | 3623 | 0 | 0 | 0 | 0 | 3623 | 558 | 2021-12-21 | 2026-06-14 |
| 28 | Blank User (@blankuser1) | 3481 | 0 | 0 | 0 | 0 | 3481 | 287 | 2024-06-16 | 2026-07-13 |
| 29 | Isaac Dozier Ӄ 🔮 (@Isaacdozier) | 3397 | 0 | 0 | 0 | 0 | 3397 | 497 | 2020-11-21 | 2026-05-19 |
| 30 | H🔮 (@Callith) | 3308 | 0 | 0 | 0 | 0 | 3308 | 519 | 2021-01-21 | 2023-11-21 |
| 31 | Adem / Kenpachi (@Kenpachikid) | 3280 | 0 | 0 | 0 | 0 | 3280 | 405 | 2021-08-29 | 2024-12-11 |
| 32 | @interfecto / Atb 3tb (@interfectoewm) | 3123 | 0 | 3 | 0 | 0 | 3126 | 401 | 2022-11-07 | 2026-07-14 |
| 33 | Filipe Menchen Ӄ🔮🇧🇷 (@fmenchen) | 2821 | 0 | 0 | 0 | 0 | 2821 | 495 | 2021-12-22 | 2026-04-13 |
| 34 | Henk Cryptotank🔮 (@Henkcryptotank) | 2725 | 0 | 0 | 0 | 0 | 2725 | 348 | 2021-11-16 | 2024-06-24 |
| 35 | Claudio Cascone (@Koin_Claudio) | 2567 | 0 | 0 | 0 | 0 | 2567 | 414 | 2022-02-04 | 2025-11-18 |
| 36 | Sergi Ӄ (@Sergi991) | 2441 | 0 | 0 | 0 | 0 | 2441 | 517 | 2021-12-11 | 2026-01-18 |
| 37 | KOBA 🔮 (@Huntkey) | 2433 | 0 | 0 | 0 | 0 | 2433 | 148 | 2021-02-22 | 2025-01-23 |
| 38 | Roamin (@RoaminRo) | 16 | 2340 | 0 | 0 | 0 | 2356 | 6 | 2022-01-20 | 2024-07-22 |
| 39 | Michael Vandeberg (@mvandeberg) | 1195 | 901 | 0 | 0 | 0 | 2096 | 394 | 2020-10-07 | 2026-03-04 |
| 40 | Adriano Foschi (@adrihoke) | 2026 | 0 | 0 | 0 | 0 | 2026 | 387 | 2023-04-02 | 2026-06-27 |
| 41 | carlos🔮 (@Carlos_S_V) | 1911 | 0 | 0 | 0 | 0 | 1911 | 281 | 2022-09-30 | 2025-09-17 |
| 42 | Sh11fty (@Sh11fty) | 1887 | 0 | 0 | 0 | 0 | 1887 | 224 | 2023-12-16 | 2025-04-13 |
| 43 | ⟁ ⃤Aʟı (@Ali_8803) | 1768 | 0 | 0 | 0 | 0 | 1768 | 38 | 2023-04-06 | 2023-05-30 |
| 44 | Dokterkraakbeen (@Dokterkraakbeen) | 1713 | 0 | 0 | 0 | 0 | 1713 | 426 | 2021-10-23 | 2026-07-15 |
| 45 | Pepper (@PepperPetey) | 1677 | 0 | 0 | 0 | 0 | 1677 | 207 | 2021-11-14 | 2023-12-06 |
| 46 | silas (@trelllo) | 1677 | 0 | 0 | 0 | 0 | 1677 | 151 | 2022-02-02 | 2024-03-17 |
| 47 | Carlos (@Carlos_BTC) | 1606 | 0 | 0 | 0 | 0 | 1606 | 277 | 2022-11-01 | 2026-04-27 |
| 48 | John 🔮 (@Tlaw672) | 1505 | 0 | 0 | 0 | 0 | 1505 | 261 | 2022-01-15 | 2024-06-20 |
| 49 | Lucky Bitcoin (@ctyour) | 1472 | 0 | 0 | 0 | 0 | 1472 | 160 | 2022-10-29 | 2026-07-12 |
| 50 | X | 1371 | 0 | 0 | 0 | 0 | 1371 | 220 | 2022-08-28 | 2026-07-01 |
| 51 | Ederaleng (@ederaleng) | 1005 | 356 | 0 | 0 | 0 | 1361 | 275 | 2020-04-16 | 2026-02-27 |
| 52 | Karlos (@Karlos_Koinos) | 1311 | 0 | 0 | 0 | 0 | 1311 | 413 | 2022-11-09 | 2026-03-05 |
| 53 | Heather S | 1305 | 0 | 0 | 0 | 0 | 1305 | 168 | 2023-04-25 | 2025-01-30 |
| 54 | JM (@indetectable) | 1225 | 0 | 0 | 0 | 0 | 1225 | 107 | 2021-11-02 | 2024-07-17 |
| 55 | Jeremy Clark | 1194 | 0 | 0 | 0 | 0 | 1194 | 120 | 2021-02-16 | 2023-06-10 |
| 56 | Dani (@lightproject1) | 1179 | 0 | 0 | 0 | 0 | 1179 | 150 | 2020-11-25 | 2024-12-14 |
| 57 | Aliasghar Khodaei (@khoddaeii) | 1165 | 0 | 0 | 0 | 0 | 1165 | 166 | 2024-05-07 | 2025-10-28 |
| 58 | Lint - Flourishing Lead Force (@Lintonious) | 1083 | 0 | 0 | 0 | 0 | 1083 | 252 | 2020-12-18 | 2025-11-05 |
| 59 | Eman🔮 (@emanvallejos) | 1078 | 0 | 0 | 0 | 0 | 1078 | 311 | 2022-10-27 | 2025-01-25 |
| 60 | Moon Ӄ (@Grx141) | 1060 | 0 | 0 | 0 | 0 | 1060 | 182 | 2023-12-22 | 2026-06-09 |
| 61 | Ali.n (@ARN8564) | 1033 | 0 | 0 | 0 | 0 | 1033 | 372 | 2021-08-21 | 2025-08-30 |
| 62 | El Cid Holdeador (@tronaso) | 1026 | 0 | 0 | 0 | 0 | 1026 | 248 | 2021-06-01 | 2026-03-02 |
| 63 | Vaxis2 (@Vaxis2) | 1026 | 0 | 0 | 0 | 0 | 1026 | 347 | 2021-10-10 | 2026-07-02 |
| 64 | Razor Chrom (@RaChro83) | 1024 | 0 | 0 | 0 | 0 | 1024 | 222 | 2023-11-11 | 2026-07-09 |
| 65 | A T (@Ferrett1) | 1009 | 0 | 0 | 0 | 0 | 1009 | 333 | 2021-12-28 | 2026-03-12 |
| 66 | Doyle B. Runson (@dylon87) | 1002 | 0 | 0 | 0 | 0 | 1002 | 208 | 2022-01-09 | 2025-05-29 |
| 67 | DK (@dkong9) | 999 | 0 | 0 | 0 | 0 | 999 | 183 | 2022-10-21 | 2025-11-08 |
| 68 | W (@kellakella1) | 985 | 0 | 0 | 0 | 0 | 985 | 294 | 2022-11-15 | 2025-05-28 |
| 69 | High CheeӃs (@HighCheeks) | 966 | 0 | 0 | 0 | 0 | 966 | 239 | 2023-01-09 | 2025-05-07 |
| 70 | Jon Rice (@lotsofmonitors) | 892 | 0 | 0 | 3 | 0 | 895 | 205 | 2022-09-07 | 2026-07-15 |
| 71 | Gamaliel Laryea 🔮 (@CheAtaa8) | 850 | 0 | 0 | 0 | 0 | 850 | 266 | 2022-01-21 | 2025-08-04 |
| 72 | QNguyen (@QNgguyen) | 848 | 0 | 0 | 0 | 0 | 848 | 238 | 2022-03-15 | 2025-03-10 |
| 73 | Take Your Future BacӃ (@my_usernamee) | 800 | 0 | 0 | 0 | 0 | 800 | 187 | 2023-11-10 | 2025-05-04 |
| 74 | Ignis (@ig_niss) | 796 | 0 | 0 | 0 | 0 | 796 | 117 | 2023-11-20 | 2024-11-24 |
| 75 | Mo (@AgiAgiMo) | 759 | 0 | 0 | 0 | 0 | 759 | 129 | 2022-04-17 | 2024-03-31 |
| 76 | Pablo G. (@djpablog) | 746 | 0 | 0 | 0 | 0 | 746 | 137 | 2022-10-24 | 2024-11-24 |
| 77 | 🔮Snape Several (@SraDoubtfire) | 726 | 0 | 0 | 0 | 0 | 726 | 285 | 2021-11-15 | 2025-12-05 |
| 78 | Eduard Schindler | 710 | 0 | 0 | 0 | 0 | 710 | 320 | 2021-05-03 | 2025-05-29 |
| 79 | 照顾好自己 | 703 | 0 | 0 | 0 | 0 | 703 | 155 | 2024-04-04 | 2025-09-19 |
| 80 | koinosrex.koin (@KoinosRex) | 691 | 0 | 0 | 0 | 0 | 691 | 120 | 2023-01-03 | 2025-07-23 |
| 81 | sanamo (@vopiiqov) | 686 | 0 | 0 | 0 | 0 | 686 | 202 | 2021-11-14 | 2025-12-30 |
| 82 | Frank / ElImbatido (@ElImbatido) | 676 | 0 | 0 | 1 | 0 | 677 | 212 | 2021-11-12 | 2026-04-24 |
| 83 | Shims Bud (@shimsbud) | 672 | 0 | 0 | 0 | 0 | 672 | 40 | 2023-11-15 | 2024-05-26 |
| 84 | Acoma Ӄ (@acom4) | 662 | 0 | 0 | 0 | 0 | 662 | 149 | 2021-11-15 | 2025-05-15 |
| 85 | Victor (@hodlerPT) | 616 | 0 | 0 | 0 | 0 | 616 | 23 | 2021-11-03 | 2021-12-01 |
| 86 | mog | 611 | 0 | 0 | 0 | 0 | 611 | 24 | 2023-04-15 | 2023-05-20 |
| 87 | Jas (@zero_zero_13) | 568 | 0 | 0 | 0 | 0 | 568 | 113 | 2023-11-20 | 2024-06-08 |
| 88 | A.H.D (@guitar_alimj) | 559 | 0 | 0 | 0 | 0 | 559 | 146 | 2022-01-16 | 2026-06-27 |
| 89 | Marc (@marcbousaleh) | 556 | 0 | 0 | 0 | 0 | 556 | 93 | 2020-11-16 | 2024-03-01 |
| 90 | Amiran | 491 | 0 | 0 | 0 | 0 | 491 | 43 | 2021-04-07 | 2024-04-03 |
| 91 | Uejdhdisc | 483 | 0 | 0 | 0 | 0 | 483 | 112 | 2025-02-26 | 2025-12-05 |
| 92 | Hung0v3r (@Hung0v3r) | 472 | 0 | 0 | 0 | 0 | 472 | 129 | 2023-11-24 | 2026-03-04 |
| 93 | Jaime (@jvelascoastete) | 458 | 0 | 0 | 0 | 0 | 458 | 60 | 2022-04-24 | 2025-05-28 |
| 94 | Mich | 458 | 0 | 0 | 0 | 0 | 458 | 93 | 2024-09-23 | 2025-05-11 |
| 95 | BoY From Himalayas (Anku Soni) 🏴‍☠️ (@ankusoni5) | 457 | 0 | 0 | 0 | 0 | 457 | 78 | 2024-03-14 | 2025-03-25 |
| 96 | en anӃa (@enankas) | 450 | 0 | 0 | 0 | 0 | 450 | 168 | 2021-03-21 | 2025-04-04 |
| 97 | Jonathan Masterson 🔮 (@Jonn9000) | 437 | 0 | 0 | 0 | 0 | 437 | 107 | 2022-01-21 | 2025-07-01 |
| 98 | Three Pepes (@waterflower33) | 425 | 0 | 0 | 0 | 0 | 425 | 119 | 2022-02-05 | 2026-02-14 |
| 99 | K G (@goodlawd) | 417 | 0 | 0 | 0 | 0 | 417 | 59 | 2022-10-09 | 2024-02-12 |
| 100 | D_M (@NationSta) | 415 | 0 | 0 | 0 | 0 | 415 | 141 | 2021-02-23 | 2024-07-01 |

## Priority list: more than 5,000 contributions

These people are separated for consideration in later narrative or chronology work. Each entry explains the period, contribution type, and positions expressed in the corpus; volume does not replace impact evaluation or turn conversation into authorship.

### 1. Kui He / motoengineer — 62,037

**Verified period:** 2020-05-16–2026-07-11. **Breakdown:** Telegram 44,234; Discord† 17,758; X* 0; articles* 15; videos* 30.

Between May 2020 and July 2026, he amassed 62,037 verified contributions: 44,234 Telegram messages, 17,758 Discord messages, 15 articles, and 30 videos. His activity combines day-to-day support with delivered work: he launched Koinos Forum, revived AMAs, co-founded and operated BurnKoin and KAP, co-founded Koinos-Social, maintained nodes, and produced an educational library of thirty videos before joining the Koinos Community Foundation. He discussed mining, mana, governance, dApp security, liquidity, and funding; argued that changes that are difficult to reverse should be evaluated by their collective impact; and summarized less visible work with the phrase, “Builders are laying foundation, you might not always see it.” In 2024–2025, he also proposed explicit funding and interoperability scenarios and debated whether infrastructure should be maintained even during an ecosystem decline. His volume reinforces continuity already demonstrated through products, operations, and education, but it does not make him the author of code belonging to Luke Willis, Roamin, or other collaborators.

### 2. G Millie / DeGemsCrew — 36,303

**Verified period:** 2021-11-07–2026-06-26. **Breakdown:** Telegram 36,303; Discord† 0; X* 0; articles* 0; videos* 0.

Between November 2021 and June 2026, he recorded 36,303 messages, primarily in Koinos Army. He was an organizer, administrator, AMA host, and initiator of the community NFT product, as well as a liaison with DeGems Lounge; he was not the technical founder, artist, or contract developer of Koinos Army Journey. His conversations focused on the market, KoinDX, NFTs, liquidity, and community coordination, and he argued that short-term priorities and funding should be put to a community vote. He also preserved a critical memory of the period after Koinos Group, describing the lack of development, awareness, exchanges, and money as “bleak.” The figure shows that he sustained the social space for years, while the contributions of Glen, Eman, Adem, and MiXiBo must remain separately attributed.

### 3. Koinos The Goat — 24,886

**Verified period:** 2021-03-05–2026-06-09. **Breakdown:** Telegram 24,885; Discord† 0; X* 0; articles* 0; videos* 1.

Between March 2021 and June 2026, he accumulated 24,886 contributions, almost all of them messages, plus his independent video The Chronicles of Koinos. He created the Koinos The Goat persona and its fee-eating metaphor, organized and edited community copy, explained mana, inflation, wallets, claims, and dApps, appeared on The Koin Press, and later connected mana to permissions for AI agents. In his interventions, he insisted that “Mana is WORTHLESS. That is why it is so valuable,” proposed talking about game tokens instead of reducing everything to meme tokens, and became increasingly critical of the project's inability to reach the market. His role was economic storytelling, support, and community culture: he himself said, “I am not a dev,” and no code, company position, or protocol authorship can be attributed to his volume.

### 4. Diamond Hands — 21,385

**Verified period:** 2023-08-17–2025-09-17. **Breakdown:** Telegram 21,385; Discord† 0; X* 0; articles* 0; videos* 0.

Between August 2023 and September 2025, he posted 21,385 messages across the main, Army, and TCB groups. His activity was primarily market discussion and tracking wallets, NFTs, and dApps, but in 2025 he also became an insistent voice in debates about community funds, developer retention, and the Vortex bridge. He argued that the two central problems were the lack of developers capable of maintaining the chain and the token economy, and called for a public decision on whether donated KOIN and USDT should go to the development fund and interoperability. The record demonstrates exceptionally high quantitative and deliberative participation, not authorship of Vortex, contracts, wallets, or Foundation decisions.

### 5. Carlos Welele — 18,338

**Verified period:** 2021-03-08–2026-06-26. **Breakdown:** Telegram 18,338; Discord† 0; X* 0; articles* 0; videos* 0.

Between March 2021 and June 2026, he contributed 18,338 messages in English and Spanish, with a strong presence in the main group, Koinos Army, and Koinos Hispano. He acted as a bilingual explainer, practical moderator, and operator of Koinos Socials distribution flows: he guided users through claims, non-custodial wallets, security, bridges, exchanges, and dApps, and reported fake groups or suspicious contacts. His messages discussed how Kondor, Konio, and other interfaces could hide friction—for example, using mana from another account when moving an entire balance—and presented the Spanish ecosystem as a sequence of products, integrations, and events that had to be translated for non-technical users. Part of his volume consists of relayed announcements and social conversation; it therefore recognizes his communications infrastructure without attributing to him the products he explained.

### 6. Andrew Levine — 16,119

**Verified period:** 2019-11-18–2026-02-11. **Breakdown:** Telegram 11,430; Discord† 4,667; X* 11; articles* 11; videos* 0.

Between November 2019 and February 2026, he accumulated 16,119 verified contributions, including 4,667 Discord interventions, 11 inventoried X posts, and 11 articles. As a founder and the project's principal early communicator, he explained OpenSeed/OpenOrchard, the fair launch, modular architecture, mana, governance, and the mission of a fee-less experience, while coordinating campaigns and developer relations. In 2022, he said that governance was complete, KoinDX was already working on testnet, and a stablecoin would be a valuable opportunity; in 2023, he emphasized that three years of work included contributions from Kondor, KoinDX, Roamin, Kollection, KAP, and Koiner—not only from the founding team. His activity combines narrative design, product decisions, support, and recognition of third parties, and should be distinguished from the concrete technical implementation performed by Steve, Michael, Julián, and other authors.

### 7. Saleh Hawi — 12,180

**Verified period:** 2023-01-06–2026-04-07. **Breakdown:** Telegram 12,180; Discord† 0; X* 0; articles* 0; videos* 0.

Between January 2023 and April 2026, he recorded 12,180 messages, especially in the main group, Army, and KoinDX. He was an organizer, moderator, support operator, and product and business contributor to KoinDX, and coordinated a community campaign to secure new exchange listings; he was not one of the original co-founders or the author of the DEX contracts. He explained how to participate in sales and marketplaces, move KOIN among centralized exchanges, wallets, and bridges, use Fogata and supporter NFTs, and understand why a first gasless Web3 experience could be more accessible to newcomers. He also warned about impersonators, nonexistent presales, and private messages, so his volume reflects onboarding and security as well as market promotion.

### 8. VonLooten — 11,395

**Verified period:** 2021-06-30–2024-04-13. **Breakdown:** Telegram 9,063; Discord† 2,327; X* 0; articles* 5; videos* 0.

Between June 2021 and April 2024, he accumulated 11,395 verified contributions, including 2,327 on Discord and five articles. As KoinDX co-founder and original CEO, he led strategy, communications, documentation, KNDX/KOINDX, the proposed DAO, IDO, launchpad, official pairs, partnerships, and support, while also contributing product work. He explained that pairs should be added through governance and security controls, that supporter NFTs were optional donations without special utility, and that a fee-less DEX could change the DeFi experience. He also discussed the value of the native token and the limits of dApps without a genuine economic purpose. The primary AMM contract code should not automatically be attributed to him: Ederaleng was CTO and has stronger technical implementation evidence.

### 9. Techno🔮 — 9,968

**Verified period:** 2021-01-31–2024-11-04. **Breakdown:** Telegram 9,968; Discord† 0; X* 0; articles* 0; videos* 0.

Between January 2021 and November 2024, he posted 9,968 messages, almost all in the main group. He was a very consistent market and support voice: he tracked mining and large holders, explained how to buy or bridge assets, guided users through Kondor, Koiner, KoinDX, and MEXC, promoted campaigns, and reminded newcomers that team members did not initiate private messages. He publicly defended Julián's unpaid work and used the Kondor NFT as an example of directly supporting a developer. His position in this list comes from conversation, assistance, and amplification—not from a verified product, repository, or formal role.

### 10. Steve Gerbino — 9,393

**Verified period:** 2020-10-06–2026-03-22. **Breakdown:** Telegram 5,873; Discord† 3,520; X* 0; articles* 0; videos* 0.

Between October 2020 and March 2026, he accumulated 9,393 contributions: 5,873 Telegram messages and 3,520 Discord messages. As a founder and CTO, he explained from the fair-launch period that proof frequency affected ETH expenditure and variance, not hardware; he later covered architecture, releases, nodes, Proof of Burn, KCS, upgrades, and operator support. In 2025, he argued that KCS-4 could enable safe automatic token and NFT listings and went on to propose a new chain that would preserve WASM, resources, Proof of Burn, StateDB, and account abstraction while removing governance and microservices to prioritize speed. That final proposal is a later design position, not a delivered Koinos milestone. His volume accompanies a sustained foundational technical role, although authorship of each component must still follow repository history.

### 11. Julián González / Jga — 9,200

**Verified period:** 2020-10-20–2026-07-01. **Breakdown:** Telegram 5,743; Discord† 3,421; X* 0; articles* 36; videos* 0.

Between October 2020 and July 2026, he accumulated 9,200 contributions: 5,743 Telegram messages, 3,421 Discord messages, and 36 articles. His arc runs from mining and pools through Koilib, Kondor, the WKOIN claim, Fogata, Koinos Polls, Nicknames, Arkinos, smart wallets, KFS, standards, and network maintenance; he also provided bilingual technical support and operated block producers. He explained why a basic NFT standard should not include prices or KOIN calls by default, presented Arkinos as a way to create a contract and frontend in minutes, and helped users recover or move funds based on verifiable contract rules. His volume corresponds to exceptionally broad technical output, but several products and standards were collaborations, and it does not make him a founding protocol architect.

### 12. q t — 8,875

**Verified period:** 2022-11-21–2026-07-04. **Breakdown:** Telegram 8,875; Discord† 0; X* 0; articles* 0; videos* 0.

Between November 2022 and July 2026, q t recorded 8,875 messages across the main group, Army, KoinCity, KoinDX, and Koin Crew. This contributor was an intensive user and critical observer of KoinCity, KoinDX, Chainge, Kollection, KAP, Kanvas, explorers, and mining, with frequent debates about liquidity, marketing, and funding. They encouraged people to use the available dApps and understand their differences, but warned that spending inflated KOIN on proposals made little sense before securing exchanges, a DEX, and Vortex; they also questioned campaigns whose outcome should be measured through volume and adoption. The record helps reconstruct product reception and economic skepticism, not technical authorship or decision-making authority.

### 13. edje Ӄ — 8,688

**Verified period:** 2020-11-18–2026-01-28. **Breakdown:** Telegram 8,688; Discord† 0; X* 0; articles* 0; videos* 0.

Between November 2020 and January 2026, edje posted 8,688 messages across the main group, Army, KoinCity, Koin Crew, and KoinDX. This contributor acted as an exploratory user and informal cataloger: testing wallets and bridges, comparing NFT collection utilities, asking about free mana, and proposing a unified service view and an AI assistant kept current with wallets, bridges, and dApps. These interventions document real onboarding failures—for example, Chainge claims that did not appear—and the difficulty of explaining the utility of each collection or product. The historical value lies in sustained observation of UX and the ecosystem, without evidence of authorship of the products mentioned.

### 14. Pablo García / pgarcgo — 8,367

**Verified period:** 2020-04-16–2026-07-15. **Breakdown:** Telegram 7,971; Discord† 396; X* 0; articles* 0; videos* 0.

Between April 2020 and July 2026, he accumulated 8,367 verified contributions, including 396 on Discord. He began as an organizer and educator in the Spanish community, created Koincast and project directories, tested testnets, claims, wallets, pools, and dApps, and evolved into operating nodes, community testnet/API infrastructure, Koinos One, the monolithic Teleno node, and state-database and replay repair work. In Spanish, he explained self-custody, seed phrases, and the claim process; in 2025, he summarized priorities such as network operations, Vortex, KFS, and community custody of infrastructure. His activity demonstrates a transition from communications to infrastructure and consensus-adjacent contribution, but it does not retrospectively make him a founding architect of Koinos.

### 15. Justin Welch / Justin W. — 7,196

**Verified period:** 2020-10-14–2026-05-12. **Breakdown:** Telegram 5,390; Discord† 1,806; X* 0; articles* 0; videos* 0.

Between October 2020 and May 2026, he recorded 7,196 contributions, including 1,806 on Discord. He moved from miner and technical troubleshooter to Kollection co-founder, initiator of the Koinos Contract Standards repository, KCS-2 co-author, and contributor to Koinos.io, Vortex, Koinos.fun, and the Foundation, working across contracts, frontend, indexing, AWS, and deployments. He explained how aggregators such as DefiLlama depend on separate APIs, advocated native liquidity and an Ethereum-accessible bridge, and said in 2025 that Vortex needed to launch but that he could not responsibly lead it because of limited time, although he would help with engineering. His volume accompanies verifiable deliverables, but Kollection, KCS-2, Vortex, and Koinos.fun had teams and shared authorship.

### 16. Tobi — 6,979

**Verified period:** 2023-02-18–2026-03-01. **Breakdown:** Telegram 155; Discord† 0; X* 0; articles* 0; videos* 0.

Between April 2021 and June 2026, he posted 6,979 messages, more than six thousand of them in Koinos Army. His conversation combined price tracking, advice about BurnKoin/Fogata/VHP, expectations for KoinDX and dApps, and debates about donations and community funding. He explained that burning KOIN was a long-term strategy and that VHP could recover liquidity through pools or the market; over time, he shifted from expecting dApps to drive adoption to expressing frustration that growth remained almost nonexistent after five years. He is a useful voice for measuring holder sentiment and continuity, not an author of products or infrastructure.

### 17. Nomad100x — 6,346

**Verified period:** 2021-02-05–2026-07-11. **Breakdown:** Telegram 6,346; Discord† 0; X* 0; articles* 0; videos* 0.

Between February 2021 and July 2026, he accumulated 6,346 messages, mainly in the Spanish community and the main group. As a participant, sponsor, and critic, he initiated Koinos Garden by paying an external developer to build an NFT-gated investment and voting DAO, and later debated the Federation, KFS, inflation, bridges, liquidity, and product priorities. He argued that two years of mainnet without a bridge or sufficient DeFi was a problem, supported limited inflation through proposals, and presented the rule “one NFT, one vote” as Garden's basis for decentralization. He described himself as a non-developer: the contract belongs to its GitHub author, and there is no evidence that Garden funded specific projects.

### 18. Ӄirky Ӄirk 🔮 — 5,987

**Verified period:** 2021-08-29–2025-02-24. **Breakdown:** Telegram 5,987; Discord† 0; X* 0; articles* 0; videos* 0.

Between August 2021 and February 2025, this contributor recorded 5,987 messages, primarily in the main group and Koinos Army. The activity centered on onboarding and community culture: comparing narratives, helping with the CLI, Kondor, and MEXC, suggesting quick access to KoinDX/KoinCity/Kollection, and warning that no team member should initiate a private conversation. They argued that charts and comparisons could spark curiosity when accompanied by whitepapers and sources, and called for due diligence so promotion would not resemble another fraudulent project. No product, repository, or formal position was found in connection with this volume.

### 19. Luke Willis — 5,786

**Verified period:** 2021-11-10–2024-06-14. **Breakdown:** Telegram 3,225; Discord† 2,560; X* 0; articles* 1; videos* 0.

Between November 2021 and June 2024, he accumulated 5,786 contributions: 3,225 Telegram messages, 2,560 Discord messages, and one inventoried article, in addition to 57 audio episodes excluded from the requested total. He created The Koin Press, proposed the fungible Virtual Hash Power credited in the KPoB design, wrote the original BurnKoin contracts and frontend, co-founded KAP, and built its interface. He discussed upgrade security, mining incentives, inflation, and accessibility; he argued that the target should not simply be whoever buys KOIN, but whoever learns, builds a dApp, and becomes an ambassador. His contribution connects protocol, product, and education, with the important boundary that Roamin wrote much of KAP's surviving contract code and Kui shared its operations and communications.

### 20. MiXiBo — 5,518

**Verified period:** 2021-03-06–2026-05-04. **Breakdown:** Telegram 4,884; Discord† 630; X* 0; articles* 4; videos* 0.

Between March 2021 and May 2026, he recorded 5,518 contributions, including 630 on Discord and four articles. As KoinCity's principal developer and operator, he expanded a no-code launchpad into presales, locks, markets, staking, chats, KoinDX integration, APIs, NFT minting, and its own infrastructure; he also maintained direct support in the product group. He explained designs such as orders processed by a hot wallet with shared mana, evaluated the real utility of more than 170 launchpads, and acknowledged both the difficulty of informal partnerships and the need to keep building after closures or failures. His volume is especially concentrated in KoinCity and accompanies genuine authorship and operations, although collections, tokens, and projects created by third parties do not become his work.

## Expanded summaries: 1,001 to 5,000 contributions

This tier receives one paragraph per person. Profiles with historically documented work retain their specific attributions; the rest are summarized through observed topics, products, and groups without assigning unproven authorship.

### 21. Alberto / Transeunte — 4,779

Between November 2021 and June 2026, he accumulated 4,779 contributions: 4,743 messages, 34 articles, and two videos. His work encompassed bilingual communications, product archiving, visual storytelling, and advocacy for non-technical users: he created Mundo Koinos/Koinos World, experimented with videos and NFTs, amplified campaigns, and presented a communications and marketing center for funding. His messages focused on markets, wallets, security, and products such as MEXC, Kondor, Sovrano, and Koiner, always asking how to make the ecosystem visible and understandable. He was not a developer; his early NFT collections reached testing, not a maintained production release.

### 22. Jm - Kantian — 4,755

Between 2023-09-20 and 2025-05-31, this contributor recorded 4,755 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, wallets, explorers, and ecosystem dApps, and community coordination, campaigns, content, and outreach. The products mentioned most often were KoinCity, KoinDX, and MEXC, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 23. MoonMan — 4,719

Between 2022-03-17 and 2025-03-06, this contributor recorded 4,719 contributions, with the strongest presence in Koinos and KoinDX. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, social conversation, greetings, humor, and everyday group culture, and community coordination, campaigns, content, and outreach. The products mentioned most often were KoinDX, MEXC, and Kondor, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 24. Tonimontana — 4,099

Between 2020-11-16 and 2024-03-22, this contributor recorded 4,099 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, mining, VHP, block producers, nodes, and infrastructure operations, and wallets, explorers, and ecosystem dApps. The products mentioned most often were MEXC, KoinDX, and Chainge, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 25. Yo Yo — 3,970

Between 2024-10-11 and 2025-09-27, this contributor recorded 3,970 contributions, with the strongest presence in Koinos and Koinos TCB. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, wallets, explorers, and ecosystem dApps, and community coordination, campaigns, content, and outreach. The products mentioned most often were Chainge, KoinDX, and Vortex, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 26. Sergio🔮 — 3,793

Between 2021-12-24 and 2025-12-31, this contributor recorded 3,793 contributions, with the strongest presence in Koincast / Koinos Hispano and Koinos Army. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, community coordination, campaigns, content, and outreach, and wallets, explorers, and ecosystem dApps. The products mentioned most often were KoinDX, Kondor, and Konio, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 27. J Lo 🔮 — 3,623

Between 2021-12-21 and 2026-06-14, this contributor recorded 3,623 contributions, with the strongest presence in Koinos Army and Koinos. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, social conversation, greetings, humor, and everyday group culture, and wallets, explorers, and ecosystem dApps. The products mentioned most often were MEXC, KoinDX, and Chainge, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 28. Blank User — 3,481

Between 2024-06-16 and 2026-07-13, this contributor recorded 3,481 contributions, with the strongest presence in Koinos Army and Koincity. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, social conversation, greetings, humor, and everyday group culture, and wallets, explorers, and ecosystem dApps. The products mentioned most often were KoinCity, MEXC, and Koiner, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 29. Isaac Dozier Ӄ 🔮 — 3,397

Between 2020-11-21 and 2026-05-19, this contributor recorded 3,397 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in wallets, explorers, and ecosystem dApps, community coordination, campaigns, content, and outreach, and prices, liquidity, exchanges, and market development. The products mentioned most often were KoinDX, KAP, and Kondor, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 30. H🔮 — 3,308

Between 2021-01-21 and 2023-11-21, this contributor recorded 3,308 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, community coordination, campaigns, content, and outreach, and wallets, explorers, and ecosystem dApps. The products mentioned most often were Koiner, MEXC, and KoinDX, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 31. Adem / Kenpachi — 3,280

Between August 2021 and December 2024, he posted 3,280 messages, mainly in Koinos Army and KoinDX. He was an early Army co-owner, KoinDX moderator and support contact, and curator and marketer for Koinos Army Journey; he welcomed users, circulated events and releases, explained KNDX/IDO/Mana, and warned about impersonation and pre-launch offers. His conversation is primarily evidence of coordination and community culture, not development: there is no public GitHub record or evidence that he wrote contracts, artwork, or tokenomics.

### 32. @interfecto / Atb 3tb — 3,126

Between November 2022 and July 2026, he accumulated 3,126 contributions, with especially intense activity from 2025 onward in the main group, Army, and TCB. He built LLM-assisted contract guides, a testnet and faucet, KoinosScan, dashboards, monitoring, a Go/SQLite indexer, and the Koinos EVM Engine prototype, while also maintaining public links and data. His messages focus on wallets, MEXC/Chainge/Vortex, security, nodes, and support; he recommended small transactions, empty wallets for testing, and caution with direct messages, and distinguished functional prototypes from audited software. The pattern is feedback-to-commit and applied operations, not authorship of the base protocol.

### 33. Filipe Menchen Ӄ🔮🇧🇷 — 2,821

Between 2021-12-22 and 2026-04-13, this contributor recorded 2,821 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in wallets, explorers, and ecosystem dApps, prices, liquidity, exchanges, and market development, and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were Konio, Kondor, and KoinDX, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 34. Henk Cryptotank🔮 — 2,725

Between 2021-11-16 and 2024-06-24, this contributor recorded 2,725 contributions, with the strongest presence in Koinos Army and Koinos. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, community coordination, campaigns, content, and outreach, and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were MEXC, KoinDX, and Kondor, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 35. Claudio Cascone — 2,567

Between 2022-02-04 and 2025-11-18, this contributor recorded 2,567 contributions, with the strongest presence in Koinos Italia and Koinos Army. The history classification places the messages mainly in social conversation, greetings, humor, and everyday group culture, wallets, explorers, and ecosystem dApps, and community coordination, campaigns, content, and outreach. The products mentioned most often were Konio, BurnKoin, and Kondor, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 36. Sergi Ӄ — 2,441

Between 2021-12-11 and 2026-01-18, this contributor recorded 2,441 contributions, with the strongest presence in Koinos and Koincast / Koinos Hispano. The history classification places the messages mainly in wallets, explorers, and ecosystem dApps, prices, liquidity, exchanges, and market development, and community coordination, campaigns, content, and outreach. The products mentioned most often were Kondor, KoinDX, and MEXC, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 37. KOBA 🔮 — 2,433

Between 2021-02-22 and 2025-01-23, this contributor recorded 2,433 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, community coordination, campaigns, content, and outreach, and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were Koinos Army, Kondor, and KoinDX, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 38. Roamin — 2,356

Between January 2022 and July 2024, he accumulated 2,356 contributions, 2,340 of them on Discord and only 16 in the reviewed public Telegram groups. He created the AssemblyScript toolchain that became first-party software, Local-Koinos, My Koinos Wallet and its SDK, the first end-to-end Koinos–Ethereum bridge, WalletConnect, the Armana SDK, the original REST server, get_contract_metadata, VRF and stress tests, and Koinos-Social with Kui. On Discord, he presented AssemblyScript as a TypeScript-like CDT and, when Koinos-Social closed, explained that users retained their keys and could move their funds. His low Telegram volume shows why the total must combine platforms; even so, later products such as Vortex or the production REST service had other authors and maintainers.

### 39. Michael Vandeberg — 2,096

Between October 2020 and March 2026, he recorded 2,096 contributions, including 901 on Discord. As a founder and blockchain architect, he explained mining, difficulty, microservices, system contracts, StateDB, KCS, upgrades, and operations; development, protocol, nodes, and security predominate in the thematic sample. From the fair launch onward, he noted that increasing proof frequency did not raise the hash rate, and in 2025 he published and supported the KCS-4 proposal while also diagnosing operational problems such as file-descriptor limits. This is foundational technical activity, but attribution of specific code must follow commits and reviews.

### 40. Adriano Foschi — 2,026

Between April 2023 and June 2026, he posted 2,026 messages, mainly about Konio, Sovrano, Veive, wallet integration, security, and development. He created the first native Koinos mobile wallet, the modular Veive smart-account framework, the Sovrano authentication and payments track, Sovry, and the Kuku Games prototype, while also coordinating onboarding and community planning. His messages demonstrate dApp support and a sustained effort to hide keys, mana, and complexity behind familiar interfaces. Mentions of other wallets or services describe integration and comparison, not authorship of those products.

### 41. carlos🔮 — 1,911

Between 2022-09-30 and 2025-09-17, this contributor recorded 1,911 contributions, with the strongest presence in Koincast / Koinos Hispano and Koinos. The history classification places the messages mainly in community coordination, campaigns, content, and outreach, prices, liquidity, exchanges, and market development, and wallets, explorers, and ecosystem dApps. The products mentioned most often were Kondor, MEXC, and KoinDX, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 42. Sh11fty — 1,887

Between 2023-12-16 and 2025-04-13, this contributor recorded 1,887 contributions, with the strongest presence in Koinos Army and Koinos. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, wallets, explorers, and ecosystem dApps, and transactions, custody, security, and scam prevention. The products mentioned most often were MEXC, KoinDX, and Chainge, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 43. ⟁ ⃤Aʟı — 1,768

Between 2023-04-06 and 2023-05-30, this contributor recorded 1,768 contributions, with the strongest presence in Koinos Army and Koinos. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, transactions, custody, security, and scam prevention, and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were MEXC and KoinDX, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 44. Dokterkraakbeen — 1,713

Between October 2021 and July 2026, he recorded 1,713 messages connected primarily to communications, KoinDX, Kollection, NFTs, and support. He launched Planet Koinos as a visual and translation resource, redesigned KoinDX, was a named KCS-2 co-author, joined the Kollection launch team, and coordinated KAMP's visual and sponsorship work. The corpus demonstrates sustained design, standards, product, and operational contributions, but not a public history that would justify attributing DEX or marketplace contracts to him.

### 45. Pepper — 1,677

Between 2021-11-14 and 2023-12-06, this contributor recorded 1,677 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, community coordination, campaigns, content, and outreach, and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were MEXC, Kollection, and KAP, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 46. silas — 1,677

Between 2022-02-02 and 2024-03-17, this contributor recorded 1,677 contributions, with the strongest presence in Koinos Army and Koinos. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, social conversation, greetings, humor, and everyday group culture, and wallets, explorers, and ecosystem dApps. The products mentioned most often were MEXC, Koiner, and Kondor, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 47. Carlos — 1,606

Between 2022-11-01 and 2026-04-27, this contributor recorded 1,606 contributions, with the strongest presence in Koincast / Koinos Hispano and Koinos. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, community coordination, campaigns, content, and outreach, and wallets, explorers, and ecosystem dApps. The products mentioned most often were MEXC, Kondor, and Konio, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 48. John 🔮 — 1,505

Between 2022-01-15 and 2024-06-20, this contributor recorded 1,505 contributions, with the strongest presence in Koinos Army and Koinos. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, community coordination, campaigns, content, and outreach, and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were MEXC, KoinDX, and Kondor, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 49. Lucky Bitcoin — 1,472

Between 2022-10-29 and 2026-07-12, this contributor recorded 1,472 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in wallets, explorers, and ecosystem dApps, prices, liquidity, exchanges, and market development, and code, contracts, APIs, testnet, mainnet, and troubleshooting. The products mentioned most often were KoinDX, Portal, and KoinCity, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 50. X — 1,371

Between 2022-08-28 and 2026-07-01, this contributor recorded 1,371 contributions, with the strongest presence in Koinos Army and Koinos. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, wallets, explorers, and ecosystem dApps, and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were MEXC, KoinDX, and Koiner, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 51. Ederaleng — 1,361

Between April 2020 and February 2026, he accumulated 1,361 verified contributions, including 356 on Discord. As KoinDX co-founder and original CTO, Kollection contributor, technical lead of the resumed Vortex bridge, and founding Foundation member, he worked on contracts, SDKs, tests, registries, validators, relayers, deployments, and multichain liquidity. His conversations cover KoinDX, Chainge/Vortex, markets, integration, and support; his technical importance is confirmed by artifacts, not inferred from volume alone.

### 52. Karlos — 1,311

Between November 2022 and March 2026, he posted 1,311 messages about wallets, products, mining, markets, and support. He contributed the My Koinos Wallet logo, his SVG version of the VHP symbol used by Koiner and requested by Konio, coin logos and testing for Konio v1.4, and support for the Kondor NFT. This was visual and testing work: there is no evidence for describing him as a wallet or contract developer.

### 53. Heather S — 1,305

Between 2023-04-25 and 2025-01-30, this contributor recorded 1,305 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in community coordination, campaigns, content, and outreach, prices, liquidity, exchanges, and market development, and wallets, explorers, and ecosystem dApps. The products mentioned most often were Koinos Army, Kollection, and Vortex, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 54. JM — 1,225

Between 2021-11-02 and 2024-07-17, this contributor recorded 1,225 contributions, with the strongest presence in Koincast / Koinos Hispano and Koinos. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, wallets, explorers, and ecosystem dApps, and community coordination, campaigns, content, and outreach. The products mentioned most often were MEXC, Chainge, and Koiner, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 55. Jeremy Clark — 1,194

Between 2021-02-16 and 2023-06-10, this contributor recorded 1,194 contributions, with the strongest presence in Koinos and Koincast / Koinos Hispano. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, community coordination, campaigns, content, and outreach, and wallets, explorers, and ecosystem dApps. The products mentioned most often were Kondor and MEXC, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 56. Dani — 1,179

Between 2020-11-25 and 2024-12-14, this contributor recorded 1,179 contributions, with the strongest presence in Koinos and Koincast / Koinos Hispano. The history classification places the messages mainly in NFTs, collections, games, and digital assets, wallets, explorers, and ecosystem dApps, and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were Kondor, Konio, and KoinDX, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 57. Aliasghar Khodaei — 1,165

Between 2024-05-07 and 2025-10-28, this contributor recorded 1,165 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, wallets, explorers, and ecosystem dApps, and transactions, custody, security, and scam prevention. The products mentioned most often were MEXC, Sovrano, and Konio, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 58. Lint - Flourishing Lead Force — 1,083

Between 2020-12-18 and 2025-11-05, this contributor recorded 1,083 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, wallets, explorers, and ecosystem dApps, and community coordination, campaigns, content, and outreach. The products mentioned most often were KoinDX, MEXC, and KoinCity, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 59. Eman🔮 — 1,078

Between 2022-10-27 and 2025-01-25, this contributor recorded 1,078 contributions, with the strongest presence in Koinos Army and Koinos. The history classification places the messages mainly in social conversation, greetings, humor, and everyday group culture, wallets, explorers, and ecosystem dApps, and community coordination, campaigns, content, and outreach. The products mentioned most often were Kollection, Koinos Army, and Kondor, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 60. Moon Ӄ — 1,060

Between 2023-12-22 and 2026-06-09, this contributor recorded 1,060 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, community coordination, campaigns, content, and outreach, and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were MEXC, Vortex, and Chainge, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 61. Ali.n — 1,033

Between 2021-08-21 and 2025-08-30, this contributor recorded 1,033 contributions, with the strongest presence in Koinos and KoinDX. The history classification places the messages mainly in wallets, explorers, and ecosystem dApps, community coordination, campaigns, content, and outreach, and transactions, custody, security, and scam prevention. The products mentioned most often were Konio, KoinDX, and Chainge, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 62. El Cid Holdeador — 1,026

Between 2021-06-01 and 2026-03-02, this contributor recorded 1,026 contributions, with the strongest presence in Koincast / Koinos Hispano and Koinos. The history classification places the messages mainly in prices, liquidity, exchanges, and market development, wallets, explorers, and ecosystem dApps, and community coordination, campaigns, content, and outreach. The products mentioned most often were MEXC, Koiner, and KoinDX, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 63. Vaxis2 — 1,026

Between 2021-10-10 and 2026-07-02, this contributor recorded 1,026 contributions, with the strongest presence in Koinos and KoinDX. The history classification places the messages mainly in wallets, explorers, and ecosystem dApps, community coordination, campaigns, content, and outreach, and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were KoinDX, Kondor, and Konio, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 64. Razor Chrom — 1,024

Between 2023-11-11 and 2026-07-09, this contributor recorded 1,024 contributions, with the strongest presence in Koinos and KoinDX. The history classification places the messages mainly in wallets, explorers, and ecosystem dApps, prices, liquidity, exchanges, and market development, and community coordination, campaigns, content, and outreach. The products mentioned most often were KoinDX, Chainge, and KoinCity, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 65. A T — 1,009

Between 2021-12-28 and 2026-03-12, this contributor recorded 1,009 contributions, with the strongest presence in Koinos and Koinos Army. The history classification places the messages mainly in wallets, explorers, and ecosystem dApps, prices, liquidity, exchanges, and market development, and mining, VHP, block producers, nodes, and infrastructure operations. The products mentioned most often were KoinDX, BurnKoin, and Chainge, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

### 66. Doyle B. Runson — 1,002

Between 2022-01-09 and 2025-05-29, this contributor recorded 1,002 contributions, with the strongest presence in Koinos Army and Koinos. The history classification places the messages mainly in social conversation, greetings, humor, and everyday group culture, prices, liquidity, exchanges, and market development, and wallets, explorers, and ecosystem dApps. The products mentioned most often were Kondor, Chainge, and MEXC, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.

## Brief summaries: 501 to 1,000 contributions

This tier receives two sentences based on period, dominant topics, and mentioned products.

### 67. DK — 999

Between 2022-10-21 and 2025-11-08, this contributor recorded 999 contributions, focused primarily on prices, liquidity, exchanges, and market development and wallets, explorers, and ecosystem dApps. The products mentioned most often were MEXC, Kondor, and Fogata; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 68. W — 985

Between 2022-11-15 and 2025-05-28, this contributor recorded 985 contributions, focused primarily on prices, liquidity, exchanges, and market development and transactions, custody, security, and scam prevention. The products mentioned most often were MEXC, Konio, and KoinDX; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 69. High CheeӃs — 966

Between 2023-01-09 and 2025-05-07, this contributor recorded 966 contributions, focused primarily on prices, liquidity, exchanges, and market development and wallets, explorers, and ecosystem dApps. The products mentioned most often were MEXC, KoinDX, and Kondor; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 70. Jon Rice — 895

Between September 2022 and July 2026, he recorded 895 contributions: 892 messages and three articles. His activity addressed communications, coordination, adoption, and funding: he founded the Koinos Federation, articulated the “free, frictionless, familiar” thesis, wrote the public case for Koinos, and amplified Koinos.fun and other products. His role was advocacy and editorial strategy, not protocol engineering.

### 71. Gamaliel Laryea 🔮 — 850

Between 2022-01-21 and 2025-08-04, this contributor recorded 850 contributions, focused primarily on social conversation, greetings, humor, and everyday group culture and prices, liquidity, exchanges, and market development. The products mentioned most often were MEXC, Kondor, and KoinDX; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 72. QNguyen — 848

Between 2022-03-15 and 2025-03-10, this contributor recorded 848 contributions, focused primarily on wallets, explorers, and ecosystem dApps and prices, liquidity, exchanges, and market development. The products mentioned most often were Kondor, MEXC, and Koiner; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 73. Take Your Future BacӃ — 800

Between 2023-11-10 and 2025-05-04, this contributor recorded 800 contributions, focused primarily on prices, liquidity, exchanges, and market development and wallets, explorers, and ecosystem dApps. The products mentioned most often were KoinCity, KoinDX, and Chainge; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 74. Ignis — 796

Between 2023-11-20 and 2024-11-24, this contributor recorded 796 contributions, focused primarily on prices, liquidity, exchanges, and market development and wallets, explorers, and ecosystem dApps. The products mentioned most often were KoinCity, MEXC, and KoinDX; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 75. Mo — 759

Between 2022-04-17 and 2024-03-31, this contributor recorded 759 contributions, focused primarily on prices, liquidity, exchanges, and market development and wallets, explorers, and ecosystem dApps. The products mentioned most often were MEXC, Kondor, and KoinDX; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 76. Pablo G. — 746

Between 2022-10-24 and 2024-11-24, this contributor recorded 746 contributions, focused primarily on prices, liquidity, exchanges, and market development and community coordination, campaigns, content, and outreach. The products mentioned most often were MEXC, Koinos Social, and KAP; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 77. 🔮Snape Several — 726

Between 2021-11-15 and 2025-12-05, this contributor recorded 726 contributions, focused primarily on prices, liquidity, exchanges, and market development and community coordination, campaigns, content, and outreach. The products mentioned most often were MEXC, Kondor, and KAP; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 78. Eduard Schindler — 710

Between 2021-05-03 and 2025-05-29, this contributor recorded 710 contributions, focused primarily on code, contracts, APIs, testnet, mainnet, and troubleshooting and social conversation, greetings, humor, and everyday group culture. The products mentioned most often were KoinDX, MEXC, and KAP; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 79. 照顾好自己 — 703

Between 2024-04-04 and 2025-09-19, this contributor recorded 703 contributions, focused primarily on prices, liquidity, exchanges, and market development and wallets, explorers, and ecosystem dApps. The products mentioned most often were Vortex, Chainge, and MEXC; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 80. koinosrex.koin — 691

Between 2023-01-03 and 2025-07-23, this contributor recorded 691 contributions, focused primarily on social conversation, greetings, humor, and everyday group culture and prices, liquidity, exchanges, and market development. The products mentioned most often were KoinCity, Chainge, and KoinDX; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 81. sanamo — 686

Between 2021-11-14 and 2025-12-30, this contributor recorded 686 contributions, focused primarily on prices, liquidity, exchanges, and market development and community coordination, campaigns, content, and outreach. The products mentioned most often were MEXC, Kondor, and KoinDX; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 82. Frank / ElImbatido — 677

Between November 2021 and April 2026, he accumulated 677 contributions, with a disproportionate focus on Koiner, development, nodes, and protocol economics. He created and operated Koiner.App, its indexer, backend, and GraphQL API, and explained both its evolution toward shared data infrastructure and its closure because of costs, workload, and limited adoption. His figure is lower than that of many conversational participants, but his technical impact was high.

### 83. Shims Bud — 672

Between 2023-11-15 and 2024-05-26, this contributor recorded 672 contributions, focused primarily on social conversation, greetings, humor, and everyday group culture and prices, liquidity, exchanges, and market development. The products mentioned most often were Koinos Army, Koinos-Social, and Koinos Social; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 84. Acoma Ӄ — 662

Between 2021-11-15 and 2025-05-15, this contributor recorded 662 contributions, focused primarily on community coordination, campaigns, content, and outreach and prices, liquidity, exchanges, and market development. The products mentioned most often were Vortex and Kollection; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 85. Victor — 616

Between 2021-11-03 and 2021-12-01, this contributor recorded 616 contributions, focused primarily on prices, liquidity, exchanges, and market development and transactions, custody, security, and scam prevention. The product mentioned most often was Koinos Army; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 86. mog — 611

Between 2023-04-15 and 2023-05-20, this contributor recorded 611 contributions, focused primarily on community coordination, campaigns, content, and outreach and prices, liquidity, exchanges, and market development. The products mentioned most often were MEXC and KoinDX; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 87. Jas — 568

Between 2023-11-20 and 2024-06-08, this contributor recorded 568 contributions, focused primarily on social conversation, greetings, humor, and everyday group culture and community coordination, campaigns, content, and outreach. The product mentioned most often was MEXC; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 88. A.H.D — 559

Between 2022-01-16 and 2026-06-27, this contributor recorded 559 contributions, focused primarily on wallets, explorers, and ecosystem dApps and prices, liquidity, exchanges, and market development. The products mentioned most often were Kondor, BurnKoin, and Fogata; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

### 89. Marc — 556

Between 2020-11-16 and 2024-03-01, this contributor recorded 556 contributions, focused primarily on mana, Proof of Burn, supply, inflation, and protocol governance and mining, VHP, block producers, nodes, and infrastructure operations. The product mentioned most often was KoinDX; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.

## Analysis 2: everyone with at least 10 contributions across two days

This list applies the threshold to the **combined total of Telegram, Discord, X, articles, and videos**. To avoid temporal false positives, it also requires demonstrated activity on two different dates: Telegram days are exact, and when another platform extends the period, different first and last dates prove a minimum of two days. The corpus remains anchored in Telegram identities plus the documented external editorial profile; it is not yet an exhaustive census of Discord-only profiles.

| Global # | Person | Minimum total | Telegram | Discord† | X* | Articles* | Videos* | Minimum days | First | Last |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| 1 | Kui He / motoengineer (@kuixihe) | 62037 | 44234 | 17758 | 0 | 15 | 30 | 1368 | 2020-05-16 | 2026-07-11 |
| 2 | G Millie / DeGemsCrew (@DeGemsCrew) | 36303 | 36303 | 0 | 0 | 0 | 0 | 1154 | 2021-11-07 | 2026-06-26 |
| 3 | Koinos The Goat (@KoinosTheGoat) | 24886 | 24885 | 0 | 0 | 0 | 1 | 1434 | 2021-03-05 | 2026-06-09 |
| 4 | Diamond Hands (@diamondhands12345) | 21385 | 21385 | 0 | 0 | 0 | 0 | 744 | 2023-08-17 | 2025-09-17 |
| 5 | Carlos Welele (@Weleleliano) | 18338 | 18338 | 0 | 0 | 0 | 0 | 1187 | 2021-03-08 | 2026-06-26 |
| 6 | Andrew Levine (@andrarchy) | 16119 | 11430 | 4667 | 11 | 11 | 0 | 1009 | 2019-11-18 | 2026-02-11 |
| 7 | Saleh Hawi (@saleh_hawi) | 12180 | 12180 | 0 | 0 | 0 | 0 | 748 | 2023-01-06 | 2026-04-07 |
| 8 | VonLooten (@von9000) | 11395 | 9063 | 2327 | 0 | 5 | 0 | 790 | 2021-06-30 | 2024-04-13 |
| 9 | Techno🔮 (@T5chn0) | 9968 | 9968 | 0 | 0 | 0 | 0 | 850 | 2021-01-31 | 2024-11-04 |
| 10 | Steve Gerbino (@sgerbino) | 9393 | 5873 | 3520 | 0 | 0 | 0 | 507 | 2020-10-06 | 2026-03-22 |
| 11 | Julián González / Jga (@joticajulian) | 9200 | 5743 | 3421 | 0 | 36 | 0 | 942 | 2020-10-20 | 2026-07-01 |
| 12 | q t (@quietester) | 8875 | 8875 | 0 | 0 | 0 | 0 | 790 | 2022-11-21 | 2026-07-04 |
| 13 | edje Ӄ (@edje42) | 8688 | 8688 | 0 | 0 | 0 | 0 | 409 | 2020-11-18 | 2026-01-28 |
| 14 | Pablo García / pgarcgo (@pgarcgo) | 8367 | 7971 | 396 | 0 | 0 | 0 | 875 | 2020-04-16 | 2026-07-15 |
| 15 | Justin Welch / Justin W. (@justinw_t) | 7196 | 5390 | 1806 | 0 | 0 | 0 | 629 | 2020-10-14 | 2026-05-12 |
| 16 | Tobi (@TellingMountains) | 6979 | 6979 | 0 | 0 | 0 | 0 | 903 | 2021-04-05 | 2026-06-27 |
| 17 | Nomad100x (@nomad100x) | 6346 | 6346 | 0 | 0 | 0 | 0 | 965 | 2021-02-05 | 2026-07-11 |
| 18 | Ӄirky Ӄirk 🔮 (@kirkykirk92) | 5987 | 5987 | 0 | 0 | 0 | 0 | 604 | 2021-08-29 | 2025-02-24 |
| 19 | Luke Willis (@lukemwillis) | 5786 | 3225 | 2560 | 0 | 1 | 0 | 431 | 2021-11-10 | 2024-06-14 |
| 20 | MiXiBo (@mixibo_koincity) | 5518 | 4884 | 630 | 0 | 4 | 0 | 483 | 2021-03-06 | 2026-05-04 |
| 21 | Alberto / Transeunte (@transeunte) | 4779 | 4743 | 0 | 0 | 34 | 2 | 523 | 2021-11-02 | 2026-06-11 |
| 22 | Jm - Kantian (@Jmpre) | 4755 | 4755 | 0 | 0 | 0 | 0 | 240 | 2023-09-20 | 2025-05-31 |
| 23 | MoonMan (@The_MoonMan) | 4719 | 4719 | 0 | 0 | 0 | 0 | 478 | 2022-03-17 | 2025-03-06 |
| 24 | Tonimontana (@tonimontana0328) | 4099 | 4099 | 0 | 0 | 0 | 0 | 426 | 2020-11-16 | 2024-03-22 |
| 25 | Yo Yo (@yoyo420yo) | 3970 | 3970 | 0 | 0 | 0 | 0 | 147 | 2024-10-11 | 2025-09-27 |
| 26 | Sergio🔮 (@Sergiocx2020) | 3793 | 3793 | 0 | 0 | 0 | 0 | 612 | 2021-12-24 | 2025-12-31 |
| 27 | J Lo 🔮 (@jlo401) | 3623 | 3623 | 0 | 0 | 0 | 0 | 558 | 2021-12-21 | 2026-06-14 |
| 28 | Blank User (@blankuser1) | 3481 | 3481 | 0 | 0 | 0 | 0 | 287 | 2024-06-16 | 2026-07-13 |
| 29 | Isaac Dozier Ӄ 🔮 (@Isaacdozier) | 3397 | 3397 | 0 | 0 | 0 | 0 | 497 | 2020-11-21 | 2026-05-19 |
| 30 | H🔮 (@Callith) | 3308 | 3308 | 0 | 0 | 0 | 0 | 519 | 2021-01-21 | 2023-11-21 |
| 31 | Adem / Kenpachi (@Kenpachikid) | 3280 | 3280 | 0 | 0 | 0 | 0 | 405 | 2021-08-29 | 2024-12-11 |
| 32 | @interfecto / Atb 3tb (@interfectoewm) | 3126 | 3123 | 0 | 3 | 0 | 0 | 401 | 2022-11-07 | 2026-07-14 |
| 33 | Filipe Menchen Ӄ🔮🇧🇷 (@fmenchen) | 2821 | 2821 | 0 | 0 | 0 | 0 | 495 | 2021-12-22 | 2026-04-13 |
| 34 | Henk Cryptotank🔮 (@Henkcryptotank) | 2725 | 2725 | 0 | 0 | 0 | 0 | 348 | 2021-11-16 | 2024-06-24 |
| 35 | Claudio Cascone (@Koin_Claudio) | 2567 | 2567 | 0 | 0 | 0 | 0 | 414 | 2022-02-04 | 2025-11-18 |
| 36 | Sergi Ӄ (@Sergi991) | 2441 | 2441 | 0 | 0 | 0 | 0 | 517 | 2021-12-11 | 2026-01-18 |
| 37 | KOBA 🔮 (@Huntkey) | 2433 | 2433 | 0 | 0 | 0 | 0 | 148 | 2021-02-22 | 2025-01-23 |
| 38 | Roamin (@RoaminRo) | 2356 | 16 | 2340 | 0 | 0 | 0 | 6 | 2022-01-20 | 2024-07-22 |
| 39 | Michael Vandeberg (@mvandeberg) | 2096 | 1195 | 901 | 0 | 0 | 0 | 394 | 2020-10-07 | 2026-03-04 |
| 40 | Adriano Foschi (@adrihoke) | 2026 | 2026 | 0 | 0 | 0 | 0 | 387 | 2023-04-02 | 2026-06-27 |
| 41 | carlos🔮 (@Carlos_S_V) | 1911 | 1911 | 0 | 0 | 0 | 0 | 281 | 2022-09-30 | 2025-09-17 |
| 42 | Sh11fty (@Sh11fty) | 1887 | 1887 | 0 | 0 | 0 | 0 | 224 | 2023-12-16 | 2025-04-13 |
| 43 | ⟁ ⃤Aʟı (@Ali_8803) | 1768 | 1768 | 0 | 0 | 0 | 0 | 38 | 2023-04-06 | 2023-05-30 |
| 44 | Dokterkraakbeen (@Dokterkraakbeen) | 1713 | 1713 | 0 | 0 | 0 | 0 | 426 | 2021-10-23 | 2026-07-15 |
| 45 | Pepper (@PepperPetey) | 1677 | 1677 | 0 | 0 | 0 | 0 | 207 | 2021-11-14 | 2023-12-06 |
| 46 | silas (@trelllo) | 1677 | 1677 | 0 | 0 | 0 | 0 | 151 | 2022-02-02 | 2024-03-17 |
| 47 | Carlos (@Carlos_BTC) | 1606 | 1606 | 0 | 0 | 0 | 0 | 277 | 2022-11-01 | 2026-04-27 |
| 48 | John 🔮 (@Tlaw672) | 1505 | 1505 | 0 | 0 | 0 | 0 | 261 | 2022-01-15 | 2024-06-20 |
| 49 | Lucky Bitcoin (@ctyour) | 1472 | 1472 | 0 | 0 | 0 | 0 | 160 | 2022-10-29 | 2026-07-12 |
| 50 | X | 1371 | 1371 | 0 | 0 | 0 | 0 | 220 | 2022-08-28 | 2026-07-01 |
| 51 | Ederaleng (@ederaleng) | 1361 | 1005 | 356 | 0 | 0 | 0 | 275 | 2020-04-16 | 2026-02-27 |
| 52 | Karlos (@Karlos_Koinos) | 1311 | 1311 | 0 | 0 | 0 | 0 | 413 | 2022-11-09 | 2026-03-05 |
| 53 | Heather S | 1305 | 1305 | 0 | 0 | 0 | 0 | 168 | 2023-04-25 | 2025-01-30 |
| 54 | JM (@indetectable) | 1225 | 1225 | 0 | 0 | 0 | 0 | 107 | 2021-11-02 | 2024-07-17 |
| 55 | Jeremy Clark | 1194 | 1194 | 0 | 0 | 0 | 0 | 120 | 2021-02-16 | 2023-06-10 |
| 56 | Dani (@lightproject1) | 1179 | 1179 | 0 | 0 | 0 | 0 | 150 | 2020-11-25 | 2024-12-14 |
| 57 | Aliasghar Khodaei (@khoddaeii) | 1165 | 1165 | 0 | 0 | 0 | 0 | 166 | 2024-05-07 | 2025-10-28 |
| 58 | Lint - Flourishing Lead Force (@Lintonious) | 1083 | 1083 | 0 | 0 | 0 | 0 | 252 | 2020-12-18 | 2025-11-05 |
| 59 | Eman🔮 (@emanvallejos) | 1078 | 1078 | 0 | 0 | 0 | 0 | 311 | 2022-10-27 | 2025-01-25 |
| 60 | Moon Ӄ (@Grx141) | 1060 | 1060 | 0 | 0 | 0 | 0 | 182 | 2023-12-22 | 2026-06-09 |
| 61 | Ali.n (@ARN8564) | 1033 | 1033 | 0 | 0 | 0 | 0 | 372 | 2021-08-21 | 2025-08-30 |
| 62 | El Cid Holdeador (@tronaso) | 1026 | 1026 | 0 | 0 | 0 | 0 | 248 | 2021-06-01 | 2026-03-02 |
| 63 | Vaxis2 (@Vaxis2) | 1026 | 1026 | 0 | 0 | 0 | 0 | 347 | 2021-10-10 | 2026-07-02 |
| 64 | Razor Chrom (@RaChro83) | 1024 | 1024 | 0 | 0 | 0 | 0 | 222 | 2023-11-11 | 2026-07-09 |
| 65 | A T (@Ferrett1) | 1009 | 1009 | 0 | 0 | 0 | 0 | 333 | 2021-12-28 | 2026-03-12 |
| 66 | Doyle B. Runson (@dylon87) | 1002 | 1002 | 0 | 0 | 0 | 0 | 208 | 2022-01-09 | 2025-05-29 |
| 67 | DK (@dkong9) | 999 | 999 | 0 | 0 | 0 | 0 | 183 | 2022-10-21 | 2025-11-08 |
| 68 | W (@kellakella1) | 985 | 985 | 0 | 0 | 0 | 0 | 294 | 2022-11-15 | 2025-05-28 |
| 69 | High CheeӃs (@HighCheeks) | 966 | 966 | 0 | 0 | 0 | 0 | 239 | 2023-01-09 | 2025-05-07 |
| 70 | Jon Rice (@lotsofmonitors) | 895 | 892 | 0 | 0 | 3 | 0 | 205 | 2022-09-07 | 2026-07-15 |
| 71 | Gamaliel Laryea 🔮 (@CheAtaa8) | 850 | 850 | 0 | 0 | 0 | 0 | 266 | 2022-01-21 | 2025-08-04 |
| 72 | QNguyen (@QNgguyen) | 848 | 848 | 0 | 0 | 0 | 0 | 238 | 2022-03-15 | 2025-03-10 |
| 73 | Take Your Future BacӃ (@my_usernamee) | 800 | 800 | 0 | 0 | 0 | 0 | 187 | 2023-11-10 | 2025-05-04 |
| 74 | Ignis (@ig_niss) | 796 | 796 | 0 | 0 | 0 | 0 | 117 | 2023-11-20 | 2024-11-24 |
| 75 | Mo (@AgiAgiMo) | 759 | 759 | 0 | 0 | 0 | 0 | 129 | 2022-04-17 | 2024-03-31 |
| 76 | Pablo G. (@djpablog) | 746 | 746 | 0 | 0 | 0 | 0 | 137 | 2022-10-24 | 2024-11-24 |
| 77 | 🔮Snape Several (@SraDoubtfire) | 726 | 726 | 0 | 0 | 0 | 0 | 285 | 2021-11-15 | 2025-12-05 |
| 78 | Eduard Schindler | 710 | 710 | 0 | 0 | 0 | 0 | 320 | 2021-05-03 | 2025-05-29 |
| 79 | 照顾好自己 | 703 | 703 | 0 | 0 | 0 | 0 | 155 | 2024-04-04 | 2025-09-19 |
| 80 | koinosrex.koin (@KoinosRex) | 691 | 691 | 0 | 0 | 0 | 0 | 120 | 2023-01-03 | 2025-07-23 |
| 81 | sanamo (@vopiiqov) | 686 | 686 | 0 | 0 | 0 | 0 | 202 | 2021-11-14 | 2025-12-30 |
| 82 | Frank / ElImbatido (@ElImbatido) | 677 | 676 | 0 | 0 | 1 | 0 | 212 | 2021-11-12 | 2026-04-24 |
| 83 | Shims Bud (@shimsbud) | 672 | 672 | 0 | 0 | 0 | 0 | 40 | 2023-11-15 | 2024-05-26 |
| 84 | Acoma Ӄ (@acom4) | 662 | 662 | 0 | 0 | 0 | 0 | 149 | 2021-11-15 | 2025-05-15 |
| 85 | Victor (@hodlerPT) | 616 | 616 | 0 | 0 | 0 | 0 | 23 | 2021-11-03 | 2021-12-01 |
| 86 | mog | 611 | 611 | 0 | 0 | 0 | 0 | 24 | 2023-04-15 | 2023-05-20 |
| 87 | Jas (@zero_zero_13) | 568 | 568 | 0 | 0 | 0 | 0 | 113 | 2023-11-20 | 2024-06-08 |
| 88 | A.H.D (@guitar_alimj) | 559 | 559 | 0 | 0 | 0 | 0 | 146 | 2022-01-16 | 2026-06-27 |
| 89 | Marc (@marcbousaleh) | 556 | 556 | 0 | 0 | 0 | 0 | 93 | 2020-11-16 | 2024-03-01 |
| 90 | Amiran | 491 | 491 | 0 | 0 | 0 | 0 | 43 | 2021-04-07 | 2024-04-03 |
| 91 | Uejdhdisc | 483 | 483 | 0 | 0 | 0 | 0 | 112 | 2025-02-26 | 2025-12-05 |
| 92 | Hung0v3r (@Hung0v3r) | 472 | 472 | 0 | 0 | 0 | 0 | 129 | 2023-11-24 | 2026-03-04 |
| 93 | Jaime (@jvelascoastete) | 458 | 458 | 0 | 0 | 0 | 0 | 60 | 2022-04-24 | 2025-05-28 |
| 94 | Mich | 458 | 458 | 0 | 0 | 0 | 0 | 93 | 2024-09-23 | 2025-05-11 |
| 95 | BoY From Himalayas (Anku Soni) 🏴‍☠️ (@ankusoni5) | 457 | 457 | 0 | 0 | 0 | 0 | 78 | 2024-03-14 | 2025-03-25 |
| 96 | en anӃa (@enankas) | 450 | 450 | 0 | 0 | 0 | 0 | 168 | 2021-03-21 | 2025-04-04 |
| 97 | Jonathan Masterson 🔮 (@Jonn9000) | 437 | 437 | 0 | 0 | 0 | 0 | 107 | 2022-01-21 | 2025-07-01 |
| 98 | Three Pepes (@waterflower33) | 425 | 425 | 0 | 0 | 0 | 0 | 119 | 2022-02-05 | 2026-02-14 |
| 99 | K G (@goodlawd) | 417 | 417 | 0 | 0 | 0 | 0 | 59 | 2022-10-09 | 2024-02-12 |
| 100 | D_M (@NationSta) | 415 | 415 | 0 | 0 | 0 | 0 | 141 | 2021-02-23 | 2024-07-01 |
| 101 | BTCracerfeg (@wanker007) | 414 | 414 | 0 | 0 | 0 | 0 | 113 | 2023-06-17 | 2024-03-01 |
| 102 | Ryan Reynolds🔮 | 412 | 412 | 0 | 0 | 0 | 0 | 155 | 2022-04-19 | 2025-06-05 |
| 103 | Ghostantin (@Ghostantin) | 402 | 402 | 0 | 0 | 0 | 0 | 101 | 2024-02-02 | 2026-07-15 |
| 104 | ＢＩＲＤＹ &#124; Nerver DM First &#124; (@birdy00097) | 401 | 401 | 0 | 0 | 0 | 0 | 60 | 2023-05-07 | 2025-11-18 |
| 105 | Saeid Namdari (@Saaaieeed) | 400 | 400 | 0 | 0 | 0 | 0 | 97 | 2021-11-17 | 2023-04-25 |
| 106 | H4RDSTYLE (@itshardstyleitslif3) | 399 | 399 | 0 | 0 | 0 | 0 | 128 | 2021-12-16 | 2025-12-16 |
| 107 | Trevor Laird🔮 | 399 | 399 | 0 | 0 | 0 | 0 | 102 | 2021-12-21 | 2026-06-09 |
| 108 | Evgeny (@Smitthi) | 392 | 392 | 0 | 0 | 0 | 0 | 61 | 2022-11-04 | 2025-07-08 |
| 109 | Hosein | 388 | 388 | 0 | 0 | 0 | 0 | 145 | 2021-11-19 | 2024-08-16 |
| 110 | 八神 ~ yagami (@sizzvrp) | 384 | 384 | 0 | 0 | 0 | 0 | 115 | 2022-05-27 | 2025-04-04 |
| 111 | Motix (@motix111) | 375 | 375 | 0 | 0 | 0 | 0 | 96 | 2021-10-29 | 2023-07-01 |
| 112 | Red Raven (Kanvas) (@KanvasRedRaven) | 367 | 367 | 0 | 0 | 0 | 0 | 79 | 2022-01-24 | 2025-07-02 |
| 113 | Papa Doge (@Papadogekoin) | 366 | 366 | 0 | 0 | 0 | 0 | 59 | 2023-11-14 | 2026-05-03 |
| 114 | Ron Hamenahem (@brklyn8900) | 344 | 163 | 180 | 0 | 1 | 0 | 67 | 2019-12-22 | 2026-06-26 |
| 115 | geido (@realGeido) | 343 | 343 | 0 | 0 | 0 | 0 | 72 | 2021-03-14 | 2024-04-29 |
| 116 | Micӄ Bac 🔮 (@Genachi) | 339 | 339 | 0 | 0 | 0 | 0 | 161 | 2021-11-22 | 2026-02-09 |
| 117 | FARHAN (@i_woodii_0) | 331 | 331 | 0 | 0 | 0 | 0 | 30 | 2024-04-23 | 2025-03-08 |
| 118 | Dani (@DaniCX) | 330 | 330 | 0 | 0 | 0 | 0 | 75 | 2021-02-25 | 2026-04-24 |
| 119 | Exyle (@Exyle1) | 327 | 327 | 0 | 0 | 0 | 0 | 60 | 2022-09-01 | 2025-03-12 |
| 120 | Johan Tan (@Johan10chin) | 320 | 320 | 0 | 0 | 0 | 0 | 82 | 2021-11-16 | 2026-01-29 |
| 121 | Rash | 319 | 319 | 0 | 0 | 0 | 0 | 68 | 2021-12-19 | 2026-03-21 |
| 122 | Ethan 🇦🇪 &#124; Listing Exchanges (@Ethan_Cex) | 318 | 318 | 0 | 0 | 0 | 0 | 119 | 2023-01-03 | 2023-07-07 |
| 123 | Ashtar (Three Wassies Capital) (@A5ht4r) | 313 | 313 | 0 | 0 | 0 | 0 | 65 | 2023-12-21 | 2025-09-09 |
| 124 | METS (@CrytoJoy) | 313 | 313 | 0 | 0 | 0 | 0 | 58 | 2021-10-14 | 2025-09-06 |
| 125 | Akelarre (@n0_alterNative) | 310 | 310 | 0 | 0 | 0 | 0 | 73 | 2021-11-09 | 2025-12-05 |
| 126 | Adam (@SuperHeroMegaAdam) | 306 | 306 | 0 | 0 | 0 | 0 | 63 | 2021-09-09 | 2023-12-15 |
| 127 | Beefmarket (@Manzottino92) | 303 | 303 | 0 | 0 | 0 | 0 | 69 | 2023-05-09 | 2024-05-03 |
| 128 | Manu (@ggmanugg) | 300 | 300 | 0 | 0 | 0 | 0 | 57 | 2021-04-07 | 2025-01-15 |
| 129 | liam (@liiam_12) | 295 | 295 | 0 | 0 | 0 | 0 | 139 | 2023-08-02 | 2025-05-28 |
| 130 | bert0 (@bert0dev) | 287 | 287 | 0 | 0 | 0 | 0 | 81 | 2021-01-10 | 2025-01-31 |
| 131 | David (@BrandProDavid) | 284 | 284 | 0 | 0 | 0 | 0 | 24 | 2025-01-30 | 2025-11-15 |
| 132 | MRT (@mr_tadayyon) | 283 | 283 | 0 | 0 | 0 | 0 | 56 | 2021-11-20 | 2023-11-22 |
| 133 | 金 子金 (@fadadefa) | 283 | 283 | 0 | 0 | 0 | 0 | 21 | 2023-11-24 | 2024-01-01 |
| 134 | Pheroclone (@pheroclone) | 279 | 279 | 0 | 0 | 0 | 0 | 49 | 2023-06-28 | 2025-06-03 |
| 135 | Adrian (@pocojocon) | 277 | 277 | 0 | 0 | 0 | 0 | 87 | 2021-03-08 | 2025-11-15 |
| 136 | Joe Walker (@imjoewalker) | 277 | 277 | 0 | 0 | 0 | 0 | 126 | 2022-01-16 | 2025-10-25 |
| 137 | Miguel Ángel (@LifeAddicteds) | 277 | 277 | 0 | 0 | 0 | 0 | 55 | 2021-01-09 | 2022-12-15 |
| 138 | Mr pump (@pumpit1233) | 276 | 276 | 0 | 0 | 0 | 0 | 15 | 2023-11-07 | 2025-05-27 |
| 139 | Alex Blazquez Ruiz (@OwlPuke) | 274 | 274 | 0 | 0 | 0 | 0 | 19 | 2025-01-27 | 2025-07-01 |
| 140 | Dr Crypto 🔺️ (@Dr_crypto27) | 273 | 273 | 0 | 0 | 0 | 0 | 40 | 2023-04-15 | 2024-01-02 |
| 141 | Xiis2Burco (@Xiis2Burco) | 272 | 272 | 0 | 0 | 0 | 0 | 55 | 2021-06-13 | 2025-09-30 |
| 142 | Amirhossein F (@ahfa1984) | 271 | 271 | 0 | 0 | 0 | 0 | 54 | 2021-11-25 | 2025-11-19 |
| 143 | Jacob (@majakebumblebee) | 266 | 266 | 0 | 0 | 0 | 0 | 62 | 2022-08-13 | 2026-05-31 |
| 144 | Hamed (@H7857) | 255 | 255 | 0 | 0 | 0 | 0 | 82 | 2024-11-05 | 2025-11-14 |
| 145 | Batista007 (@Batista007) | 242 | 242 | 0 | 0 | 0 | 0 | 47 | 2021-02-03 | 2026-04-23 |
| 146 | spqr87 (@spqr87) | 242 | 242 | 0 | 0 | 0 | 0 | 80 | 2022-11-14 | 2024-08-05 |
| 147 | Geku (@GekuF1) | 241 | 241 | 0 | 0 | 0 | 0 | 155 | 2021-11-05 | 2026-03-07 |
| 148 | Investor NL | 235 | 235 | 0 | 0 | 0 | 0 | 30 | 2023-12-15 | 2024-05-13 |
| 149 | Tomek (@HasimotoLi) | 234 | 234 | 0 | 0 | 0 | 0 | 45 | 2021-01-31 | 2026-06-02 |
| 150 | A | 233 | 233 | 0 | 0 | 0 | 0 | 99 | 2025-03-12 | 2026-07-15 |
| 151 | Am..t_K (@Ame_et108) | 232 | 232 | 0 | 0 | 0 | 0 | 174 | 2021-11-17 | 2025-09-02 |
| 152 | Jasim Khan (@Johnyk786) | 232 | 232 | 0 | 0 | 0 | 0 | 36 | 2024-10-18 | 2026-03-16 |
| 153 | Ps (@Osho9883) | 229 | 229 | 0 | 0 | 0 | 0 | 34 | 2023-10-29 | 2025-10-25 |
| 154 | roh | 229 | 229 | 0 | 0 | 0 | 0 | 59 | 2023-08-09 | 2026-04-27 |
| 155 | christian (@chrisperez80) | 227 | 227 | 0 | 0 | 0 | 0 | 78 | 2022-11-01 | 2025-09-02 |
| 156 | Sh (@Shh1988) | 224 | 224 | 0 | 0 | 0 | 0 | 101 | 2021-11-19 | 2024-12-02 |
| 157 | Jose M (@JoseMno) | 210 | 210 | 0 | 0 | 0 | 0 | 59 | 2022-06-01 | 2025-03-08 |
| 158 | MrMekkk (@Mrmekkk) | 209 | 209 | 0 | 0 | 0 | 0 | 83 | 2021-10-22 | 2024-10-19 |
| 159 | Mateusz (@Mateusz3211) | 208 | 208 | 0 | 0 | 0 | 0 | 27 | 2024-09-20 | 2025-03-31 |
| 160 | VӃ | 206 | 206 | 0 | 0 | 0 | 0 | 47 | 2024-06-03 | 2025-08-25 |
| 161 | … | 206 | 206 | 0 | 0 | 0 | 0 | 45 | 2024-01-17 | 2024-06-11 |
| 162 | Wall-e | 205 | 205 | 0 | 0 | 0 | 0 | 33 | 2025-03-16 | 2025-05-09 |
| 163 | OӃ (@okcompy) | 204 | 204 | 0 | 0 | 0 | 0 | 73 | 2023-11-27 | 2024-04-10 |
| 164 | Paco CryptoKey (@Cryptokey2) | 200 | 200 | 0 | 0 | 0 | 0 | 47 | 2023-04-09 | 2026-04-12 |
| 165 | Tincho (@OxTinch0) | 200 | 200 | 0 | 0 | 0 | 0 | 26 | 2021-01-28 | 2021-05-08 |
| 166 | Frenchie (@frenchiekoin) | 199 | 199 | 0 | 0 | 0 | 0 | 31 | 2023-12-29 | 2025-01-02 |
| 167 | Kara Pasha (@KaraPash4) | 199 | 199 | 0 | 0 | 0 | 0 | 22 | 2023-11-24 | 2024-01-04 |
| 168 | Burger Fries (@BURGkoin) | 198 | 198 | 0 | 0 | 0 | 0 | 38 | 2024-06-13 | 2025-07-22 |
| 169 | Crypto Bitez (@suntochukwu) | 195 | 195 | 0 | 0 | 0 | 0 | 77 | 2021-05-30 | 2024-11-05 |
| 170 | AhmadReza Reisian (@Livesoul85) | 194 | 194 | 0 | 0 | 0 | 0 | 30 | 2021-11-14 | 2022-01-21 |
| 171 | Luke (@lucasade) | 194 | 194 | 0 | 0 | 0 | 0 | 70 | 2022-12-14 | 2024-03-19 |
| 172 | Xatakis (@Xatakis) | 189 | 189 | 0 | 0 | 0 | 0 | 62 | 2021-11-19 | 2025-01-28 |
| 173 | Rrr22 (@ggdubbel) | 185 | 185 | 0 | 0 | 0 | 0 | 8 | 2023-11-08 | 2023-11-22 |
| 174 | Sadık Emre Alkan (@Omdividet) | 184 | 184 | 0 | 0 | 0 | 0 | 24 | 2021-11-17 | 2024-07-29 |
| 175 | .💞. ℳℴ‌‌‌‌‌‌‌𝒽𝓪𝓶𝓶𝓪𝓭 .💞. (@Usnme1) | 183 | 183 | 0 | 0 | 0 | 0 | 19 | 2021-11-07 | 2025-11-27 |
| 176 | Memo | 183 | 183 | 0 | 0 | 0 | 0 | 3 | 2025-03-08 | 2025-03-10 |
| 177 | 👑 \⁩ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ\⁩ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ ●━━─⇆ ◁❚❚▷ ↻-𝑨𝒍𝒊𝒛𝒂𝒅𝒆𝒉\⁩ࣩࣩࣩࣩ (@Mammad_Alizadeh) | 183 | 183 | 0 | 0 | 0 | 0 | 72 | 2021-11-08 | 2026-06-10 |
| 178 | Ludarep (@Ludarep) | 181 | 181 | 0 | 0 | 0 | 0 | 60 | 2022-01-07 | 2025-05-30 |
| 179 | Aliasghar Mousavi (@mousaviasg) | 180 | 180 | 0 | 0 | 0 | 0 | 35 | 2021-11-15 | 2022-01-21 |
| 180 | sartox11🔮 (@Sartox11) | 175 | 175 | 0 | 0 | 0 | 0 | 75 | 2021-03-07 | 2025-12-25 |
| 181 | Игорь Александрович (@kalchevskiy) | 174 | 174 | 0 | 0 | 0 | 0 | 85 | 2021-06-14 | 2023-03-18 |
| 182 | SSCRYPTO (@jj596) | 173 | 173 | 0 | 0 | 0 | 0 | 33 | 2023-06-17 | 2024-09-03 |
| 183 | Fox (@foxkoinos) | 169 | 169 | 0 | 0 | 0 | 0 | 54 | 2021-01-29 | 2025-03-09 |
| 184 | aM8 (@MH8te) | 168 | 168 | 0 | 0 | 0 | 0 | 21 | 2023-03-03 | 2023-04-15 |
| 185 | Kanian (@kmd270) | 166 | 166 | 0 | 0 | 0 | 0 | 24 | 2022-12-29 | 2024-02-02 |
| 186 | Mark Rayson &#124; I will never DM You (@markrayson) | 164 | 164 | 0 | 0 | 0 | 0 | 43 | 2022-02-07 | 2026-02-27 |
| 187 | Tintin (@punumahajan007) | 164 | 164 | 0 | 0 | 0 | 0 | 21 | 2021-11-09 | 2024-06-14 |
| 188 | ℳ𝓂𝒹 (@mmdmfmz) | 160 | 160 | 0 | 0 | 0 | 0 | 31 | 2024-09-26 | 2025-05-29 |
| 189 | Nam (@nam1ner) | 158 | 158 | 0 | 0 | 0 | 0 | 7 | 2023-11-26 | 2023-12-14 |
| 190 | S Prasco | 158 | 158 | 0 | 0 | 0 | 0 | 42 | 2024-05-12 | 2026-07-04 |
| 191 | Omoeki (@bestedeki) | 155 | 155 | 0 | 0 | 0 | 0 | 76 | 2021-11-08 | 2025-02-06 |
| 192 | Tobi (@tobimye) | 155 | 155 | 0 | 0 | 0 | 0 | 57 | 2023-02-18 | 2026-03-01 |
| 193 | Kyrios (@synovemer) | 154 | 154 | 0 | 0 | 0 | 0 | 34 | 2024-11-09 | 2025-11-14 |
| 194 | Rızgar (@TheRiz93) | 153 | 153 | 0 | 0 | 0 | 0 | 14 | 2023-06-09 | 2023-11-15 |
| 195 | Soney (@sonjdh2) | 151 | 151 | 0 | 0 | 0 | 0 | 13 | 2024-01-21 | 2024-03-03 |
| 196 | David Majada | 150 | 150 | 0 | 0 | 0 | 0 | 54 | 2021-11-15 | 2024-12-04 |
| 197 | Elbarto | 148 | 148 | 0 | 0 | 0 | 0 | 26 | 2023-11-22 | 2025-10-02 |
| 198 | h.mohe (@Hmohei) | 148 | 148 | 0 | 0 | 0 | 0 | 49 | 2023-12-17 | 2025-11-27 |
| 199 | Jairo (@Ashirion) | 148 | 148 | 0 | 0 | 0 | 0 | 74 | 2022-10-31 | 2025-08-13 |
| 200 | Cardsfan888 (@Cardsfan888) | 147 | 147 | 0 | 0 | 0 | 0 | 41 | 2023-04-01 | 2023-09-08 |
| 201 | Otis | 147 | 147 | 0 | 0 | 0 | 0 | 21 | 2022-01-26 | 2022-02-18 |
| 202 | Paoli (@poali98) | 147 | 147 | 0 | 0 | 0 | 0 | 42 | 2025-04-19 | 2026-02-18 |
| 203 | Pepe Svin (@PepeSvin) | 147 | 147 | 0 | 0 | 0 | 0 | 51 | 2020-11-18 | 2026-02-10 |
| 204 | Rambo Lamb (@RamboLambo) | 143 | 143 | 0 | 0 | 0 | 0 | 38 | 2020-11-20 | 2024-11-30 |
| 205 | Tony Job | 143 | 143 | 0 | 0 | 0 | 0 | 84 | 2022-05-29 | 2025-12-29 |
| 206 | Toofan (@toofan_che) | 143 | 143 | 0 | 0 | 0 | 0 | 51 | 2021-11-12 | 2026-06-20 |
| 207 | M Z (@Luuk_Groen) | 140 | 140 | 0 | 0 | 0 | 0 | 27 | 2023-12-16 | 2024-05-03 |
| 208 | Keeper Forge (@KeeperForge) | 139 | 139 | 0 | 0 | 0 | 0 | 13 | 2021-01-22 | 2022-02-26 |
| 209 | Raul (@provoco) | 138 | 138 | 0 | 0 | 0 | 0 | 54 | 2021-09-26 | 2022-12-18 |
| 210 | صنایع چوبی آپادانا (@Mobleapadana) | 137 | 137 | 0 | 0 | 0 | 0 | 42 | 2021-10-02 | 2023-10-02 |
| 211 | MEhdi (@mehdi_J23) | 134 | 134 | 0 | 0 | 0 | 0 | 31 | 2021-11-19 | 2023-03-30 |
| 212 | DrAkU'L (@drakul19) | 133 | 133 | 0 | 0 | 0 | 0 | 54 | 2022-11-05 | 2024-07-20 |
| 213 | Nathaniel Lees (@NathanielLees) | 132 | 132 | 0 | 0 | 0 | 0 | 28 | 2022-12-23 | 2023-11-29 |
| 214 | Daniel Schwarz (liondani) (@liondani) | 130 | 130 | 0 | 0 | 0 | 0 | 33 | 2022-10-29 | 2026-02-10 |
| 215 | Sergio (@hm0by) | 130 | 130 | 0 | 0 | 0 | 0 | 49 | 2022-05-13 | 2025-05-29 |
| 216 | Liam (@LiamDeFi) | 127 | 127 | 0 | 0 | 0 | 0 | 32 | 2021-10-25 | 2023-11-10 |
| 217 | Ned Fine (@Ned_Fine) | 127 | 127 | 0 | 0 | 0 | 0 | 45 | 2024-05-20 | 2025-05-25 |
| 218 | Alexander (@crypto93z) | 125 | 125 | 0 | 0 | 0 | 0 | 20 | 2022-08-02 | 2024-12-07 |
| 219 | Samy Ӄ (@speier000) | 125 | 125 | 0 | 0 | 0 | 0 | 72 | 2021-04-17 | 2025-05-11 |
| 220 | Off The Cuff (@Offthecuff2010) | 124 | 124 | 0 | 0 | 0 | 0 | 50 | 2021-04-21 | 2025-07-18 |
| 221 | Robert Johanson | 123 | 123 | 0 | 0 | 0 | 0 | 13 | 2024-09-08 | 2025-08-22 |
| 222 | 🅧 Astro Ninja 🅧 (@AstroNinjaX) | 123 | 123 | 0 | 0 | 0 | 0 | 26 | 2023-04-16 | 2024-04-12 |
| 223 | Theodor Rettich (@TheodorRettich) | 121 | 121 | 0 | 0 | 0 | 0 | 15 | 2022-11-30 | 2023-12-12 |
| 224 | persianpiano (@Pershianpiano) | 120 | 120 | 0 | 0 | 0 | 0 | 20 | 2021-11-18 | 2022-11-01 |
| 225 | J R | 119 | 119 | 0 | 0 | 0 | 0 | 35 | 2021-11-28 | 2025-07-28 |
| 226 | el (@telleqra) | 118 | 118 | 0 | 0 | 0 | 0 | 40 | 2021-02-26 | 2022-03-12 |
| 227 | Snir | 117 | 117 | 0 | 0 | 0 | 0 | 34 | 2022-04-08 | 2025-09-09 |
| 228 | Mojtaba Abidi | 116 | 116 | 0 | 0 | 0 | 0 | 40 | 2021-12-20 | 2025-10-06 |
| 229 | Guru (@bluelogic33) | 115 | 115 | 0 | 0 | 0 | 0 | 19 | 2021-02-14 | 2021-07-16 |
| 230 | . . (@Anonmanitg) | 114 | 114 | 0 | 0 | 0 | 0 | 23 | 2025-06-09 | 2025-09-27 |
| 231 | MZ (@shiningstar86) | 113 | 113 | 0 | 0 | 0 | 0 | 14 | 2023-06-08 | 2023-07-02 |
| 232 | romeo (@Romeotheonly) | 113 | 113 | 0 | 0 | 0 | 0 | 32 | 2022-09-12 | 2024-08-27 |
| 233 | Bright Breeze (@bright_breeze) | 112 | 112 | 0 | 0 | 0 | 0 | 59 | 2024-10-14 | 2026-04-25 |
| 234 | Jacob Allen | 112 | 112 | 0 | 0 | 0 | 0 | 38 | 2025-07-23 | 2026-01-28 |
| 235 | Max f (@aesoprock) | 111 | 111 | 0 | 0 | 0 | 0 | 60 | 2021-04-05 | 2025-02-03 |
| 236 | ᬉشـ ـاٰه ڪࢪیمی ️ (@Omid20karimi) | 111 | 111 | 0 | 0 | 0 | 0 | 29 | 2025-05-12 | 2026-04-01 |
| 237 | bulent kayim | 110 | 110 | 0 | 0 | 0 | 0 | 6 | 2024-06-20 | 2025-05-09 |
| 238 | Ari (@Arird20) | 109 | 109 | 0 | 0 | 0 | 0 | 17 | 2022-10-25 | 2023-04-06 |
| 240 | Farzad (@farzadxd) | 108 | 108 | 0 | 0 | 0 | 0 | 67 | 2022-12-28 | 2023-03-18 |
| 241 | Han Chiu (@mekaffey) | 107 | 107 | 0 | 0 | 0 | 0 | 37 | 2021-11-08 | 2025-05-20 |
| 242 | Izakis (@zodiac286) | 107 | 107 | 0 | 0 | 0 | 0 | 68 | 2021-11-13 | 2025-09-30 |
| 243 | PePeZen 🇫🇷 (@thib89) | 107 | 107 | 0 | 0 | 0 | 0 | 32 | 2021-11-09 | 2024-02-05 |
| 244 | paula g (@paula_fundraisely) | 106 | 106 | 0 | 0 | 0 | 0 | 24 | 2021-11-01 | 2025-05-23 |
| 245 | Yoni (@ylip1) | 106 | 106 | 0 | 0 | 0 | 0 | 28 | 2021-06-18 | 2024-12-19 |
| 246 | Patrick (@funnyhill) | 105 | 105 | 0 | 0 | 0 | 0 | 55 | 2021-01-24 | 2025-06-01 |
| 247 | Andrey Golovko (@andrey77golovko) | 104 | 104 | 0 | 0 | 0 | 0 | 24 | 2021-11-16 | 2025-11-15 |
| 248 | Bleh (@Bleh98) | 104 | 104 | 0 | 0 | 0 | 0 | 20 | 2023-09-03 | 2024-05-11 |
| 249 | Massoud Ghahari (@masghahari) | 104 | 104 | 0 | 0 | 0 | 0 | 13 | 2023-04-07 | 2023-11-04 |
| 250 | Moh (@Mohmirag) | 104 | 104 | 0 | 0 | 0 | 0 | 28 | 2021-11-07 | 2023-08-14 |
| 251 | Isildur de Isengard (@isvilfer) | 103 | 103 | 0 | 0 | 0 | 0 | 40 | 2021-02-13 | 2025-12-27 |
| 252 | chuu | 99 | 99 | 0 | 0 | 0 | 0 | 22 | 2021-12-21 | 2022-06-13 |
| 253 | Madhavakrishnan Arumugam (@maddykrish1984) | 99 | 99 | 0 | 0 | 0 | 0 | 9 | 2023-04-07 | 2023-12-15 |
| 254 | Yuri Sergonov | 97 | 97 | 0 | 0 | 0 | 0 | 2 | 2023-11-27 | 2023-11-28 |
| 255 | Sh (@Shahinnabizadeh) | 96 | 96 | 0 | 0 | 0 | 0 | 19 | 2022-09-17 | 2024-10-24 |
| 256 | M G (@MOG_Investments) | 95 | 95 | 0 | 0 | 0 | 0 | 4 | 2022-12-07 | 2023-06-21 |
| 257 | Y (@mxb678) | 95 | 95 | 0 | 0 | 0 | 0 | 20 | 2023-12-15 | 2024-06-04 |
| 258 | ♾️Francesco - will never DM first♾️ (@Francesco8880) | 95 | 95 | 0 | 0 | 0 | 0 | 15 | 2024-01-09 | 2025-01-06 |
| 259 | Artyglio (@Artyglio) | 94 | 94 | 0 | 0 | 0 | 0 | 40 | 2022-11-01 | 2025-11-19 |
| 260 | N.R (@Lafiya0015) | 94 | 94 | 0 | 0 | 0 | 0 | 4 | 2023-11-24 | 2023-11-27 |
| 261 | Vatshayan (@Vatshayan1) | 94 | 94 | 0 | 0 | 0 | 0 | 12 | 2024-03-27 | 2024-05-22 |
| 262 | 🍟 | 94 | 94 | 0 | 0 | 0 | 0 | 24 | 2023-11-11 | 2025-03-09 |
| 263 | 345 678 (@john88866) | 93 | 93 | 0 | 0 | 0 | 0 | 9 | 2021-11-09 | 2025-08-05 |
| 264 | Plouton Ӄ (@Plouton_5) | 93 | 93 | 0 | 0 | 0 | 0 | 50 | 2021-12-08 | 2025-08-08 |
| 265 | Bigwhale.20eth | 92 | 92 | 0 | 0 | 0 | 0 | 17 | 2023-11-10 | 2024-02-12 |
| 266 | Tarik (@FloatingGoat) | 92 | 92 | 0 | 0 | 0 | 0 | 43 | 2022-03-29 | 2024-03-08 |
| 267 | Burt (@Burt31) | 91 | 91 | 0 | 0 | 0 | 0 | 25 | 2021-11-14 | 2023-01-08 |
| 268 | hosseinBtc (@Hossein0x) | 91 | 91 | 0 | 0 | 0 | 0 | 31 | 2021-08-30 | 2023-05-11 |
| 269 | Perol Scarlatino🔮 (@mariormp) | 90 | 90 | 0 | 0 | 0 | 0 | 24 | 2022-10-25 | 2024-05-30 |
| 270 | SN | 90 | 90 | 0 | 0 | 0 | 0 | 19 | 2023-11-09 | 2024-04-12 |
| 271 | luzkan (@luzkanzero) | 88 | 88 | 0 | 0 | 0 | 0 | 56 | 2021-11-14 | 2025-12-05 |
| 272 | N 😼 (@nimafit) | 87 | 87 | 0 | 0 | 0 | 0 | 28 | 2022-03-17 | 2026-01-25 |
| 273 | Rob the OwlMaӃer (@MakerOfOwls) | 86 | 86 | 0 | 0 | 0 | 0 | 39 | 2022-01-23 | 2025-01-28 |
| 274 | Don Miki (@Don_Miki) | 85 | 85 | 0 | 0 | 0 | 0 | 2 | 2022-11-03 | 2022-11-05 |
| 275 | Jay (@olababa) | 84 | 84 | 0 | 0 | 0 | 0 | 9 | 2021-11-06 | 2021-11-17 |
| 276 | @Inrupx (@San9808) | 82 | 82 | 0 | 0 | 0 | 0 | 10 | 2025-04-25 | 2025-06-09 |
| 277 | A (@AA101112) | 82 | 82 | 0 | 0 | 0 | 0 | 20 | 2023-04-08 | 2025-01-07 |
| 278 | Mob (@mob_xxx) | 82 | 82 | 0 | 0 | 0 | 0 | 8 | 2022-10-30 | 2024-01-15 |
| 279 | harmerez jr (@harmerez) | 81 | 81 | 0 | 0 | 0 | 0 | 13 | 2023-11-21 | 2024-09-25 |
| 280 | João Mateus (@joaobarbosaaa) | 81 | 81 | 0 | 0 | 0 | 0 | 13 | 2023-11-17 | 2024-07-19 |
| 281 | Master of Coin (@MasterOfCoin_AA) | 81 | 81 | 0 | 0 | 0 | 0 | 33 | 2023-11-20 | 2024-08-12 |
| 282 | Samo (@Samo7631) | 81 | 81 | 0 | 0 | 0 | 0 | 28 | 2021-08-29 | 2022-06-30 |
| 283 | Tango (@Gen4Ton) | 81 | 81 | 0 | 0 | 0 | 0 | 7 | 2024-03-14 | 2024-03-20 |
| 284 | سجاد (@S_Naddafzadeh) | 81 | 81 | 0 | 0 | 0 | 0 | 18 | 2022-04-23 | 2022-12-30 |
| 285 | Andy Solami (@andysolami) | 80 | 80 | 0 | 0 | 0 | 0 | 37 | 2022-04-29 | 2025-05-12 |
| 286 | Maria Sacramento Tornero | 80 | 80 | 0 | 0 | 0 | 0 | 62 | 2020-12-07 | 2025-10-24 |
| 287 | Slimi (@SlimiB) | 79 | 79 | 0 | 0 | 0 | 0 | 8 | 2021-11-14 | 2024-02-22 |
| 288 | Weng (@zydryck) | 79 | 79 | 0 | 0 | 0 | 0 | 26 | 2022-11-03 | 2023-04-30 |
| 289 | Lazy (@Lazytrader0) | 78 | 78 | 0 | 0 | 0 | 0 | 9 | 2025-01-16 | 2025-03-09 |
| 290 | linasonthemoon (🦀,🦀) &#124; COMPROMISED (@linasonthemoon) | 78 | 78 | 0 | 0 | 0 | 0 | 22 | 2021-09-11 | 2024-01-08 |
| 291 | Agustin (@agustin543) | 77 | 77 | 0 | 0 | 0 | 0 | 25 | 2021-11-22 | 2024-04-29 |
| 292 | alchemist (@lchemista) | 77 | 77 | 0 | 0 | 0 | 0 | 6 | 2022-05-20 | 2024-03-02 |
| 293 | RocӃ 🍅 🐈‍⬛🐾 (@Upmewhale) | 77 | 77 | 0 | 0 | 0 | 0 | 23 | 2023-04-02 | 2024-02-24 |
| 294 | U 88 (@hevia123123) | 77 | 77 | 0 | 0 | 0 | 0 | 11 | 2021-11-14 | 2023-11-26 |
| 295 | BrainBox (@BrainBox1212) | 76 | 76 | 0 | 0 | 0 | 0 | 41 | 2021-12-19 | 2024-08-26 |
| 296 | Inverse [τ, τ] (@xInverse) | 76 | 76 | 0 | 0 | 0 | 0 | 4 | 2021-07-11 | 2021-12-01 |
| 297 | sneha (@s987607) | 76 | 76 | 0 | 0 | 0 | 0 | 15 | 2024-07-09 | 2026-03-31 |
| 298 | David A. (@dav428489) | 75 | 75 | 0 | 0 | 0 | 0 | 12 | 2022-03-17 | 2024-03-27 |
| 299 | Guibs | 75 | 75 | 0 | 0 | 0 | 0 | 21 | 2022-01-23 | 2024-09-05 |
| 300 | SimpleDip (@SiimpleDip) | 75 | 75 | 0 | 0 | 0 | 0 | 20 | 2021-09-08 | 2022-08-03 |
| 301 | Ammar (@aumi121) | 74 | 74 | 0 | 0 | 0 | 0 | 25 | 2021-11-18 | 2022-11-09 |
| 302 | Ahmad Haidari (@Xman2010) | 73 | 73 | 0 | 0 | 0 | 0 | 7 | 2021-05-18 | 2022-11-05 |
| 303 | Javier (@fjrf96) | 73 | 73 | 0 | 0 | 0 | 0 | 25 | 2021-12-21 | 2024-07-25 |
| 304 | MatazBell🖤🌹 (@MatazBell) | 73 | 73 | 0 | 0 | 0 | 0 | 7 | 2023-02-23 | 2025-07-07 |
| 305 | Rick | 73 | 73 | 0 | 0 | 0 | 0 | 17 | 2024-11-27 | 2025-05-20 |
| 306 | Sina (@S1na4) | 73 | 73 | 0 | 0 | 0 | 0 | 22 | 2021-03-20 | 2021-12-06 |
| 307 | Ans P (@AnsPich) | 72 | 72 | 0 | 0 | 0 | 0 | 10 | 2022-10-31 | 2023-02-01 |
| 308 | Ӄukulero (@kukulero) | 72 | 72 | 0 | 0 | 0 | 0 | 18 | 2024-04-23 | 2024-06-04 |
| 309 | 𝐍 𝐈 𝐑 𝐕𝐀 𝐍 𝐀, ꧁ (@NiiiiRvaanA) | 72 | 72 | 0 | 0 | 0 | 0 | 13 | 2021-11-06 | 2023-07-29 |
| 310 | deXer (@deXerXP) | 71 | 71 | 0 | 0 | 0 | 0 | 12 | 2023-05-11 | 2023-12-28 |
| 311 | ₱₳₦ł₵₦0₩ (@panicnow2007) | 71 | 71 | 0 | 0 | 0 | 0 | 16 | 2022-01-11 | 2023-12-30 |
| 312 | Ceps (@bayceps) | 70 | 70 | 0 | 0 | 0 | 0 | 25 | 2021-12-01 | 2024-09-26 |
| 313 | DIAMONDS (@OX_DIAMONDS) | 70 | 70 | 0 | 0 | 0 | 0 | 18 | 2024-02-11 | 2025-04-30 |
| 314 | guneyli69 (@guneyli69) | 70 | 70 | 0 | 0 | 0 | 0 | 20 | 2022-01-02 | 2022-04-05 |
| 315 | h6lil | 70 | 70 | 0 | 0 | 0 | 0 | 14 | 2023-12-20 | 2024-03-15 |
| 316 | Jerz Piskol (@Jujkon) | 70 | 70 | 0 | 0 | 0 | 0 | 20 | 2023-06-22 | 2025-02-19 |
| 317 | ꧁༺Leͥgeͣnͫd༻꧂ (@limaa99) | 70 | 70 | 0 | 0 | 0 | 0 | 18 | 2024-04-29 | 2026-01-22 |
| 318 | Ilja B (@ilja_brakovskis) | 69 | 69 | 0 | 0 | 0 | 0 | 22 | 2024-05-25 | 2025-11-03 |
| 319 | Jason (@mrjberlin) | 69 | 69 | 0 | 0 | 0 | 0 | 10 | 2023-06-07 | 2024-01-31 |
| 320 | Lazy trader🫠 (@SatoshiLite98) | 69 | 69 | 0 | 0 | 0 | 0 | 23 | 2024-10-19 | 2026-02-17 |
| 321 | Omid (@Omid0811) | 69 | 69 | 0 | 0 | 0 | 0 | 9 | 2022-10-28 | 2022-12-25 |
| 322 | S M | 69 | 69 | 0 | 0 | 0 | 0 | 13 | 2021-05-18 | 2023-07-24 |
| 323 | Ömer ㄜ (@T_H_O_R_I_N) | 68 | 68 | 0 | 0 | 0 | 0 | 30 | 2023-05-30 | 2023-11-22 |
| 324 | Vakas shah (@Imgonnascamyouvakashah) | 67 | 67 | 0 | 0 | 0 | 0 | 30 | 2024-07-29 | 2026-01-05 |
| 325 | Sajjad (@Sajjad67311367) | 66 | 66 | 0 | 0 | 0 | 0 | 35 | 2023-02-15 | 2026-06-08 |
| 326 | DR.saeed Falahaty (@DrSaeedfalahaty) | 65 | 65 | 0 | 0 | 0 | 0 | 28 | 2021-11-04 | 2024-04-08 |
| 327 | redond0 (@redond0) | 65 | 65 | 0 | 0 | 0 | 0 | 21 | 2021-12-28 | 2025-05-28 |
| 328 | Rhubarbarian 🇨🇦 𐤊 (@Rhubarbarian) | 65 | 65 | 0 | 0 | 0 | 0 | 29 | 2023-12-24 | 2024-05-31 |
| 329 | Te | 65 | 65 | 0 | 0 | 0 | 0 | 30 | 2023-11-09 | 2024-12-01 |
| 330 | Amarjeet Kaur Bhadaur Barnala (@Cryptopump245) | 63 | 63 | 0 | 0 | 0 | 0 | 12 | 2025-04-25 | 2025-12-12 |
| 331 | Kismett (@sixoneight) | 63 | 63 | 0 | 0 | 0 | 0 | 11 | 2023-02-18 | 2023-12-27 |
| 332 | Phosphor🇳🇱 (@Phosphorz) | 63 | 63 | 0 | 0 | 0 | 0 | 21 | 2020-12-13 | 2021-10-26 |
| 333 | Qubic Kong (@QubicKong) | 63 | 63 | 0 | 0 | 0 | 0 | 25 | 2023-04-09 | 2023-07-01 |
| 334 | Demir (@demirblok) | 62 | 62 | 0 | 0 | 0 | 0 | 26 | 2023-04-10 | 2024-04-11 |
| 335 | Mat (@matbeedoteth) | 62 | 62 | 0 | 0 | 0 | 0 | 11 | 2022-02-28 | 2022-07-12 |
| 336 | AmIn (@AmInsAa) | 61 | 61 | 0 | 0 | 0 | 0 | 16 | 2021-11-14 | 2022-11-10 |
| 337 | Wizard RAC (@Wizard_RAC) | 61 | 61 | 0 | 0 | 0 | 0 | 17 | 2025-01-05 | 2025-02-28 |
| 338 | ابوالفضل (@ghasemi84) | 61 | 61 | 0 | 0 | 0 | 0 | 10 | 2021-11-15 | 2021-12-28 |
| 339 | 🌍world🌏 (@uncertain7) | 61 | 61 | 0 | 0 | 0 | 0 | 18 | 2022-04-12 | 2025-12-25 |
| 340 | Sol Predator (@Dr_Pepper_dev) | 60 | 60 | 0 | 0 | 0 | 0 | 2 | 2024-07-18 | 2024-07-23 |
| 341 | T M (@tobi_mein) | 60 | 60 | 0 | 0 | 0 | 0 | 37 | 2021-03-09 | 2025-06-30 |
| 342 | 🔮 Astro **WONT DM FIRST** (@TheCryptoAstrologist) | 60 | 60 | 0 | 0 | 0 | 0 | 2 | 2021-07-12 | 2021-07-13 |
| 343 | @H (@uslsbee) | 59 | 59 | 0 | 0 | 0 | 0 | 15 | 2022-01-10 | 2022-11-05 |
| 344 | Alrinlie (@zitoneeee) | 59 | 59 | 0 | 0 | 0 | 0 | 20 | 2024-04-20 | 2025-07-22 |
| 345 | Cain (@ThespisCain) | 59 | 59 | 0 | 0 | 0 | 0 | 3 | 2024-02-12 | 2024-05-22 |
| 346 | L-Unu (@Mabru2011) | 59 | 59 | 0 | 0 | 0 | 0 | 18 | 2023-07-16 | 2024-02-04 |
| 347 | Ӄoinnoisseur 🔮 (@Koinnoisseur) | 59 | 59 | 0 | 0 | 0 | 0 | 17 | 2023-01-09 | 2024-07-12 |
| 348 | 暗•&#124;Kenjiツ (@EMOTIONALDAMAGE1000X) | 59 | 59 | 0 | 0 | 0 | 0 | 15 | 2022-12-14 | 2023-06-14 |
| 349 | Bruudruuster (@Bruudruuster) | 58 | 58 | 0 | 0 | 0 | 0 | 15 | 2022-01-13 | 2023-01-04 |
| 350 | Carsten (@Sticks_n_Stones) | 58 | 58 | 0 | 0 | 0 | 0 | 12 | 2022-11-06 | 2023-04-12 |
| 351 | Enric (@enricfigareda) | 58 | 58 | 0 | 0 | 0 | 0 | 22 | 2022-02-04 | 2024-04-17 |
| 352 | Lakay (@Lakayyyyyyyy) | 58 | 58 | 0 | 0 | 0 | 0 | 10 | 2023-11-21 | 2023-12-11 |
| 353 | LuxurTr (@LuxurTee) | 57 | 57 | 0 | 0 | 0 | 0 | 11 | 2024-07-01 | 2025-04-11 |
| 354 | VanPonkeRo | 57 | 57 | 0 | 0 | 0 | 0 | 13 | 2024-02-18 | 2024-12-28 |
| 355 | Gary (@garylive) | 56 | 56 | 0 | 0 | 0 | 0 | 29 | 2023-03-24 | 2024-03-18 |
| 356 | Ismail (@Ismabouss) | 56 | 56 | 0 | 0 | 0 | 0 | 19 | 2023-11-12 | 2024-05-19 |
| 357 | King J (@King_Jet) | 56 | 56 | 0 | 0 | 0 | 0 | 19 | 2021-01-29 | 2025-02-01 |
| 358 | Sam (@Sam_07320) | 56 | 56 | 0 | 0 | 0 | 0 | 12 | 2023-08-10 | 2024-02-10 |
| 359 | Spurgeon | 56 | 56 | 0 | 0 | 0 | 0 | 17 | 2022-10-02 | 2023-03-07 |
| 360 | xZandeR (@vaida_alexandru) | 56 | 56 | 0 | 0 | 0 | 0 | 9 | 2022-12-26 | 2023-10-15 |
| 361 | Ali Jan (@Alijan988989) | 55 | 55 | 0 | 0 | 0 | 0 | 11 | 2022-11-09 | 2023-01-02 |
| 362 | Cesar Rodriguez (@kesarito) | 55 | 55 | 0 | 0 | 0 | 0 | 21 | 2021-01-12 | 2023-05-07 |
| 363 | Cyrus (@Siroos1994) | 55 | 55 | 0 | 0 | 0 | 0 | 10 | 2022-11-06 | 2024-04-03 |
| 364 | M (@Motown7) | 55 | 55 | 0 | 0 | 0 | 0 | 7 | 2021-11-14 | 2021-11-29 |
| 365 | Unai (@unai_anillo) | 55 | 55 | 0 | 0 | 0 | 0 | 19 | 2024-03-01 | 2026-03-05 |
| 366 | امید (@Oroshani) | 55 | 55 | 0 | 0 | 0 | 0 | 15 | 2021-10-28 | 2021-12-23 |
| 367 | محمد (@Syiadehen) | 55 | 55 | 0 | 0 | 0 | 0 | 18 | 2022-04-04 | 2023-01-20 |
| 368 | 7Heliocoin 🦖 (@helioofcl) | 54 | 54 | 0 | 0 | 0 | 0 | 26 | 2024-01-05 | 2025-01-12 |
| 369 | zilla (@hey_zilla) | 54 | 54 | 0 | 0 | 0 | 0 | 19 | 2021-02-01 | 2023-05-10 |
| 370 | Ionic Zinc (@ioniczinc) | 53 | 53 | 0 | 0 | 0 | 0 | 5 | 2023-04-15 | 2023-04-23 |
| 371 | Mg | 53 | 53 | 0 | 0 | 0 | 0 | 24 | 2023-11-14 | 2024-04-15 |
| 372 | mo nd (@Mohnld) | 53 | 53 | 0 | 0 | 0 | 0 | 8 | 2023-03-25 | 2024-12-08 |
| 373 | TheCryptonaut (@Koinfinity) | 53 | 53 | 0 | 0 | 0 | 0 | 29 | 2021-12-16 | 2023-09-03 |
| 374 | Адна Роданова (@jsfyez) | 53 | 53 | 0 | 0 | 0 | 0 | 10 | 2021-01-11 | 2021-04-27 |
| 375 | azadi (@Azadi_persian) | 52 | 52 | 0 | 0 | 0 | 0 | 5 | 2022-11-05 | 2023-06-16 |
| 376 | Jon (@Ripero89) | 52 | 52 | 0 | 0 | 0 | 0 | 25 | 2021-11-08 | 2022-12-14 |
| 377 | Martin J. (@Martiarias) | 52 | 52 | 0 | 0 | 0 | 0 | 25 | 2022-10-31 | 2025-06-08 |
| 378 | Nawid Jan | 52 | 52 | 0 | 0 | 0 | 0 | 9 | 2025-02-27 | 2025-03-17 |
| 379 | Noot Noot | 52 | 52 | 0 | 0 | 0 | 0 | 17 | 2023-11-10 | 2024-05-01 |
| 380 | S A L E H (@Saleh_ghorbannezhad) | 52 | 52 | 0 | 0 | 0 | 0 | 6 | 2021-08-30 | 2023-11-22 |
| 381 | Sajad A.P (@JasonMandella) | 52 | 52 | 0 | 0 | 0 | 0 | 18 | 2021-03-29 | 2022-12-16 |
| 382 | traderking (@m1n3rtop) | 52 | 52 | 0 | 0 | 0 | 0 | 7 | 2023-11-22 | 2024-01-25 |
| 383 | Renier Haasbroek (@RenierHaasbroek) | 51 | 51 | 0 | 0 | 0 | 0 | 25 | 2023-03-28 | 2023-05-23 |
| 384 | S Yadav (@SYADAV1985) | 51 | 51 | 0 | 0 | 0 | 0 | 8 | 2021-11-14 | 2021-12-29 |
| 385 | Siggi (@Si661) | 51 | 51 | 0 | 0 | 0 | 0 | 16 | 2021-11-11 | 2025-09-01 |
| 386 | CHRIS MAX (@chrismax0) | 50 | 50 | 0 | 0 | 0 | 0 | 8 | 2025-01-30 | 2025-02-10 |
| 387 | K (@pupja97) | 50 | 50 | 0 | 0 | 0 | 0 | 9 | 2021-12-25 | 2023-11-22 |
| 388 | Keyberzerker | 50 | 50 | 0 | 0 | 0 | 0 | 7 | 2021-01-28 | 2021-03-10 |
| 390 | Ph &#124; NoToRuG (GemHunter) pixlands (@RugHater) | 50 | 50 | 0 | 0 | 0 | 0 | 13 | 2021-10-29 | 2026-01-07 |
| 391 | . . (@leeuw10) | 49 | 49 | 0 | 0 | 0 | 0 | 4 | 2023-11-09 | 2023-11-18 |
| 392 | Crypto Snake (@Snakeo087) | 49 | 49 | 0 | 0 | 0 | 0 | 12 | 2021-11-11 | 2024-03-09 |
| 393 | eagcrack 🐈‍⬛ (@Eagcrack) | 49 | 49 | 0 | 0 | 0 | 0 | 9 | 2022-12-15 | 2023-11-25 |
| 394 | EHSAN (@aeroinfinite) | 49 | 49 | 0 | 0 | 0 | 0 | 21 | 2022-11-02 | 2024-12-06 |
| 396 | GSD (@originalgsd) | 49 | 49 | 0 | 0 | 0 | 0 | 9 | 2022-03-08 | 2023-08-11 |
| 397 | Madal (@Alexb34l) | 49 | 49 | 0 | 0 | 0 | 0 | 17 | 2024-01-16 | 2024-04-13 |
| 398 | Matt Zia (@mattzia) | 49 | 49 | 0 | 0 | 0 | 0 | 21 | 2021-11-10 | 2025-06-02 |
| 399 | Pete (@GreenPete) | 49 | 49 | 0 | 0 | 0 | 0 | 9 | 2025-03-10 | 2025-10-28 |
| 400 | Timo Dam (@Timodam) | 49 | 49 | 0 | 0 | 0 | 0 | 14 | 2024-03-03 | 2024-04-13 |
| 401 | tomasS (@tomm144) | 49 | 49 | 0 | 0 | 0 | 0 | 35 | 2021-11-16 | 2024-12-17 |
| 402 | ~Shahram~ (@bahman_rekani) | 49 | 49 | 0 | 0 | 0 | 0 | 5 | 2022-10-27 | 2022-11-15 |
| 403 | @yonnathang (@yonnathang) | 48 | 48 | 0 | 0 | 0 | 0 | 15 | 2021-01-11 | 2021-10-24 |
| 404 | Agus (@megatronxo) | 48 | 48 | 0 | 0 | 0 | 0 | 30 | 2025-05-11 | 2026-07-11 |
| 405 | Pengzu (@P3ngzu) | 48 | 48 | 0 | 0 | 0 | 0 | 6 | 2024-07-09 | 2024-09-11 |
| 406 | David (@DavidM_74) | 47 | 47 | 0 | 0 | 0 | 0 | 23 | 2022-03-13 | 2023-08-20 |
| 408 | Ed Oravetz (@Oravetz_Ed) | 47 | 47 | 0 | 0 | 0 | 0 | 5 | 2023-03-23 | 2023-04-12 |
| 409 | Imamul Bappi (@bappi_gp) | 47 | 47 | 0 | 0 | 0 | 0 | 18 | 2021-11-14 | 2023-11-24 |
| 410 | Mega (@Megatronxi) | 47 | 47 | 0 | 0 | 0 | 0 | 22 | 2023-11-27 | 2025-05-04 |
| 411 | Ashkan Zare (@j_ztrader) | 46 | 46 | 0 | 0 | 0 | 0 | 13 | 2022-11-07 | 2026-05-09 |
| 412 | Carlos C (@carloscarreroo) | 46 | 46 | 0 | 0 | 0 | 0 | 14 | 2021-11-28 | 2023-09-16 |
| 413 | Crouton Don $CyOp (Will Never DM First) (@Crouton_Don) | 46 | 46 | 0 | 0 | 0 | 0 | 11 | 2021-04-12 | 2025-05-31 |
| 414 | Vahid Cheraghi (@Vahidcheraghi0) | 46 | 46 | 0 | 0 | 0 | 0 | 16 | 2021-11-11 | 2025-09-24 |
| 415 | BlockChad (@BlockChad) | 45 | 45 | 0 | 0 | 0 | 0 | 3 | 2023-06-06 | 2023-06-09 |
| 416 | Fahrettin Paşa (@Fahretinpasa) | 45 | 45 | 0 | 0 | 0 | 0 | 9 | 2023-11-20 | 2024-03-12 |
| 417 | Jms (@chens828) | 45 | 45 | 0 | 0 | 0 | 0 | 12 | 2023-04-03 | 2023-11-21 |
| 418 | Vem (@Mnakaar) | 45 | 45 | 0 | 0 | 0 | 0 | 28 | 2022-01-26 | 2025-08-14 |
| 419 | Ach Ach (@jack_ach) | 44 | 44 | 0 | 0 | 0 | 0 | 26 | 2024-07-08 | 2026-01-29 |
| 420 | CR (@CR789987) | 44 | 44 | 0 | 0 | 0 | 0 | 9 | 2022-11-06 | 2024-03-01 |
| 421 | CundaFatihi (@basmanyacanavari) | 44 | 44 | 0 | 0 | 0 | 0 | 15 | 2023-04-14 | 2023-08-09 |
| 422 | ScoobyDookey (@ScoobyDooky) | 44 | 44 | 0 | 0 | 0 | 0 | 9 | 2023-07-08 | 2023-08-03 |
| 423 | Balu Runs (@runstoned) | 43 | 43 | 0 | 0 | 0 | 0 | 7 | 2022-10-31 | 2023-01-03 |
| 424 | Flexor.XBT (@monkemonkemonke) | 43 | 43 | 0 | 0 | 0 | 0 | 20 | 2023-04-02 | 2024-03-07 |
| 425 | Mustafa | 43 | 43 | 0 | 0 | 0 | 0 | 15 | 2022-01-05 | 2024-01-30 |
| 426 | Niyazi (@Niyazi2626) | 43 | 43 | 0 | 0 | 0 | 0 | 3 | 2023-06-10 | 2023-07-02 |
| 427 | Potatoe (@InterdimensionalPotatoe) | 43 | 43 | 0 | 0 | 0 | 0 | 11 | 2022-07-01 | 2023-11-04 |
| 428 | Puntje Bij | 43 | 43 | 0 | 0 | 0 | 0 | 22 | 2024-03-21 | 2025-03-21 |
| 429 | Saylor &#124; Drops💧 (@Mr5503) | 43 | 43 | 0 | 0 | 0 | 0 | 3 | 2022-10-23 | 2022-10-31 |
| 430 | Vandak (@Bvan4) | 43 | 43 | 0 | 0 | 0 | 0 | 6 | 2023-04-07 | 2026-03-29 |
| 431 | World1 (@SwordThatCutsBothWays) | 43 | 43 | 0 | 0 | 0 | 0 | 8 | 2021-12-17 | 2024-02-16 |
| 432 | ○ | 43 | 43 | 0 | 0 | 0 | 0 | 19 | 2021-11-17 | 2022-06-06 |
| 433 | 👤 | 43 | 43 | 0 | 0 | 0 | 0 | 15 | 2025-11-21 | 2026-03-05 |
| 434 | Amir Fallah (@ethereumlegacy) | 42 | 42 | 0 | 0 | 0 | 0 | 10 | 2023-01-06 | 2024-12-09 |
| 435 | Benedikt Albert (@BenediktAlbert) | 42 | 42 | 0 | 0 | 0 | 0 | 10 | 2021-11-14 | 2023-02-24 |
| 436 | Luke Az (@lukemaki) | 42 | 42 | 0 | 0 | 0 | 0 | 10 | 2024-05-09 | 2025-05-14 |
| 437 | Andrew👁Seer (@AndrewSeer) | 41 | 41 | 0 | 0 | 0 | 0 | 8 | 2022-10-24 | 2023-04-03 |
| 438 | Bullmarket94 (@bearmarket94) | 41 | 41 | 0 | 0 | 0 | 0 | 12 | 2023-11-16 | 2024-10-18 |
| 439 | daj (@daj4649) | 41 | 41 | 0 | 0 | 0 | 0 | 13 | 2023-12-19 | 2024-06-27 |
| 440 | Hola Chico (@mrholachico) | 41 | 41 | 0 | 0 | 0 | 0 | 3 | 2021-11-12 | 2021-11-19 |
| 441 | Lukas Schulz | 41 | 41 | 0 | 0 | 0 | 0 | 13 | 2021-12-02 | 2024-02-21 |
| 442 | Stugotz (@Stugotz34) | 41 | 41 | 0 | 0 | 0 | 0 | 9 | 2021-11-09 | 2022-03-09 |
| 443 | Adrian 🦴 (@Adrian15011987) | 40 | 40 | 0 | 0 | 0 | 0 | 9 | 2023-11-09 | 2024-01-03 |
| 444 | Gen ⚡VIA (@hustler0194) | 40 | 40 | 0 | 0 | 0 | 0 | 8 | 2022-10-26 | 2023-04-02 |
| 445 | Juan Ortiz (@juanortiz9) | 40 | 40 | 0 | 0 | 0 | 0 | 23 | 2021-11-16 | 2025-10-13 |
| 446 | Mahti.s (@Divone944) | 40 | 40 | 0 | 0 | 0 | 0 | 17 | 2021-10-26 | 2025-04-18 |
| 447 | Oracle (@oracleforyourmoney) | 40 | 40 | 0 | 0 | 0 | 0 | 10 | 2022-11-12 | 2025-08-04 |
| 449 | TkeJas (@TkeJas) | 40 | 40 | 0 | 0 | 0 | 0 | 15 | 2024-02-26 | 2025-09-16 |
| 450 | All in | 39 | 39 | 0 | 0 | 0 | 0 | 15 | 2021-11-16 | 2025-12-02 |
| 451 | eco (@eco9000) | 39 | 39 | 0 | 0 | 0 | 0 | 14 | 2021-09-15 | 2023-05-27 |
| 452 | JP (@JP_IOC) | 39 | 39 | 0 | 0 | 0 | 0 | 8 | 2023-01-10 | 2023-10-27 |
| 453 | SantiagoVoss (@SantiagoVoss) | 39 | 39 | 0 | 0 | 0 | 0 | 5 | 2022-03-11 | 2023-06-14 |
| 454 | TaylorGuitar (@taylorguitar) | 39 | 39 | 0 | 0 | 0 | 0 | 6 | 2022-01-22 | 2023-11-20 |
| 455 | w0mbat (@W0mbat1337) | 39 | 39 | 0 | 0 | 0 | 0 | 7 | 2021-12-05 | 2022-08-13 |
| 456 | •—พՀ&#124; 4R50 &#124;Հ—• (Amiri) (@AmiriA001) | 39 | 39 | 0 | 0 | 0 | 0 | 6 | 2024-03-26 | 2024-07-09 |
| 457 | 😊 (@Fatemeh7695) | 39 | 39 | 0 | 0 | 0 | 0 | 12 | 2021-12-19 | 2022-01-20 |
| 458 | .. | 38 | 38 | 0 | 0 | 0 | 0 | 19 | 2024-05-03 | 2025-02-20 |
| 460 | Ashikur Rahaman | 38 | 38 | 0 | 0 | 0 | 0 | 5 | 2022-04-30 | 2022-11-06 |
| 461 | Crypto Alucard (@Crypto_Alucard) | 38 | 38 | 0 | 0 | 0 | 0 | 2 | 2023-04-14 | 2023-04-15 |
| 462 | KarmaDagger $ELON (@anish2me) | 38 | 38 | 0 | 0 | 0 | 0 | 8 | 2022-01-17 | 2023-01-30 |
| 463 | Mikel (@Mikelito74) | 38 | 38 | 0 | 0 | 0 | 0 | 14 | 2022-10-23 | 2025-06-28 |
| 464 | Oneluckybeard (@OneLuckyBeard) | 38 | 38 | 0 | 0 | 0 | 0 | 23 | 2022-12-29 | 2025-09-03 |
| 465 | SINA Ghiasvand (@SINA19801359) | 38 | 38 | 0 | 0 | 0 | 0 | 12 | 2022-11-04 | 2023-11-20 |
| 466 | Vic (@cryptoviic) | 38 | 38 | 0 | 0 | 0 | 0 | 10 | 2024-03-14 | 2024-03-30 |
| 467 | Alireza (@Alizferr) | 37 | 37 | 0 | 0 | 0 | 0 | 9 | 2021-10-26 | 2023-11-22 |
| 468 | Caco⭕️ (@caca012) | 37 | 37 | 0 | 0 | 0 | 0 | 3 | 2023-04-02 | 2023-04-06 |
| 469 | Edward (@rig5000) | 37 | 37 | 0 | 0 | 0 | 0 | 9 | 2021-11-07 | 2025-06-21 |
| 470 | Matt Brace (Type AI Technologies) (Won't DM First) (@Mattbrace) | 37 | 37 | 0 | 0 | 0 | 0 | 6 | 2023-09-21 | 2023-11-14 |
| 471 | S.h.hosseini (@Arthur852hz) | 37 | 37 | 0 | 0 | 0 | 0 | 3 | 2023-11-22 | 2023-12-06 |
| 472 | Sadra (@Sadra_gowhari) | 37 | 37 | 0 | 0 | 0 | 0 | 12 | 2022-10-31 | 2024-04-02 |
| 473 | 🐳eNke.nodle.eth (@cafeconenke) | 37 | 37 | 0 | 0 | 0 | 0 | 14 | 2022-12-05 | 2023-05-22 |
| 474 | Airdrop Alpha 🐾&#124; Drops💧'Meshchain.Ai' Σ (@alphacryptoZ) | 36 | 36 | 0 | 0 | 0 | 0 | 8 | 2025-01-30 | 2025-02-20 |
| 475 | Alkimi: ChrisA (@christophLuca) | 36 | 36 | 0 | 0 | 0 | 0 | 11 | 2022-12-23 | 2023-11-22 |
| 476 | Ethan (@idkwhyehidk) | 36 | 36 | 0 | 0 | 0 | 0 | 7 | 2022-12-15 | 2025-01-26 |
| 477 | Matt | 36 | 36 | 0 | 0 | 0 | 0 | 9 | 2022-02-13 | 2025-10-07 |
| 478 | qlamenxHD (@qlamenxHD) | 36 | 36 | 0 | 0 | 0 | 0 | 12 | 2022-01-26 | 2023-11-20 |
| 479 | Tayyip Müftüğlu (@tayyipmftgl) | 36 | 36 | 0 | 0 | 0 | 0 | 14 | 2023-04-03 | 2023-08-07 |
| 480 | 0xBullet (@kconetop) | 35 | 35 | 0 | 0 | 0 | 0 | 6 | 2023-11-27 | 2024-07-08 |
| 481 | amirali (@imamiraliiiii) | 35 | 35 | 0 | 0 | 0 | 0 | 5 | 2024-05-13 | 2024-12-02 |
| 483 | Loler Zone (@lolerzone) | 35 | 35 | 0 | 0 | 0 | 0 | 16 | 2023-03-06 | 2025-07-13 |
| 485 | Sean (@SeanAtdCommunity) | 35 | 35 | 0 | 0 | 0 | 0 | 10 | 2021-11-30 | 2025-01-30 |
| 486 | Unknown | 35 | 35 | 0 | 0 | 0 | 0 | 4 | 2024-03-27 | 2024-03-31 |
| 487 | .......... | 34 | 34 | 0 | 0 | 0 | 0 | 22 | 2021-07-14 | 2025-06-08 |
| 488 | bapt (@bapttttt) | 34 | 34 | 0 | 0 | 0 | 0 | 16 | 2021-01-29 | 2025-05-10 |
| 489 | dalgözen (@dalgozen) | 34 | 34 | 0 | 0 | 0 | 0 | 10 | 2023-04-02 | 2023-11-22 |
| 490 | Diederick (@DiederickJacobs) | 34 | 34 | 0 | 0 | 0 | 0 | 18 | 2024-01-01 | 2024-10-10 |
| 491 | Diesel 🟦🟩 (@DieselOTC) | 34 | 34 | 0 | 0 | 0 | 0 | 9 | 2023-11-20 | 2023-12-05 |
| 492 | hossein.refahi🐢 (@Hosseinr3032) | 34 | 34 | 0 | 0 | 0 | 0 | 10 | 2023-11-20 | 2025-09-24 |
| 493 | Joseph (@jjiaoyuwang) | 34 | 34 | 0 | 0 | 0 | 0 | 14 | 2024-12-03 | 2025-11-15 |
| 494 | Jukrekt (@jukrekt) | 34 | 34 | 0 | 0 | 0 | 0 | 4 | 2021-03-08 | 2021-03-26 |
| 495 | K (@dl_id21) | 34 | 34 | 0 | 0 | 0 | 0 | 8 | 2024-05-31 | 2026-07-01 |
| 496 | Kero | 34 | 34 | 0 | 0 | 0 | 0 | 4 | 2024-08-28 | 2024-09-11 |
| 497 | Maine Koon (@MaineKoonKoin) | 34 | 34 | 0 | 0 | 0 | 0 | 21 | 2024-01-02 | 2024-06-28 |
| 498 | Mario &#124; I Never DM first (@TehRibbon) | 34 | 34 | 0 | 0 | 0 | 0 | 8 | 2021-12-12 | 2023-11-24 |
| 499 | Xpo (@XpoInazo) | 34 | 34 | 0 | 0 | 0 | 0 | 18 | 2022-05-10 | 2023-11-22 |
| 500 | Ігор Яхимець (@igor007777) | 34 | 34 | 0 | 0 | 0 | 0 | 17 | 2022-10-22 | 2023-12-02 |
| 501 | Chinedu 🐾🐾 🗝️Nordom🚪 (@Chinedusmile) | 33 | 33 | 0 | 0 | 0 | 0 | 24 | 2024-11-08 | 2025-02-20 |
| 502 | Frank (@UpsideRightDown) | 33 | 33 | 0 | 0 | 0 | 0 | 18 | 2021-11-26 | 2024-11-02 |
| 503 | Juan Antonio (@Shimmersi) | 33 | 33 | 0 | 0 | 0 | 0 | 2 | 2023-11-21 | 2024-01-28 |
| 504 | MD | 33 | 33 | 0 | 0 | 0 | 0 | 12 | 2023-12-14 | 2024-09-26 |
| 505 | mifune (@toshiromf) | 33 | 33 | 0 | 0 | 0 | 0 | 4 | 2022-03-30 | 2023-06-10 |
| 506 | Milan (@Mili818) | 33 | 33 | 0 | 0 | 0 | 0 | 9 | 2022-11-05 | 2022-12-15 |
| 507 | millieeee ⭕ (@Lemeowman) | 33 | 33 | 0 | 0 | 0 | 0 | 10 | 2020-11-19 | 2020-12-03 |
| 508 | Ocho Rios (@Ocho_Rios) | 33 | 33 | 0 | 0 | 0 | 0 | 7 | 2022-05-16 | 2024-05-17 |
| 509 | Pichel (@Picheldump) | 33 | 33 | 0 | 0 | 0 | 0 | 12 | 2022-10-26 | 2023-07-29 |
| 510 | Pieter Pap | 33 | 33 | 0 | 0 | 0 | 0 | 18 | 2024-03-21 | 2024-11-05 |
| 511 | siam.samouraiiiiiii (@Samouraiiiiiiiiiiiiiiii) | 33 | 33 | 0 | 0 | 0 | 0 | 2 | 2023-11-21 | 2023-11-22 |
| 512 | Sy (@sikadk) | 33 | 33 | 0 | 0 | 0 | 0 | 27 | 2024-10-07 | 2024-12-13 |
| 513 | XxXxXxXxXxXxXxXxXxX (@XxXxXxXxXxXxXxXxXxXxXxXxXxXxX999) | 33 | 33 | 0 | 0 | 0 | 0 | 2 | 2022-03-14 | 2022-11-13 |
| 514 | Хамид⸙ꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋꠋ◡̈⃝ㅤ (@ozx12344444) | 33 | 33 | 0 | 0 | 0 | 0 | 6 | 2025-02-04 | 2025-02-10 |
| 515 | Aapo Granqvist (@aapodaniel) | 32 | 32 | 0 | 0 | 0 | 0 | 4 | 2023-06-13 | 2023-12-01 |
| 516 | Bill Jones | 32 | 32 | 0 | 0 | 0 | 0 | 4 | 2022-12-24 | 2023-01-12 |
| 518 | GinoFPM (@GinoFPM) | 32 | 32 | 0 | 0 | 0 | 0 | 7 | 2023-05-15 | 2023-08-29 |
| 519 | Javier | 32 | 32 | 0 | 0 | 0 | 0 | 21 | 2024-12-04 | 2026-06-09 |
| 520 | Mehrsa (@Mehri371) | 32 | 32 | 0 | 0 | 0 | 0 | 3 | 2021-08-29 | 2021-09-09 |
| 521 | mmr (@em_em_ar) | 32 | 32 | 0 | 0 | 0 | 0 | 13 | 2023-04-27 | 2023-05-23 |
| 522 | rgb33753 rgb33753 (@G3erb) | 32 | 32 | 0 | 0 | 0 | 0 | 5 | 2023-11-30 | 2023-12-06 |
| 523 | Smallcapswin (@manccomore) | 32 | 32 | 0 | 0 | 0 | 0 | 5 | 2023-01-03 | 2023-04-06 |
| 524 | ▴ ꯭꯭ٜٖٜ‌꯭‌ᴍ‌ᴀ꯭‌꯭‌ʜ꯭‌꯭‌ᴅ꯭‌꯭‌ɪ꯭‌꯭꯭꯭ٜٖٖٜٖ‌ ▾ (@mahdiw8200) | 32 | 32 | 0 | 0 | 0 | 0 | 10 | 2023-04-06 | 2023-05-13 |
| 525 | Anton Shkuratov (@shkrtv) | 31 | 31 | 0 | 0 | 0 | 0 | 5 | 2022-03-04 | 2022-04-24 |
| 526 | Artem Shamsutdinov | 31 | 31 | 0 | 0 | 0 | 0 | 8 | 2021-03-11 | 2023-02-26 |
| 527 | Because Get rich (@Because_Get_rich) | 31 | 31 | 0 | 0 | 0 | 0 | 3 | 2023-12-11 | 2024-02-05 |
| 528 | Fadhil Luqman (@taymenc) | 31 | 31 | 0 | 0 | 0 | 0 | 4 | 2021-11-26 | 2024-02-28 |
| 530 | Harry (@Useless245) | 31 | 31 | 0 | 0 | 0 | 0 | 4 | 2023-10-24 | 2025-04-18 |
| 531 | ismail byk (@bykismail) | 31 | 31 | 0 | 0 | 0 | 0 | 4 | 2022-12-15 | 2023-03-25 |
| 532 | Jalal niazi (@Jalalniazi) | 31 | 31 | 0 | 0 | 0 | 0 | 19 | 2021-08-30 | 2025-07-11 |
| 533 | Jan (@Xurial) | 31 | 31 | 0 | 0 | 0 | 0 | 18 | 2023-04-28 | 2023-10-27 |
| 534 | Revolution (@revolutionx) | 31 | 31 | 0 | 0 | 0 | 0 | 14 | 2022-11-24 | 2025-09-14 |
| 535 | shaban ̲͇̮̹̫͚͉̺̪̟͙̥̻͕͔̖̗͎͈̝͍̤̣̄̅͟͜͢͞ͅ ̆̉̃͊͋͆̐̂̌͐̀̋̓̾̈́̈́̾̓̋̚͘͘͠ (@Mars1000000) | 31 | 31 | 0 | 0 | 0 | 0 | 6 | 2023-06-09 | 2026-06-19 |
| 536 | Steve •● 🇬🇷🇷🇺 (@SotiriosLNR) | 31 | 31 | 0 | 0 | 0 | 0 | 5 | 2022-03-09 | 2022-11-06 |
| 538 | Zlatan (@zlatan0102) | 31 | 31 | 0 | 0 | 0 | 0 | 16 | 2025-02-19 | 2025-11-26 |
| 539 | © (@Saituf) | 31 | 31 | 0 | 0 | 0 | 0 | 6 | 2021-11-14 | 2022-06-22 |
| 540 | ابزار علمدار (@abzaralamdar) | 31 | 31 | 0 | 0 | 0 | 0 | 19 | 2023-06-26 | 2025-09-23 |
| 541 | 168 雪狼 (@snowwolf168) | 30 | 30 | 0 | 0 | 0 | 0 | 6 | 2023-11-23 | 2024-01-28 |
| 542 | Aaron (@NZD_Aaron) | 30 | 30 | 0 | 0 | 0 | 0 | 4 | 2023-11-23 | 2023-12-18 |
| 543 | Absor (@absortian) | 30 | 30 | 0 | 0 | 0 | 0 | 9 | 2022-08-12 | 2023-04-06 |
| 545 | Cos (@cosbo) | 30 | 30 | 0 | 0 | 0 | 0 | 5 | 2022-11-05 | 2024-06-18 |
| 546 | D | 30 | 30 | 0 | 0 | 0 | 0 | 6 | 2022-10-31 | 2023-01-24 |
| 547 | Dante (@Dante_Crypto) | 30 | 30 | 0 | 0 | 0 | 0 | 14 | 2022-04-09 | 2022-08-17 |
| 548 | Gsús | 30 | 30 | 0 | 0 | 0 | 0 | 12 | 2021-12-15 | 2026-01-09 |
| 549 | jojo gugi (@jojogugi) | 30 | 30 | 0 | 0 | 0 | 0 | 11 | 2023-04-25 | 2023-12-29 |
| 550 | Matthias Uhl | 30 | 30 | 0 | 0 | 0 | 0 | 17 | 2021-05-17 | 2023-11-22 |
| 551 | Tseu Tseu - τao (@tseutseu) | 30 | 30 | 0 | 0 | 0 | 0 | 3 | 2023-06-30 | 2023-08-09 |
| 552 | Verified Voyager | 30 | 30 | 0 | 0 | 0 | 0 | 2 | 2021-11-04 | 2021-11-05 |
| 553 | Alejandro (@aleaguilar000) | 29 | 29 | 0 | 0 | 0 | 0 | 10 | 2024-06-15 | 2024-07-09 |
| 554 | Chris (@Chris_Cryp) | 29 | 29 | 0 | 0 | 0 | 0 | 5 | 2023-11-20 | 2023-12-21 |
| 555 | Gator (@HB_Horizon) | 29 | 29 | 0 | 0 | 0 | 0 | 7 | 2024-01-22 | 2025-12-19 |
| 556 | Jak (@jacknjoness) | 29 | 29 | 0 | 0 | 0 | 0 | 4 | 2022-12-05 | 2022-12-16 |
| 557 | KadabraKryptox (@Kadabrakryptox) | 29 | 29 | 0 | 0 | 0 | 0 | 9 | 2024-10-18 | 2025-05-11 |
| 558 | Kyo (@kyomur) | 29 | 29 | 0 | 0 | 0 | 0 | 24 | 2022-05-09 | 2025-09-27 |
| 560 | Mixibo (@mixibo_dev) | 29 | 29 | 0 | 0 | 0 | 0 | 9 | 2022-11-05 | 2024-06-08 |
| 561 | O (@Big014) | 29 | 29 | 0 | 0 | 0 | 0 | 2 | 2022-10-23 | 2022-10-31 |
| 562 | Weli (@Wxbona11) | 29 | 29 | 0 | 0 | 0 | 0 | 20 | 2023-07-11 | 2024-03-25 |
| 563 | Zach (@zmill28) | 29 | 29 | 0 | 0 | 0 | 0 | 8 | 2021-12-10 | 2022-05-11 |
| 564 | 🆙 The Brand (@ThePhenom001) | 29 | 29 | 0 | 0 | 0 | 0 | 7 | 2025-02-04 | 2025-03-02 |
| 565 | 0x1H (@Alpha0x1H) | 28 | 28 | 0 | 0 | 0 | 0 | 6 | 2024-03-01 | 2024-03-13 |
| 566 | Ali | 28 | 28 | 0 | 0 | 0 | 0 | 2 | 2023-04-13 | 2023-04-14 |
| 567 | Fino Como El Haze (@finocomoel_haze) | 28 | 28 | 0 | 0 | 0 | 0 | 8 | 2021-03-10 | 2022-12-23 |
| 568 | Gk Bn | 28 | 28 | 0 | 0 | 0 | 0 | 6 | 2023-07-17 | 2026-02-27 |
| 569 | Globetard (@globetardio) | 28 | 28 | 0 | 0 | 0 | 0 | 3 | 2023-12-13 | 2024-01-01 |
| 570 | Johno (@zagatolooper) | 28 | 28 | 0 | 0 | 0 | 0 | 8 | 2021-11-07 | 2022-12-15 |
| 571 | 葡萄 皮 | 28 | 28 | 0 | 0 | 0 | 0 | 13 | 2021-12-01 | 2024-03-03 |
| 574 | B (@BB5542) | 27 | 27 | 0 | 0 | 0 | 0 | 4 | 2023-05-24 | 2023-12-22 |
| 575 | CryptoCibai (@slimolic) | 27 | 27 | 0 | 0 | 0 | 0 | 16 | 2023-05-23 | 2024-01-22 |
| 576 | Erik Saberski (@eriksaber) | 27 | 27 | 0 | 0 | 0 | 0 | 11 | 2024-04-02 | 2025-02-17 |
| 577 | Houssain . (@peraarq) | 27 | 27 | 0 | 0 | 0 | 0 | 8 | 2024-02-14 | 2024-06-22 |
| 578 | Iván (@Pabilao) | 27 | 27 | 0 | 0 | 0 | 0 | 10 | 2021-11-05 | 2024-05-22 |
| 579 | Izecube 🖱️ (@Izecube) | 27 | 27 | 0 | 0 | 0 | 0 | 5 | 2022-10-31 | 2022-12-01 |
| 581 | Kourosh Hpf (@KouroshHp27) | 27 | 27 | 0 | 0 | 0 | 0 | 18 | 2025-04-03 | 2025-12-14 |
| 582 | M-log1 (@log1_053) | 27 | 27 | 0 | 0 | 0 | 0 | 2 | 2023-05-05 | 2023-05-12 |
| 583 | MakeShiftNode (@HistoryStrongest) | 27 | 27 | 0 | 0 | 0 | 0 | 2 | 2023-04-16 | 2023-04-18 |
| 584 | Methamphetamantonio (@BrokeAsShit) | 27 | 27 | 0 | 0 | 0 | 0 | 6 | 2023-12-19 | 2024-03-19 |
| 585 | MvC | 27 | 27 | 0 | 0 | 0 | 0 | 9 | 2024-04-24 | 2024-11-07 |
| 586 | Sayf (@suchenachwissen) | 27 | 27 | 0 | 0 | 0 | 0 | 7 | 2024-12-23 | 2025-10-08 |
| 587 | TB303 (@TB303DE) | 27 | 27 | 0 | 0 | 0 | 0 | 11 | 2021-11-11 | 2023-11-20 |
| 588 | Universe (@Universebye) | 27 | 27 | 0 | 0 | 0 | 0 | 7 | 2024-03-02 | 2025-08-26 |
| 589 | Zhao Xi (@xt1085) | 27 | 27 | 0 | 0 | 0 | 0 | 6 | 2023-11-20 | 2023-12-08 |
| 590 | علیــ♕ــشاه⁶¹⁸ (@Alishahbtc) | 27 | 27 | 0 | 0 | 0 | 0 | 5 | 2023-10-25 | 2024-10-05 |
| 591 | ⛧Mat C (@hadevil) | 27 | 27 | 0 | 0 | 0 | 0 | 15 | 2021-03-11 | 2022-05-31 |
| 592 | ALPHA A (@Alphaa102) | 26 | 26 | 0 | 0 | 0 | 0 | 2 | 2022-10-10 | 2022-10-18 |
| 593 | Anon (@Zygno) | 26 | 26 | 0 | 0 | 0 | 0 | 16 | 2020-11-20 | 2022-01-18 |
| 594 | Bombolla | 26 | 26 | 0 | 0 | 0 | 0 | 11 | 2022-10-30 | 2023-04-27 |
| 595 | Chipeun (@Chipeun) | 26 | 26 | 0 | 0 | 0 | 0 | 10 | 2021-12-19 | 2023-11-05 |
| 596 | Crypto_X100_Hunter (Check BIO) (@X100GemHunterR) | 26 | 26 | 0 | 0 | 0 | 0 | 2 | 2023-01-06 | 2023-01-07 |
| 597 | DineroDom (@Dinero_Dom) | 26 | 26 | 0 | 0 | 0 | 0 | 7 | 2024-04-11 | 2024-05-02 |
| 598 | Hadi (@Hadi_Fe) | 26 | 26 | 0 | 0 | 0 | 0 | 6 | 2022-11-05 | 2024-04-07 |
| 599 | K S | 26 | 26 | 0 | 0 | 0 | 0 | 7 | 2023-12-17 | 2024-08-23 |
| 600 | Odims_Industrial (@Odims_Ind) | 26 | 26 | 0 | 0 | 0 | 0 | 6 | 2022-06-02 | 2024-03-22 |
| 601 | R G | 26 | 26 | 0 | 0 | 0 | 0 | 9 | 2023-08-29 | 2026-03-20 |
| 602 | Rodney Trotter (@triggerednometry) | 26 | 26 | 0 | 0 | 0 | 0 | 5 | 2023-08-05 | 2023-11-10 |
| 603 | SAYEDREZA ALIZADAH (@ASRA124000) | 26 | 26 | 0 | 0 | 0 | 0 | 10 | 2022-10-31 | 2024-08-10 |
| 604 | T2PSYCHO (@t2psycho) | 26 | 26 | 0 | 0 | 0 | 0 | 15 | 2021-11-24 | 2022-11-06 |
| 605 | Totoro (@cryptototoro) | 26 | 26 | 0 | 0 | 0 | 0 | 10 | 2021-11-02 | 2024-03-15 |
| 606 | V N (@simsalabim40) | 26 | 26 | 0 | 0 | 0 | 0 | 7 | 2023-12-15 | 2025-04-13 |
| 607 | Vittorio D'Alessandro (@vittorio9397) | 26 | 26 | 0 | 0 | 0 | 0 | 2 | 2023-05-16 | 2023-05-17 |
| 608 | Wealthylifestyle (@wealthylifestyle) | 26 | 26 | 0 | 0 | 0 | 0 | 10 | 2021-11-09 | 2022-04-04 |
| 610 | Carlo91 (@Carlo91) | 25 | 25 | 0 | 0 | 0 | 0 | 6 | 2023-02-07 | 2023-11-16 |
| 611 | Gaizka (@Gaizka15) | 25 | 25 | 0 | 0 | 0 | 0 | 11 | 2021-12-21 | 2023-12-05 |
| 612 | Ivan (@Tbx86) | 25 | 25 | 0 | 0 | 0 | 0 | 7 | 2022-01-16 | 2023-11-20 |
| 614 | Long77878 (@Long77878) | 25 | 25 | 0 | 0 | 0 | 0 | 2 | 2021-03-05 | 2023-04-25 |
| 615 | Man on Charge - J. Omar M. (@manoncharge) | 25 | 25 | 0 | 0 | 0 | 0 | 2 | 2023-11-11 | 2025-09-12 |
| 616 | Miguel (@Kingdom_BuiIder) | 25 | 25 | 0 | 0 | 0 | 0 | 2 | 2024-01-10 | 2024-01-11 |
| 617 | psidentity 🔮 (@psidentity) | 25 | 25 | 0 | 0 | 0 | 0 | 20 | 2022-06-13 | 2025-05-02 |
| 618 | Soroush (@soroush169) | 25 | 25 | 0 | 0 | 0 | 0 | 7 | 2022-12-17 | 2025-05-12 |
| 619 | thrivenex (@thrivenex) | 25 | 25 | 0 | 0 | 0 | 0 | 4 | 2021-11-05 | 2025-01-08 |
| 621 | Ah (@moonshi_icp) | 24 | 24 | 0 | 0 | 0 | 0 | 4 | 2023-12-28 | 2024-01-02 |
| 622 | BatMan (@Batman007_69) | 24 | 24 | 0 | 0 | 0 | 0 | 13 | 2024-09-05 | 2024-12-12 |
| 623 | Behnam Y.Giasvand (@BehnamYaghubkhani1369) | 24 | 24 | 0 | 0 | 0 | 0 | 14 | 2022-11-09 | 2025-05-07 |
| 624 | CKF (@ZRLK46) | 24 | 24 | 0 | 0 | 0 | 0 | 6 | 2023-11-02 | 2024-02-11 |
| 625 | Darragh (@DarraghPalmer) | 24 | 24 | 0 | 0 | 0 | 0 | 4 | 2022-11-04 | 2024-02-28 |
| 626 | David | 24 | 24 | 0 | 0 | 0 | 0 | 9 | 2022-05-11 | 2023-04-03 |
| 628 | HalvingX1000 (@BTCHalvingX1000) | 24 | 24 | 0 | 0 | 0 | 0 | 3 | 2023-12-01 | 2023-12-04 |
| 629 | M (@Rttt199) | 24 | 24 | 0 | 0 | 0 | 0 | 13 | 2024-11-02 | 2025-05-05 |
| 630 | M.K (@Mahdijan4030) | 24 | 24 | 0 | 0 | 0 | 0 | 7 | 2021-12-04 | 2022-11-06 |
| 631 | Roeland P (@roelandp) | 24 | 24 | 0 | 0 | 0 | 0 | 13 | 2022-01-12 | 2025-03-16 |
| 632 | Shahan (@hhjhjkklk) | 24 | 24 | 0 | 0 | 0 | 0 | 8 | 2021-11-22 | 2025-02-20 |
| 633 | Tomas (@TomasCrypt0) | 24 | 24 | 0 | 0 | 0 | 0 | 11 | 2022-11-05 | 2023-11-28 |
| 634 | WilsonStad | 24 | 24 | 0 | 0 | 0 | 0 | 18 | 2021-11-14 | 2023-12-16 |
| 635 | Curro | 23 | 23 | 0 | 0 | 0 | 0 | 19 | 2022-11-05 | 2026-01-02 |
| 636 | engrave (@nicniezgrublem) | 23 | 23 | 0 | 0 | 0 | 0 | 10 | 2024-06-20 | 2025-07-28 |
| 637 | Hi Everyone (@AGoodProject) | 23 | 23 | 0 | 0 | 0 | 0 | 10 | 2022-11-04 | 2023-02-19 |
| 638 | Joe (@joeverlaque) | 23 | 23 | 0 | 0 | 0 | 0 | 3 | 2022-11-06 | 2022-11-14 |
| 639 | M (@soymateocastro) | 23 | 23 | 0 | 0 | 0 | 0 | 6 | 2021-12-25 | 2022-05-20 |
| 640 | Mauro (@Bobfox66) | 23 | 23 | 0 | 0 | 0 | 0 | 15 | 2024-12-23 | 2026-06-27 |
| 641 | PhantomKtty (@PhantomKtty) | 23 | 23 | 0 | 0 | 0 | 0 | 8 | 2023-12-12 | 2024-06-18 |
| 642 | Ramtin (@Ramtin2723) | 23 | 23 | 0 | 0 | 0 | 0 | 5 | 2021-12-08 | 2021-12-31 |
| 643 | RD | 23 | 23 | 0 | 0 | 0 | 0 | 15 | 2021-11-02 | 2025-05-05 |
| 644 | Sheldon ⛛ψ Cooper (@WazaaSheldon) | 23 | 23 | 0 | 0 | 0 | 0 | 2 | 2023-12-24 | 2025-05-11 |
| 645 | Simon (@Simon_h_Simon) | 23 | 23 | 0 | 0 | 0 | 0 | 7 | 2022-11-03 | 2023-03-04 |
| 646 | SolidPoinT | 23 | 23 | 0 | 0 | 0 | 0 | 11 | 2021-10-27 | 2026-02-27 |
| 647 | Tincho (@OxTincho) | 23 | 23 | 0 | 0 | 0 | 0 | 7 | 2022-10-23 | 2024-03-04 |
| 648 | Viro (@Anon897) | 23 | 23 | 0 | 0 | 0 | 0 | 5 | 2023-08-10 | 2024-02-18 |
| 649 | Void.Kom (@Titedatkom) | 23 | 23 | 0 | 0 | 0 | 0 | 5 | 2025-01-29 | 2025-03-06 |
| 650 | Zeus (@trojan222) | 23 | 23 | 0 | 0 | 0 | 0 | 5 | 2022-10-23 | 2024-02-05 |
| 651 | Ξ (@dotre11) | 23 | 23 | 0 | 0 | 0 | 0 | 2 | 2023-12-26 | 2023-12-27 |
| 652 | ⚡METAL⚡ (@METALFORBREAKFAST) | 23 | 23 | 0 | 0 | 0 | 0 | 9 | 2023-04-25 | 2024-03-20 |
| 653 | 南烟 (@Mkz20020217) | 23 | 23 | 0 | 0 | 0 | 0 | 4 | 2023-12-09 | 2024-01-08 |
| 654 | Adam (@Access2adam) | 22 | 22 | 0 | 0 | 0 | 0 | 10 | 2022-09-22 | 2023-05-19 |
| 656 | Bodger 1397 (@Bodger1397) | 22 | 22 | 0 | 0 | 0 | 0 | 14 | 2024-07-15 | 2026-04-26 |
| 657 | Dutch Viking (@flying_dutchmann) | 22 | 22 | 0 | 0 | 0 | 0 | 2 | 2021-11-11 | 2021-11-29 |
| 658 | Flexontop (@flexontop) | 22 | 22 | 0 | 0 | 0 | 0 | 3 | 2023-12-03 | 2024-04-09 |
| 659 | KoLong (@KoL0ng) | 22 | 22 | 0 | 0 | 0 | 0 | 14 | 2021-04-27 | 2023-04-27 |
| 660 | Luck (@panda235012) | 22 | 22 | 0 | 0 | 0 | 0 | 4 | 2023-11-24 | 2023-11-30 |
| 661 | M E (@Mahbodevil) | 22 | 22 | 0 | 0 | 0 | 0 | 9 | 2021-11-14 | 2023-11-23 |
| 662 | Magunc14 (@magunc14) | 22 | 22 | 0 | 0 | 0 | 0 | 5 | 2021-01-14 | 2021-03-09 |
| 664 | Mini [Won't ask for funds] (@chadac) | 22 | 22 | 0 | 0 | 0 | 0 | 5 | 2021-10-27 | 2022-11-23 |
| 665 | P | 22 | 22 | 0 | 0 | 0 | 0 | 16 | 2022-09-08 | 2025-03-07 |
| 666 | Pablo (@Lukham) | 22 | 22 | 0 | 0 | 0 | 0 | 7 | 2021-11-14 | 2023-10-18 |
| 668 | Rock _ never fade ceg (@rockcoin666) | 22 | 22 | 0 | 0 | 0 | 0 | 6 | 2024-09-30 | 2024-10-26 |
| 669 | taka taka🐾 (@takahashi0121) | 22 | 22 | 0 | 0 | 0 | 0 | 17 | 2024-11-03 | 2024-11-27 |
| 670 | Tiz Steve (@tizsteve) | 22 | 22 | 0 | 0 | 0 | 0 | 7 | 2023-05-17 | 2023-12-09 |
| 672 | Will (@firewill0x) | 22 | 22 | 0 | 0 | 0 | 0 | 6 | 2021-11-12 | 2023-06-15 |
| 673 | Alberto Hernandez (@Albertohm1) | 21 | 21 | 0 | 0 | 0 | 0 | 6 | 2021-11-14 | 2022-11-17 |
| 674 | ali (@thestraight) | 21 | 21 | 0 | 0 | 0 | 0 | 2 | 2021-06-17 | 2021-10-26 |
| 675 | Amin (@Aminbemani) | 21 | 21 | 0 | 0 | 0 | 0 | 8 | 2022-11-01 | 2025-11-13 |
| 676 | amir roosta (@Mojtabaacaterpillar) | 21 | 21 | 0 | 0 | 0 | 0 | 4 | 2021-11-23 | 2021-11-28 |
| 677 | Anon_exe (@Anon_exe) | 21 | 21 | 0 | 0 | 0 | 0 | 3 | 2023-08-05 | 2023-10-06 |
| 678 | Aʟı (@ikco_designer) | 21 | 21 | 0 | 0 | 0 | 0 | 5 | 2023-04-10 | 2023-05-09 |
| 679 | Cian (@mademindsetmafia) | 21 | 21 | 0 | 0 | 0 | 0 | 3 | 2021-02-23 | 2021-03-08 |
| 680 | GG (@noherm1) | 21 | 21 | 0 | 0 | 0 | 0 | 4 | 2023-10-13 | 2024-02-14 |
| 681 | Hees ℗ (@Amd1925) | 21 | 21 | 0 | 0 | 0 | 0 | 6 | 2024-01-21 | 2024-03-28 |
| 682 | Jhonny (@Jhonny1828) | 21 | 21 | 0 | 0 | 0 | 0 | 11 | 2024-07-29 | 2026-02-05 |
| 683 | MiguelM (@roncito85) | 21 | 21 | 0 | 0 | 0 | 0 | 7 | 2022-12-23 | 2023-01-21 |
| 684 | veccar 9008 (@veccar9008) | 21 | 21 | 0 | 0 | 0 | 0 | 13 | 2021-02-03 | 2021-12-13 |
| 686 | ‘ (@InjHannibal) | 21 | 21 | 0 | 0 | 0 | 0 | 8 | 2023-04-18 | 2024-07-28 |
| 688 | Ace (@acetz) | 20 | 20 | 0 | 0 | 0 | 0 | 7 | 2024-02-19 | 2024-04-16 |
| 689 | Ali Heydari (@ali_h100) | 20 | 20 | 0 | 0 | 0 | 0 | 5 | 2021-08-28 | 2025-05-08 |
| 690 | Atieh Adib (@Atiehadib) | 20 | 20 | 0 | 0 | 0 | 0 | 11 | 2023-03-17 | 2026-05-29 |
| 691 | Az (@Azaz_12) | 20 | 20 | 0 | 0 | 0 | 0 | 8 | 2021-11-11 | 2025-01-20 |
| 692 | Count (@Countalicious) | 20 | 20 | 0 | 0 | 0 | 0 | 7 | 2021-12-17 | 2026-04-21 |
| 693 | EUNICE Eunice (@Brookbyrin) | 20 | 20 | 0 | 0 | 0 | 0 | 3 | 2023-04-03 | 2024-02-25 |
| 694 | Future CM (@FutureCM) | 20 | 20 | 0 | 0 | 0 | 0 | 2 | 2023-05-09 | 2023-05-23 |
| 695 | Gado | 20 | 20 | 0 | 0 | 0 | 0 | 2 | 2023-11-22 | 2023-11-23 |
| 696 | Hossein. D (@Hossein7657) | 20 | 20 | 0 | 0 | 0 | 0 | 5 | 2023-01-01 | 2023-02-03 |
| 697 | IOANNIS KARASLIDIS (@K_IOANNIS) | 20 | 20 | 0 | 0 | 0 | 0 | 5 | 2024-03-13 | 2024-03-22 |
| 699 | Matt Drille (@mattdrille) | 20 | 20 | 0 | 0 | 0 | 0 | 2 | 2021-10-08 | 2021-10-14 |
| 701 | Paul James (@PaulJames2020) | 20 | 20 | 0 | 0 | 0 | 0 | 4 | 2023-12-01 | 2023-12-13 |
| 702 | Roy &#124; Crypto Totaal (@CryptoTotaalRoy) | 20 | 20 | 0 | 0 | 0 | 0 | 9 | 2024-11-08 | 2024-11-26 |
| 703 | Xlufy . (@xlufy2003) | 20 | 20 | 0 | 0 | 0 | 0 | 3 | 2024-01-11 | 2024-03-29 |
| 704 | یونس جرگه زاده (@Uasna4554) | 20 | 20 | 0 | 0 | 0 | 0 | 15 | 2023-11-21 | 2025-07-06 |
| 705 | (っ◔◡◔)っ ♥ XXL ♥ (@itssexyy) | 19 | 19 | 0 | 0 | 0 | 0 | 3 | 2022-11-01 | 2022-12-02 |
| 706 | . . | 19 | 19 | 0 | 0 | 0 | 0 | 3 | 2022-11-02 | 2023-10-03 |
| 707 | 3X0PL4N3T3XPL0R3R (@xtrachizzy) | 19 | 19 | 0 | 0 | 0 | 0 | 4 | 2023-03-27 | 2023-04-18 |
| 708 | Bernard (@BernardBernard20) | 19 | 19 | 0 | 0 | 0 | 0 | 3 | 2024-03-02 | 2024-03-06 |
| 709 | Chi Tao (@ctmakes) | 19 | 19 | 0 | 0 | 0 | 0 | 2 | 2025-03-06 | 2025-03-09 |
| 710 | Dani (@D_S_R1) | 19 | 19 | 0 | 0 | 0 | 0 | 5 | 2022-10-27 | 2022-11-09 |
| 712 | El Swiss 🇨🇭🇱🇮 (@EL_Glaskugel) | 19 | 19 | 0 | 0 | 0 | 0 | 17 | 2023-05-03 | 2025-09-14 |
| 713 | GerCryptonic (@GerCryptonic) | 19 | 19 | 0 | 0 | 0 | 0 | 5 | 2022-08-24 | 2023-01-28 |
| 716 | Hypr | 19 | 19 | 0 | 0 | 0 | 0 | 7 | 2025-03-15 | 2025-05-05 |
| 717 | James 🐾 Baguley | 19 | 19 | 0 | 0 | 0 | 0 | 6 | 2022-11-04 | 2022-11-18 |
| 718 | Johny Boy (@Johnyboy786) | 19 | 19 | 0 | 0 | 0 | 0 | 2 | 2024-07-29 | 2024-08-15 |
| 719 | Josem (@jjosem224) | 19 | 19 | 0 | 0 | 0 | 0 | 8 | 2024-09-16 | 2025-02-14 |
| 722 | MA (@MYZ1360) | 19 | 19 | 0 | 0 | 0 | 0 | 3 | 2021-11-14 | 2021-11-20 |
| 724 | moh (@mohammed21081991) | 19 | 19 | 0 | 0 | 0 | 0 | 3 | 2024-01-18 | 2024-03-27 |
| 726 | Pascal.®️ (@Pascalll) | 19 | 19 | 0 | 0 | 0 | 0 | 7 | 2023-06-05 | 2023-06-19 |
| 727 | Ramin (@Coconana66) | 19 | 19 | 0 | 0 | 0 | 0 | 4 | 2022-10-25 | 2022-11-07 |
| 728 | Robert (@Kinggamero) | 19 | 19 | 0 | 0 | 0 | 0 | 17 | 2022-11-09 | 2026-07-02 |
| 729 | SinalauBakas (@sbakas) | 19 | 19 | 0 | 0 | 0 | 0 | 3 | 2020-11-17 | 2020-11-19 |
| 730 | Sordisol (@Sordisol) | 19 | 19 | 0 | 0 | 0 | 0 | 8 | 2024-02-22 | 2024-04-14 |
| 731 | Soyunasantacruz (@soyunasantacruz) | 19 | 19 | 0 | 0 | 0 | 0 | 3 | 2020-12-03 | 2021-01-15 |
| 732 | Wilkynson (@Wilkynson) | 19 | 19 | 0 | 0 | 0 | 0 | 2 | 2021-03-24 | 2021-03-28 |
| 733 | xxx (@MadsOnTelegram) | 19 | 19 | 0 | 0 | 0 | 0 | 5 | 2023-11-21 | 2024-01-04 |
| 734 | فقط خدا (@mujthecoder) | 19 | 19 | 0 | 0 | 0 | 0 | 4 | 2022-12-04 | 2022-12-16 |
| 736 | A (@Za150160) | 18 | 18 | 0 | 0 | 0 | 0 | 8 | 2021-11-10 | 2022-11-05 |
| 737 | Ato | 18 | 18 | 0 | 0 | 0 | 0 | 2 | 2024-06-07 | 2024-06-25 |
| 739 | Barroso (@abarroso7) | 18 | 18 | 0 | 0 | 0 | 0 | 12 | 2021-12-19 | 2025-01-31 |
| 740 | Bei (@bei64) | 18 | 18 | 0 | 0 | 0 | 0 | 3 | 2023-08-02 | 2023-08-04 |
| 741 | Berna | 18 | 18 | 0 | 0 | 0 | 0 | 8 | 2021-02-25 | 2024-05-09 |
| 742 | crownade.eth (@emm_jayy) | 18 | 18 | 0 | 0 | 0 | 0 | 3 | 2025-02-09 | 2025-02-11 |
| 745 | Green 🦾 (@Aircatchdroper) | 18 | 18 | 0 | 0 | 0 | 0 | 3 | 2022-11-04 | 2022-11-06 |
| 746 | Hgtp://Bear Jew² (Will never DM you first) (@BearJew11) | 18 | 18 | 0 | 0 | 0 | 0 | 4 | 2024-02-25 | 2026-04-15 |
| 747 | Jack (@TRR369147) | 18 | 18 | 0 | 0 | 0 | 0 | 3 | 2023-11-30 | 2023-12-02 |
| 748 | Jakeronthia (@Jakeronthia) | 18 | 18 | 0 | 0 | 0 | 0 | 7 | 2023-05-29 | 2023-06-13 |
| 749 | James Correy (@jamescorrey) | 18 | 18 | 0 | 0 | 0 | 0 | 10 | 2021-02-20 | 2021-06-07 |
| 752 | L-Doi (@Leonte1111) | 18 | 18 | 0 | 0 | 0 | 0 | 4 | 2023-11-10 | 2023-11-14 |
| 753 | Matteo Rossi (@Matteo_Rossi) | 18 | 18 | 0 | 0 | 0 | 0 | 3 | 2023-04-28 | 2023-05-17 |
| 755 | R.J (@rikas8) | 18 | 18 | 0 | 0 | 0 | 0 | 3 | 2023-04-09 | 2023-06-29 |
| 756 | RAICO (@raicoglez) | 18 | 18 | 0 | 0 | 0 | 0 | 4 | 2022-11-05 | 2023-07-29 |
| 757 | Rami (@OrginalUsername) | 18 | 18 | 0 | 0 | 0 | 0 | 11 | 2021-04-21 | 2022-07-01 |
| 758 | Richard Bot (@instabotje) | 18 | 18 | 0 | 0 | 0 | 0 | 11 | 2023-06-09 | 2024-04-07 |
| 759 | Rowan (@zydryck21) | 18 | 18 | 0 | 0 | 0 | 0 | 2 | 2021-11-14 | 2021-11-21 |
| 760 | shaw — (@shaw859504) | 18 | 18 | 0 | 0 | 0 | 0 | 3 | 2023-05-16 | 2023-11-18 |
| 761 | Sssss (@Devlp9) | 18 | 18 | 0 | 0 | 0 | 0 | 7 | 2025-08-03 | 2025-11-28 |
| 762 | Tadhg Cartwright (@timmyjoans) | 18 | 18 | 0 | 0 | 0 | 0 | 3 | 2024-01-13 | 2024-02-20 |
| 763 | _ (@L009121) | 17 | 17 | 0 | 0 | 0 | 0 | 4 | 2023-08-10 | 2024-07-18 |
| 765 | Abdullah (@Abdullah890447) | 17 | 17 | 0 | 0 | 0 | 0 | 3 | 2023-04-09 | 2023-04-11 |
| 766 | CryptoReviewing (@CryptoReviewing_TG) | 17 | 17 | 0 | 0 | 0 | 0 | 6 | 2023-04-17 | 2024-09-12 |
| 767 | Engineer (@Fintech387) | 17 | 17 | 0 | 0 | 0 | 0 | 5 | 2021-11-02 | 2024-11-29 |
| 768 | Gkcfub (@Hsgsga1) | 17 | 17 | 0 | 0 | 0 | 0 | 9 | 2020-11-18 | 2021-11-14 |
| 769 | Gordon Tracy (@GordonTracy) | 17 | 17 | 0 | 0 | 0 | 0 | 5 | 2024-06-07 | 2024-07-01 |
| 770 | Gsr (@gs_1984) | 17 | 17 | 0 | 0 | 0 | 0 | 5 | 2021-11-19 | 2022-11-09 |
| 771 | Jack Sparrow (@JojoSparrow) | 17 | 17 | 0 | 0 | 0 | 0 | 8 | 2024-05-01 | 2024-08-05 |
| 772 | Koen (@koenrr) | 17 | 17 | 0 | 0 | 0 | 0 | 7 | 2024-01-11 | 2024-12-09 |
| 773 | maddealer (@maddealer) | 17 | 17 | 0 | 0 | 0 | 0 | 2 | 2023-11-15 | 2024-01-27 |
| 774 | Nitin Nahar (@nitinnahar) | 17 | 17 | 0 | 0 | 0 | 0 | 11 | 2022-10-23 | 2023-11-25 |
| 775 | Normik (@NormikPL) | 17 | 17 | 0 | 0 | 0 | 0 | 6 | 2021-11-23 | 2022-01-17 |
| 777 | Radoslav Štefančík (@stefancik) | 17 | 17 | 0 | 0 | 0 | 0 | 5 | 2023-04-30 | 2023-05-06 |
| 778 | Scott (@mscott7130) | 17 | 17 | 0 | 0 | 0 | 0 | 2 | 2024-05-07 | 2024-05-08 |
| 779 | the Champ holder (@batchdenbitcoinlaus) | 17 | 17 | 0 | 0 | 0 | 0 | 2 | 2021-08-18 | 2021-08-27 |
| 780 | Trader Toyo! (@tradertoyo) | 17 | 17 | 0 | 0 | 0 | 0 | 2 | 2025-02-03 | 2025-02-04 |
| 781 | Woot woot (@Crypto_woot) | 17 | 17 | 0 | 0 | 0 | 0 | 2 | 2024-08-23 | 2024-08-29 |
| 782 | Ximuel (@Ximuel) | 17 | 17 | 0 | 0 | 0 | 0 | 5 | 2023-02-14 | 2024-10-01 |
| 783 | 阿 兰 (@johnsonney0101) | 17 | 17 | 0 | 0 | 0 | 0 | 5 | 2023-11-21 | 2023-11-25 |
| 784 | 阿北 (@alephiumchina) | 17 | 17 | 0 | 0 | 0 | 0 | 7 | 2023-04-16 | 2023-04-25 |
| 785 | 🧿DANIYEL🇮🇷FARADEY🇱🇷‌(دانیل فارادی)🇷🇺 (Даниел Фатадей)🧿 (@DANIYELFARADEY) | 17 | 17 | 0 | 0 | 0 | 0 | 4 | 2021-11-04 | 2023-01-12 |
| 786 | Aiden _BitMart (@Aiden_Listing) | 16 | 16 | 0 | 0 | 0 | 0 | 14 | 2024-11-19 | 2025-01-08 |
| 788 | Artoxar (@Artoxar) | 16 | 16 | 0 | 0 | 0 | 0 | 3 | 2022-12-04 | 2022-12-11 |
| 789 | Augustine Billtino (@Billtino) | 16 | 16 | 0 | 0 | 0 | 0 | 10 | 2021-11-21 | 2022-12-15 |
| 790 | Bahman Ya.kh.Ghi (@B_k_M_13) | 16 | 16 | 0 | 0 | 0 | 0 | 10 | 2022-05-01 | 2025-07-06 |
| 794 | Danil (@danil_v) | 16 | 16 | 0 | 0 | 0 | 0 | 7 | 2021-01-20 | 2023-07-10 |
| 795 | Engin (@doctorengin) | 16 | 16 | 0 | 0 | 0 | 0 | 2 | 2023-04-09 | 2023-12-23 |
| 796 | F (@faisaal10) | 16 | 16 | 0 | 0 | 0 | 0 | 2 | 2021-03-09 | 2021-03-12 |
| 797 | GB | 16 | 16 | 0 | 0 | 0 | 0 | 3 | 2021-12-19 | 2023-01-03 |
| 798 | Jeery (@JeeryStef) | 16 | 16 | 0 | 0 | 0 | 0 | 6 | 2024-09-24 | 2026-03-29 |
| 799 | Kien Chi Phung (@Pck123) | 16 | 16 | 0 | 0 | 0 | 0 | 4 | 2021-03-08 | 2021-06-03 |
| 801 | Lenin (@DmitriyevichLenin) | 16 | 16 | 0 | 0 | 0 | 0 | 2 | 2024-01-21 | 2024-01-22 |
| 802 | Leo (@prismatichands) | 16 | 16 | 0 | 0 | 0 | 0 | 2 | 2023-05-08 | 2023-05-20 |
| 803 | Makis▪️ Rafto (@makishart) | 16 | 16 | 0 | 0 | 0 | 0 | 4 | 2021-12-29 | 2023-06-12 |
| 804 | mars prince (@marsprince) | 16 | 16 | 0 | 0 | 0 | 0 | 4 | 2023-01-15 | 2023-02-24 |
| 806 | MEHDI (@Xnouro) | 16 | 16 | 0 | 0 | 0 | 0 | 5 | 2022-02-07 | 2022-04-05 |
| 808 | r (@n0ottt) | 16 | 16 | 0 | 0 | 0 | 0 | 4 | 2023-12-14 | 2023-12-25 |
| 809 | Rawrd (@Raawrdx) | 16 | 16 | 0 | 0 | 0 | 0 | 3 | 2025-01-31 | 2025-02-02 |
| 810 | Sahierr | 16 | 16 | 0 | 0 | 0 | 0 | 2 | 2024-03-06 | 2024-03-11 |
| 812 | Valentin (@valzv) | 16 | 16 | 0 | 0 | 0 | 0 | 3 | 2021-10-28 | 2022-07-31 |
| 813 | ıllıllı Ali poya ıllıllı (@poya786) | 16 | 16 | 0 | 0 | 0 | 0 | 3 | 2023-11-27 | 2025-07-16 |
| 814 | Aa Bb | 15 | 15 | 0 | 0 | 0 | 0 | 6 | 2024-12-03 | 2025-05-30 |
| 815 | Adem Father (@AdemFather) | 15 | 15 | 0 | 0 | 0 | 0 | 6 | 2023-11-23 | 2023-12-08 |
| 816 | Ali GÜRSOY (@Ali_GURSOY) | 15 | 15 | 0 | 0 | 0 | 0 | 4 | 2023-11-22 | 2026-03-11 |
| 819 | Arthera (@Babau0472) | 15 | 15 | 0 | 0 | 0 | 0 | 2 | 2023-11-21 | 2023-11-22 |
| 820 | Auren Calrithen GodFrey'S (@Auren60S) | 15 | 15 | 0 | 0 | 0 | 0 | 2 | 2026-04-19 | 2026-04-21 |
| 821 | Chelsea Act (@Chelseactt) | 15 | 15 | 0 | 0 | 0 | 0 | 4 | 2025-02-15 | 2025-02-18 |
| 822 | Cripto Lord (@Makemoneynotfollower) | 15 | 15 | 0 | 0 | 0 | 0 | 3 | 2021-11-17 | 2023-12-13 |
| 825 | D K (@Dengkuan) | 15 | 15 | 0 | 0 | 0 | 0 | 10 | 2024-11-22 | 2026-03-09 |
| 826 | Giuliano Rosa (@Diogiulo75) | 15 | 15 | 0 | 0 | 0 | 0 | 5 | 2023-03-03 | 2024-05-03 |
| 827 | Hitokiri.Battosai (@ReignOfBrothers) | 15 | 15 | 0 | 0 | 0 | 0 | 2 | 2023-03-11 | 2023-06-05 |
| 828 | Icarus (@AlphaPsA) | 15 | 15 | 0 | 0 | 0 | 0 | 6 | 2024-05-13 | 2024-09-07 |
| 829 | Ima (@Ne01982) | 15 | 15 | 0 | 0 | 0 | 0 | 6 | 2021-11-17 | 2023-12-30 |
| 830 | MeDuckDuck (@MeDuckDuck) | 15 | 15 | 0 | 0 | 0 | 0 | 5 | 2025-11-19 | 2026-07-10 |
| 831 | Mohammad (@M_M_1968) | 15 | 15 | 0 | 0 | 0 | 0 | 4 | 2023-01-20 | 2024-12-14 |
| 832 | Mohammad (@M_Ehyaei) | 15 | 15 | 0 | 0 | 0 | 0 | 2 | 2021-11-20 | 2022-12-15 |
| 833 | ogu 🐺 (@ogu_mogu) | 15 | 15 | 0 | 0 | 0 | 0 | 5 | 2024-03-06 | 2024-04-15 |
| 834 | Phil | 15 | 15 | 0 | 0 | 0 | 0 | 10 | 2022-11-09 | 2023-11-28 |
| 835 | SI lord (@Rot007) | 15 | 15 | 0 | 0 | 0 | 0 | 13 | 2024-05-24 | 2025-09-12 |
| 837 | Sodium Web3 (@Web3hub22) | 15 | 15 | 0 | 0 | 0 | 0 | 2 | 2025-02-27 | 2025-02-28 |
| 838 | srbitmap.sats (@Srbitmap) | 15 | 15 | 0 | 0 | 0 | 0 | 2 | 2021-11-07 | 2021-11-08 |
| 839 | T Bone (@tbone647) | 15 | 15 | 0 | 0 | 0 | 0 | 4 | 2022-02-05 | 2023-01-13 |
| 840 | Thai Number (@logan_1984) | 15 | 15 | 0 | 0 | 0 | 0 | 2 | 2024-07-28 | 2024-08-23 |
| 841 | Tiburon | 15 | 15 | 0 | 0 | 0 | 0 | 10 | 2021-12-23 | 2024-12-06 |
| 843 | ר (@MrTempor) | 15 | 15 | 0 | 0 | 0 | 0 | 2 | 2023-05-02 | 2023-05-07 |
| 844 | 青 野 | 15 | 15 | 0 | 0 | 0 | 0 | 5 | 2023-11-22 | 2024-01-05 |
| 845 | 🧕 (@Asriifatima) | 15 | 15 | 0 | 0 | 0 | 0 | 11 | 2025-07-08 | 2025-07-23 |
| 846 | 18143 Mateth | 14 | 14 | 0 | 0 | 0 | 0 | 5 | 2024-01-11 | 2024-05-05 |
| 847 | A J (@hello_world98AJ) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2022-11-11 | 2022-12-22 |
| 848 | aarenzana (@aarenzana) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2023-01-04 | 2023-01-05 |
| 849 | Ahmad🐦 SUI🐾 (@Roque280) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2022-12-14 | 2022-12-15 |
| 851 | Apple | 14 | 14 | 0 | 0 | 0 | 0 | 5 | 2023-11-11 | 2024-11-04 |
| 853 | BANTU PRO (@bantuproo) | 14 | 14 | 0 | 0 | 0 | 0 | 8 | 2024-12-08 | 2025-05-12 |
| 854 | blue ginger (@Rainbowginger) | 14 | 14 | 0 | 0 | 0 | 0 | 5 | 2021-11-16 | 2023-07-30 |
| 855 | Bstar (@mastercoin77) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2023-11-22 | 2023-11-23 |
| 857 | Farhan (@paan055) | 14 | 14 | 0 | 0 | 0 | 0 | 6 | 2023-04-17 | 2024-10-24 |
| 858 | ghasem khani (@gasemkhny) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2021-11-06 | 2021-11-07 |
| 859 | Huber | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2023-12-15 | 2025-01-06 |
| 860 | Isochronic Hog (@IsochronicHog) | 14 | 14 | 0 | 0 | 0 | 0 | 3 | 2023-04-01 | 2024-12-04 |
| 861 | Ivan HS (@Ivan_HS) | 14 | 14 | 0 | 0 | 0 | 0 | 3 | 2022-11-08 | 2022-12-15 |
| 863 | JareBear (@JareBere) | 14 | 14 | 0 | 0 | 0 | 0 | 3 | 2023-01-25 | 2023-08-10 |
| 864 | Jason Howard (@Jackixl) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2023-12-15 | 2023-12-26 |
| 865 | K (@K_scored) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2023-05-22 | 2023-05-25 |
| 866 | LSelmo (@loic_selmo) | 14 | 14 | 0 | 0 | 0 | 0 | 11 | 2021-04-06 | 2022-11-07 |
| 867 | mahmoud (@uranus21) | 14 | 14 | 0 | 0 | 0 | 0 | 3 | 2021-11-17 | 2021-11-20 |
| 868 | Masoud Shorabi (@H3llB00y) | 14 | 14 | 0 | 0 | 0 | 0 | 6 | 2023-02-08 | 2023-10-25 |
| 870 | Mick Mick (@MicksCrypto) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2023-03-29 | 2023-04-03 |
| 871 | Minmin 🐾 &#124; Drops💧 @HiRollCasino (@Balahtarus) | 14 | 14 | 0 | 0 | 0 | 0 | 4 | 2023-11-21 | 2023-11-26 |
| 872 | Okazaki (@cryptoffland) | 14 | 14 | 0 | 0 | 0 | 0 | 5 | 2021-01-25 | 2021-01-29 |
| 873 | peter (@k_3f45) | 14 | 14 | 0 | 0 | 0 | 0 | 3 | 2021-10-25 | 2023-11-28 |
| 875 | Rocky (@rockyjayn) | 14 | 14 | 0 | 0 | 0 | 0 | 6 | 2023-09-23 | 2023-11-11 |
| 876 | sajad (@S_barzin81) | 14 | 14 | 0 | 0 | 0 | 0 | 6 | 2021-03-22 | 2024-03-19 |
| 877 | Shivum (@Shivum_10) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2023-01-08 | 2023-01-13 |
| 878 | Spencer W (@spencerwal) | 14 | 14 | 0 | 0 | 0 | 0 | 10 | 2021-12-20 | 2023-04-28 |
| 879 | T (@Timobilr) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2021-10-22 | 2021-10-23 |
| 880 | Victor &#124;&#124; Ñurika (@VictorLivingstone) | 14 | 14 | 0 | 0 | 0 | 0 | 10 | 2022-11-05 | 2023-12-14 |
| 881 | zahed (@zahedt7) | 14 | 14 | 0 | 0 | 0 | 0 | 5 | 2021-05-03 | 2021-11-02 |
| 882 | ＰＡＲＡＢＯＬＩＣ (@ParabolicXBT_Telegram) | 14 | 14 | 0 | 0 | 0 | 0 | 5 | 2023-05-09 | 2023-06-22 |
| 883 | Ali Ibra (@ali_cr2025) | 13 | 13 | 0 | 0 | 0 | 0 | 6 | 2021-11-06 | 2022-11-07 |
| 886 | Babaei | 13 | 13 | 0 | 0 | 0 | 0 | 4 | 2023-01-14 | 2024-06-16 |
| 887 | Ben (@HisokaOogway) | 13 | 13 | 0 | 0 | 0 | 0 | 3 | 2022-08-26 | 2023-12-26 |
| 888 | bob (@falcon323) | 13 | 13 | 0 | 0 | 0 | 0 | 2 | 2023-01-24 | 2023-01-25 |
| 891 | CKC (@CryptoKCarats) | 13 | 13 | 0 | 0 | 0 | 0 | 5 | 2023-09-12 | 2023-10-20 |
| 892 | Cryptochef (@Cryptams) | 13 | 13 | 0 | 0 | 0 | 0 | 5 | 2023-06-22 | 2023-07-02 |
| 893 | Entorg (@entorg2) | 13 | 13 | 0 | 0 | 0 | 0 | 4 | 2021-02-16 | 2021-04-09 |
| 894 | F Ghhh | 13 | 13 | 0 | 0 | 0 | 0 | 6 | 2024-07-23 | 2024-10-24 |
| 895 | Fraidoon Ayobi (@Fraidoon654) | 13 | 13 | 0 | 0 | 0 | 0 | 8 | 2025-03-07 | 2026-02-24 |
| 896 | Hrvoje Kovacic (@hkovacic12) | 13 | 13 | 0 | 0 | 0 | 0 | 2 | 2023-11-10 | 2023-11-11 |
| 897 | Ignasi (@inspectorrugzcoin) | 13 | 13 | 0 | 0 | 0 | 0 | 2 | 2022-06-16 | 2022-06-17 |
| 898 | iMaN (@Mesteriman1) | 13 | 13 | 0 | 0 | 0 | 0 | 8 | 2021-06-12 | 2022-04-05 |
| 899 | J. (@bond621) | 13 | 13 | 0 | 0 | 0 | 0 | 3 | 2023-12-15 | 2023-12-29 |
| 901 | Josh Allen (@JTA37) | 13 | 13 | 0 | 0 | 0 | 0 | 10 | 2024-01-26 | 2026-04-27 |
| 902 | LG (@LG_Phys) | 13 | 13 | 0 | 0 | 0 | 0 | 2 | 2023-02-01 | 2023-02-02 |
| 903 | Liah (@sntliah) | 13 | 13 | 0 | 0 | 0 | 0 | 3 | 2023-09-17 | 2023-09-28 |
| 904 | loghman (@loghi69) | 13 | 13 | 0 | 0 | 0 | 0 | 7 | 2021-06-26 | 2022-11-08 |
| 905 | Lollipop 🍭 (@IdonOmo) | 13 | 13 | 0 | 0 | 0 | 0 | 2 | 2021-05-07 | 2021-09-05 |
| 908 | Mute (@Krhuize) | 13 | 13 | 0 | 0 | 0 | 0 | 3 | 2025-02-07 | 2025-02-09 |
| 909 | PEACE (@deda1002) | 13 | 13 | 0 | 0 | 0 | 0 | 6 | 2023-08-10 | 2024-12-29 |
| 910 | ProffETHerPrints (@RR12CT) | 13 | 13 | 0 | 0 | 0 | 0 | 3 | 2023-07-28 | 2023-09-11 |
| 911 | Rostam Zall (@Rostam_Zall) | 13 | 13 | 0 | 0 | 0 | 0 | 5 | 2023-04-06 | 2023-04-15 |
| 912 | Sajad (@sajad_nrz) | 13 | 13 | 0 | 0 | 0 | 0 | 9 | 2021-12-04 | 2022-12-16 |
| 916 | Vita Pilip (@Vita8888) | 13 | 13 | 0 | 0 | 0 | 0 | 10 | 2024-10-31 | 2025-01-10 |
| 918 | سایروس | 13 | 13 | 0 | 0 | 0 | 0 | 8 | 2025-03-31 | 2025-09-24 |
| 919 | 🔮Bob (@BobP70) | 13 | 13 | 0 | 0 | 0 | 0 | 5 | 2023-03-06 | 2023-05-17 |
| 920 | _vasilo (@j_vasilo) | 12 | 12 | 0 | 0 | 0 | 0 | 2 | 2023-01-20 | 2023-05-25 |
| 921 | A (@albertostegeman777) | 12 | 12 | 0 | 0 | 0 | 0 | 6 | 2024-02-16 | 2024-03-22 |
| 922 | Alireza.sh (@alireza_Shah11) | 12 | 12 | 0 | 0 | 0 | 0 | 3 | 2022-02-03 | 2022-02-07 |
| 923 | Bearo (@Bearoath) | 12 | 12 | 0 | 0 | 0 | 0 | 3 | 2021-11-30 | 2023-11-21 |
| 924 | Behrouz (@Bhrzshrvz) | 12 | 12 | 0 | 0 | 0 | 0 | 8 | 2021-12-28 | 2025-09-18 |
| 925 | bobτensor 💎 τ (@Bobbythecat32) | 12 | 12 | 0 | 0 | 0 | 0 | 2 | 2023-12-09 | 2023-12-13 |
| 926 | braskoverse (@braskoverse) | 12 | 12 | 0 | 0 | 0 | 0 | 3 | 2022-09-12 | 2022-10-14 |
| 927 | Bscloplop (@bscloplop) | 12 | 12 | 0 | 0 | 0 | 0 | 5 | 2023-11-23 | 2023-12-27 |
| 929 | Bubs (@UncleBubs) | 12 | 12 | 0 | 0 | 0 | 0 | 2 | 2023-05-26 | 2023-06-21 |
| 931 | CryptoGuy 🌱SEED 🐾 (@taifshah07) | 12 | 12 | 0 | 0 | 0 | 0 | 6 | 2024-06-07 | 2024-09-12 |
| 933 | Emre Can (@ecdarici) | 12 | 12 | 0 | 0 | 0 | 0 | 5 | 2023-04-02 | 2023-04-15 |
| 935 | GG (@neverberekt) | 12 | 12 | 0 | 0 | 0 | 0 | 8 | 2022-11-04 | 2023-12-06 |
| 936 | Gozz (@xGozzzz) | 12 | 12 | 0 | 0 | 0 | 0 | 4 | 2023-02-01 | 2023-10-20 |
| 938 | Helen (@Helengutier2) | 12 | 12 | 0 | 0 | 0 | 0 | 4 | 2020-11-24 | 2021-03-25 |
| 939 | I (@IndianaAltzz) | 12 | 12 | 0 | 0 | 0 | 0 | 8 | 2021-12-20 | 2023-09-12 |
| 940 | J | 12 | 12 | 0 | 0 | 0 | 0 | 3 | 2022-09-27 | 2023-08-09 |
| 941 | J Q (@crypshiz) | 12 | 12 | 0 | 0 | 0 | 0 | 4 | 2023-01-03 | 2023-01-11 |
| 942 | K | 12 | 12 | 0 | 0 | 0 | 0 | 9 | 2024-08-20 | 2024-11-18 |
| 944 | masn90 (@kryptomanguru) | 12 | 12 | 0 | 0 | 0 | 0 | 5 | 2023-01-04 | 2023-10-16 |
| 946 | Michael | 12 | 12 | 0 | 0 | 0 | 0 | 3 | 2024-06-30 | 2024-11-11 |
| 947 | Mo (@O0_my_Gad) | 12 | 12 | 0 | 0 | 0 | 0 | 3 | 2022-12-31 | 2023-04-07 |
| 948 | Mutombo Evening (@MutomboEvening) | 12 | 12 | 0 | 0 | 0 | 0 | 8 | 2023-12-03 | 2025-07-16 |
| 949 | M💌n (@cfupak1400) | 12 | 12 | 0 | 0 | 0 | 0 | 2 | 2022-03-01 | 2022-05-06 |
| 950 | Nick Xi (@nickcolumbus24) | 12 | 12 | 0 | 0 | 0 | 0 | 2 | 2023-12-13 | 2023-12-15 |
| 951 | perxmz (@perxmz) | 12 | 12 | 0 | 0 | 0 | 0 | 2 | 2021-11-23 | 2021-11-25 |
| 953 | Rob Rob兄弟 (Never DM you first/永远不会先DM你) (@RobXiongDi) | 12 | 12 | 0 | 0 | 0 | 0 | 3 | 2022-10-15 | 2023-09-27 |
| 954 | Salassameteo - IK1SLI 🇮🇹 (@Foxy61) | 12 | 12 | 0 | 0 | 0 | 0 | 4 | 2023-06-05 | 2023-06-11 |
| 955 | Sanxane (@sanxane01) | 12 | 12 | 0 | 0 | 0 | 0 | 6 | 2024-10-23 | 2024-10-29 |
| 956 | Silver (@Dansilver00) | 12 | 12 | 0 | 0 | 0 | 0 | 4 | 2022-11-15 | 2023-01-04 |
| 958 | T J (@paseks) | 12 | 12 | 0 | 0 | 0 | 0 | 8 | 2021-06-04 | 2023-02-19 |
| 959 | the_master (@saucyNQ) | 12 | 12 | 0 | 0 | 0 | 0 | 7 | 2023-08-04 | 2023-12-26 |
| 960 | Tom (@mikroweller) | 12 | 12 | 0 | 0 | 0 | 0 | 4 | 2024-04-18 | 2025-03-03 |
| 961 | Usıv (@yusufyayin) | 12 | 12 | 0 | 0 | 0 | 0 | 4 | 2023-12-03 | 2023-12-15 |
| 962 | Vvtt (@vvttvv12) | 12 | 12 | 0 | 0 | 0 | 0 | 4 | 2023-09-16 | 2024-11-29 |
| 963 | 4-elements (@Im4Elements) | 11 | 11 | 0 | 0 | 0 | 0 | 2 | 2025-09-06 | 2026-01-07 |
| 964 | A (@averagecitizenn) | 11 | 11 | 0 | 0 | 0 | 0 | 4 | 2023-11-05 | 2024-07-09 |
| 965 | AlCaMa | 11 | 11 | 0 | 0 | 0 | 0 | 5 | 2021-12-16 | 2023-11-25 |
| 967 | BitC_Alpha (@BitC_Alpha) | 11 | 11 | 0 | 0 | 0 | 0 | 6 | 2023-11-25 | 2023-12-11 |
| 969 | Chris Karamitso (@ChrisKaramitso) | 11 | 11 | 0 | 0 | 0 | 0 | 2 | 2024-03-18 | 2024-03-21 |
| 970 | Chug (@cahi_hung01) | 11 | 11 | 0 | 0 | 0 | 0 | 6 | 2025-07-07 | 2025-10-06 |
| 971 | Damian Krystian (@trekko_e_l) | 11 | 11 | 0 | 0 | 0 | 0 | 5 | 2025-10-01 | 2025-11-24 |
| 972 | DONIS SILVA (@Donaldtrix) | 11 | 11 | 0 | 0 | 0 | 0 | 2 | 2022-12-09 | 2022-12-15 |
| 973 | ea-only (@ekundayoOnly) | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2022-11-08 | 2022-11-10 |
| 974 | Eggy123 (@bacon_and_eggs) | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2023-02-26 | 2023-05-16 |
| 975 | Eli Mena | 11 | 11 | 0 | 0 | 0 | 0 | 4 | 2024-08-31 | 2024-10-14 |
| 976 | Farex (@Farex34500) | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2022-11-06 | 2023-04-25 |
| 977 | Gideon | 11 | 11 | 0 | 0 | 0 | 0 | 5 | 2024-10-11 | 2025-06-21 |
| 978 | Gojo (@GojotheFox) | 11 | 11 | 0 | 0 | 0 | 0 | 6 | 2023-09-03 | 2023-09-18 |
| 979 | Hans Kazan (@hanskazan500) | 11 | 11 | 0 | 0 | 0 | 0 | 2 | 2023-11-23 | 2023-11-24 |
| 983 | Jon Ander | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2022-10-06 | 2023-02-08 |
| 984 | Jorge (@ADNMaster) | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2022-01-04 | 2022-02-22 |
| 989 | Makhehlane | 11 | 11 | 0 | 0 | 0 | 0 | 6 | 2021-11-06 | 2022-10-31 |
| 990 | Makio (@makiob) | 11 | 11 | 0 | 0 | 0 | 0 | 2 | 2021-01-28 | 2021-01-29 |
| 991 | Mar (@Maradosu) | 11 | 11 | 0 | 0 | 0 | 0 | 2 | 2022-11-08 | 2022-11-09 |
| 992 | METOPI∆Π (@METOPIAN) | 11 | 11 | 0 | 0 | 0 | 0 | 2 | 2022-11-28 | 2022-12-22 |
| 995 | Mon Mon (@monmon1086) | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2022-12-16 | 2023-01-04 |
| 996 | mostafa shakour (@mosi3342) | 11 | 11 | 0 | 0 | 0 | 0 | 4 | 2022-08-12 | 2025-07-20 |
| 998 | Murat &#124; Kripto Tutkunları (@muratcanKT) | 11 | 11 | 0 | 0 | 0 | 0 | 4 | 2024-11-19 | 2024-11-28 |
| 999 | N F D (@nasa7y2) | 11 | 11 | 0 | 0 | 0 | 0 | 2 | 2021-11-21 | 2021-11-22 |
| 1000 | Naha Investor (@nahawin) | 11 | 11 | 0 | 0 | 0 | 0 | 8 | 2024-01-23 | 2024-06-16 |
| 1002 | Nexa Shark (@Nexashark) | 11 | 11 | 0 | 0 | 0 | 0 | 5 | 2022-10-11 | 2023-01-23 |
| 1003 | O (@golden_galaxy87) | 11 | 11 | 0 | 0 | 0 | 0 | 7 | 2021-11-27 | 2022-04-09 |
| 1004 | Oier i (@oieril) | 11 | 11 | 0 | 0 | 0 | 0 | 2 | 2022-11-04 | 2022-11-05 |
| 1005 | Omarcom (@Omarcom2024) | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2023-09-16 | 2025-11-27 |
| 1006 | R M (@themindisthemagic) | 11 | 11 | 0 | 0 | 0 | 0 | 5 | 2023-03-25 | 2023-11-16 |
| 1008 | Reins (@Reins8) | 11 | 11 | 0 | 0 | 0 | 0 | 4 | 2022-05-17 | 2025-04-07 |
| 1009 | RUGan_PaULL (@RUGanPaULL) | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2022-10-31 | 2023-01-20 |
| 1010 | Segtoshi (@SegToshi) | 11 | 11 | 0 | 0 | 0 | 0 | 6 | 2022-11-05 | 2023-01-03 |
| 1011 | SeKKeNNo (@SeKKeNNo) | 11 | 11 | 0 | 0 | 0 | 0 | 4 | 2023-04-03 | 2023-04-06 |
| 1012 | Shane | 11 | 11 | 0 | 0 | 0 | 0 | 8 | 2025-04-29 | 2025-10-14 |
| 1013 | Steffan Jones (@FishySteff) | 11 | 11 | 0 | 0 | 0 | 0 | 2 | 2023-12-23 | 2025-05-27 |
| 1015 | The investor | 11 | 11 | 0 | 0 | 0 | 0 | 4 | 2024-01-17 | 2024-03-20 |
| 1016 | Tidiane | 11 | 11 | 0 | 0 | 0 | 0 | 7 | 2023-11-17 | 2024-03-27 |
| 1017 | Valen𝞃ino (@Valentin_O_o_O) | 11 | 11 | 0 | 0 | 0 | 0 | 5 | 2023-11-17 | 2024-12-30 |
| 1018 | Vincent_s4p (@Vincent_s4p) | 11 | 11 | 0 | 0 | 0 | 0 | 7 | 2021-10-23 | 2022-01-03 |
| 1019 | Web3Nomad9 🍅 🐈‍⬛ 🐦 SUI▪️🐾 (@Web3Nomad9) | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2025-02-09 | 2025-02-11 |
| 1020 | WildMonk (@Mr_WildMonk) | 11 | 11 | 0 | 0 | 0 | 0 | 5 | 2022-11-24 | 2023-04-27 |
| 1021 | yang &#124; Scorpio vc (@youngerbest1) | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2021-11-09 | 2021-11-11 |
| 1022 | yassine (@yassinao) | 11 | 11 | 0 | 0 | 0 | 0 | 7 | 2021-03-06 | 2021-04-07 |
| 1023 | £/-\R&#124;-&#124;/-\&#124;) (@Farhad_aaas) | 11 | 11 | 0 | 0 | 0 | 0 | 6 | 2025-01-25 | 2025-10-23 |
| 1025 | . . (@chtotoscetos) | 10 | 10 | 0 | 0 | 0 | 0 | 6 | 2021-01-20 | 2021-12-12 |
| 1026 | Ali (@Cyebe2) | 10 | 10 | 0 | 0 | 0 | 0 | 3 | 2023-07-01 | 2023-07-04 |
| 1029 | Arabic_domains (@xuan_boo) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2025-02-10 | 2025-02-11 |
| 1030 | Azlan (@azlan_m) | 10 | 10 | 0 | 0 | 0 | 0 | 4 | 2021-02-07 | 2021-02-23 |
| 1031 | B M | 10 | 10 | 0 | 0 | 0 | 0 | 3 | 2024-04-02 | 2025-01-27 |
| 1032 | ben10 (@Ben10oosoa) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2025-02-15 | 2025-02-17 |
| 1033 | Capital A (@ch1mpuz) | 10 | 10 | 0 | 0 | 0 | 0 | 5 | 2022-01-11 | 2022-10-27 |
| 1034 | Chris (@Tl8rs) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2023-11-20 | 2023-11-22 |
| 1036 | Cryptopeet (@plscallmeadmin) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2023-06-18 | 2023-07-02 |
| 1037 | Dave the Spray (@DavetheSpray) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2023-11-21 | 2023-11-23 |
| 1038 | DIGI (@digi_markt) | 10 | 10 | 0 | 0 | 0 | 0 | 6 | 2023-04-21 | 2023-12-12 |
| 1040 | Eddy4kings (@Rehoboth29) | 10 | 10 | 0 | 0 | 0 | 0 | 5 | 2022-11-01 | 2023-11-22 |
| 1042 | Faisal (@FaisalIDC) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2021-12-22 | 2022-05-31 |
| 1043 | Fth A (@Fthhhb) | 10 | 10 | 0 | 0 | 0 | 0 | 5 | 2023-12-15 | 2023-12-20 |
| 1048 | Jordan M (@AUS_365) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2022-10-21 | 2022-10-30 |
| 1049 | joseph (@jospeh786) | 10 | 10 | 0 | 0 | 0 | 0 | 4 | 2025-04-18 | 2025-05-01 |
| 1050 | Kuba (@jakvb99) | 10 | 10 | 0 | 0 | 0 | 0 | 4 | 2025-01-22 | 2025-01-25 |
| 1051 | Materio (@materioska) | 10 | 10 | 0 | 0 | 0 | 0 | 7 | 2023-04-02 | 2023-08-04 |
| 1052 | MC | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2021-11-06 | 2021-11-08 |
| 1053 | Miss | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2024-01-22 | 2024-06-25 |
| 1054 | MM (@ETHZORA) | 10 | 10 | 0 | 0 | 0 | 0 | 6 | 2022-11-01 | 2022-11-23 |
| 1055 | mojtaba (@Moj2070) | 10 | 10 | 0 | 0 | 0 | 0 | 4 | 2021-11-16 | 2021-11-25 |
| 1056 | Niko (@Musicista01) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2022-11-04 | 2022-11-08 |
| 1057 | Pikka Boo | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2023-08-07 | 2023-08-10 |
| 1059 | Queen ㅤ (@queenderlercanim) | 10 | 10 | 0 | 0 | 0 | 0 | 4 | 2023-12-25 | 2024-01-05 |
| 1061 | Reza Islam 🌱SEED (@RezaIslam) | 10 | 10 | 0 | 0 | 0 | 0 | 4 | 2021-09-22 | 2021-10-07 |
| 1062 | RickSanchez (@RickSendez) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2023-03-11 | 2025-05-27 |
| 1063 | Rubén (@Pepinocosmico) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2022-11-07 | 2023-08-13 |
| 1064 | Shiva (@Eye0fshiva) | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2022-10-31 | 2024-11-10 |
| 1066 | Tautvydas Šlevas (@Invisusmundi) | 10 | 10 | 0 | 0 | 0 | 0 | 4 | 2023-01-22 | 2023-02-18 |
| 1067 | Valor | 10 | 10 | 0 | 0 | 0 | 0 | 2 | 2024-12-31 | 2025-03-14 |

## External inventory attributed to individuals

| Person | X* | Articles* | Videos* | Quantitative basis |
|---|---:|---:|---:|---|
| Andrew Levine | 11 | 11 | 0 | 11 cited X posts; 10-item personal Medium RSS plus Snapshot FAQs |
| Ron Hamenahem | 0 | 1 | 0 | Nasdaq guest article |
| Luke Willis | 0 | 1 | 0 | one archived Koin Press article; 57 audio podcast episodes excluded |
| Koinos The Goat | 0 | 0 | 1 | The Chronicles of Koinos, Part One |
| Kui He / motoengineer | 0 | 15 | 30 | 10 Medium + 5 Hive posts; 30-video YouTube sequence |
| Julián González / Jga | 0 | 36 | 0 | 36 Koinos-related posts in the @jga Hive archive |
| Frank / ElImbatido | 0 | 1 | 0 | Koiner launch article attributed to its creator |
| VonLooten | 0 | 5 | 0 | five posts in the @vonlooten Medium feed |
| fbslo | 1 | 1 | 0 | one cited X post and the atomic-swap FAQ |
| MiXiBo | 0 | 4 | 0 | four posts in the MiXiBo Medium feed |
| Jon Rice | 0 | 3 | 0 | Cointelegraph essay, Why Koinos, and Crypto Briefing article |
| Alberto / Transeunte | 0 | 34 | 2 | 17 Mundo Koinos + 17 Koinos World posts; two original videos |
| @interfecto / Atb 3tb | 3 | 0 | 0 | three cited @interf3cto X posts |
| Teing / @TEingvvv | 3 | 4 | 0 | four-post Medium archive and three cited X posts |

## Important named exclusions

In addition to bots and channel-type senders excluded automatically, the brand or collective accounts **Koin Crew**, **blocks.Barcelona**, **BTK Team**, **Koinos World**, **Admin / socialmediaadmins**, and **Liquidity / Liquidity_koinos** were removed from the human ranking. Product posts were not transferred to a founder unless the chronology documented specific personal authorship.

Pseudonyms are retained when Telegram presents them as human accounts (`bot=false`). This preserves historical activity without attempting to discover civil identities.

## Primary sources and corpus

- [English Koinos chronology](koinos-exists-a-chronicle-of-a-blockchain-that-cannot-be-recreated.md), used as the inventory of identities and external sources.
- [Main Koinos group](https://t.me/koinos_community) and the other thirteen public groups listed in the coverage table.
- [Official Koinos Discord server](https://discord.com/channels/613823471679438898), using authenticated global and individual-author searches performed on July 15, 2026.
- [`koinos-community-contributor-summaries.json`](koinos-community-contributor-summaries.json), providing auditable thematic signals and qualitative summaries for the 89 profiles above 500 contributions, with an [English reading edition](koinos-community-contributor-summaries-en.md).
- Hive: [`@jga`](https://hive.blog/@jga/posts) and [`@motoengineer`](https://hive.blog/@motoengineer/posts).
- Medium: [`@kuixihe`](https://medium.com/@kuixihe), [`@teingvvv`](https://medium.com/@teingvvv), [`@vonlooten`](https://medium.com/@vonlooten), [`@koiner`](https://medium.com/@koiner), [MiXiBo](https://mixibo.medium.com/), and [Andrew Levine](https://andrewlevine.medium.com/).
- WordPress: [Mundo Koinos](https://mundokoinos.wordpress.com/) and [Koinos World](https://koinosworld.wordpress.com/).
- YouTube: [motoengineer / Kui He](https://www.youtube.com/@kuixihe) and [Koinos The Goat](https://www.youtube.com/@koinosthegoat3756).

## Recommended interpretation

Use this table to identify continuity, moderators, educators, and participants who deserve later qualitative research. To assess “importance,” cross-reference it with delivered code, maintained products, standards, infrastructure, translations, coordination capacity, and the durability of the results. Volume alone does not distinguish a technical explanation from day-to-day support, casual conversation, a promotional campaign, or criticism.
