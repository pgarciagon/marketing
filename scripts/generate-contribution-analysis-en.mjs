import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rankingPath = path.join(root, "koinos-community-contribution-ranking.csv");
const thresholdPath = path.join(
  root,
  "koinos-community-contributors-10-two-days.csv",
);
const summariesPath = path.join(
  root,
  "koinos-community-contributor-summaries-en.md",
);
const summariesJsonPath = path.join(
  root,
  "koinos-community-contributor-summaries.json",
);

function parseCsv(value) {
  const records = [];
  let record = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];

    if (quoted) {
      if (character === '"' && value[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') {
      quoted = true;
    } else if (character === ",") {
      record.push(field);
      field = "";
    } else if (character === "\n") {
      record.push(field.replace(/\r$/, ""));
      records.push(record);
      record = [];
      field = "";
    } else {
      field += character;
    }
  }

  if (field || record.length) {
    record.push(field.replace(/\r$/, ""));
    records.push(record);
  }

  const [headers, ...rows] = records;
  return rows
    .filter((row) => row.some(Boolean))
    .map((row) =>
      Object.fromEntries(headers.map((header, index) => [header, row[index] || ""])),
    );
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(Number(value));
}

function displayPerson(row) {
  return row.telegram_username
    ? `${row.person} (${row.telegram_username})`
    : row.person;
}

function tableRow(values) {
  return `| ${values
    .map((value) => String(value).replaceAll("|", "&#124;"))
    .join(" | ")} |`;
}

