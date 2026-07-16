import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(
  root,
  "koinos-community-contributor-summaries.json",
);
const source = JSON.parse(await readFile(sourcePath, "utf8"));

const customTranslations = {
  "Kui He / motoengineer":
    "Between May 2020 and July 2026, he amassed 62,037 verified contributions: 44,234 Telegram messages, 17,758 Discord messages, 15 articles, and 30 videos. His activity combines day-to-day support with delivered work: he launched Koinos Forum, revived AMAs, co-founded and operated BurnKoin and KAP, co-founded Koinos-Social, maintained nodes, and produced an educational library of thirty videos before joining the Koinos Community Foundation. He discussed mining, mana, governance, dApp security, liquidity, and funding; argued that changes that are difficult to reverse should be evaluated by their collective impact; and summarized less visible work with the phrase, “Builders are laying foundation, you might not always see it.” In 2024–2025, he also proposed explicit funding and interoperability scenarios and debated whether infrastructure should be maintained even during an ecosystem decline. His volume reinforces continuity already demonstrated through products, operations, and education, but it does not make him the author of code belonging to Luke Willis, Roamin, or other collaborators.",
  "G Millie / DeGemsCrew":
    "Between November 2021 and June 2026, he recorded 36,303 messages, primarily in Koinos Army. He was an organizer, administrator, AMA host, and initiator of the community NFT product, as well as a liaison with DeGems Lounge; he was not the technical founder, artist, or contract developer of Koinos Army Journey. His conversations focused on the market, KoinDX, NFTs, liquidity, and community coordination, and he argued that short-term priorities and funding should be put to a community vote. He also preserved a critical memory of the period after Koinos Group, describing the lack of development, awareness, exchanges, and money as “bleak.” The figure shows that he sustained the social space for years, while the contributions of Glen, Eman, Adem, and MiXiBo must remain separately attributed.",
  "Koinos The Goat":
    "Between March 2021 and June 2026, he accumulated 24,886 contributions, almost all of them messages, plus his independent video The Chronicles of Koinos. He created the Koinos The Goat persona and its fee-eating metaphor, organized and edited community copy, explained mana, inflation, wallets, claims, and dApps, appeared on The Koin Press, and later connected mana to permissions for AI agents. In his interventions, he insisted that “Mana is WORTHLESS. That is why it is so valuable,” proposed talking about game tokens instead of reducing everything to meme tokens, and became increasingly critical of the project's inability to reach the market. His role was economic storytelling, support, and community culture: he himself said, “I am not a dev,” and no code, company position, or protocol authorship can be attributed to his volume.",
  "Diamond Hands":
    "Between August 2023 and September 2025, he posted 21,385 messages across the main, Army, and TCB groups. His activity was primarily market discussion and tracking wallets, NFTs, and dApps, but in 2025 he also became an insistent voice in debates about community funds, developer retention, and the Vortex bridge. He argued that the two central problems were the lack of developers capable of maintaining the chain and the token economy, and called for a public decision on whether donated KOIN and USDT should go to the development fund and interoperability. The record demonstrates exceptionally high quantitative and deliberative participation, not authorship of Vortex, contracts, wallets, or Foundation decisions.",
  "Carlos Welele":
    "Between March 2021 and June 2026, he contributed 18,338 messages in English and Spanish, with a strong presence in the main group, Koinos Army, and Koinos Hispano. He acted as a bilingual explainer, practical moderator, and operator of Koinos Socials distribution flows: he guided users through claims, non-custodial wallets, security, bridges, exchanges, and dApps, and reported fake groups or suspicious contacts. His messages discussed how Kondor, Konio, and other interfaces could hide friction—for example, using mana from another account when moving an entire balance—and presented the Spanish ecosystem as a sequence of products, integrations, and events that had to be translated for non-technical users. Part of his volume consists of relayed announcements and social conversation; it therefore recognizes his communications infrastructure without attributing to him the products he explained.",
  "Andrew Levine":
    "Between November 2019 and February 2026, he accumulated 16,119 verified contributions, including 4,667 Discord interventions, 11 inventoried X posts, and 11 articles. As a founder and the project's principal early communicator, he explained OpenSeed/OpenOrchard, the fair launch, modular architecture, mana, governance, and the mission of a fee-less experience, while coordinating campaigns and developer relations. In 2022, he said that governance was complete, KoinDX was already working on testnet, and a stablecoin would be a valuable opportunity; in 2023, he emphasized that three years of work included contributions from Kondor, KoinDX, Roamin, Kollection, KAP, and Koiner—not only from the founding team. His activity combines narrative design, product decisions, support, and recognition of third parties, and should be distinguished from the concrete technical implementation performed by Steve, Michael, Julián, and other authors.",
  "Saleh Hawi":
    "Between January 2023 and April 2026, he recorded 12,180 messages, especially in the main group, Army, and KoinDX. He was an organizer, moderator, support operator, and product and business contributor to KoinDX, and coordinated a community campaign to secure new exchange listings; he was not one of the original co-founders or the author of the DEX contracts. He explained how to participate in sales and marketplaces, move KOIN among centralized exchanges, wallets, and bridges, use Fogata and supporter NFTs, and understand why a first gasless Web3 experience could be more accessible to newcomers. He also warned about impersonators, nonexistent presales, and private messages, so his volume reflects onboarding and security as well as market promotion.",
  VonLooten:
    "Between June 2021 and April 2024, he accumulated 11,395 verified contributions, including 2,327 on Discord and five articles. As KoinDX co-founder and original CEO, he led strategy, communications, documentation, KNDX/KOINDX, the proposed DAO, IDO, launchpad, official pairs, partnerships, and support, while also contributing product work. He explained that pairs should be added through governance and security controls, that supporter NFTs were optional donations without special utility, and that a fee-less DEX could change the DeFi experience. He also discussed the value of the native token and the limits of dApps without a genuine economic purpose. The primary AMM contract code should not automatically be attributed to him: Ederaleng was CTO and has stronger technical implementation evidence.",
  "Techno🔮":
    "Between January 2021 and November 2024, he posted 9,968 messages, almost all in the main group. He was a very consistent market and support voice: he tracked mining and large holders, explained how to buy or bridge assets, guided users through Kondor, Koiner, KoinDX, and MEXC, promoted campaigns, and reminded newcomers that team members did not initiate private messages. He publicly defended Julián's unpaid work and used the Kondor NFT as an example of directly supporting a developer. His position in this list comes from conversation, assistance, and amplification—not from a verified product, repository, or formal role.",
  "Steve Gerbino":
    "Between October 2020 and March 2026, he accumulated 9,393 contributions: 5,873 Telegram messages and 3,520 Discord messages. As a founder and CTO, he explained from the fair-launch period that proof frequency affected ETH expenditure and variance, not hardware; he later covered architecture, releases, nodes, Proof of Burn, KCS, upgrades, and operator support. In 2025, he argued that KCS-4 could enable safe automatic token and NFT listings and went on to propose a new chain that would preserve WASM, resources, Proof of Burn, StateDB, and account abstraction while removing governance and microservices to prioritize speed. That final proposal is a later design position, not a delivered Koinos milestone. His volume accompanies a sustained foundational technical role, although authorship of each component must still follow repository history.",
  "Julián González / Jga":
    "Between October 2020 and July 2026, he accumulated 9,200 contributions: 5,743 Telegram messages, 3,421 Discord messages, and 36 articles. His arc runs from mining and pools through Koilib, Kondor, the WKOIN claim, Fogata, Koinos Polls, Nicknames, Arkinos, smart wallets, KFS, standards, and network maintenance; he also provided bilingual technical support and operated block producers. He explained why a basic NFT standard should not include prices or KOIN calls by default, presented Arkinos as a way to create a contract and frontend in minutes, and helped users recover or move funds based on verifiable contract rules. His volume corresponds to exceptionally broad technical output, but several products and standards were collaborations, and it does not make him a founding protocol architect.",
  "q t":
    "Between November 2022 and July 2026, q t recorded 8,875 messages across the main group, Army, KoinCity, KoinDX, and Koin Crew. This contributor was an intensive user and critical observer of KoinCity, KoinDX, Chainge, Kollection, KAP, Kanvas, explorers, and mining, with frequent debates about liquidity, marketing, and funding. They encouraged people to use the available dApps and understand their differences, but warned that spending inflated KOIN on proposals made little sense before securing exchanges, a DEX, and Vortex; they also questioned campaigns whose outcome should be measured through volume and adoption. The record helps reconstruct product reception and economic skepticism, not technical authorship or decision-making authority.",
  "edje Ӄ":
    "Between November 2020 and January 2026, edje posted 8,688 messages across the main group, Army, KoinCity, Koin Crew, and KoinDX. This contributor acted as an exploratory user and informal cataloger: testing wallets and bridges, comparing NFT collection utilities, asking about free mana, and proposing a unified service view and an AI assistant kept current with wallets, bridges, and dApps. These interventions document real onboarding failures—for example, Chainge claims that did not appear—and the difficulty of explaining the utility of each collection or product. The historical value lies in sustained observation of UX and the ecosystem, without evidence of authorship of the products mentioned.",
  "Pablo García / pgarcgo":
    "Between April 2020 and July 2026, he accumulated 8,367 verified contributions, including 396 on Discord. He began as an organizer and educator in the Spanish community, created Koincast and project directories, tested testnets, claims, wallets, pools, and dApps, and evolved into operating nodes, community testnet/API infrastructure, Koinos One, the monolithic Teleno node, and state-database and replay repair work. In Spanish, he explained self-custody, seed phrases, and the claim process; in 2025, he summarized priorities such as network operations, Vortex, KFS, and community custody of infrastructure. His activity demonstrates a transition from communications to infrastructure and consensus-adjacent contribution, but it does not retrospectively make him a founding architect of Koinos.",
  "Justin Welch / Justin W.":
    "Between October 2020 and May 2026, he recorded 7,196 contributions, including 1,806 on Discord. He moved from miner and technical troubleshooter to Kollection co-founder, initiator of the Koinos Contract Standards repository, KCS-2 co-author, and contributor to Koinos.io, Vortex, Koinos.fun, and the Foundation, working across contracts, frontend, indexing, AWS, and deployments. He explained how aggregators such as DefiLlama depend on separate APIs, advocated native liquidity and an Ethereum-accessible bridge, and said in 2025 that Vortex needed to launch but that he could not responsibly lead it because of limited time, although he would help with engineering. His volume accompanies verifiable deliverables, but Kollection, KCS-2, Vortex, and Koinos.fun had teams and shared authorship.",
  Tobi:
    "Between April 2021 and June 2026, he posted 6,979 messages, more than six thousand of them in Koinos Army. His conversation combined price tracking, advice about BurnKoin/Fogata/VHP, expectations for KoinDX and dApps, and debates about donations and community funding. He explained that burning KOIN was a long-term strategy and that VHP could recover liquidity through pools or the market; over time, he shifted from expecting dApps to drive adoption to expressing frustration that growth remained almost nonexistent after five years. He is a useful voice for measuring holder sentiment and continuity, not an author of products or infrastructure.",
  Nomad100x:
    "Between February 2021 and July 2026, he accumulated 6,346 messages, mainly in the Spanish community and the main group. As a participant, sponsor, and critic, he initiated Koinos Garden by paying an external developer to build an NFT-gated investment and voting DAO, and later debated the Federation, KFS, inflation, bridges, liquidity, and product priorities. He argued that two years of mainnet without a bridge or sufficient DeFi was a problem, supported limited inflation through proposals, and presented the rule “one NFT, one vote” as Garden's basis for decentralization. He described himself as a non-developer: the contract belongs to its GitHub author, and there is no evidence that Garden funded specific projects.",
  "Ӄirky Ӄirk 🔮":
    "Between August 2021 and February 2025, this contributor recorded 5,987 messages, primarily in the main group and Koinos Army. The activity centered on onboarding and community culture: comparing narratives, helping with the CLI, Kondor, and MEXC, suggesting quick access to KoinDX/KoinCity/Kollection, and warning that no team member should initiate a private conversation. They argued that charts and comparisons could spark curiosity when accompanied by whitepapers and sources, and called for due diligence so promotion would not resemble another fraudulent project. No product, repository, or formal position was found in connection with this volume.",
  "Luke Willis":
    "Between November 2021 and June 2024, he accumulated 5,786 contributions: 3,225 Telegram messages, 2,560 Discord messages, and one inventoried article, in addition to 57 audio episodes excluded from the requested total. He created The Koin Press, proposed the fungible Virtual Hash Power credited in the KPoB design, wrote the original BurnKoin contracts and frontend, co-founded KAP, and built its interface. He discussed upgrade security, mining incentives, inflation, and accessibility; he argued that the target should not simply be whoever buys KOIN, but whoever learns, builds a dApp, and becomes an ambassador. His contribution connects protocol, product, and education, with the important boundary that Roamin wrote much of KAP's surviving contract code and Kui shared its operations and communications.",
  MiXiBo:
    "Between March 2021 and May 2026, he recorded 5,518 contributions, including 630 on Discord and four articles. As KoinCity's principal developer and operator, he expanded a no-code launchpad into presales, locks, markets, staking, chats, KoinDX integration, APIs, NFT minting, and its own infrastructure; he also maintained direct support in the product group. He explained designs such as orders processed by a hot wallet with shared mana, evaluated the real utility of more than 170 launchpads, and acknowledged both the difficulty of informal partnerships and the need to keep building after closures or failures. His volume is especially concentrated in KoinCity and accompanies genuine authorship and operations, although collections, tokens, and projects created by third parties do not become his work.",
  "Alberto / Transeunte":
    "Between November 2021 and June 2026, he accumulated 4,779 contributions: 4,743 messages, 34 articles, and two videos. His work encompassed bilingual communications, product archiving, visual storytelling, and advocacy for non-technical users: he created Mundo Koinos/Koinos World, experimented with videos and NFTs, amplified campaigns, and presented a communications and marketing center for funding. His messages focused on markets, wallets, security, and products such as MEXC, Kondor, Sovrano, and Koiner, always asking how to make the ecosystem visible and understandable. He was not a developer; his early NFT collections reached testing, not a maintained production release.",
  "Adem / Kenpachi":
    "Between August 2021 and December 2024, he posted 3,280 messages, mainly in Koinos Army and KoinDX. He was an early Army co-owner, KoinDX moderator and support contact, and curator and marketer for Koinos Army Journey; he welcomed users, circulated events and releases, explained KNDX/IDO/Mana, and warned about impersonation and pre-launch offers. His conversation is primarily evidence of coordination and community culture, not development: there is no public GitHub record or evidence that he wrote contracts, artwork, or tokenomics.",
  "@interfecto / Atb 3tb":
    "Between November 2022 and July 2026, he accumulated 3,126 contributions, with especially intense activity from 2025 onward in the main group, Army, and TCB. He built LLM-assisted contract guides, a testnet and faucet, KoinosScan, dashboards, monitoring, a Go/SQLite indexer, and the Koinos EVM Engine prototype, while also maintaining public links and data. His messages focus on wallets, MEXC/Chainge/Vortex, security, nodes, and support; he recommended small transactions, empty wallets for testing, and caution with direct messages, and distinguished functional prototypes from audited software. The pattern is feedback-to-commit and applied operations, not authorship of the base protocol.",
  Roamin:
    "Between January 2022 and July 2024, he accumulated 2,356 contributions, 2,340 of them on Discord and only 16 in the reviewed public Telegram groups. He created the AssemblyScript toolchain that became first-party software, Local-Koinos, My Koinos Wallet and its SDK, the first end-to-end Koinos–Ethereum bridge, WalletConnect, the Armana SDK, the original REST server, get_contract_metadata, VRF and stress tests, and Koinos-Social with Kui. On Discord, he presented AssemblyScript as a TypeScript-like CDT and, when Koinos-Social closed, explained that users retained their keys and could move their funds. His low Telegram volume shows why the total must combine platforms; even so, later products such as Vortex or the production REST service had other authors and maintainers.",
  "Michael Vandeberg":
    "Between October 2020 and March 2026, he recorded 2,096 contributions, including 901 on Discord. As a founder and blockchain architect, he explained mining, difficulty, microservices, system contracts, StateDB, KCS, upgrades, and operations; development, protocol, nodes, and security predominate in the thematic sample. From the fair launch onward, he noted that increasing proof frequency did not raise the hash rate, and in 2025 he published and supported the KCS-4 proposal while also diagnosing operational problems such as file-descriptor limits. This is foundational technical activity, but attribution of specific code must follow commits and reviews.",
  "Adriano Foschi":
    "Between April 2023 and June 2026, he posted 2,026 messages, mainly about Konio, Sovrano, Veive, wallet integration, security, and development. He created the first native Koinos mobile wallet, the modular Veive smart-account framework, the Sovrano authentication and payments track, Sovry, and the Kuku Games prototype, while also coordinating onboarding and community planning. His messages demonstrate dApp support and a sustained effort to hide keys, mana, and complexity behind familiar interfaces. Mentions of other wallets or services describe integration and comparison, not authorship of those products.",
  Dokterkraakbeen:
    "Between October 2021 and July 2026, he recorded 1,713 messages connected primarily to communications, KoinDX, Kollection, NFTs, and support. He launched Planet Koinos as a visual and translation resource, redesigned KoinDX, was a named KCS-2 co-author, joined the Kollection launch team, and coordinated KAMP's visual and sponsorship work. The corpus demonstrates sustained design, standards, product, and operational contributions, but not a public history that would justify attributing DEX or marketplace contracts to him.",
  Ederaleng:
    "Between April 2020 and February 2026, he accumulated 1,361 verified contributions, including 356 on Discord. As KoinDX co-founder and original CTO, Kollection contributor, technical lead of the resumed Vortex bridge, and founding Foundation member, he worked on contracts, SDKs, tests, registries, validators, relayers, deployments, and multichain liquidity. His conversations cover KoinDX, Chainge/Vortex, markets, integration, and support; his technical importance is confirmed by artifacts, not inferred from volume alone.",
  Karlos:
    "Between November 2022 and March 2026, he posted 1,311 messages about wallets, products, mining, markets, and support. He contributed the My Koinos Wallet logo, his SVG version of the VHP symbol used by Koiner and requested by Konio, coin logos and testing for Konio v1.4, and support for the Kondor NFT. This was visual and testing work: there is no evidence for describing him as a wallet or contract developer.",
  "Jon Rice":
    "Between September 2022 and July 2026, he recorded 895 contributions: 892 messages and three articles. His activity addressed communications, coordination, adoption, and funding: he founded the Koinos Federation, articulated the “free, frictionless, familiar” thesis, wrote the public case for Koinos, and amplified Koinos.fun and other products. His role was advocacy and editorial strategy, not protocol engineering.",
  "Frank / ElImbatido":
    "Between November 2021 and April 2026, he accumulated 677 contributions, with a disproportionate focus on Koiner, development, nodes, and protocol economics. He created and operated Koiner.App, its indexer, backend, and GraphQL API, and explained both its evolution toward shared data infrastructure and its closure because of costs, workload, and limited adoption. His figure is lower than that of many conversational participants, but his technical impact was high.",
};