function extractEnglishSummaries(markdown) {
  const headings = [...markdown.matchAll(/^### (\d+)\. (.+)$/gm)];
  const summaries = new Map();

  headings.forEach((heading, index) => {
    const start = heading.index + heading[0].length;
    const end = headings[index + 1]?.index ?? markdown.length;
    const body = markdown.slice(start, end).trim();
    const paragraphs = body.split(/\n\s*\n/).filter(Boolean);
    summaries.set(heading[2], paragraphs.at(-1));
  });

  return summaries;
}

const [rankingCsv, thresholdCsv, summariesMarkdown, summariesJson] =
  await Promise.all([
    readFile(rankingPath, "utf8"),
    readFile(thresholdPath, "utf8"),
    readFile(summariesPath, "utf8"),
    readFile(summariesJsonPath, "utf8"),
  ]);

const ranking = parseCsv(rankingCsv);
const thresholdRanking = parseCsv(thresholdCsv);
const summaryUsers = JSON.parse(summariesJson).users;
const englishSummaries = extractEnglishSummaries(summariesMarkdown);
const rankingByPerson = new Map(ranking.map((row) => [row.person, row]));

for (const user of summaryUsers) {
  if (!englishSummaries.has(user.person)) {
    throw new Error(`Missing English summary for ${user.person}`);
  }
  if (!rankingByPerson.has(user.person)) {
    throw new Error(`Missing ranking row for ${user.person}`);
  }
}

const lines = [
  "# Koinos: Quantitative Analysis of Community Contributions",
  "",
  "Cutoff date: **2026-07-15**. Every date in the tables is expressed as a UTC calendar day.",
  "",
  "This report answers two different questions:",
  "",
  "1. Who ranks highest when measuring only the verifiable volume of Telegram and Discord messages, X posts, articles, and videos?",
  "2. Which people reached at least **10 contributions** distributed across **two or more days**?",
  "",
  "The result is an **activity** index, not a measure of quality, technical impact, leadership, difficulty, or historical value. A short message and a research article each count as one unit in their respective columns. The total is therefore useful for discovering continuity and overlooked names, but it should not be turned into a hierarchy of importance by itself.",
  "",
  "## Overall result",
  "",
  "- **14 public groups** reviewed from beginning to end.",
  "- **481,192 human messages** counted after excluding bots, channel-authored posts, and Telegram service actions.",
  "- **107,405 human messages on the official Discord server** according to an authenticated author-type search; bots and webhooks are excluded.",
  "- **40,862 Discord messages attributed exactly to 13 public identities** through individual author searches. The remainder of the server has not yet been broken down by person in this table.",
  "- **5,373 human IDs** observed before removing deleted accounts without a usable identity.",
  "- **1,405 deleted accounts** excluded from the named lists.",
  "- **3,962 identifiable human or pseudonymous Telegram accounts**, plus one external editorial profile without a safe Telegram match.",
  "- **955 people** meet `combined total >= 10` with verifiable activity on at least two dates.",
  "- **89 profiles with more than 500 contributions** receive qualitative summaries: 23 brief summaries, 46 expanded summaries, and 20 entries in the priority list above 5,000.",
  "",
  "The complete ranking of all 3,963 profiles is available in [`koinos-community-contribution-ranking.csv`](koinos-community-contribution-ranking.csv). The threshold list is also available as [`koinos-community-contributors-10-two-days.csv`](koinos-community-contributors-10-two-days.csv).",
  "",
  "## Methodology and limitations",
  "",
  "### Telegram",
  "",
  "The complete accessible history of the following public megagroups was reviewed. Messages were unified by each user's stable ID; display-name changes within the same account do not create new people. A user active in several groups appears only once, with an accumulated total.",
  "",
  "| Public group | Existing messages | Human messages counted | First | Last |",
  "|---|---:|---:|---|---|",
  "| [Koinos](https://t.me/koinos_community) | 276054 | 259493 | 2020-11-16 | 2026-07-15 |",
  "| [Koinos Army](https://t.me/thekoinosarmy) | 154495 | 149712 | 2021-11-07 | 2026-07-13 |",
  "| [Koincast / Koinos Hispano](https://t.me/koinoshispano) | 33479 | 32327 | 2020-11-18 | 2026-01-11 |",
  "| [Koinos TCB](https://t.me/KoinosTCB) | 4678 | 4533 | 2025-05-04 | 2026-07-15 |",
  "| [Koincity](https://t.me/Koincity) | 8324 | 7942 | 2023-04-28 | 2026-02-22 |",
  "| [KoinDX](https://t.me/koindx) | 15592 | 14603 | 2022-11-09 | 2026-02-14 |",
  "| [Koinos Social Sharing](https://t.me/koinsocials) | 4524 | 4161 | 2023-01-26 | 2025-08-05 |",
  "| [Koin Crew](https://t.me/koincrewgroup) | 3997 | 3650 | 2023-10-22 | 2026-07-08 |",
  "| [Koinos Germany](https://t.me/koinosgermany) | 805 | 691 | 2021-12-02 | 2025-05-16 |",
  "| [Koinos Italia](https://t.me/KoinosItalia) | 3158 | 3014 | 2023-04-27 | 2025-11-19 |",
  "| [Koinos China](https://t.me/KoinsNetwork_china) | 303 | 178 | 2021-11-13 | 2026-02-23 |",
  "| [Koinos Degens](https://t.me/koinosdegens) | 558 | 440 | 2023-11-15 | 2025-05-14 |",
  "| [Koinos Holders Representative](https://t.me/koinosholders) | 592 | 446 | 2023-11-15 | 2023-11-16 |",
  "| [Koinos News Site](https://t.me/koinosnewssite) | 21 | 2 | 2024-09-16 | 2024-09-16 |",
  "",
  "Private groups and direct messages were not included. Phone numbers, private email addresses, message text, and other personal data are not published. Accounts marked by Telegram as bots, channel or organization senders, service actions, and deleted accounts without a stable identity are excluded.",
  "",
  "### Discord",
  "",
  "The official Koinos server was queried through an authenticated session using the **author type: user** filter. The global search returned **107,405 messages**, excluding bots and webhooks. Discord limits the interface to 400 pages per query and applies rate limits, so it was not possible to produce an exhaustive per-member breakdown of all 107,405 messages from the interface.",
  "",
  "The `Discord†` column contains **exact** counts only for identities whose public connection between Discord and the Telegram person was already documented. Each person was searched by author, the total was recorded, and the results were ordered oldest-first and newest-first to obtain the dates. In all other rows, `0` means **“Discord not individually inventoried,”** not “this person never wrote on Discord.” Similar names, abandoned accounts, and identities supported only by inference were not merged.",
  "",
  "| Person | Discord username | Messages† | First | Last |",
  "|---|---|---:|---|---|",
  "| Kui He / motoengineer | `motoengineer` | 17758 | 2020-05-16 | 2025-10-31 |",
  "| Andrew Levine | `andrarchy` | 4667 | 2019-11-18 | 2025-03-06 |",
  "| Steve Gerbino | `Steve` | 3520 | 2020-10-06 | 2025-03-18 |",
  "| Julián González / Jga | `jga` | 3421 | 2020-10-20 | 2026-03-21 |",
  "| Luke Willis | `luke.koin` | 2560 | 2021-11-10 | 2024-06-10 |",
  "| Roamin | `_roamin_` | 2340 | 2022-01-20 | 2024-07-22 |",
  "| VonLooten | `VonLooten` | 2327 | 2021-06-30 | 2024-03-23 |",
  "| Justin Welch / Justin W. | `justinw` | 1806 | 2020-10-14 | 2025-02-11 |",
  "| Michael Vandeberg | `Vandeberg` | 901 | 2020-10-07 | 2025-03-19 |",
  "| MiXiBo | `MiXiBo` | 630 | 2021-03-06 | 2025-04-13 |",
  "| Pablo García / pgarcgo | `pgarcgo` | 396 | 2020-04-16 | 2025-04-26 |",
  "| Ederaleng | `ederaleng` | 356 | 2020-04-16 | 2025-03-18 |",
  "| Ron Hamenahem | `brklyn8900` | 180 | 2019-12-22 | 2025-06-21 |",
  "",
  "### X, articles, and videos",
  "",
  "Columns marked with `*` are **verifiable minimums within the chronology's documentary corpus**, not complete downloads of each account's lifetime activity:",
  "",
  "- **X:** unique individual posts linked from the chronology. Profiles without post-level links receive `0`, meaning “no individual post inventoried,” not “never posted.”",
  "- **Articles:** verifiable personal archives on Hive, Medium, and WordPress, plus pieces with explicit individual authorship. Collective Koinos Network, Koinos Group, KoinDX, Koinos Army, or Koinos en Español articles are not automatically assigned to a person.",
  "- **Videos:** documented original works and channel series with verifiable counts. Audio-only podcasts are not included; for example, the 57 episodes of *The Koin Press* remain outside the requested total.",
  "- **Minimum total:** `Telegram + Discord† + X + articles + videos`. This is not a weighted score. Because Discord and external-source coverage is partial by author, it is a verifiable minimum rather than a biographical total.",
  "- **First / Last:** the first and last dates among the contributions actually counted for that row. They do not claim to identify the person's absolute first or last biographical action outside the corpus.",
  "- **Minimum days:** the minimum number of distinct dates demonstrated in the combined corpus. When Telegram history exists, its exact number of days is retained; for other platforms, different first and last dates prove at least two days even when every intermediate day cannot be reconstructed.",
  "",
  "### Qualitative summaries by volume",
  "",
  "For the 89 identities above 500 contributions, the public history of all fourteen Telegram groups was reviewed again and signals were calculated for period, groups, topics, and mentioned products. A limited sample of substantive messages was compared against attributions already investigated in the chronology. The summaries describe **what a person discussed and which documented role they performed**; they are not automated sentiment analysis and do not turn frequency, promotion, or mentions into code, leadership, or authorship.",
  "",
  "## Analysis 1: quantitative ranking",
  "",
  "The table shows the top 100 positions; the linked CSV contains **all** identifiable accounts, ordered by descending minimum total. Discord can move a person upward when an exact individual count exists, but a `0` is not evidence of inactivity: it marks coverage that is still pending.",
  "",
  "| # | Person | Telegram | Discord† | X* | Articles* | Videos* | Minimum total | Minimum days | First | Last |",
  "|---:|---|---:|---:|---:|---:|---:|---:|---:|---|---|",
];

ranking.slice(0, 100).forEach((row) => {
  lines.push(
    tableRow([
      row.rank,
      displayPerson(row),
      row.telegram_messages,
      row.discord_messages,
      row.x_posts,
      row.articles,
      row.videos,
      row.total,
      row.verified_activity_days_min,
      row.first,
      row.last,
    ]),
  );
});

lines.push(
  "",
  "## Priority list: more than 5,000 contributions",
  "",
  "These people are separated for consideration in later narrative or chronology work. Each entry explains the period, contribution type, and positions expressed in the corpus; volume does not replace impact evaluation or turn conversation into authorship.",
  "",
);

summaryUsers.slice(0, 20).forEach((user, index) => {
  const row = rankingByPerson.get(user.person);
  lines.push(
    `### ${index + 1}. ${user.person} — ${formatNumber(user.total)}`,
    "",
    `**Verified period:** ${row.first}–${row.last}. **Breakdown:** Telegram ${formatNumber(
      row.telegram_messages,
    )}; Discord† ${formatNumber(row.discord_messages)}; X* ${formatNumber(
      row.x_posts,
    )}; articles* ${formatNumber(row.articles)}; videos* ${formatNumber(row.videos)}.`,
    "",
    englishSummaries.get(user.person),
    "",
  );
});

lines.push(
  "## Expanded summaries: 1,001 to 5,000 contributions",
  "",
  "This tier receives one paragraph per person. Profiles with historically documented work retain their specific attributions; the rest are summarized through observed topics, products, and groups without assigning unproven authorship.",
  "",
);

summaryUsers.slice(20, 66).forEach((user, offset) => {
  lines.push(
    `### ${offset + 21}. ${user.person} — ${formatNumber(user.total)}`,
    "",
    englishSummaries.get(user.person),
    "",
  );
});

lines.push(
  "## Brief summaries: 501 to 1,000 contributions",
  "",
  "This tier receives two sentences based on period, dominant topics, and mentioned products.",
  "",
);

summaryUsers.slice(66).forEach((user, offset) => {
  lines.push(
    `### ${offset + 67}. ${user.person} — ${formatNumber(user.total)}`,
    "",
    englishSummaries.get(user.person),
    "",
  );
});

lines.push(
  "## Analysis 2: everyone with at least 10 contributions across two days",
  "",
  "This list applies the threshold to the **combined total of Telegram, Discord, X, articles, and videos**. To avoid temporal false positives, it also requires demonstrated activity on two different dates: Telegram days are exact, and when another platform extends the period, different first and last dates prove a minimum of two days. The corpus remains anchored in Telegram identities plus the documented external editorial profile; it is not yet an exhaustive census of Discord-only profiles.",
  "",
  "| Global # | Person | Minimum total | Telegram | Discord† | X* | Articles* | Videos* | Minimum days | First | Last |",
  "|---:|---|---:|---:|---:|---:|---:|---:|---:|---|---|",
);

thresholdRanking.forEach((row) => {
  lines.push(
    tableRow([
      row.rank,
      displayPerson(row),
      row.total,
      row.telegram_messages,
      row.discord_messages,
      row.x_posts,
      row.articles,
      row.videos,
      row.verified_activity_days_min,
      row.first,
      row.last,
    ]),
  );
});

lines.push(
  "",
  "## External inventory attributed to individuals",
  "",
  "| Person | X* | Articles* | Videos* | Quantitative basis |",
  "|---|---:|---:|---:|---|",
  "| Andrew Levine | 11 | 11 | 0 | 11 cited X posts; 10-item personal Medium RSS plus Snapshot FAQs |",
  "| Ron Hamenahem | 0 | 1 | 0 | Nasdaq guest article |",
  "| Luke Willis | 0 | 1 | 0 | one archived Koin Press article; 57 audio podcast episodes excluded |",
  "| Koinos The Goat | 0 | 0 | 1 | The Chronicles of Koinos, Part One |",
  "| Kui He / motoengineer | 0 | 15 | 30 | 10 Medium + 5 Hive posts; 30-video YouTube sequence |",
  "| Julián González / Jga | 0 | 36 | 0 | 36 Koinos-related posts in the @jga Hive archive |",
  "| Frank / ElImbatido | 0 | 1 | 0 | Koiner launch article attributed to its creator |",
  "| VonLooten | 0 | 5 | 0 | five posts in the @vonlooten Medium feed |",
  "| fbslo | 1 | 1 | 0 | one cited X post and the atomic-swap FAQ |",
  "| MiXiBo | 0 | 4 | 0 | four posts in the MiXiBo Medium feed |",
  "| Jon Rice | 0 | 3 | 0 | Cointelegraph essay, Why Koinos, and Crypto Briefing article |",
  "| Alberto / Transeunte | 0 | 34 | 2 | 17 Mundo Koinos + 17 Koinos World posts; two original videos |",
  "| @interfecto / Atb 3tb | 3 | 0 | 0 | three cited @interf3cto X posts |",
  "| Teing / @TEingvvv | 3 | 4 | 0 | four-post Medium archive and three cited X posts |",
  "",
  "## Important named exclusions",
  "",
  "In addition to bots and channel-type senders excluded automatically, the brand or collective accounts **Koin Crew**, **blocks.Barcelona**, **BTK Team**, **Koinos World**, **Admin / socialmediaadmins**, and **Liquidity / Liquidity_koinos** were removed from the human ranking. Product posts were not transferred to a founder unless the chronology documented specific personal authorship.",
  "",
  "Pseudonyms are retained when Telegram presents them as human accounts (`bot=false`). This preserves historical activity without attempting to discover civil identities.",
  "",
  "## Primary sources and corpus",
  "",
  "- [English Koinos chronology](koinos-exists-a-chronicle-of-a-blockchain-that-cannot-be-recreated.md), used as the inventory of identities and external sources.",
  "- [Main Koinos group](https://t.me/koinos_community) and the other thirteen public groups listed in the coverage table.",
  "- [Official Koinos Discord server](https://discord.com/channels/613823471679438898), using authenticated global and individual-author searches performed on July 15, 2026.",
  "- [`koinos-community-contributor-summaries.json`](koinos-community-contributor-summaries.json), providing auditable thematic signals and qualitative summaries for the 89 profiles above 500 contributions, with an [English reading edition](koinos-community-contributor-summaries-en.md).",
  "- Hive: [`@jga`](https://hive.blog/@jga/posts) and [`@motoengineer`](https://hive.blog/@motoengineer/posts).",
  "- Medium: [`@kuixihe`](https://medium.com/@kuixihe), [`@teingvvv`](https://medium.com/@teingvvv), [`@vonlooten`](https://medium.com/@vonlooten), [`@koiner`](https://medium.com/@koiner), [MiXiBo](https://mixibo.medium.com/), and [Andrew Levine](https://andrewlevine.medium.com/).",
  "- WordPress: [Mundo Koinos](https://mundokoinos.wordpress.com/) and [Koinos World](https://koinosworld.wordpress.com/).",
  "- YouTube: [motoengineer / Kui He](https://www.youtube.com/@kuixihe) and [Koinos The Goat](https://www.youtube.com/@koinosthegoat3756).",
  "",
  "## Recommended interpretation",
  "",
  "Use this table to identify continuity, moderators, educators, and participants who deserve later qualitative research. To assess “importance,” cross-reference it with delivered code, maintained products, standards, infrastructure, translations, coordination capacity, and the durability of the results. Volume alone does not distinguish a technical explanation from day-to-day support, casual conversation, a promotional campaign, or criticism.",
);

if (lines.at(-1) === "") lines.pop();
process.stdout.write(`${lines.join("\n")}\n`);