const topicLabels = {
  community_content: "community coordination, campaigns, content, and outreach",
  development: "code, contracts, APIs, testnet, mainnet, and troubleshooting",
  markets_exchanges: "prices, liquidity, exchanges, and market development",
  mining_nodes: "mining, VHP, block producers, nodes, and infrastructure operations",
  nfts_games: "NFTs, collections, games, and digital assets",
  protocol_economics: "mana, Proof of Burn, supply, inflation, and protocol governance",
  security_support: "transactions, custody, security, and scam prevention",
  social_culture: "social conversation, greetings, humor, and everyday group culture",
  wallets_products: "wallets, explorers, and ecosystem dApps",
};

const tierLabels = {
  over_5000: "More than 5,000 contributions",
  over_1000: "More than 1,000 contributions",
  over_500: "More than 500 contributions",
};

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function joinEnglish(values) {
  if (values.length <= 1) return values[0] || "none recorded";
  if (values.length === 2) return `${values[0]} and ${values[1]}`;
  return `${values.slice(0, -1).join(", ")}, and ${values.at(-1)}`;
}

function translateGenericSummary(user) {
  const period = user.summary.match(
    /^Entre (\d{4}-\d{2}-\d{2}) y (\d{4}-\d{2}-\d{2})/,
  );
  if (!period) {
    throw new Error(`Unable to extract the activity period for ${user.person}`);
  }

  const [, first, last] = period;
  const topics = user.top_topics
    .slice(0, user.tier === "over_500" ? 2 : 3)
    .map(([topic]) => topicLabels[topic]);
  const products = user.top_products.slice(0, 3).map(([product]) => product);
  const chats = user.top_chats.slice(0, 2).map(([chat]) => chat);
  const productClause =
    products.length === 1
      ? `The product mentioned most often was ${products[0]}`
      : `The products mentioned most often were ${joinEnglish(products)}`;

  if (user.tier === "over_500") {
    return `Between ${first} and ${last}, this contributor recorded ${formatNumber(
      user.total,
    )} contributions, focused primarily on ${joinEnglish(
      topics,
    )}. ${productClause}; the figure demonstrates conversational continuity, not authorship or formal responsibility for those products.`;
  }

  return `Between ${first} and ${last}, this contributor recorded ${formatNumber(
    user.total,
  )} contributions, with the strongest presence in ${joinEnglish(
    chats,
  )}. The history classification places the messages mainly in ${joinEnglish(
    topics,
  )}. ${productClause}, helping to reconstruct which parts of the ecosystem this person followed, tested, or discussed. This summary describes verifiable conversational activity; mentions and volume alone do not demonstrate technical authorship, formal leadership, or an equivalent level of impact.`;
}

function translatedSummary(user) {
  if (customTranslations[user.person]) return customTranslations[user.person];
  if (
    user.summary.includes("La clasificación del historial") ||
    user.summary.includes("centradas sobre todo en")
  ) {
    return translateGenericSummary(user);
  }
  throw new Error(`Missing custom translation for ${user.person}`);
}

function metricList(values, labelFormatter = (label) => label) {
  if (!values?.length) return "None recorded";
  return values
    .map(([label, count]) => `${labelFormatter(label)} (${formatNumber(count)})`)
    .join(", ");
}

const lines = [
  "# Koinos Community Contributor Summaries",
  "",
  "English-language edition of [`koinos-community-contributor-summaries.json`](koinos-community-contributor-summaries.json).",
  "",
  "## Methodological note",
  "",
  "This document translates the qualitative summaries while preserving the source totals, tiers, topic counts, product mentions, and public-group counts. The underlying dataset was generated from a scan of public Telegram topics combined with attribution boundaries established in the Koinos chronology. Discord counts exist only for identities inventoried individually in the broader contribution analysis, so these totals are verified minimums rather than complete biographies.",
  "",
  "Message volume is an activity index, not a measure of quality, technical difficulty, authorship, leadership, or historical importance. Product mentions do not establish that a contributor created or controlled those products. Numeric Telegram user IDs are intentionally omitted from this reading edition; they remain available in the source JSON for data reconciliation.",
  "",
  `- **Profiles:** ${source.users.length}`,
  "- **Ordering:** verified contribution total, highest to lowest",
  "- **Source method:** public Telegram topic scan plus chronology attribution boundaries",
  "",
  "## Contributor profiles",
  "",
];

source.users.forEach((user, index) => {
  lines.push(
    `### ${index + 1}. ${user.person}`,
    "",
    `- **Verified contributions:** ${formatNumber(user.total)}`,
    `- **Tier:** ${tierLabels[user.tier]}`,
    `- **Top topics:** ${metricList(
      user.top_topics,
      (topic) => topicLabels[topic] || topic,
    )}`,
    `- **Most-mentioned products:** ${metricList(user.top_products)}`,
    `- **Most-active public groups:** ${metricList(user.top_chats)}`,
    "",
    translatedSummary(user),
    "",
  );
});

if (lines.at(-1) === "") lines.pop();
process.stdout.write(`${lines.join("\n")}\n`);
