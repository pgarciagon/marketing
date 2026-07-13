# Koinos Exists: A Chronicle of a Blockchain That Cannot Be Recreated

We are entering an era in which artificial intelligence and large language models can help almost anyone write software. A single developer can generate an application, fork a codebase, modify a protocol, or even launch a new blockchain faster than ever before. In that world, the mere ability to create another chain is no longer the scarce thing.

What cannot be generated on demand is history.

Koinos matters because it exists as a lived blockchain: a chain launched on mainnet, used by real people, shaped by real transactions, tested by markets, criticized by its own community, maintained through difficult transitions, and extended by developers who were not all part of the founding company. Its value is not only in its code, architecture, or technical ideas. It is also in the path that brought it here: the people who mined it, built wallets and tools, debated governance, lost money, donated funds, launched applications, ran infrastructure, and kept the network visible when the original company stepped back.

In the age of AI-generated software, this distinction becomes more important. You can fork code. You can launch another blockchain. You can reproduce an architecture. But you cannot fork the exact history of Koinos. You cannot recreate the original ERC-20 mining period, the Steem lessons that shaped the project, the first mainnet transactions, the community debates around Cafe, the launch of KoinDX, Kollection, KAP, Fogata, Konio, Sovrano, Koinos.fun, the formation of Koinos Community Foundation, or the long chain of contributions that made the ecosystem what it is.

This article is therefore not only a list of milestones. It is an attempt to preserve the memory of a blockchain as a social, technical, and historical object.

The Koinos story does not begin with KOIN mining or mainnet. It begins in the Steem era: a practical demonstration that fee-less blockchain applications could reach normal users, followed by a governance crisis that shaped many of Koinos' design goals.

This chronology is based on public project material, the Koinos whitepaper, Koinos Group and Koinos Network posts, GitHub releases, ecosystem announcements, public X posts, and community discussions preserved in Telegram and Discord. Official publications are used for dates and formal announcements; community channels are used to recover context: what people were building, debating, doubting, translating, funding, and maintaining at each stage.

That distinction matters because Koinos' later history is not only the history of Koinos Group. It is also the story of independent community developers, operators, writers, translators, liquidity providers, wallet builders, NFT builders, governance participants, and critics who gradually became part of the chain's continuity.

## 2016-2020 - The Steem Lesson

Before Koinos, several of the people who later built it were core developers of Steem, one of the first large fee-less social blockchains. Steem and Steemit proved something important: ordinary users could interact with a blockchain every day if the product felt like a normal web application and did not ask them to pay fees for every action.

This is the positive lesson Koinos inherited from Steem. Free transactions, account abstraction, social applications, and resource delegation were not abstract ideas. They were tested in a real consumer environment.

The Steem ecosystem also produced applications that showed how far a fee-less blockchain could go. Steem Monsters, later Splinterlands, became one of the best-known blockchain games of that era. It demonstrated that games, social apps, and digital assets could attract users when the blockchain stayed mostly out of the way.

But Steem also exposed a severe governance weakness. In 2020, after Justin Sun acquired Steemit Inc., the Steem community entered a governance conflict in which exchange-held customer stake was used in witness voting. That event led to the Hive fork and became one of the clearest examples of how custodial stake and concentrated founder holdings can threaten a delegated proof-of-stake network.

The Koinos whitepaper describes this experience directly: the team had been core developers of Steem until a hostile takeover and exchange attack. Koinos was designed partly as an answer to that failure mode: a fee-less general-purpose blockchain that would be more decentralized at launch, more modular in operation, and more resistant to exchange governance capture.

## 2019-2020 - The Discord Conversation Before Koinos

The earliest useful Discord record begins before Koinos had its final name. In August 2019, the server still reflected the Steem ecosystem: proposals, application interoperability, and the search for better developer infrastructure. By November 2019, Andrew Levine was describing the server as a place to discuss cross-platform features for Steem applications, including OpenSeed, off-chain accounts, encrypted messaging, and a more consistent user experience across apps.

This pre-Koinos discussion matters because it shows continuity. The later Koinos emphasis on free accounts, fee-less usage, smooth UX, and application-level primitives did not appear suddenly in the 2020 whitepaper. It came out of a working social-blockchain environment where developers had already seen which parts of blockchain UX could reach normal users and which parts remained painful.

The same early Discord history also captured the negative lesson. Community members were already criticizing delegated proof-of-stake, premine dynamics, stakeholder governance, and price-driven thinking in late 2019 and early 2020. After the Steem/Hive split, those concerns became more concrete: people who were attracted to OpenOrchard were often attracted because they wanted the innovation and usability of Steem without repeating the governance weaknesses that had become visible in Steem and Hive.

## 16.04.2020 - OpenOrchard Is Announced

On April 16, 2020, after leaving Steemit Inc., a large part of the former Steem development team announced OpenOrchard. The mission was to make blockchain technology more accessible for decentralized application developers.

This is the organizational starting point of Koinos. The team did not begin by saying "we are launching another token." The initial framing was broader: build tools and technology that would let developers create applications with the usability of Steem, but without inheriting Steem's governance weaknesses.

The Koinos Discord `#general` channel preserves the public reception of that starting point. On April 16, 2020, Andrew Levine shared the OpenOrchard announcement there. Within days, community members were already comparing Steem, Hive, OpenOrchard, governance weaknesses, and the possibility of building on a more sustainable base layer. That matters because the Discord record shows Koinos beginning as a post-Steem developer conversation before it became a mining, exchange, or price story.

## 16.06.2020 - Koinos Is Announced as a New Blockchain

On June 16, 2020, OpenOrchard announced that it was building a new blockchain from scratch: Koinos.

That decision matters. The team could have built on Ethereum, Hive, EOSIO, or another existing chain. Instead, the conclusion was that none of the available platforms combined the properties they wanted: true fee-less usage, free accounts, free smart contract execution, resource delegation, modularity, fair launch, and governance that could evolve without hard forks.

Koinos was therefore not only a new chain. It was an attempt to generalize what Steem had proven at the application layer and rebuild it as a programmable smart contract platform.

Discord also clarifies how early the microservice idea entered the conversation. In `#general` on June 16, 2020, Andrew shared the OpenOrchard update on Koinos and ODESI, and the preview described the Koinos blockchain alongside ODESI microservices. A July 2020 discussion picked up the same architecture, with a community member noting that the project was being described as a suite of microservices. That is an early signal that Koinos' later modular-node architecture was not a late branding layer; it was already part of the technical identity in the first public months.

## 23.09.2020 - Koinos Group LLC Is Registered

On September 23, 2020, Koinos Group LLC was registered in Delaware. This formalized the team behind the project and set the stage for a more public launch.

The company would later become the center of Koinos development through the ERC-20 mining phase, testnets, mainnet launch, KoinosPro, Vortex development, and the early ecosystem. That role would change dramatically years later, when the community had to take over operational responsibility.

The core Koinos Group names referenced in this chronology are:

- **Andrew Levine / `@andrarchy`**: founding CEO of Koinos Group and the principal public communicator, strategist, business-development voice, and community interlocutor during Koinos' formation, testnets, mainnet launch, and first two production years. He was not the principal protocol architect; his distinctive contribution was translating the architects' work into an understandable mission, gathering feedback, promoting community developers, forming partnerships, and repeatedly distinguishing the company from the decentralized network. In August 2024 he moved from CEO to Chief Communications Officer. After leaving Koinos Group in December 2024, he continued for a time as an independent advocate and offered mentoring to Koinos builders. Public profile: X [`@andrarchy`](https://x.com/andrarchy).
- **Steve Gerbino / `@sgerbino`**: Koinos co-founder and blockchain architect. He was announced as CTO of Koinos Group in April 2022 and became CEO in August 2024. Steve's community role combined protocol design with unusually direct public support: he explained mining, mana, releases, governance proposals, and node upgrades; recognized independent builders; and invited community developers into the core repositories. During the 2025 transition he communicated the new-network direction and signed the operational handoff of Koinos Group assets and services to the community. Public profiles: X [`@ssgerbino`](https://x.com/ssgerbino), GitHub [`sgerbino`](https://github.com/sgerbino), LinkedIn [`stevegerbino`](https://www.linkedin.com/in/stevegerbino/).
- **Michael Vandeberg / `@mvandeberg`**: Koinos co-founder and principal blockchain architect; CTO of Koinos Group from August 2024. Michael was the project's most persistent public protocol reference: he explained consensus, mana, the snapshot and decentralized claim process, microservices, governance boundaries, token standards, node behavior, and the technical roadmap. He also reviewed community proposals and repeatedly converted operator and dApp-developer feedback into P2P fixes, safer contracts, nonce handling, and REST tooling. During the company wind-down he continued answering technical questions and gave detailed explanations of the legal and accounting constraints around Koinos Group's remaining tokens. Public profiles: X [`@koinosvandeberg`](https://x.com/koinosvandeberg), GitHub [`mvandeberg`](https://github.com/mvandeberg), LinkedIn [`michaelvandeberg`](https://www.linkedin.com/in/michaelvandeberg/).
- **Ron Hamenahem**: Koinos founder, project manager and developer on the current Koinos team page; also described in company profiles as COO / design and operations lead. Public profile: GitHub [`brklyn8900`](https://github.com/brklyn8900).
- **Nathaniel Caldwell**: Koinos co-founder / blockchain architect referenced in early Koinos technical material, including the "easy fork" testnet discussion.

Those roles changed over time, especially after Koinos Group stopped being the operating center of the chain. Later names in this article, such as Luke Willis, Kui He, Julián González, Justin Welch, Adriano Foschi, Frank (`@ElImbatido`), VonLooten, fbslo, MiXiBo, Ederaleng, Saleh Hawi, Roamin, Jon Rice, and `@interfecto`, are treated as community contributors unless a cited source explicitly says otherwise.

Known public profiles for recurring community contributors include:

- **Luke Willis**: X [`@lukemwillis`](https://x.com/lukemwillis), GitHub [`lukemwillis`](https://github.com/lukemwillis), host / writer of [The Koin Press](https://podcast.thekoinpress.com/).
- **Kui He**: X [`@kuixihe`](https://x.com/kuixihe), YouTube [`@kuixihe` / motoengineer](https://www.youtube.com/@kuixihe), LinkedIn [`kuixihe`](https://www.linkedin.com/in/kuixihe).
- **Julián González**: Telegram [`@joticajulian`](https://t.me/joticajulian), X [`@joticajulian`](https://x.com/joticajulian), GitHub [`joticajulian`](https://github.com/joticajulian).
- **Justin Welch / Justin W.**: X [`@ogjustinw`](https://x.com/ogjustinw), GitHub [`jredbeard`](https://github.com/jredbeard), LinkedIn [`justin-welch-5520a9112`](https://www.linkedin.com/in/justin-welch-5520a9112/).
- **Adriano Foschi / `@adrihoke`**: community product developer focused on removing user friction. He created the first native Koinos mobile wallet, **Konio**; the modular smart-account framework **Veive**; the **Sovrano** authentication and payment track; the **Sovry** Telegram wallet; and the original **Kuku Games** price-prediction prototype. He also coordinated a multi-project onboarding campaign, helped other dApp developers, and in 2025 created an early Foundation planning board and volunteered in the preparations for Vortex. Public profiles: X [`@adrihoke`](https://x.com/adrihoke), GitHub [`adrianofoschi`](https://github.com/adrianofoschi), LinkedIn [`adrianofoschi`](https://www.linkedin.com/in/adrianofoschi).
- **Frank / `@ElImbatido`**: Telegram [`@ElImbatido`](https://t.me/ElImbatido), creator and principal developer of **Koiner.App**, its explorer interface, indexing backend, and GraphQL data API. The historical V1 repository was `koiner-dao/koiner-backend`; its [original GitHub URL](https://github.com/koiner-dao/koiner-backend) is no longer available.
- **VonLooten / `@vonlooten`**: X [`@vonlooten`](https://x.com/vonlooten), GitHub [`vonlooten`](https://github.com/vonlooten), and Medium [`@vonlooten`](https://medium.com/@vonlooten). Co-founder and original CEO of KoinDX; he led business strategy, contributed to development, and was one of the project's most visible early communicators.
- **fbslo / `@fbsloXBT`**: X [`@fbsloXBT`](https://x.com/fbsloXBT), GitHub [`fbslo`](https://github.com/fbslo). Slovenia-based DeFi developer who created the earlier KoinoSwap project, joined forces with the KoinDX team in May 2022, and later built Koinos atomic-swap and bridge-related contracts.
- **MiXiBo / `@mixibo_koincity`**: principal developer, product designer, operator, and community support contact behind **KoinCity**. He turned the project from Koinos' first no-code token launchpad into a broader token platform with presales, token and liquidity locks, market and staking views, project chats, KoinDX integration, partner API keys, quick launches, NFT minting, and its own node and server infrastructure. Public profiles: Telegram [`@mixibo_koincity`](https://t.me/mixibo_koincity), GitHub [`MiXiBo`](https://github.com/MiXiBo), X [`@TheRealKoincity`](https://x.com/TheRealKoincity).
- **Ederaleng**: X [`@ederaleng`](https://x.com/ederaleng), Telegram [`@ederaleng`](https://t.me/ederaleng).
- **Saleh Hawi / `@saleh_hawi`**: Telegram [`@saleh_hawi`](https://t.me/saleh_hawi). Community organizer, KoinDX product / business contributor and user-facing operator, exchange-listing campaign coordinator, moderator, and technical explainer. He was not one of KoinDX's original co-founders, but by 2024 he had become one of its publicly recognized contributors and remained a support contact through 2025.
- **Roamin**: GitHub [`roaminro`](https://github.com/roaminro).
- **Jon Rice**: X [`@jonricecrypto`](https://x.com/jonricecrypto), LinkedIn [`jonricecrypto`](https://www.linkedin.com/in/jonricecrypto/). Earlier Federation-era X posts also referenced [`@jonrice`](https://x.com/jonrice).
- **Pablo Garcia / pgarcgo**: Telegram [`@pgarcgo`](https://t.me/pgarcgo), X [`@pgarcgo`](https://x.com/pgarcgo), GitHub [`pgarciagon`](https://github.com/pgarciagon), creator of the discontinued Spanish podcast **Koincast**.
- **`@interfecto`**: X [`@interf3cto`](https://x.com/interf3cto), GitHub [`interfecto`](https://github.com/interfecto).
- **Alberto / Transeunte**: Telegram [`@transeunte`](https://t.me/transeunte).
- **Nomad100x**: Telegram [`@nomad100x`](https://t.me/nomad100x).
- **Carlos Welele / `@Weleleliano`**: Telegram [`@Weleleliano`](https://t.me/Weleleliano). Early Spanish-community participant, bilingual explainer and translator, organizer of Koinos social-media materials and engagement channels, and long-running moderator of the main Koinos Telegram group. His contribution was social infrastructure: helping users understand Koinos, keeping information circulating, and protecting newcomers from spam, impersonators, and fake groups.

## 06.10.2020 - Whitepaper and KOIN Mining Are Announced

On October 6, 2020, Andrew Levine announced the Koinos whitepaper and the upcoming release of KOIN as a mineable ERC-20 token on Ethereum. The mining period was designed to be open and accessible: CPU mining, no ICO, no pre-mine, and a distribution mechanism intended to avoid the concentration problems that had damaged trust in other chains.

The goal was explicit: maximize decentralization by giving ordinary users a fair path to acquire the token before mainnet.

Discord `#general` shows the announcement functioning as an immediate onboarding event. Andrew posted the whitepaper and mining announcement on October 6, 2020, and the same discussion quickly turned into practical questions about proof frequency, ETH costs, laptops, and how the miner worked. Steve Gerbino explained that proof frequency affected ETH spending and mining variance rather than damaging hardware, which shows how quickly the channel shifted from narrative to support.

The same thread is also where the project's fair-launch language was tested publicly. Users asked whether Koinos would repeat Steem's premine problem or whether mining would behave like a disguised ICO because it required spending ETH on gas. Steve's answer was direct: no ICO, no ninja mine, no hidden launch trick. Other users framed the absence of a premined controlling stake as the key reason Koinos could claim a cleaner start than Steem, while still recognizing that fair launch did not guarantee perfect distribution.

To support this, the team published mining software in two forms:

- a desktop GUI miner for Mac and Windows;
- a Linux command-line miner for servers.

The default miner included an optional developer donation, but the setting was configurable. By the end of the mining period, the donations represented less than one percent of total supply.

## 13.10.2020 - KOIN ERC-20 Mining Begins

On October 13, 2020, after a seven-day countdown, KOIN ERC-20 mining officially began on Ethereum.

That same day, the first KOIN/ETH Uniswap v2 pair was created anonymously. Early trades happened at roughly one cent per KOIN in the exchange rate of the time.

This period is important because it shaped Koinos' later legitimacy. KOIN was not sold through an ICO. It was mined in the open before the native chain existed, and the future mainnet would later use a snapshot of those ERC-20 balances.

The Discord record captures the messy reality of that fair launch. On launch day, `#general` included users asking why ETH sent to the miner address had not appeared, whether the miner app had to remain open, and how to begin mining. Within the next days, discussions moved into Infura endpoints, Ropsten defaults, gas prices, hardware-wallet concerns, claiming mechanics, and the future mainnet handoff. That does not change the official launch date, but it makes the milestone more concrete: KOIN mining began as an open technical process that required real community troubleshooting, not as a polished centralized sale.

One especially important technical discussion explained how the mining difficulty worked. In Discord, Michael Vandeberg described the mechanism as an internal market-maker model, similar in spirit to Uniswap's constant-product logic: one side represented KOIN, the other represented hashes, hashes decayed over time, and competition changed the implied price of producing proofs. This is useful historically because it shows that KOIN mining was not only "CPU mining on Ethereum"; it was an economic mechanism implemented through smart-contract logic, Ethereum transactions, and a dynamic hash market.

The user-support questions were part of the launch itself. Miners had to understand proof frequency, ETH gas, Infura endpoints, local Ethereum nodes, and why lower proof frequency meant fewer Ethereum transactions but less frequent rewards. That friction explains both the strengths and weaknesses of the launch: it was open and technically verifiable, but it still favored people who could understand Ethereum tooling, gas costs, and mining variance.

## 18.11.2020 - OpenOrchard Becomes Koinos Group

On November 18, 2020, OpenOrchard was rebranded as Koinos Group.

The rebrand made the project easier to understand publicly. OpenOrchard had been the company name, but Koinos was becoming the identity of the technology, the token, and the future chain.

## Late 2020 - Koinos en Español Becomes the First International Community Branch

The Spanish-speaking community formed unusually early. Telegram evidence from late November and December 2020 shows the `@koinoshispano` group already active, explaining Koinos' modular upgradeability and state-paging ideas in Spanish, discussing the ERC-20 mining phase, and sharing subtitled Koinos videos through the **Koinos en español** YouTube channel.

By December 20, 2020, the Spanish channel was already sharing a broader communication stack: YouTube, Facebook, Twitter / X as `@koinos_espaniol`, Telegram as `@koinoshispano`, and a Spanish-speaking Discord. On January 11, 2021, it shared a subtitled video of Andrew Levine presenting the Spanish community. Later, in November and December 2021, community member Pablo Garcia / `@pgarcgo` referred to those Spanish channels in the main group as official Spanish-speaking communication routes.

This makes `@koinoshispano` historically important beyond language. It was one of the first examples of Koinos becoming international through community work rather than through a formal corporate regional program. The channel was created and maintained in that early period by Spanish-speaking community members including `@pgarcgo` and Carlos Welele / `@Weleleliano`, and it became a place for translation, technical explanation, onboarding, mining help, testnet discussion, and later community coordination.

Welele's role as a bridge into the main English-language community was visible by April 18, 2021, when he reported, [“Gotta tell you, in the Spanish Telegram we are fomoing hard with Koinos”](https://t.me/koinos_community/8520). The phrase was playful, but the underlying role lasted for years: he carried questions from the Spanish group into the main channel, translated answers back, explained mana, Proof of Burn, wallets, supply, claims, and mainnet behavior in Spanish, and pushed for subtitles and more accessible presentation. In April 2022, while volunteering to add Spanish subtitles to a video, he summarized that philosophy in another characteristic line: [“This is the content that make crypto accesible.”](https://t.me/koinos_community/77315)

There is one nuance. Later Telegram lists described several language groups, including Spanish, as "Non-Official International Groups." That later wording should not erase the early history: in 2020 and 2021, Koinos en español was being treated publicly as the Spanish-language community route, while later community governance became more careful about what counted as official.

That Spanish track later also produced more formal media experiments. Pablo Garcia / `@pgarcgo` launched **Koincast**, a Spanish-language podcast connected with `koincast.io` and the X profile `@koincast`. The podcast is now discontinued, but it belongs to the same early international-community history: Koinos was not only translated into Spanish through Telegram posts, but also explained through longer-form Spanish audio content.

## 13.04.2021 - Mining Period Effectively Ends

By April 13, 2021, six months after mining began, approximately 99.34% of all KOIN had been mined and distributed across 1,306 Ethereum addresses, according to the original Hive chronology.

This completed the fair launch phase. The next challenge was no longer distribution. It was execution: could the team build the chain that would make those ERC-20 balances native?

Discord also shows why the end of mining did not end the distribution debate. By February and March 2021, community members were already asking who or what `cafe` was, how it had obtained so much hashpower, whether it represented rented CPU capacity, a coordinated miner, or possibly a bug, and whether two `0x1337cafe` addresses were related. Some users noted that Cafe had stopped or slowed down, that it did not appear to be dumping as aggressively as feared, and that the visible hashrate had looked unusually large. The important point is not that Discord proved Cafe's identity; it did not. The important point is that the Cafe question was born during the mining era itself, not years later as retrospective mythology.

That early uncertainty should be kept separate from later on-chain analysis. KoinosScan can identify known Cafe-linked wallet clusters and trace flows through Uniswap, snapshot balances, and claims. Discord adds the social layer: people experienced Cafe as an unresolved fairness question while mining was still recent, and the project had to carry that uncertainty into mainnet.

## 30.06.2021 - First Koinos Testnet Launches

On June 30, 2021, Koinos launched its first public testnet, version 0.1.

The testnet introduced one of Koinos' most important architectural decisions: a microservice-based blockchain framework. Instead of building a monolithic chain, Koinos split core functions into services, making the system more modular and easier to upgrade.

This was the first public technical proof that Koinos was not simply a token waiting for a chain. The chain framework itself was taking shape.

The `#general` history adds two useful details. First, by February 2021, community members were already treating the testnet as the next execution milestone after mining, with Pablo Garcia / `pgarcgo` urging patience until testnet arrived. Second, on July 19, 2021, Andrew shared the "EASY FORK" testnet update in `#general`; the preview stated that the testnet had gone live on time and that the team had already executed an easy fork. That makes the first testnet important not only because it existed, but because it immediately tested Koinos' promise of upgradeability without conventional hard-fork drama.

Andrew also framed testnet as a public learning process. In September, he [thanked the people who had asked questions, supplied critical feedback, and contributed to the conversation](https://t.me/koinos_community/22924). This was more than community management language: testnet users running nodes had already exposed synchronization and consensus behavior that led to early “easy fork” fixes. His public role was to keep that feedback loop open and explain why problems found by users were part of the product-development process rather than evidence that the experiment had failed.

## 02.11.2021 - Testnet v0.2 Goes Live

On November 2, 2021, testnet v0.2 was released. This continued the incremental march toward a production network.

During this period, the Koinos GitHub organization showed sustained development activity, and the team held regular AMAs and community updates. The project was still small, but technically active.

Discord shows the practical side of this phase. Users were already asking whether Kondor worked on testnet v2, how the later ERC-20 snapshot and claim process would connect Ethereum-compatible keys to native Koinos accounts, and how to keep testnet nodes running through Docker. Those details matter because wallet UX, claim UX, and node operations were not post-mainnet afterthoughts; they were being worked through publicly before the chain existed.

## 14.11.2021 - KOIN Reaches Its First Major Price Peak

On November 14, 2021, KOIN reached an all-time high around $1.63, according to the original Hive chronology.

This matters historically because later price weakness must be understood against the early market expectations. Koinos had attention, speculative interest, and a community that believed the technology could compete with larger smart contract platforms.

## 19.12.2021 - Proof of Burn Is Explained

On December 19, 2021, Koinos published an article explaining Koinos Proof of Burn, or KPoB.

Proof of Burn became one of the central economic ideas of Koinos. Instead of paying gas fees to validators, users consume mana derived from KOIN. Block producers compete through burning and opportunity cost rather than conventional transaction fees.

The aim was to preserve user-facing feelessness while still creating a security and incentive model for block production.

The Discord discussion around Proof of Burn was not only technical. In the archived AMA channel on December 19, 2021, a community member raised a tax concern: if burning KOIN is treated as a taxable disposal and block rewards are also taxable income, early producers could face a double burden. That question foreshadowed later Koinos debates about whether the economics of KPoB were elegant in protocol terms but complicated in real-world accounting terms.

At the same time, Discord users were connecting KPoB to mana and governance. Mana was often compared with Steem-style resource credits, but with the broader ambition of powering smart-contract interaction rather than only social actions. Governance-contract discussion appeared in late 2021 as well, with community developers asking how system-contract changes would move from company action toward on-chain governance.

## 08.03.2022 - Testnet v0.3

On March 8, 2022, Koinos launched testnet v0.3. This was another step toward mainnet readiness, adding more of the system contracts and chain logic needed for production.

## 27.04.2022 - Roamin's AssemblyScript SDK Becomes First-Party Koinos Software

On April 27, 2022, Koinos Network published an update saying that AssemblyScript had become first-party software on Koinos. The post credited community developer `@Roamin` for the AssemblyScript SDK, which made Koinos smart contracts accessible to developers familiar with TypeScript and JavaScript.

This was more than a tooling footnote. Before this shift, the original smart contract path was centered on C++. Roamin's SDK made Koinos development feel closer to the web-development world, where many more developers already know TypeScript-style syntax. Koinos Group then integrated that work into the main development path: the governance contract was rewritten in AssemblyScript, and the team described the AssemblyScript SDK as the intended premier smart contract development toolkit for Koinos.

Discord shows the beginning of that path before the official April update. On January 20, 2022, Roamin introduced himself in `#general` as a developer who had worked on a blockchain explorer and was exploring whether AssemblyScript could be used to create a TypeScript-like contract development toolkit for Koinos. Andrew immediately pointed to NEAR's AssemblyScript-WASM contracts as validation of the direction, and Steve then discussed the low-level WASM interface questions with Roamin in the developer channels. By January 21, Roamin was already reporting that AssemblyScript code was running on Koinos and linking early CDT/example repositories.

Chronologically, this belongs before the governance milestone because it helped shape how the core system itself was built. The language/tooling decision was not only for third-party dApps; it quickly became part of Koinos' own system-contract implementation and developer-experience identity.

## 16-17.05.2022 - KoinoSwap Developer fbslo Joins Forces with KoinDX

KoinDX's lineage began before its public mainnet launch and before its October 2022 team announcement. On December 14, 2021, developer **fbslo** [publicly introduced KoinoSwap as a project in development](https://web.archive.org/web/20211214004941/https://twitter.com/fbsloXBT/status/1470555266307567620). On January 7, 2022, Luke Willis described it in Telegram as being built by a community member, with no certainty that it would be ready for mainnet.

That developer was **fbslo**, X [`@fbsloXBT`](https://x.com/fbsloXBT), a Slovenia-based DeFi developer. On May 10, KoinoSwap reported that its core contract was finished and that only the website and extensive testing remained ([Telegram record](https://t.me/koinos_community/81583)). On May 16, the project then [announced that fbslo was joining the KoinDX team](https://web.archive.org/web/20220516214735/https://twitter.com/KoinoSwap/status/1526318305098797056). One day later, Koinos Network formally recorded the event under the heading [“Koinos DEXs Join Forces”](https://medium.com/koinosnetwork/verifiable-randomness-dexs-and-tutorials-9a8c7bcfbc35), saying that the KoinoSwap developer had joined the KoinDX team to build a single stronger DEX.

This is distinct from the later KoinDX founder record. The available evidence establishes fbslo as the developer of an earlier DEX that merged its effort into KoinDX, but the October 2022 KoinDX announcement identifies **VonLooten and Ederaleng** as the project's co-founders. fbslo should therefore be remembered as part of KoinDX's technical prehistory and consolidation, not silently substituted for either of its documented co-founders.

## 01.06.2022 - Governance Contract Completed

On June 1, 2022, Koinos announced the completion of the governance contract, described as the world's simplest DAO.

Governance was not a secondary feature. Because Koinos was designed to be upgradeable without hard forks, governance was the mechanism through which system-level changes would later be approved and applied.

## 06.07.2022 - Unified Whitepaper Published

On July 6, 2022, Koinos Group published the unified Koinos whitepaper: a broader explanation of the evolving blockchain, free-to-use dApps, mana, and Proof of Burn.

The whitepaper tied together the Steem lesson, the fair launch, the fee-less model, and the technical architecture.

## 19.08.2022 - Harbinger Testnet v4

On August 19, 2022, Koinos launched the final major testnet before mainnet: Harbinger v4.

This was the last full rehearsal before the ERC-20 snapshot and native chain launch.

## 11.10.2022 - BurnKoin Launches the First Proof-of-Burn Pool on Testnet

On October 11, 2022, community member motoengineer published [Burn KOIN, Earn KOIN. The first and simplest Proof of Burn mining pool](https://hive.blog/koinos/@motoengineer/burn-koin-earn-koin-the-first-and-simplest-proof-of-burn-mining-pool). The post announced that BurnKoin.com was live on Koinos testnet and described it as the first Proof-of-Burn mining pool.

This was an important pre-mainnet ecosystem event. BurnKoin allowed KOIN holders to participate in block production, network security, and governance without operating their own node. The post described pooled VHP, a 5% operator fee on rewards, no hidden deposit or withdrawal fees, and Kondor-based interaction. It also identified BurnKoin as created by community developers Luke M. Willis and Kui X. He; later sources also identify motoengineer as a BurnKoin co-founder.

The public GitHub repository reinforces the same point: `lukemwillis/koinos-burn-pool` describes itself as the first burn-pool contracts created for Koinos and says the pool would be operated by Kui He and Luke Willis.

Discord adds two details that make BurnKoin more than a launch announcement. First, motoengineer was already discussing BurnKoin testnet operation in early October 2022, including turning a large share of VHP on and off to observe the effect on production. Second, Luke Willis discussed a metadata-related security risk for dApps such as BurnKoin: if users trusted mutable metadata too naively, a malicious pool operator could redirect the system-contract address. That discussion shows that the first pool was also a live test of Koinos' dApp security assumptions.

## 28.10.2022 - VonLooten and Ederaleng Introduce the Early KoinDX Team

On October 28, 2022, before the KOIN snapshot and mainnet launch, KoinDX published its first detailed [team and product announcement](https://medium.com/@koindx/koindx-announcement-574aff8f3541). It identified **VonLooten** and **Ederaleng** as KoinDX's two co-founders. The team had already spent months building and testing a native decentralized exchange for Koinos.

The announcement also added three community members: **Dokterkraakbeen** for design, and **Glen Koin Master** and **Adem** as community moderators. It introduced the KNDX token, staking and governance plans, trading discounts, an updated brand, and a planned launchpad. This places KoinDX firmly in the pre-mainnet developer history rather than treating it as a project that appeared only when the DEX launched in August 2023.

The founders' later descriptions clarify their different roles. VonLooten identified himself as KoinDX's **CEO and co-founder**, responsible for business strategy while also contributing to development. He described Ederaleng as his co-founder and **CTO**, with a stronger focus on technical development. In March 2023, VonLooten also named himself, Ederaleng, and Dokterkraakbeen as the founding members of the planned KoinDX DAO. The historical record therefore supports shared authorship: VonLooten was the original public and strategic lead, while Ederaleng was present from the beginning as co-founder and technical lead.

## 31.10.2022 - ERC-20 KOIN Snapshot

On October 31, 2022, the ERC-20 KOIN snapshot was completed successfully. This snapshot determined the initial balances for native KOIN on the Koinos mainnet.

The snapshot connected the 2020 fair mining phase to the future native chain. Without it, the fair launch would have remained only an Ethereum-era distribution event.

Discord confirms how public and operational this moment was. In the official announcements channel, Michael Vandeberg posted on October 31, 2022 that the snapshot was complete and linked the Etherscan transaction. The Twitter relay then repeated that the KOIN snapshot had been successfully generated and that mainnet was next. In `#general`, users had already been asking how the snapshot would work and whether ERC-20 trading still mattered afterward.

Michael had already explained the security model publicly on September 1. The snapshot recorded addresses and balances, but a native claim required the holder to [sign a message with the Ethereum private key](https://t.me/koinos_community/96211); the token-claiming contract verified that proof without Koinos Group deciding who owned an account. His concise summary—“The claiming is completely decentralized”—helped users understand both the benefit and the hard limitation: an exchange screenshot or support request could not substitute for custody of the key.

KoinosScan's later [claims analysis](https://koinosscan.com/claims) gives a useful way to read this moment. It lists the snapshot at Ethereum block 15,868,963 and reconstructs 3,754 snapshot addresses holding about 99.74 million KOIN. By the time of that dataset, 1,974 addresses had claimed about 79.03 million KOIN, while 1,780 addresses still had about 20.71 million KOIN unclaimed.

The same dataset also gives a more careful way to discuss mining concentration. Its Cafe spotlight identifies a coordinated `0x1337cafe...` cluster of seven known wallets that mined about 67.56 million KOIN, sent about 52.09 million to Uniswap, sent about 16.39 million elsewhere, and retained only about 506,365 KOIN directly in the snapshot. The page also uses weighted F1-F7 heuristics to group broader Sybil-style clusters, but those heuristics should be treated as analytical signals, not as proof of a real-world identity.

This distinction matters. The raw mining number makes Cafe look like the dominant actor of the mining phase, but the snapshot and claims data show a more complicated path: much of the mined KOIN had already moved through Uniswap, OTC transfers, or downstream wallets before mainnet. The historically important question is therefore not only "who mined it?", but "where did it sit at the snapshot, who claimed it, and whether downstream wallets were independent or coordinated."

## 05.11.2022 - Koinos Mainnet Launches

On November 5, 2022, Koinos mainnet launched successfully.

The launch did not immediately represent the final governance state. The team kept a temporary administrative path open to handle unexpected problems without forcing the network into governance before it was ready.

Still, November 5, 2022, is the technical birth of the Koinos blockchain: KOIN became native, the fee-less smart contract platform went live, and the project moved from promise to production.

The final pre-launch Discord traffic shows how expectations had narrowed from theory to practical access. On November 4, 2022, `#general` users were discussing the website's statement that mainnet would launch the next day, asking whether claiming would also be available, and whether buying the ERC-20 token after the snapshot still made sense. On November 5, archived testnet discussion referred to the day's focus as the mainnet launch. That evidence helps place the launch as a community handoff moment: users were no longer only mining or following updates; they were preparing to claim, use wallets, and interact with the live chain.

Andrew's contribution to this milestone was primarily communication and coordination rather than the core protocol implementation. Before launch, he published the [Snapshot FAQs](https://medium.com/koinosnetwork/snapshot-faqs-54568ae581c8), explained how claiming would work, warned users that mistakes could permanently lose KOIN, and pointed to community-built tools such as Julián González's Kondor wallet. This was part of a broader role he had played throughout testnet: turning implementation decisions from the blockchain architects into instructions, narratives, and questions that users and external developers could act on.

The days immediately after launch also show early exchange confusion. Discord users discussed whether a MEXC listing was real, why some exchange links failed, and how to interpret ERC-20 trading after the snapshot. This is an early version of a much larger later theme: Koinos could ship novel chain technology, but liquidity, exchange communication, and user-facing market access remained weak and confusing.

## 30.11.2022 - Community Developer Frank Launches Koiner.App

On November 30, 2022, only 25 days after Koinos mainnet, community developer **Frank**, known on Telegram as [`@ElImbatido`](https://t.me/ElImbatido), formally launched **Koiner.App**. The [official launch article](https://medium.com/@koiner/koiner-app-accelerating-decentralization-by-making-koinos-blockchain-data-accessible-45e6df75551a) called it the next live dApp in the ecosystem and described a dashboard designed to make Koinos blockchain data understandable without requiring users to query a node or interpret raw operations. A Koiner link was already circulating in the Spanish community on [November 29](https://t.me/koinoshispano/15217), and the main group reaction on launch day was immediate: [“Koiner.app is so good!”](https://t.me/koinos_community/122481).

The first public version already went beyond a minimal block list. It included:

- portfolio tracking for multiple addresses stored locally in the browser;
- transaction history, token operations, and event search;
- block-producer rewards and blocks produced;
- a ranking of leading block producers;
- token operations, events, and holder balances;
- a network dashboard intended to make chain activity legible to users and operators.

The launch roadmap also anticipated a mobile version, KoinDX trade tracking, real-time updates, and a Koiner burn pool intended to help finance hosting. This milestone matters because Koiner arrived almost simultaneously with the network it observed. Frank was not documenting an already mature ecosystem; he was building one of the first public windows into a chain whose data tooling, standards, and applications were still being created.

## 05.12.2022 - Koinos Completes Its Initial Decentralization

On December 5, 2022, the team removed the temporary control path and Koinos entered its first fully decentralized operating phase. From that point forward, system-level changes had to pass through governance.

This is where the earlier Spanish chronology ended. It is also where the second act begins: the network had launched, but now it had to survive real usage, market cycles, infrastructure problems, governance, and eventually the withdrawal of Koinos Group as the central operating force.

## 19.12.2022 - BurnKoin Becomes the First Major Mainnet Pool

On December 19, 2022, Kui He published a [BurnKoin operator fee update](https://medium.com/@kuixihe/burnkoin-operator-fee-update-d27388499940). The update said BurnKoin had completed its first month of operation, helped produce the 1,000,000th block, and at its peak had produced nearly 40% of all blocks.

This made BurnKoin both a success and an early decentralization warning. It proved that Proof-of-Burn pooling could work in production, but it also showed how quickly a popular pool could concentrate block production and governance influence. The response was to adjust operator fees above certain VHP thresholds, encourage solo mining, and support competing pools.

That is why BurnKoin should appear before Fogata in the chronology. Fogata was not the first pool; it was an important second public pool and a decentralizing counterweight to BurnKoin's early dominance.

## 02.01.2023 - Fogata and Block-Production Decentralization

On January 2, 2023, community developer Julián González published [Fogata - mining pools for koinos](https://hive.blog/koinos/@jga/fogata). Less than two months after mainnet, the post framed additional mining pools as a way to reduce block-production concentration and make KPoB participation more accessible. The post explicitly recognized that BurnKoin already existed, which makes Fogata historically important as the next step in pool competition rather than the first pool.

This belongs early in the post-mainnet chronology because it links directly to Koinos' first decentralization test. Removing Koinos Group's temporary control path did not automatically mean block production was broadly distributed. Tools such as Fogata mattered because decentralization had to become operational, not only constitutional.

## 09.01.2023 - KAP Whitepaper Extends the Luke and Kui Track from Mining to Accounts

On January 9, 2023, Kui He published [Announcing KAP Whitepaper: Free Blockchain Access For All](https://medium.com/@kuixihe/announcing-kap-whitepaper-free-blockchain-access-for-all-8adaa0a3db1f). KAP, or Koinos Account Protocol, was presented as an all-in-one account management layer with three pillars: an NFT name service, account abstraction, and free mana.

This deserves a place immediately after the early mining-pool milestones because it shows how quickly community builders moved from block-production infrastructure to user-facing account infrastructure. The same post identified KAP as created by community developers Luke M. Willis and Kui Xi He, the same team behind BurnKoin. In other words, the BurnKoin team was not only helping users participate in KPoB; it was also trying to make Koinos accounts easier for normal users and dApps.

## 2023-2024 - Koiner Evolves from Explorer into Shared Data Infrastructure

Koiner's visible explorer was only the front end of Frank's contribution. During 2023 and 2024, he progressively turned it into an indexed data service that other developers and external market-data providers could use.

The public milestones preserved in Telegram include:

- **12.01.2023:** Frank added a mobile mana bar for addresses saved in a user's portfolio ([message 134406](https://t.me/koinos_community/134406)).
- **16.02.2023:** Koiner gained a dedicated token-holders view ([message 142402](https://t.me/koinos_community/142402)).
- **03-04.03.2023:** Frank exposed live KOIN total supply, virtual supply, and VHP supply data, turning values that previously required chain analysis into [queryable endpoints](https://t.me/koinos_community/145540).
- **10.04.2023:** he [explained](https://t.me/koinos_community/158166) that Koiner synchronized the MEXC price into its backend and combined it with indexed supply data through GraphQL to calculate market capitalization. This avoided hitting an exchange API separately for every user request.
- **19.04.2023:** the explorer added an [operations-search page](https://t.me/koinos_community/161830) capable of finding contract operations and names.
- **23.07.2024:** Frank [updated the circulating-supply API](https://t.me/koinos_community/285219) used by CoinMarketCap and CoinGecko and added VHP virtual-supply information.

By late 2024, Frank described Koiner as an ecosystem data provider rather than merely an explorer. Developers could query its custom NestJS GraphQL API instead of maintaining a separate indexer for every contract. Koiner synchronized external price data, indexed chain operations and events, and maintained a large PostgreSQL database behind the public interface. That architecture supported features community members later remembered specifically: market capitalization, APY information, top-holder and distribution views, detailed network statistics, producer information, and data useful for whale monitoring.

The open-source history needs a precise distinction. On October 23, 2024, Frank [stated that Koiner V1 was open source](https://t.me/koinos_community/307533) and pointed developers to the Kubernetes configuration in the then-public `koiner-dao/koiner-backend` repository. That [original repository URL](https://github.com/koiner-dao/koiner-backend) is no longer available. The planned V2 architecture was still under development and was never released as a finished replacement. Later community statements that “Koiner was not open source” appear to refer to the unreleased V2 or to the fact that the complete production service could not be recreated from the V1 repository alone.

Koiner's importance was therefore broader than its role as a block explorer. It became an independently financed, community-built data warehouse and API layer at a time when every Koinos dApp otherwise faced the cost of operating nodes, decoding events, indexing history, and designing its own query service.

## 2021-2024 - The Koin Press and motoengineer Become Community Education Channels

Alongside software, Koinos needed people who could explain what was being built. Luke Willis filled part of that gap through **The Koin Press**, a newsletter and podcast that discussed Koinos and crypto concepts in plain English. The podcast archive lists 57 episodes, running through June 2024, and includes Koinos-specific interviews and explainers around mainnet, BurnKoin, taxes, Fogata, Kollection, KoinDX, KAP, KoinosPro, Koinos Play, Koinos Federation, KoinCity, and later ecosystem updates.

This matters because The Koin Press became a community memory layer. Many of the projects that later appear as milestones in this chronology also appeared there as interviews while they were still new: Kui He discussing the Koinos Burn Pool, Andrew Levine announcing the mainnet launch date, Julián González discussing Kondor and Fogata, Justin Welch discussing Kollection, VonLooten discussing KoinDX, Kui He returning for KAP, Jon Rice explaining the Koinos Federation, and MiXiBo discussing KoinCity.

Kui He, known in the community as **motoengineer**, also maintained a YouTube channel under `@kuixihe`. That channel carried practical Koinos material: Koinos concept explainers, KOIN mining and claiming tutorials, mana explanations, gas-fee reduction examples, and KAP / BurnKoin-related videos. This belongs in the chronology because video walkthroughs and plain-English explanations were part of the infrastructure that made Koinos usable. A chain with fee-less smart contracts still needs people who can show users where to click, how to claim, how mana works, and why the architecture matters.

The Spanish-language equivalent was smaller but still historically relevant. **Koincast**, launched by `@pgarcgo`, described itself on Spotify as a podcast about blockchains, decentralized economics, dApps, Web3, liberal thought, and artificial intelligence. By April 2023, it had published Koinos ecosystem content such as an interview with Ederaleng, CTO of KoinDX. Although Koincast was later discontinued, it is part of the same communication layer as The Koin Press and motoengineer videos: community members were trying to make Koinos understandable outside official announcements and outside English-only channels.

Carlos Welele formed part of that education layer without running a comparable podcast or software product. He repeatedly translated questions from the Spanish group into English, returned technical explanations to Spanish speakers, offered subtitle and translation help, and turned difficult subjects into ordinary-language comparisons. His work is best understood as persistent peer education: not a single publication milestone, but years of answering the questions that appear when a fee-less blockchain, mana, Proof of Burn, token claiming, and forkless upgrades are new to users.

## 06.02.2023 - Running Multiple Producers on the Microservice Architecture

On February 6, 2023, community developer Julián González followed with [How to setup a second producer in Koinos Blockchain](https://hive.blog/koinos/@jga/koinos-2-producers). The post explained how Koinos' microservice architecture allowed more than one producer to be run from a single node setup.

This was a practical operator milestone. It showed that Koinos' modular architecture was not only an internal engineering choice, but something community operators could use to improve producer participation and experiment with pool infrastructure.

## 04.04.2023 - Koinos Army Becomes a Visible Community Hub

Telegram evidence shows that `@thekoinosarmy` was already active before mainnet as a price, speculation, and community chat. By late 2021 it had a working KOIN price bot, and by late 2022 it was already discussing mainnet, claims, circulating supply, and peer-to-peer buying. The formal public shape became clearer in April 2023.

On April 4 and 5, 2023, messages from the `@DeGemsCrew` account in `@thekoinosarmy` described a plan to use Koinos Army as more than a price room: a center hub for the Koinos blockchain, a place to connect developers with users through AMAs, a channel for updates about existing dApps, and a social layer around Koinos Army NFT collectibles. The same messages also referred to Koinos Army's previous two years of support, which places its community history back into the ERC-20 / pre-mainnet period.

This belongs in the chronology because Telegram groups were part of Koinos' actual infrastructure of coordination. The official Koinos community group often tried to keep technical and project discussion separate from price talk; over time, `@thekoinosarmy` became the place where price, speculation, market frustration, DeFi liquidity, wallet movement, and later community announcements could happen without overwhelming the main group.

The boundary with DeGems also matters. In October 2023, a message in Koinos Army explicitly distinguished the Koinos Army chat from the "degems" chat, saying the former was for Koinos Army rather than unrelated speculative tokens. That separation helps explain why Koinos Army later became useful as a Koinos-specific outlet even though it retained a more market-oriented tone than the main developer and community channels.

## 19.04.2023 - KAP Launches Its Premium Name Service

On April 18, 2023, Kui He published [Everything You Need to Know About KAP's April 19th Launch + Roadmap](https://medium.com/@kuixihe/everything-you-need-to-know-about-kaps-april-19th-launch-roadmap-1dcf8fa4ef77). The post announced that Koinos Account Protocol would launch on April 19, 2023, starting with its premium name service and expanding over the following year toward tokenless access and smart wallets.

The launch matters because it turned the January whitepaper into a live user-facing product. KAP was trying to make a Koinos account feel less like a raw blockchain address and more like a normal internet identity: a readable name, a path to free or subsidized access, and eventually customizable smart-wallet behavior.

By August 2023, community developers Luke and Kui presented KAP publicly on DevNTell. That presentation described KAP as a way to give users free or premium usernames, smart-wallet style account abstraction, and tokenless access through Koinos mana. Chronologically, KAP belongs before later identity and wallet milestones such as Koinos Nicknames, Kondor upgrades, and Manuscript because it was one of the earliest public attempts to turn Koinos' fee-less architecture into a complete onboarding experience.

Andrew Levine's July 2023 X demo also shows why KAP mattered in practice: he demonstrated a fast, fee-less token transfer to an NFT-based account name using Kondor and KAP, framing it as the future of Web3 UX. The important point is not the demo itself, but the combination of pieces: readable names, a usable wallet, and no visible gas fee.

## 20.04.2023 - Koinos Group Focuses on Infrastructure and Applications

On April 20, 2023, Andrew Levine published [Koinos Group in 2023](https://medium.com/koinos-group/koinos-group-in-2023-f1b597839c79). The post explained that, after launching mainnet on November 5, 2022, Koinos Group had shifted focus toward Koinos Pro, a SaaS product intended to make integration with the blockchain easier.

The message was straightforward: Koinos had a fee-less network, but developers and businesses still needed reliable infrastructure. Koinos Pro was presented as the bridge between the chain and applications: APIs, scaling, and a future Mana Fountain so developers could access resources without operating every layer themselves.

The same article mentioned Koinos Play and gaming-oriented collaborations, including GameStack, Royal Reptile Studios, and Splinterlands. Not all of those efforts later had the same public visibility, but they show the early post-mainnet exploration phase: Koinos was looking for use cases where fee-less interaction could matter to normal users.

Koinos Group's X account later turned KoinosPro into a more explicit developer-infrastructure message. In July 2023 it described KoinosPro as a ready-to-use platform where developers could focus on coding while Koinos Group handled node operation, security, scalability, support, documentation, and access to the latest chain version. That public messaging matters because it shows the company moving from chain launch toward a SaaS-style infrastructure business before KoinosPro V1 went live in 2024.

## 27.04.2023 - Community Developer Justin Welch Launches Kollection, Koinos' First NFT Marketplace

On April 27, 2023, Kollection announced its launch on Koinos mainnet. The announcement described Kollection as the first NFT marketplace using the free-to-use Koinos blockchain and said that, for the first time, users could trade NFTs without gas fees. The community launch team was listed as Justin Welch, Dokterkraakbeen, Ederaleng, and VonLooten.

Kollection mattered because it gave Koinos an NFT surface very early in the post-mainnet ecosystem. Until then, Koinos had smart contracts, mana, wallets, and early infrastructure, but it still needed visible user applications. An NFT marketplace is not only about collectibles; it tests wallet signing, token standards, indexing, royalties, listings, metadata, and user-facing marketplace flows.

Justin's role connects Kollection to Koinos Contract Standards. The Kollection launch announcement said the team helped kickstart the KCS repository so Koinos developers could create NFT and token contracts compatible with marketplaces and exchanges. KCS-2, the NFT collection standard, later listed Justin W among its authors and explicitly mentioned that NFT marketplaces such as Kollection would be able to aggregate and display compliant collections.

Steve Gerbino later summarized Justin's role clearly in a Koinos Network update, crediting him with leading the KCS effort and developing Kollection, one of the important on-chain dApps in the ecosystem. Chronologically, Kollection therefore belongs before later ecosystem summaries: it was one of the first signs that Koinos could support real consumer-facing applications, not only base-layer architecture.

## 13.05-22.11.2023 - Carlos Welele Organizes Community Marketing Workflows

This workflow had an earlier conceptual precursor. On December 6, 2022, Andrew Levine [suggested that community members propose and test a different set of Koinos “talking points” each week](https://t.me/koinos_community/123915), then coordinate comments, votes, and reposts around them. His example—whether Koinos could be presented as “The World's First DECENTRALIZED Unicorn”—was deliberately experimental. The important idea was that a decentralized network needed repeatable community communication rather than waiting for every message to come from the company.

On May 13, 2023, Carlos Welele [published a community-made compilation](https://t.me/koinos_community/168489) of relevant Koinos posts and reusable X / Twitter threads, divided into “Koin Topics” and “Koin Threads.” The practical aim was to reduce the work required for an ordinary holder to explain or promote Koinos: instead of reconstructing the same arguments every time, community members could reuse organized source material.

That effort developed into a broader social-media workflow around `@koinsocials` and `@koinosmarketing`. Welele repeatedly directed users to Koinos Socials to find posts worth liking, replying to, and reposting. On September 18, when the group had only 87 members, he expressed his participatory view of decentralization in a characteristically direct line: [“If you are not a dev, GO INTERACT. Is part of your job to make $KOIN bigger.”](https://t.me/koinos_community/191362)

By November, he was [helping organize the Koinos Marketing channel](https://t.me/koinos_community/204881) with searchable tags and prepared X replies, and [reported that a bot had been added](https://t.me/koinos_community/208073) to Koinos Socials so shared posts would receive useful previews. The available evidence supports saying that Welele helped operate, organize, and promote these community workflows; it does not establish that he was their sole founder. Their importance was modest but practical: they turned vague calls for “more marketing” into a repeatable place where non-developers could find material and contribute attention.

## May-July 2023 - Wachsman, HackerEarth, and the 20 dApps / 100,000 Users Campaign

In May 2023, Koinos Group's X account began describing a marketing campaign aimed at onboarding 20 dApps and 100,000 users to Koinos in six months. In June, Andrew Levine and Koinos Group said that Wachsman had been brought in to spearhead that campaign. In July, they connected the same strategy to a HackerEarth hackathon that was scheduled to start on July 10 and run for four weeks.

This belongs in the chronology because it shows the gap between technical launch and adoption. Koinos had mainnet, mana, wallets, and early applications, but the team was still looking for a repeatable path to attract outside developers. The campaign also helps explain the later focus on KoinosPro, documentation, examples, and developer experience: the project needed more than community belief; it needed builders who could discover the chain, ship a dApp, and stay.

The campaign should be read as an important strategic effort, not as proof that the adoption target was achieved. Its historical value is that it captures Koinos Group's 2023 growth thesis: use professional communications, developer competitions, and infrastructure tooling to turn the first fee-less blockchain into a developer platform.

## 14.06.2023 - First In-Band Upgrade Demonstrates Forkless Evolution

On June 14, 2023, Steve Gerbino described a successful in-band upgrade on Koinos, and Koinos Group said it was happy to vote on the upgrade through the on-chain DeGov system. Andrew Levine summarized the moment as a major milestone: a critical piece of the blockchain had been updated seamlessly through a transparent, decentralized process, without a hard fork.

Steve's intervention was important because he was not merely announcing a release. As one of the architects who designed Koinos' upgradeability, he translated the on-chain sequence for operators and voters and publicly confirmed that the live mechanism had behaved as intended. That combination—designing the system, participating in its governance path, and explaining the result in ordinary language—became a recurring part of his community role.

This is distinct from the February 2024 community governance milestone. The 2024 event was the first community-driven governance proposal applied on mainnet. The June 2023 event was earlier proof that Koinos' forkless upgrade architecture could actually update live network components through the governance path. Together, they show a progression: first the mechanism works, then independent community developers learn to use it.

## 15.06.2023 - Koinos Polls and Early Governance Coordination

On June 15, 2023, community developer Julián González published [Koinos Polls](https://hive.blog/koinos/@jga/polls), a free dApp for measuring consensus before code was ready for an on-chain governance proposal. The timing matters: Koinos had governance, but the community still needed lower-friction ways to discuss whether a proposal was worth building.

That same period also included his post on updating the claiming contract and his June 26 post, [Is Koinos a decentralized blockchain?](https://hive.blog/koinos/@jga/is-koinos-a-decentralized-blockchain), which directly criticized the concentration of block production. In chronological terms, this is where the post-mainnet conversation shifted from "the chain launched" to "how decentralized is the chain in practice?"

By July 2023, Julian's work also reached block-producer governance participation. Andrew Levine amplified Julian's announcement that the JGA Mining Pool let participants take part in Koinos governance decisions, calling it a major innovation because it made block production and governance participation more accessible. That detail matters because it ties Julian's software milestones to the same decentralization problem raised in his June post.

Andrew also intervened in the practical problem of participation. In September, he [suggested that technically knowledgeable contributors publish their own recommendation through Koinos Polls](https://t.me/koinos_community/188642), so less technical voters could see a position, disagree with it if necessary, and mobilize. His point was not that experts should control the result; it was that silence makes participation harder because ordinary contributors often lack the time or confidence to evaluate system-level changes without a visible technical argument.

## 16.06.2023 - Adriano Launches Konio, the First Native Mobile Wallet

Konio's public milestone began earlier than the July release previously recorded in this chronology. On June 16, 2023, Adriano Foschi [announced the first native iOS and Android wallet for Koinos](https://t.me/koinos_community/174532) and, later the same day, [made its source code public](https://t.me/koinos_community/174613). The public alpha produced no critical issues, so on June 17 he began the TestFlight and Google Play beta process. Mainnet became the default network on June 25.

The [July 25 release of Konio v1.5.2](https://t.me/koinos_community/182230) supplied the memorable product message: **"FAST, SIMPLE, FREE."** Two days later the Italian software house E-Time [announced its backing](https://t.me/koinos_community/182422), providing distribution and development resources while Adriano remained the sole developer and the project remained open source. Konio reached the [Apple App Store on August 4](https://t.me/koinos_community/183819), added KAP Domains integration in v1.6, and by v1.7 said it could connect to all Koinos dApps.

Konio then earned external recognition. On September 15, Andrew Levine [announced it as a $1,000 HackerEarth hackathon runner-up](https://t.me/koinos_community/190739), alongside MapX, while Kanvas won the main prize. Adriano publicly credited the community, Julián González, and the other Koinos developers rather than treating the result as a solo achievement. On October 9 he released what he called Konio's largest update: real-time asset prices, NFT tracking and transfers, Nicknames integration, an embedded dApp browser, new localizations, and a rewritten architecture covering roughly 90 percent of the code. Andrew's immediate assessment was simple: ["latest update to Konio is fantastic"](https://t.me/koinos_community/193932).

Konio matters because Koinos' promise was not only technical. A fee-less blockchain still needs wallets that ordinary users can install, understand, and use away from a browser extension. Adriano later explained that he had discovered Koinos at the beginning of 2023 and created Konio because there was no mobile wallet for the chain. That made Konio one of the first serious attempts to turn Koinos' fee-less design into a mobile-first user experience.

The later history was mixed. The repository's last mobile release was v2.5.0 in February 2024, and by 2025 community messages described Konio as inactive and not updated for the KCS-4 transition. Discord shows the practical side of that transition as well: users reported that the old Konio wallet no longer opened, asked how to recover access, and were told to restore with their seed phrase or import the private key into another wallet such as Kondor. But that does not reduce Konio's historical role. Konio was the first native mobile-wallet step, and it also foreshadowed Adriano's later direction: moving from a conventional mobile wallet toward smart accounts, modular authorization, and Sovrano.

## August 2023 - KoinDX Launches the First DEX on Koinos

On July 31, 2023, Koinos Group announced its partnership with KoinDX, describing it as the first decentralized exchange on Koinos. Public KoinDX launch posts followed in early August, making KoinDX the first major DeFi trading venue native to the chain. On August 2, Steve Gerbino publicly [congratulated both `@vonlooten` and `@ederaleng`](https://t.me/koinos_community/183430) for the launch.

This was a major ecosystem milestone. Until KoinDX, Koinos had launched as a technically novel fee-less smart contract platform, but it still lacked a native market layer where users could trade assets, provide liquidity, and build DeFi activity without relying only on centralized exchanges or Ethereum-side liquidity. KoinDX gave Koinos its first AMM-style DEX and made the mana model visible in a financial application: trading could happen without conventional gas fees, directly from user wallets.

KoinDX also became important later when Koinos' CEX situation weakened. As listings, liquidity, and market-making became recurring problems, the existence of a native DEX made the ecosystem less dependent on centralized venues. That does not mean liquidity was solved; it means Koinos had a local place where liquidity could be built, incentivized, and governed.

The leadership story changed in 2024. In June, community discussion [reported that VonLooten was no longer part of KoinDX](https://t.me/koinos_community/276060), while Ederaleng remained its co-founder, main developer, and the person responsible for most subsequent technical updates. Dokterkraakbeen also remained associated with the team. This reported transition explains why later ecosystem history often identifies Ederaleng with KoinDX even though VonLooten had been its original CEO, public spokesperson, and co-founder.

Saleh Hawi belongs to this later KoinDX phase, not to the original founding record. The October 2022 team announcement did not name him, and the August 2023 launch congratulations went to VonLooten and Ederaleng. By June 2024, however, Saleh was speaking publicly from inside the project about investors, tokenomics, integrations, routing behavior, and support issues. On August 29, 2024, Steve Gerbino formally credited **Ederaleng, Dokterkraakbeen, and Saleh** with delivering KoinDX. The evidence supports describing Saleh as a product, business, operations, and community-facing contributor; it does not establish him as the DEX's original founder or principal smart-contract developer.

The maintenance story changed again over time. Saleh continued acting as a user-facing KoinDX operator during 2025: he explained swap routing, [relayed that Ederaleng was working on a Kondor-related fix](https://t.me/koindx/20839), and [answered basic DEX questions as late as September](https://t.me/koindx/20885). By late 2025, KoinDX community messages said active KoinDX development had been paused while contributors focused on stabilizing the broader Koinos network: bridge work, nodes, and related infrastructure. By 2026, community developer and operator `@ederaleng` was one of the visible community operators tied to the DeFi/liquidity side, including KFS-funded liquidity deployment and later Base expansion work. That makes KoinDX part of the broader transition from a co-founded community dApp into community-maintained market infrastructure.

## 05.08.2023 - Community Developer Julián González Proposes a Security-Oriented System Call

On August 5, 2023, community developer Julián González published [[koinos proposals] Improve security in koinos](https://hive.blog/koinos/@jga/improve-security-koinos). The proposal argued for a new system call to help classify addresses and improve token and NFT security, especially around smart wallets and authorization.

This was the start of the work that would later become Koinos' first forkless mainnet governance upgrade. It is important to place it here, before the February 2024 milestone, because the applied upgrade was not a sudden company release. It came from months of public community discussion, testing, and iteration.

## 21.08.2023 - Koinos Federation and the Marketing Coordination Problem

On August 21, 2023, a long message circulated in the community introducing the **Koinos Federation**. The stated goal was to create a 100% community-led, voluntary, unpaid organization that could coordinate the kinds of activities Koinos Group could not easily lead: marketing, CEX listings, outreach, project support, and a clear point of contact for ecosystem builders.

The person presenting the idea was community advocate Jon Rice, who introduced himself as a long-time Koinos supporter with experience at Blockworks, Cointelegraph, Crypto Briefing, and advertising agencies. The core argument was practical: Koinos Group had deliberately avoided taking a large token allocation, which helped decentralization and regulatory positioning, but it also meant the project lacked the usual war chest used by other layer-ones for listings, market making, marketing, and grants.

The Federation idea tried to fill that gap. But it also became controversial. Critics worried that any treasury, inflation event, appointed committee, OTC sale, or listing fund could recreate the same centralization and insider-deal dynamics Koinos had tried to avoid. Supporters argued that without some coordinated structure, Koinos would remain under-marketed, under-listed, and too dependent on volunteers.

The debate around Jon was part of that broader tension. Some community members saw him as bringing professional marketing and crypto media experience. Others criticized the proposal as too centralized, too close to a quasi-foundation before the community had clear governance norms, or too willing to dilute supply in exchange for listings and market-making support.

The idea later received more public amplification. On October 20, 2023, Andrew Levine said he was thrilled that Jon was spearheading the Koinos Federation, arguing that Jon's experience and network could help accelerate decentralization through accessibility. That matters because the Federation debate was not only a Telegram-side proposal: it became part of the public Koinos narrative, backed by the former CEO even while some community members remained skeptical.

## 17.09.2023 - The New System Call Reaches Testnet

On September 17, 2023, community developer Julián González wrote that the new Koinos system call was live on testnet. On October 24, he published a second update describing a revised approach after discussion with Michael Vandeberg and Steve Gerbino.

This is a good example of how Koinos governance was supposed to work in practice: not only voting, but public technical debate, testnet deployment, adjustment, and eventual mainnet proposal. Michael and Steve did not absorb the work into a company-only release; they acted as protocol reviewers for an independent developer, helping Julián refine the system-call design while he remained the proposal's author and public driver.

## 30.09.2023 - Koinos Nicknames

On September 30, 2023, community developer Julián González published [Koinos Nicknames](https://hive.blog/koinos/@jga/nicknames), a human-readable naming service designed for safer transfers. The October updates improved similarity detection so users would be less likely to send funds to confusingly similar names.

Nicknames were not a core protocol milestone, but they were important for usability. They addressed a real user failure mode: even experienced users can lose funds by mistyping or misreading an address-like identifier.

## Late September 2023 - MiXiBo Launches KoinCity

In late September 2023, community developer MiXiBo launched KoinCity, which he described in his November retrospective as the first launchpad for the Koinos blockchain. Development had started in October 2022. That article gives the impossible date “31st of September 2023,” so the historically safe date is **late September**, not a fabricated exact day.

The first release was already more than a token-submission form. It combined no-code token and presale creation, token and KoinDX liquidity locks, automatic listing, soft-cap and hard-cap configuration, contribution limits, token-distribution charts, general and project-specific chats, KAP and Nicknames profiles, responsive mobile views, and wallet access through Kondor, Konio, and WalletConnect. Finalized launchpads could point users directly to the corresponding KoinDX trading pair. Koinos Garden appeared as an investment partner, while KoinDX provided the exchange layer rather than being absorbed into KoinCity.

KoinCity deserves its own milestone because it filled a different ecosystem gap from KoinDX or Kollection. KoinDX gave Koinos a DEX, Kollection gave it NFTs, and KoinCity tried to give entrepreneurs a no-code route to launch tokens and presales on Koinos. That mattered because a layer-one needs more than base infrastructure: it needs repeatable paths for community projects to appear without every founder writing custom contracts from scratch.

The platform quickly demonstrated real use. On November 22, KoinCity [hosted the Koinos Army NFT presale](https://t.me/koinos_community/209999) through its mint interface. Two days later, MiXiBo's Black Friday announcement [reported](https://t.me/koinos_community/212542) that Koin Crew's KCT presale had filled 10,000 KOIN, DARE DRUGS 2,500 KOIN, and Liquidity UP had 2,385 KOIN active. Those are the developer's contemporary promotional figures rather than independently audited totals, but they show that KoinCity was processing actual launches within its first two months. By December it also offered [automatic token deployment](https://t.me/koinos_community/216997) and could support [automatic liquidity burning](https://t.me/koinos_community/228637), initially by request before the full user interface was ready.

MiXiBo's public GitHub account preserves contract-level evidence from this phase: the KoinCity standard-token and token-lock contracts, a Kollection-compatible NFT contract, the Koinos Army NFT contract, and several KoinCity NFT collections. The main web application, backend, and API were not published there. That distinction later became important: parts of KoinCity remain inspectable, but the complete operating product was still dependent on MiXiBo and his private infrastructure.

## 25.10.2023 - Koinos Goes Cross-Chain with Chainge

On October 25, 2023, Koinos Network published [Chainge integrates Koinos](https://medium.com/koinosnetwork/koinos-goes-cross-chain-57d6e311fa86). The Chainge/Fusion integration allowed KOIN to move to Ethereum as wKOIN and allowed assets such as ETH to move toward Koinos.

This was important because Koinos was an independent chain. That independence made its resource model possible, but it also limited access to external liquidity. Chainge began addressing that tension: preserve the fee-less Koinos experience while opening routes into ecosystems where liquidity already existed.

In hindsight, Chainge was an early bridge in a narrative that would later become more central with Vortex. Koinos could not remain only a technically elegant isolated chain. It needed bridges, markets, and tools that made entering and leaving the ecosystem easier.

The later community view of Chainge became much darker. By 2026, Telegram discussions repeatedly described the Chainge situation as a major loss event. Community members claimed that users lost assets such as BTC, ETH, and USDT through wrapped assets and that the incident damaged KOIN's reputation, liquidity, and price. Some messages used words like "robbery", "rugged", or "scam"; those should be read as community allegations and sentiment, not as a legal finding in this article.

What can be said safely is that Chainge moved from being seen as an interoperability win to being seen by many community members as one of the largest strategic mistakes in Koinos' post-mainnet history. It also explains why Vortex later mattered so much: the community wanted a bridge path it could understand, operate, and replace if needed.

## November 2023 - Cafe Identity Speculation Becomes a Community Topic

By November 2023, Cafe had become not only a distribution concern but also an identity mystery. In `@thekoinosarmy`, community members summarized the basic uncertainty: the account was called "cafe" because of the original address prefix, but nobody knew whether it represented one person, a group, an external miner, or coordinated wallets.

Later speculation became much more personal and much less certain. Some analysis tried to connect Cafe-linked Ethereum and Koinos addresses with claims, OTC explanations, KAP name mints, Kollection-related transactions, and even $MONG memecoin trading activity. Names such as Justin W., Glen, and Kui appeared in discussions, but the Telegram evidence archive does not support treating any of those as proven identifications. The historically safe conclusion is narrower: Cafe became powerful enough that the community spent years debating mining concentration, downstream wallet independence, and the limits of on-chain attribution.

## 21.11.2023 - Konio Coordinates an Ecosystem-Wide Onboarding Giveaway

Konio also became a coordination vehicle rather than only a wallet. On November 13, Adriano [announced an onboarding giveaway beginning November 21](https://t.me/koinos_community/201228), with more than 3,000 USDT in prizes for ten winners. The sponsor list connected much of the live ecosystem: Kanvas, KAP, KoinCrew, KoinCity, Koiner.App, Koinos Garden, Koinos Raffles, KoinDX, Kollection, Koinos Blocks, and Planet Koinos.

This deserves its own milestone because it was one of the earliest ecosystem-wide attempts to turn many small Koinos projects into one coordinated acquisition campaign. It also shows a second side of Adriano's contribution: he did not only write wallet code; he used the product and its relationships to organize onboarding and joint promotion. In 2025 he [remembered the campaign as a major success](https://t.me/KoinosTCB/2234) and noted that KOIN reached an all-time high during the event. The timing is verifiable, but it should not be read as proof that the giveaway alone caused the price movement.

## 06.12.2023 - Governance Proposal Submitted on Mainnet

On December 6, 2023, community developer Julián González published [The gov proposal has been submitted in Koinos mainnet](https://hive.blog/koinos/@jga/gov-proposal-get-contract-metadata). The proposal added `get_contract_metadata`, a system call used to classify addresses as normal wallets or smart contract wallets.

This was the concrete bridge between the August security proposal and the February 2024 governance milestone. The proposal had been discussed publicly and reviewed by several developers, including Michael Vandeberg from Koinos Group.

## 17.12.2023 - Saleh Hawi Coordinates the Community Exchange-Listing Campaign

On December 17, 2023, Saleh Hawi [announced the Koinos Listing Campaign](https://t.me/koinos_community/224158), a community-led effort intended to secure at least two Tier-2 exchange listings and one Tier-1 listing during 2024. The announcement made Saleh the contact for community members who had relationships with exchanges, while Andrew Levine and community member G-20 were named as advisors. Its 29 reactions and subsequent replies show that the initiative was treated as a substantial community campaign rather than an isolated suggestion.

Andrew's advisory role fit a distinction he had articulated earlier that year. In an April discussion about exchanges, he described himself and others pursuing partnerships as [“members of the community”](https://t.me/koinos_community/159536), while describing Koinos Group as the **inventors of Koinos, but not its controllers**. He also argued that potential listings should not be teased for price effects or shared as inside information: announcements should be made only when events were real, so everyone learned at the same time. This intervention tried to separate legitimate business development from price promotion and to define fairness as an operating rule.

This milestone matters because it turned a recurring complaint about market access into an organized workstream. Saleh had already [identified himself as part of the exchange group](https://t.me/koinos_community/223583) and emphasized that listings required more than an application: exchanges evaluated trading volume, community activity, technical integration, market making, and the ability to pay or negotiate listing costs. During 2024 he [reported completed exchange paperwork and fees](https://t.me/koinos_community/276860), and [submitted or renewed requests involving CoinGecko, GeckoTerminal, Dexscreener, CoinMarketCap, and DEX-data integrations](https://t.me/koinos_community/286110).

The campaign's original numerical target should not be treated as Saleh's personal achievement or as a fully documented final result. Listings were negotiated and funded collectively, with Koinos Group, advisors, donors, technical contributors, and exchange representatives all involved. Saleh's historically verifiable role was the practical coordination layer: collecting contacts, communicating progress, connecting applications with technical projects, and keeping the community engaged with market-access work.

## 21.12.2023 - Community Marketing with Rhubarb Media

On December 21, 2023, Koinos Network published [The Koinos Community is partnering with Rhubarb Media](https://medium.com/koinosnetwork/the-koinos-community-is-partnering-with-rhubarb-media-a146ddeff309). The announcement came from the community marketing group, not simply from Koinos Group as a company.

The partnership mattered for two reasons. First, it recognized that Koinos' problem was not only technical. The project also needed a clearer message. Second, it reinforced the idea that promotion could come from the community rather than only from the founding company.

Telegram shows that the announcement moved quickly through the Spanish-speaking community. On December 19, 2023, `@koinoshispano` translated the notice that the community marketing group had signed with Rhubarb. On December 21, the Medium link was shared there. This turns the event from a corporate post into a multilingual community activation effort.

Andrew became a practical interface between the agency and independent builders. In February 2024, he [asked developers to send him upcoming releases](https://t.me/koinos_community/238426) and promised to act as liaison with Rhubarb so community projects could receive marketing support. That message drew eighteen fire reactions, reflecting how important this missing function was: developers could build applications, but someone still had to connect releases with professional communications, press, and coordinated distribution.

## 12.01.2024 - The Focus Shifts to Developer Experience

On January 12, 2024, Andrew Levine published [Welcome to 2024 Koinos Community!](https://medium.com/koinosnetwork/welcome-to-2024-koinos-community-cb45f1d59cde). The post framed 2024 as the year Koinos could move from having the best user experience, thanks to mana, toward competing for the best developer experience.

The thesis was concrete: TypeScript smart contracts, Koinos Pro, and an active community could make Koinos easier to build on than older, more expensive, or more VC-driven chains.

This marked a change in the question. It was no longer only whether Koinos could launch a decentralized fee-less mainnet. The question became whether it could attract enough developers to turn that technical advantage into applications.

## 14.01.2024 - Governance Proposal Resubmitted

On January 14, 2024, community developer Julián González published [Governance proposal in Koinos Mainnet (second try)](https://hive.blog/koinos/@jga/gov-proposal-in-koinos-mainnet-second-try). The first attempt had passed the voting threshold but failed during application because the proposal operations were not constructed correctly.

This failed-and-resubmitted sequence is worth keeping in the chronology. It shows that forkless governance was powerful but unforgiving: community developers could upgrade the chain, but they also had to learn the exact mechanics of proposal construction, operation ordering, and application.

## 12.02.2024 - First Governance Proposal Applied Without a Hard Fork

On February 12, 2024, Chad Ballantyne published [First Koinos Governance Proposal Applied!](https://medium.com/koinosnetwork/first-koinos-governance-proposal-applied-a531dfb2a74e). Koinos had received its first forkless upgrade approved by decentralized governance.

This deserves a central place in the chronology. Koinos had long argued that its architecture allowed system logic to be upgraded without a traditional hard fork. In February 2024, that claim moved from theory to production.

The proposal improved support for smart wallets, prepared the path for safer approval mechanisms, and strengthened account abstraction. It was also developed and presented by community members, with Julian Gonzalez leading the work, making it a social milestone as well as a technical one.

## 12.03.2024 - KoinosPro V1 Goes Live

On March 12, 2024, Andrew Levine announced [KoinosPro is LIVE](https://andrewlevine.medium.com/koinospro-is-live-a9619f8e93ab). Koinos Group presented KoinosPro V1 as reliable and scalable API infrastructure for Koinos.

KoinosPro attacked a real bottleneck. Even if a blockchain is free for end users, developers still need nodes, APIs, indexing, uptime, and scaling. If every project must solve that infrastructure alone, the barrier to entry remains high.

KoinosPro was intended to let developers move from idea to application without operating their own node from day one. This connected directly to the promise of "feeless, frictionless, familiar": removing fees for users is not enough if building applications is still too hard.

Telegram adds later nuance. On February 6, 2025, `@koinos_community` reported that the KoinosPro website would be taken down, but that endpoints would continue operating without affecting users. KoinosPro as a brand or public site lost visibility, but some API infrastructure remained relevant.

## March 2024-April 2025 - Saleh Hawi and the Community Listing Fund

In March 2024, the community began organizing explicit donation addresses for listings and market access. A message shared in `@koinoshispano` on March 21, 2024 stated that Koinos Group had agreed to manage community donation addresses: one native KOIN address and one USDT address on Ethereum or BSC/BNB Chain.

This was another symptom of the same structural problem. Because Koinos had no large pre-mine, no ICO treasury, and no VC-funded market-making budget, exchange listings and liquidity campaigns required either direct community donations or some new treasury mechanism.

Saleh became a public liaison and discussion point for how those contributions could be used. On October 25, 2024, after the group received proposals from fiat-on-ramp providers, he [asked the donors directly](https://t.me/koinos_community/308436) whether they wanted listing-fund money used to let users buy KOIN inside wallets and dApps with cards or Apple Pay. His framing was explicit: these were the contributors' funds, so the decision belonged to them. On April 17, 2025, he [reported that the listing funds remained untouched](https://t.me/koinos_community/346553), because Koinos Group had paid listing expenses separately as part of its matching commitment.

The donation effort was controversial but important. Supporters saw it as proof that the community was willing to fund growth directly. Critics worried about accountability, who controlled the funds, whether listings were worth paying for, and whether community money should be spent on CEX access instead of infrastructure, liquidity, fiat ramps, or developer grants. Saleh's consultation and later accounting update did not resolve every governance question, but they created a visible record of donor consultation and public accounting around money that had been raised from community members.

## 16.04.2024 - Arkinos Makes Contract Development Faster

On April 16, 2024, community developer Julián González introduced [Arkinos](https://hive.blog/koinos/@jga/arkinos), a tool for creating and deploying Koinos smart contracts quickly. It provided templates for tokens, NFTs, and generic contracts, and was designed to let a developer create a contract and a basic website to interact with it in minutes.

Arkinos connects directly to the January 2024 developer-experience theme. Koinos had a fee-less architecture, but developers still needed tools that made contract creation approachable. Telegram later shows developers asking Julian how Arkinos handled authorization and reporting projects built with Cursor and Arkinos, which suggests it was used as practical tooling rather than only announced as a demo.

## 17.04.2024 - Veive Turns Adriano's Wallet Work into a Modular Smart-Account Framework

One year after first asking the community whether Koinos had a smartphone wallet, Adriano [introduced Veive](https://t.me/koinos_community/256226). Konio had addressed the missing mobile interface; Veive aimed at the deeper onboarding problem: an authentication and authorization framework based on Koinos smart accounts and WebAuthn, so an application could offer passkeys, programmable permissions, and sponsored execution without asking a new user to understand mana, transaction fees, or seed phrases.

Veive was not simply a renamed wallet. Adriano later described it as the general modular framework and Sovrano as one payment-oriented implementation built on top of it. The [public GitHub organization](https://github.com/veive-io) reflects that architecture: separate modules for execution, hooks, allowances, mnemonic and WebAuthn signing, signature and multisignature validation, and eventually OpenID. This was one of the ecosystem's clearest community-built experiments in account abstraction.

Adriano summarized the intended combination in May: ["koinos: zero fees + veive: smart wallet passkey = New world"](https://t.me/koinos_community/266696). His proposed examples ranged from games and private businesses to public administration and voting. Those examples were a product thesis, not evidence that all of those systems shipped. The concrete contribution was the reusable smart-account design and its open modules; the broader institutional use cases remained ambitions.

## 06.05.2024 - Steve Coordinates the Koinos Cluster v2.0.3 Upgrade

On May 6, Steve [announced Koinos cluster v2.0.3 directly to node operators](https://t.me/koinos_community/260316). The release improved recovery from failed transactions during block production, detected nonce conflicts when transactions were submitted, and added a mempool RPC that wallets and dApps could use to display pending mana more accurately. He also warned operators to blacklist the new block-proposal RPC on public nodes, told them to update their configuration, and answered the immediate operational question with an unambiguous recommendation: all nodes should upgrade.

This is a representative Steve milestone because it connects three audiences that are often separated in blockchain projects. The underlying work concerned block production and RPC security; the user-facing effects were fewer confusing nonce and mana errors; and the public message converted the release into concrete instructions for independent operators. His community value was not only architectural authorship, but making core changes deployable outside Koinos Group.

## 13.05.2024 - Kuku Games Opens Live KOIN Prediction Pools

Adriano's current public profile identifies **Kuku Games** as a personal project: a decentralized price-prediction prototype on Koinos. Telegram shows [live BTC/USD prediction-pool entries using KOIN on May 13](https://t.me/koinos_community/262280), and the following day Adriano [said he was working heavily on both Veive and Kuku](https://t.me/koinos_community/262697) while helping other developers when possible. By May 18 he had outlined a wider games, token, NFT, airdrop, and onboarding roadmap. The live prediction pools were the shipped portion; the later roadmap should be recorded as a plan rather than assumed to have been completed.

Kuku matters as a product experiment because it put KOIN into a simple consumer loop rather than another infrastructure screen: choose a market direction, enter a time-bounded pool, and settle the prediction. It later became an important test case for Adriano's frictionless-wallet thesis. By January 2025 Kuku was integrating Sovrano, and in May Adriano said it was the only dApp then ready for the new authentication flow.

The ownership history needs precision. Adriano's profile and his 2024 activity support identifying him as Kuku's original creator and developer, but in April 2025 he [explicitly said he was no longer its owner](https://t.me/koinos_community/347396). As of this July 2026 review, the public Kuku site returned a not-found response and its former GitHub organization no longer resolved. Kuku therefore belongs in Adriano's contribution record as a working prototype and early integration partner, not as a continuously maintained product under his control.

## 2024 - Ecosystem Becomes Concrete: dApps, Wallets, and Explorers

During 2024, the official Koinos website and community channels began showing a more recognizable ecosystem. Projects such as Kollection, KoinDX, Koinos Blocks, Koiner.App, KoinCity, Kondor, Kuku Games, Veive, and Sovrano represented different parts of the stack:

- **Kollection** as an NFT marketplace;
- **KoinDX** as a decentralized exchange on Koinos;
- **Koinos Blocks** as a block explorer;
- **Koiner.App** as an explorer, network dashboard, portfolio tracker, and indexed GraphQL data service;
- **KoinCity** as a token launchpad with staking and social interaction;
- **Kuku Games** as a KOIN price-prediction experiment;
- **Veive** as modular smart-account infrastructure;
- **Kondor** and **Sovrano** as wallets for users and dApps.

This mattered because a layer-one without an ecosystem remains abstract infrastructure. Wallets, DEXs, marketplaces, explorers, and launchpads made Koinos usable.

Andrew Levine had made a related point at the end of 2023: the first-year Koinos dApps were built by community developers with no grants, weak tooling, and poor documentation. That public criticism is important context. It was not simply a promotional claim that Koinos had an ecosystem; it was also an admission that early builders were operating without the support structure that most developer platforms need.

## 20.06-29.08.2024 - Saleh Hawi Becomes a Public KoinDX Contributor

On June 20, 2024, Saleh spoke in the KoinDX community as part of the project, [describing approaches from venture investors](https://t.me/koindx/14218), the redesign of KOINDX tokenomics, private and public sale plans, vesting, and the need to finance development and marketing. In the following weeks, he discussed internal product decisions, integrations, liquidity-pool presentation, API work, and collaboration with other dApps. This provides a practical date by which his role had moved beyond general Koinos advocacy into KoinDX product and business operations.

The wider ecosystem formally acknowledged that role on August 29. In [A message from Steve](https://medium.com/koinosnetwork/a-message-from-steve-33ad9f685b8b), Koinos Group CEO Steve Gerbino named Ederaleng, Dokterkraakbeen, and Saleh as the community members who had delivered KoinDX. The same announcement said Koinos Group would invest directly in KoinDX, assist with liquidity, partnerships, and joint marketing, and collaborate on the KOINDX token launch.

Saleh's importance in this phase was connective rather than purely technical. Ederaleng remained the principal developer, while Saleh translated product decisions for users, coordinated commercial and listing conversations, organized campaigns, gathered feedback, and relayed incidents to the developer. That division of labor helped a small community DEX operate as a user-facing product rather than only as deployed contracts.

## 29.06.2024 - Nicknames Become More Flexible

On June 29, 2024, community developer Julián González published a Nicknames update that allowed the linked address to differ from the nickname owner. This made Nicknames more useful for profiles, token identities, and project addresses, not only for simple personal account naming.

This sits naturally after the broader ecosystem section: as dApps and tokens appeared, identity and addressing became more important. Nicknames were part of making the ecosystem legible.

## 09.07.2024 - Vortex Enters Public Testing

On July 9, 2024, Koinos Network published [Vortex Bridge Public Testing Now Live!](https://medium.com/koinosnetwork/vortex-bridge-public-testing-now-live-f7d2166d415a). Vortex opened public testing on Koinos Harbinger and Ethereum Sepolia.

Vortex was presented as a native bridge between Koinos and Ethereum, inspired by Wormhole but adapted to Koinos and its fee-less model. At launch, users were expected to bridge KOIN, USDT, and ETH. The goal was clear: more ETH and USDT on KoinDX, and more KOIN available on Uniswap.

The design used independent guardian nodes: five of seven guardians had to validate deposits before assets could be bridged to the destination chain. The post also mentioned future improvements such as WalletConnect on Koinos, automatic claiming, an admin portal, and expansion to other chains.

On Telegram, Vortex appeared even before the official post as one of the most anticipated catalysts. On May 25, 2024, `@koinoshispano` summarized that Koinos Group had announced a bridge called Vortex. In July 2024, KoinCity groups were already discussing how Chainge and Vortex would coexist.

## July-December 2024 - MiXiBo Expands KoinCity into a Broader Token Platform

KoinCity's most intensive product phase came during the second half of 2024. MiXiBo described it as the result of nearly two years of development and repeatedly shipped in public while also answering support questions. In July he [integrated KoinDX market data and Kondor multi-account support](https://t.me/Koincity/4809), added privacy-preserving session metrics, and began preparing paid subscriptions. His first short measurement window recorded 50 unique sessions and 1,000 page views in 20 hours; useful evidence of a live product, but also of the limited audience that would later constrain its economics.

The platform expanded into market pages, direct buy-and-sell flows, staking information, project promotion, free and premium service tiers, and partner API keys. The API-key model [let integrators create and read their own launchpads and receive part of the revenue](https://t.me/Koincity/5585). In August MiXiBo removed the up-front token-creation charge from a free package so projects could launch with less initial risk. In October he released a [two-minute no-code token flow](https://t.me/Koincity/7003), then added quick fair-launch presets and [pre-deployed vanilla contracts](https://t.me/Koincity/7072). Selected V2 work, including the redesigned launchpad list and funding-volume display, was backported into the live V1.

MiXiBo was also the operator. When public endpoints caused problems, he synced and moved KoinCity to [its own Koinos node on the same server as the dApp](https://t.me/Koincity/5040). In November he handled a physical-server migration and then [brought premium services online from a second server in New York](https://t.me/Koincity/7806). This is why his contribution should not be reduced to writing contracts: he combined frontend, backend, integrations, node operation, hosting, pricing, marketing, moderation, and direct user support in one maintainer role.

One September incident exposed an important governance boundary. After a discussion around the apparently abandoned WAR project, MiXiBo [unlocked and sold its liquidity](https://t.me/Koincity/6189), proposed returning the remaining KOIN proportionally, and retained a stated maintenance fee. Community members objected that the platform operator should not decide a project's fate or override the meaning of locked liquidity. Later that day MiXiBo restored the LP, apologized, and accepted the decentralized norm with the concise rule: [“your setup, your project, your rules.”](https://t.me/Koincity/6233) The episode should not be framed as a theft allegation; its historical value is that it revealed KoinCity's operational power, provoked a governance challenge, and ended with the maintainer reversing course.

The limits of the record matter too. MiXiBo discussed a larger V2 with wallet charts, bubble maps, and KoinCity as a single aggregation point for Koinos dApps. In December he also said he planned to migrate KoinCity contracts to Solana. Some V2 interface elements reached V1, but no surviving evidence establishes that the complete V2 or the Solana migration launched. They belong to the roadmap, not the shipped-feature list.

## July-November 2024 - Community Communication Also Means Guardrails

Communication work was not only marketing. It also meant helping users distinguish real community channels from scams and keeping public material circulating after official communication became thinner.

Carlos Welele had been performing this work well before the period named in the heading. In April 2023 he was already identifying and reporting imitation Koinos channels. During a wave of impersonation in November, he gave newcomers one of his most repeated security rules: [“NOT A SINGLE ADMIN will EVER DM you.”](https://t.me/koinos_community/206107) This mattered because scammers were copying administrator names and avatars, then opening private conversations with users who had just asked for wallet or claim help.

On July 1, 2024, Welele escalated the campaign by listing five fake Koinos groups and asking users to report each one. His warning was deliberately unambiguous: [“IF YOU GET ADDED TO A GROUP THAT LOOKS LIKE THE OFFICIAL BUT TALKS ABOUT A MIGRATION ITS A FAKE GROUP.”](https://t.me/koinos_community/277230) He also continued routine moderation: deleting context-free promotions, warning repeat spammers, banning obvious spam accounts, and reminding users to initiate conversations with verified administrators themselves. On November 24, he shared KoinSocials material back into the main community channel, connecting moderation with the other half of his contribution—keeping legitimate information circulating.

These are small actions compared with protocol releases, but they belong in the chronology because a small chain needs social hygiene as much as it needs software. Welele's repeated warnings created recognizable rules that newcomers could remember, while his day-to-day moderation helped preserve the main Telegram group as a technical and community channel rather than allowing it to become an unfiltered token-promotion room.

Saleh performed a similar guardrail role around KoinDX. On September 7, 2024, he [warned that unofficial tokens were appearing in users' wallets](https://t.me/koinos_community/293143), stressed that KOINDX had not yet launched, and told users not to interact with unknown tokens or contracts until the official contract address was announced. Later that month, he [acknowledged that he held administrator rights](https://t.me/koinos_community/296331) in the main Koinos group and explained that he was deliberately avoiding using those rights to promote KoinDX until the moderation guidelines were clear. Together, those messages show why his moderation role mattered: he combined product knowledge with caution about scams, conflicts of interest, and the limits of an administrator's authority.

Andrew's formal role changed during this period. On August 29, 2024, [Steve Gerbino became CEO of Koinos Group and Andrew moved into the Chief Communications Officer position](https://medium.com/koinosnetwork/a-message-from-steve-33ad9f685b8b). In September, Andrew [drafted public Telegram guidelines and invited community comments](https://t.me/koinos_community/296337). He also [distributed reusable promotional copy and UTM-tagged links](https://t.me/koinos_community/297527) so community outreach could be measured rather than judged only by impressions. This formalized work he had already performed for years: connecting company information, moderation policy, community feedback, and external messaging.

## 29.07.2024 - Koinos Group Deploys 1 Million KOIN to Make Usage Free

On July 29, 2024, Andrew Levine amplified a Koinos Network announcement that Koinos Group had deployed 1 million KOIN to make Koinos easier to use. The idea was to share the mana associated with that KOIN so users and dApps could interact with the chain without first buying tokens or managing resource constraints.

This milestone belongs beside Vortex and KoinosPro because it addresses the same adoption problem from another angle. Koinos could already be fee-less in protocol terms, but users still needed access to mana. A shared resource pool made the "free-to-use" claim more concrete for onboarding, especially for retail users and dApps trying to reduce first-use friction.

It also foreshadows the later institutional problem. Koinos Group was still using its remaining resources to support ecosystem access in mid-2024, but by late 2024 and 2025 the company was stepping back. That made the question of who funds shared infrastructure, liquidity, and user onboarding much more urgent.

Andrew used the deployment as a community-design exercise as well as an announcement. On July 31, he [asked users to identify the likely pain points](https://t.me/koinos_community/287273) for people arriving from Ethereum and Solana and to propose improvements that would make the Koinos experience “blow their socks off.” The message received twenty-five positive reactions and twelve replies. This illustrates his characteristic contribution: he did not design the mana contract itself, but he framed a technical resource as an onboarding experiment and solicited feedback from the people expected to support new users.

## July 2024 - Federation Debate Resurfaces

In July 2024, the Koinos Federation argument resurfaced when a community message pushed back against the claim that the Federation had proposed simply giving newly inflated tokens to Koinos Group to sell to VCs. The reply clarified that the proposal involved a treasury overseen by a committee, potential OTC sales, exchange listings, market making, marketing, developer grants, and vesting terms for a major buyer.

Welele participated in the same debate from a practical funding perspective. On July 29, he argued, [“We should be getting money for devs + marketing + listings”](https://t.me/koinos_community/286813), while also asking how to obtain it without simply printing more tokens. His alternatives included a “marketing Fogata pool” whose production could support liquidity and funding, transparent public donation requests with named budgets, and miners voluntarily converting part of their rewards to support developers. He also committed personally to continue donating to developers such as Julián. The proposal was never a formal treasury design, but it captured the recurring problem clearly: community enthusiasm could not substitute indefinitely for budgets and sustained labor.

Whether one considers that responsible ecosystem funding or unacceptable dilution, it belonged to the same chronological problem as the March donation addresses: Koinos had no large treasury, but it still needed listings, liquidity, grants, marketing, and coordination.

## July-October 2024 - KCS-4 and Safer Token Standards

In 2024, Koinos advanced its contract standards. The official X account discussed KCS-1 as a fee-less token standard, while later roadmap posts described moving KOIN and VHP toward KCS-4.

The technical reason was important: dApps such as Kollection, KoinCity, and KoinDX need safer and more predictable token contracts. If every token introduces a different authorization model or attack surface, automated listings become risky.

On September 27, 2024, Julian Gonzalez explained in `@koinoshispano` that KOIN and VHP had a security weakness or design limitation that made new standards and safer authorization patterns necessary. That Telegram message helps explain why KCS-4 was not cosmetic. It was part of making tokens safer for DEXs, marketplaces, and smart wallets.

## 29.08-08.10.2024 - Steve Becomes CEO and Turns Outreach into a Community Task

On August 29, Steve became CEO of Koinos Group, Michael became CTO, Andrew moved to Chief Communications Officer, and Ron Hamenahem remained COO. Steve organized the immediate strategy around **Accessibility, Visibility, and Outreach**. The same announcement was notable for how much credit it gave outside the company: Julián, Justin, Adriano, MiXiBo, Ederaleng, Dokterkraakbeen, and Saleh were named for the infrastructure and applications they had delivered.

The community-facing side became concrete in October. When Koinos launched its TaskOn community campaign, Steve [warned that new users would arrive in Telegram and Discord](https://t.me/koinos_community/298902), asked members to be courteous and informative, encouraged every dApp team to prepare daily product communications, and summarized the standard he wanted with a memorable line: **“Let's make a professional first impression!”** This was not protocol engineering, but it shows Steve trying to make onboarding a shared responsibility rather than a company broadcast.

## 10.10.2024 - A More Explicit Technical Roadmap

In October 2024, Michael Vandeberg published [Koinos Technical Roadmap](https://medium.com/koinosnetwork/koinos-technical-roadmap-3be811a3dc0e). The roadmap organized priorities such as KOIN/VHP security, mempool v1.5, public snapshots, REST API v1.1, authority-system improvements, client libraries, SDKs, and VM optimizations.

The article also defined Michael's CTO role more precisely. He wrote that he and Steve had co-designed and built Koinos and remained involved in every technical decision, while his new responsibility was to plan the path from a stable protocol to a mature platform for developers and large audiences. He deliberately described the roadmap as a living, resource-constrained document and promised quarterly updates rather than presenting distant targets as guarantees.

This roadmap mattered because it made visible what Telegram often showed in fragments: Koinos was not evolving through one giant launch, but through many layers of small improvements that affect operators, developers, and users.

In Telegram, Michael reduced the developer thesis to a more memorable claim. The REST API and planned VS Code extension were intended to make contract development easier than Ethereum while preserving permissionless, token-free experimentation: [“We are going to have an ecosystem with no barriers”](https://t.me/koinos_community/305277), including a path for a student to experiment and deploy a dApp.

The most important items included:

- security improvements for KOIN and VHP;
- a mempool more tolerant of sequential transactions and nonces;
- public snapshots for faster node recovery and deployment;
- a REST API with better functional parity;
- Python and Go client libraries;
- C, C++, and Rust SDKs;
- WASM optimizations;
- more redundant microservices;
- optimistic execution and dynamic sharding as long-term goals.

## 13.10.2024 - Kondor v1.0.0 Is Released

On October 13, 2024, community developer Julián González published [Kondor v1.0.0 is live](https://hive.blog/koinos/@jga/kondor-v1-is-live). The release added a more mature wallet experience, including NFT display through the Kollection API and account history for token transfers.

Kondor had been important since testnet because Koinos needed a wallet that made fee-less interaction usable. The v1.0.0 release signaled that community wallet infrastructure was maturing alongside DEXs, NFT tools, token launchers, and bridge experiments.

## 13.11.2024 - Sovrano Auth Testnet Begins the Post-Konio Wallet Track

On November 13, 2024, Koinos community channels shared the Sovrano Auth testnet announcement. The first public focus was not simply another wallet screen. It was passwordless account creation, authentication, authorization, and an SDK that developers could begin integrating into dApps.

The same date appears in Discord with more developer detail. A post by `adrihoke` announced that the Sovrano SDK was available for Koinos dApp integration, including account signup, user login, and transaction authorization through redirects. The message said the SDK was still on Harbinger testnet and added that Konio would be phased out in the coming months.

This was the next step in Adriano Foschi's wallet work after Konio. Konio had solved the earlier mobile-wallet gap. Veive and Sovrano moved the problem up a layer: instead of only giving users a mobile wallet, they tried to make smart accounts feel closer to familiar payment and login systems. Adriano later clarified the boundary: Veive was the general modular framework, while Sovrano was a payment and authentication product built with those modules.

That distinction matters. Koinos had always argued for fee-less, familiar user experience, but account abstraction is where that promise becomes practical: recovery, permissions, spending limits, delegated actions, and dApp authorization can be handled through account logic rather than raw key management. As Konio became less maintained after KCS-4, Sovrano became the forward-looking continuation of Adriano's accessibility track. Discord evidence from July 2025 described Sovrano as being in public beta, with social-login support for Google, Twitter, Discord, and Telegram and fee-less asset and identity management.

## 20.12.2024 - Roadmap Update and 2025 Plans

On December 20, 2024, Michael Vandeberg published [Roadmap Update Q4 2024](https://medium.com/koinosnetwork/roadmap-update-q4-2024-e16ba1b3c3ce). The same day, Steve Gerbino published [Koinos Group Update: 2025 is Our Year](https://medium.com/koinosnetwork/koinos-group-update-2025-is-our-year-46c4942e9390).

The technical update acknowledged real node and block producer stability problems and explained that roadmap work had been reorganized to address them. This is important because it shows a production network facing production problems: not only aspirational planning, but maintenance, debugging, and reliability work.

Michael had documented the feedback loop three weeks earlier. On November 29, he [thanked Julián and Frank for sending logs and testing fixes](https://t.me/koinos_community/316393), saying that collaboration with community developers had exposed several P2P bugs behind unstable projects and services. The same report covered sequential-nonce handling, KCS-4 readiness, and early REST API work. This is one of the clearest examples of his community function: operator evidence did not end as chat support; it became a coordinated node release plan.

Steve Gerbino's update summarized the ecosystem more strategically: after mainnet, Koinos had wallets, explorers, a DEX, an NFT marketplace, and a token launcher. In other words, the basic pieces for testing fee-less Web3 were in place.

That post also connected KOIN/VHP improvements to the trust needed by Kollection, KoinCity, and KoinDX to automate listings and reduce manual contract review.

## December 2024-Early 2025 - Andrew Leaves Koinos Group as the Company Starts Stepping Back

One essential part of the post-mainnet story is that Koinos stopped being, in practice, a project led by Koinos Group. On December 11, 2024, Andrew Levine [announced in `@koinos_community` that he was leaving the company](https://t.me/koinos_community/319735) after discussions with his co-founders. He drew a deliberate line between the two relationships: “just because I will no longer be an employee of Koinos Group, that doesn't mean I am moving on from Koinos.” He offered to advise the company, told everyone building on Koinos that he remained available to help, and ended by saying that although he was technically leaving Koinos Group, he was “not going anywhere.” The announcement received twenty-eight heart and thirteen sad reactions.

Andrew's public X posts sharpen the chronology. On December 19, 2024, he wrote that he was no longer the CEO of Koinos Group and was taking a step back to evaluate Koinos from outside the company. He also asked whether leaving Koinos Group meant leaving Koinos, implying that the answer was no. On January 9, 2025, he added that he was no longer working at Koinos Group but remained bullish on Koinos and still a large shareholder in the company he had run for four years.

In April 2025, Andrew [repeated that he was open to advising or mentoring anyone building on Koinos](https://t.me/koinos_community/348611). In May, he [clarified that his departure was a personal decision](https://t.me/koinos_community/351504) connected to the birth of his third child and a desire to dedicate time to his family, not a rejection of the technology or of the community's builders. His visible Koinos participation became much lighter after that period as he shifted attention toward his Meaning Matters work.

This evidence supports calling Andrew an independent community advocate and potential mentor after December 2024, but not a later operational maintainer or Foundation leader. He was not listed among the founding members of the Koinos Community Foundation, and the infrastructure responsibilities that followed were taken on by other developers and operators. During 2025, community conversations also became more explicit that Koinos Group was no longer the center of the project and that some of its core architects were moving toward a new project, Respublica.

This changes the tone of the chronology. Until then, many milestones could be read as company execution on top of a decentralized network. After this transition, the harder question became: if the company that launched the chain no longer leads it, can the community maintain the chain, infrastructure, and narrative by itself?

## 02.01.2025 - Sovry Takes the Sovrano Model into Telegram

On January 2, 2025, Adriano [released Sovry in beta](https://t.me/koinos_community/324196), a Telegram wallet based on Sovrano. It let the community test passkey accounts, token transfers, account attachment and recovery flows inside a familiar messaging application. On January 17 he [made the Veive and Sovrano repositories public](https://t.me/koinos_community/326423), turning the design from a product claim into inspectable modules and an integration SDK.

The beta then exposed a real inclusion problem. In May, Adriano [reported that Sovrano was technically ready](https://t.me/KoinosTCB/1138) but that its Auth0 social-login dependency blocked users in countries such as Iran. He [replaced it with a self-hosted identity broker](https://t.me/KoinosTCB/1232), said the beta was ready on May 19, and [opened a tester group on May 20](https://t.me/KoinosTCB/1264). At that point Kuku was the only dApp he described as ready for Sovrano, while broader adoption still depended on other dApp teams integrating the SDK.

The continuation was not sustained. In July 2025 Adriano said his planning work was stalled until Koinos had a working proposal system and Vortex; in November he [said family commitments and a shift toward AI development had taken him away from Koinos](https://t.me/koinos_community/362978). The public repositories preserve a serious technical experiment, but the product line did not become the maintained successor to Konio that its roadmap envisioned. That ending is part of the milestone: Adriano repeatedly built prototypes that pushed Koinos UX forward, but integration capacity, funding, legal overhead, and his available spare time limited their durability.

## 04-19.01.2025 - Frank Defines Koiner V2 as an Ecosystem Data Provider

At the beginning of 2025, Frank described the unfinished Koiner V2 in unusually concrete terms. On [January 4](https://t.me/koinos_community/324652), he said that V2 would store every operation and event, decode them whenever possible, and allow specialized indexers to process that shared history in batches. A failed or upgraded indexer could restart from a selected block instead of forcing the entire chain to be indexed again. On [January 19](https://t.me/koinos_community/326788), he added another important goal: unlike V1, which indexed only irreversible blocks, V2 was intended to track the newest 60 blocks and roll back its indexed state when necessary. That would make live dApp and market activity visible without sacrificing consistency during short reorganizations.

This was a significant technical plan. It treated Koiner as a reusable data engine for the whole ecosystem: one expensive, reliable ingestion layer, followed by smaller application-specific indexers and APIs. Adriano Foschi noted that Sovrano already relied on Koiner for data that the standard REST API did not provide. Frank also recognized a possible overlap with KoinosPro and considered paid “Koiner Pro” subscriptions, potentially financed initially through an NFT presale.

The same messages exposed the sustainability problem before the shutdown. Frank [said he was personally paying hundreds of dollars per month](https://t.me/koinos_community/324647) and had already disabled testnet indexing and the staging environment to reduce costs. Migrating to V2 would temporarily double infrastructure expenditure, while the work required to make indexing accurate, reliable, scalable, and extensible remained substantial. The product had become shared ecosystem infrastructure, but it still depended financially and operationally on one independent developer.

## 28.01.2025 - Koinos.fun Shows AI, NFTs, and X-Based Onboarding

On January 28, 2025, Koinos launched [Koinos.fun](https://www.koinos.fun/), a web app that let users create AI-generated NFTs, tag a friend on X, and send the NFT without paying fees or first buying a token. The app connected several Koinos promises in one simple flow: AI-generated content, NFT minting, social sharing, automatic wallet creation, feeless transfer, and later visibility on Kollection.

Crypto Briefing described the launch as an app for minting an NFT and sending it to a friend on X, reporting that it had onboarded more than 1,000 blockchain users in less than four hours. The article also explained the key user experience: a user generated an NFT with a generative AI model, sent it over X, and the app created the recipient's blockchain wallet in the background.

This was one of the clearest reference applications Koinos produced. Koinos had often claimed that blockchain should feel like the internet: no fees, no wallet ceremony, no token-first barrier. Koinos.fun made that argument concrete by using an existing social network as the distribution layer and Koinos as the invisible settlement layer. In the Telegram announcement, the app was framed as "Feeless, Frictionless, Familiar" and credited Ron Hamenahem / `@brklyn8900`, Justin Welch / `@justinw_t`, and chain architects Steve Gerbino and Michael Vandeberg.

The later community reaction was mixed but historically important. Some users saw Koinos.fun as the project's best "proof of technology": a real consumer app where the act of using it also became marketing. Others argued that the launch was too easy to misunderstand, and that many outside users confused the X-based NFT claim flow with spam or scams. That tension belongs in the chronology. Koinos.fun demonstrated a genuine breakthrough in onboarding design, but it also showed that even a strong product demo needs trust, distribution, explanation, and timing.

## 06.02.2025 - Manuscript Extends Wallet Usability

On February 6, 2025, community developer Julián González published [Manuscript: Koinos wallet that supports hardware wallets](https://hive.blog/koinos/@jga/manuscript). Manuscript was presented as a wallet approach supporting Ledger and Trezor, Ethereum-compatible wallet management through tools such as MetaMask, natural-language transactions, and Koinos Nicknames.

Chronologically, Manuscript belongs before the foundation crisis because it shows that community software work was still moving forward while the institutional center was weakening. Together with Kondor, Nicknames, and Arkinos, it pushed Koinos toward a more usable platform rather than a raw protocol.

## 10.02.2025 - Community Communication Continues Outside Core Development

On February 10, 2025, community member Alberto, Telegram `@transeunte`, described his non-technical contribution to Koinos in the main community channel. He wrote that he maintained a blog in English and Spanish covering ecosystem news, ran an X account that tried to keep up with Koinos updates every day, had created Koinos-themed NFTs on koinos.fun and other KOIN-related collections, and had made a video about Koinos.

That message matters because it captures a form of work that is easy to miss in a technical chronology. After Koinos Group's visibility weakened, the project needed people who could keep the story understandable across languages, social networks, videos, and non-developer audiences. Transeunte's work was not protocol engineering, but it was part of the community's attempt to keep Koinos visible and legible.

Telegram also shows other Spanish-speaking community members participating in this broader communication layer. `@nomad100x` discussed Koinos Garden activity in December 2024 and later, in June 2025, discussed the need for a foundation and a funding mechanism that could help developers ask for resources. This should not be overstated as a formal role, but it shows that community communication was not a single account or campaign. It was a distributed conversation across people who translated, questioned, shared proposals, warned about risks, and tried to keep the project understandable while the operating center was shifting.

## 20.02-13.03.2025 - Michael Ships the REST Beta and KCS-4 Reaches Governance

On February 20, Michael [announced `beta.api.koinos.io`](https://t.me/koinos_community/334929), a new REST API beta that could prepare unsigned write operations, report pending-to-irreversible transaction status, support KCS-4 and KCS-5, and generate contract-specific Swagger documentation. He explicitly asked developers to report bugs in the public repository. This delivered a usable part of the October roadmap and reduced the need for dApp developers to interpret ABI files or work directly through the lower-level Protobuf interface.

On March 12, he [submitted the KCS-4 governance proposal](https://t.me/koinos_community/341589) with the proposal ID, transaction, contract uploads, and proposal-generation source available for review. The next day Steve [explained the governance mechanics](https://t.me/koinos_community/341700): only block producers cast the formal vote, but pool users could inspect their operator's position and move VHP to a pool aligned with their preference. He also explained how replacing KOIN and VHP with KCS-4 implementations would improve their interaction with smart wallets and allowances.

Steve then made the decentralization objective explicit: [“I invite developers to familiarize themselves with core code”](https://t.me/koinos_community/341790), pointing to starter issues and encouraging contributors to introduce themselves and ask questions. Together, these interventions show the two architects at their most useful to the community: Michael shipped and exposed the technical artifacts; Steve explained participation and tried to widen the set of people capable of maintaining the core.

## 11.04-09.05.2025 - MiXiBo Downsized KoinCity to Keep It Alive

KoinCity encountered the same structural problem that would close Koiner later that month: a useful ecosystem service was still being personally subsidized by one developer. On April 11, MiXiBo [said the server would be offline for several days](https://t.me/Koincity/8679) because he was short of funds. The next day he explained that the roughly $140 monthly bill was too much personally and that he would seek a $30-$50 alternative. His reason for resisting a shutdown was emotional as well as technical: [“we put heart and soul into koincity.”](https://t.me/Koincity/8741)

On May 4 he [specified the migration](https://t.me/Koincity/8844): from a €147 server to a €29 server, with backend-domain changes and frontend checks for KCS-4. KoinCity returned on May 9, slower but functional. The price oracle was down, so KOIN prices no longer updated automatically; MiXiBo asked users to report bugs while he looked for a workaround. This was not a clean product relaunch. It was a cost-controlled survival mode that preserved access while accepting lower performance and unresolved dependencies.

MiXiBo also linked the product's sustainability to the wider developer-funding failure. In his own account, he had tried to organize an alliance in which nine or ten Koinos developers would contribute ten hours per week for 10,000 KOIN per month, but Koinos Group did not accept the proposal. The message does not establish whether that figure was total or per developer, and no independent record found in this review verifies the negotiation. It should therefore be treated as MiXiBo's testimony, not as a confirmed company decision. It nevertheless explains his growing conclusion that he should build elsewhere and preserves an early attempt to turn fragmented volunteer labor into a paid developer collective.

The contrast with Koiner is useful. Frank closed a data service whose operating costs and workload had become unsustainable. MiXiBo instead kept cutting KoinCity's infrastructure cost and brought it back online again in August. Both cases point to the same ecosystem weakness: product quality did not create enough users, revenue, grants, or institutional support to fund the people and servers behind public-facing applications.

## 30.04.2025 - Frank Announces the Closure of Koiner

On April 30, 2025, Frank [announced the closure of Koiner](https://t.me/koinos_community/349832) in the main Koinos community group. The announcement drew a strongly emotional response, including twelve sad reactions, six expressions of thanks, and four crying reactions. By early May, community groups were reporting that the service was offline.

Frank's explanation was not that Koiner had failed technically. He had made a significant personal financial investment and expected wider Koinos adoption eventually to support a sustainable paid data service. That adoption timeline did not materialize, while the immediate future of the ecosystem had become uncertain. He still considered a robust data provider essential, but concluded in a follow-up that Koinos first needed applications capable of generating growth: Koiner was important, but it would not itself create that growth. Development of the new version stopped “for now,” with the possibility of revisiting it only if the outlook for Koinos improved.

The closure therefore had several connected causes:

- **Recurring infrastructure costs:** an independently operated node, indexing services, API infrastructure, and a large PostgreSQL database cost hundreds of dollars per month.
- **Unfunded development and maintenance:** Frank was not only paying servers; he was designing the indexer, maintaining the database and GraphQL service, correcting data, supporting consumers, and building a replacement architecture.
- **Insufficient adoption:** the expected number of dApps, users, and paying API customers did not arrive quickly enough to support a commercial data product.
- **An unproven revenue model:** a small number of voluntary subscriptions or donations could not fund both operating costs and the developer's time. Koiner Pro and the NFT-presale idea remained proposals rather than validated businesses.
- **Strategic uncertainty:** Koinos Group was stepping back, KoinosPro occupied adjacent infrastructure territory, and the ecosystem's short-term direction was unclear.
- **Human sustainability:** the concentration of a public ecosystem dependency in one person had become personally exhausting.

This distinction is important. Koiner was not discontinued because Frank did not value Koinos or because the product was poor. It was discontinued because a high-quality public data platform had become a privately subsidized public good without the adoption, institutional backing, or revenue required to sustain it.

## March-May 2025 - Steve Publicly Separates a New-Network Strategy from Koinos

The institutional transition became visible before Koinos Group's formal wind-down. On March 7, Steve [proposed launching a different blockchain](https://t.me/koinos_community/336660) that would retain lessons and components from Koinos—WebAssembly, the resource system, Proof of Burn, StateDB, and account abstraction—but remove governance, in-band upgrades, Protobuf, and the microservice architecture in pursuit of speed and outside funding.

On May 1, he [described the work as “not a reset, but an evolution”](https://t.me/koinos_community/350041), reported an internal figure of 150,000 transactions per second, and said that a funded launch was intended to recognize existing KOIN holders through an airdrop. He also cautioned that the project was early and funding uncertain. The response was visibly divided—32 positive and 12 negative reactions on the update—which reflects why this is an important community milestone rather than only a new-product announcement.

This direction later became associated with **Respublica**, but it must not be retroactively presented as the Koinos technical roadmap. It was a separate network proposal led by Steve and Michael after the original company's ability and willingness to continue developing Koinos had weakened. For supporters it preserved accumulated engineering lessons and offered a new financing path; for critics it looked like the founding architects redirecting attention away from the chain whose community was being asked to maintain it. Both readings shaped the 2025 transition.

## 15.05.2025 - Frank Clarifies Why Koiner V1 Will Not Return

On May 15, Frank gave a more personal and definitive [follow-up explanation](https://t.me/koinos_community/353328). He stressed that paying the servers was only part of the problem. The larger issue was the time and effort required, the lack of a clear path to profitability, and uncertainty about the network's future. A handful of subscriptions would not have been sufficient.

He said that **Koiner V1 would not return**. V2 was unfinished, and he did not want to resume such a demanding project at that time. Frank explained that he had finished a period of working **60 to 70 hours per week**, that building Koiner had been draining, and that he was finally enjoying free time again. He also clarified why a cheap restart was unrealistic: the public Koinos API did not have enough performance for Koiner's workload, so the service required its own node, and the large PostgreSQL database was itself a major operating cost.

That clarification also defines what a serious revival would require. Paying one server bill would not be enough. A successor would need funded maintenance, a performant node, a large indexed database, monitoring and recovery processes, a sustainable service model, and a technical handoff that distinguishes the available V1 code from the unfinished V2 design.

The loss became more visible over the following months. Operators missed the network section; users missed APY, supply, market-cap, top-holder, and distribution views; developers remembered the API as particularly valuable; and stale Koiner links eventually had to be removed from ecosystem and market-data listings. In January 2026, community members were still referring to the explorer V2 that “never came.” This aftermath confirms the scale of Frank's contribution: when Koiner disappeared, the ecosystem did not lose only a website. It lost a shared observability and data layer that had quietly supported users, operators, dApps, and external listings.

## May-June 2025 - The Community Foundation Takes Shape

In May and June 2025, `@KoinosTCB` discussed the need for a community entity, internal roles, and a GitHub project to organize future direction. This is where the later Koinos Community Foundation begins to appear as an operational answer rather than only a roadmap item.

Adriano made one of the first attempts to turn that discussion into a visible work system. On June 3 he [created a `koinos-foundation` GitHub organization and Foundation Planning board](https://t.me/koinos_community/355994), based on an earlier document shared by Edje. He populated a backlog and proposed short Agile iterations, priorities, milestones, issue-based discussion, planning meetings, reviews, and retrospectives. The practical objective was captured in his own phrase: **"deliver value quickly and adapt to changes."** The board did not yet have an on-chain mandate or voting system, so it should be understood as an organizing prototype, not the legal or formally announced Foundation.

His coordination extended into Vortex preparation. On June 27, after speaking with Justin, Ederaleng, Saleh, and other contributors, Adriano [listed four immediate bridge-launch problems](https://t.me/KoinosTCB/2538): find liquidity, recruit seven validators, decide whether the validator interface needed more work, and identify a legal entity that could support the bridge and application-store publication. He volunteered as a validator and offered to help with Kollection's Sovrano integration. This was project coordination and operational volunteering; Ederaleng and the bridge developers still owned the technical implementation.

The limitations were explicit. On July 26 Adriano [said the GitHub tasks were no longer being updated](https://t.me/KoinosTCB/2937) and that work appeared stalled until the proposal system and Vortex were functional. When the Koinos Community Foundation was formally announced in September, he was not listed among its members. His historical contribution belongs in the pre-formation phase: creating an early backlog, pushing the community from discussion toward assigned work, and helping surface the concrete dependencies that had to be solved before Vortex could launch.

The funding discussion had already become concrete in March. Welele summarized his view of what a sustainable ecosystem actually required with the line, [“a project has to be devs + sales + marketing + communication + operations”](https://t.me/koinos_community/342252). In feedback on an early funding proposal, he argued that a 25 KOIN submission fee was too low at then-current prices, suggested relating it to market conditions or the requested amount, and proposed limiting how much of the daily budget any one project could receive. His example cap was 20 percent. These were informal suggestions rather than adopted rules, but they show community members already thinking about spam resistance, capture, budget concentration, and accountability before the Foundation and KFS became formal milestones.

The initial answer was imperfect but real. Maintenance groups formed, roles were discussed, basic services were preserved, and the chain remained alive despite less visibility, lower market confidence, and fewer resources.

## 04.09.2025 - Koinos Community Foundation Is Announced

On September 4, 2025, a Koinos Community Foundation announcement circulated in the community. It framed the foundation as stewardship, not a takeover, and described the goal as guiding Koinos from a company-led blockchain toward a community-governed project with visible execution.

The first version of the announcement, posted in the Koinos Community Working Group at 18:40 UTC, said the Foundation was a volunteer-led initiative and listed current members: **brklyn8900**, **Ederaleng**, **Julián González**, **Justin W**, **motoengineer**, **pgarcgo**, and **Atb 3tb**. A revised version later that evening kept the same core list, with the members signing as the Koinos Community Foundation.

The announcement did not assign rigid individual job titles. It defined the Foundation's functions instead: network operations, interoperability through Vortex, community funding through KPS/KFS, and custodianship of domains, repositories, and social channels where possible. In practical terms, the named people represented different community capabilities: coordination and communication, liquidity and bridge work, core tooling and governance software, NFT and standards experience, mining-pool and account infrastructure, public testnet / infrastructure work, and operational support.

This is important for the chronological treatment of community developers such as Julián González, Ederaleng, Justin W, motoengineer, and pgarcgo: by this point their roles had moved beyond individual tools into the broader maintenance and coordination layer.

## 14.09.2025 - Vortex Bridge Goes Live

The official Koinos website placed Vortex launch in Q3 2025, and Telegram confirms the practical launch window. On September 14, 2025, `@KoinosTCB` and `@thekoinosarmy` announced that Vortex Bridge was live for Ethereum and Koinos. In Koinos Army, the launch message was practical rather than ceremonial: it linked the bridge, warned users not to grant infinite token approvals, and explained the thin-liquidity reality on KoinDX and Ethereum-side routes.

Vortex has to be understood as the successor to the Chainge disappointment. The earlier Chainge integration had been celebrated as cross-chain access, but by 2026 community discussions described it as a major loss event and strategic mistake. Vortex represented a more controlled route for bridging native KOIN and wrapped assets.

## 15.09-20.10.2025 - Koinos Group Handoff, Tokens, Taxes, and the Community Buyout Question

The transition raised an immediate and sensitive question: what would happen to the KOIN and VHP still held by Koinos Group?

On September 15, 2025, a message signed by Steve Gerbino and Michael Vandeberg was shared in `@thekoinosarmy`. It announced that Koinos Group would begin winding down operations, that its market-making agreement had ended on September 13, that CEX delistings were possible, and that domains and GitHub ownership were being transferred to the community. The same message also asked users in the Koinos Group Fogata pool to withdraw their VHP before the pool stopped receiving returns.

The [same message in the main community channel](https://t.me/koinos_community/360591) framed Vortex as evidence of “the resolve of the community to take their destiny into their own hands.” Steve and Michael said their nodes and block producer would shut down by the end of the month, but that they were transferring repositories and domains and would support the community through the transition. This was their final major operational intervention as Koinos Group leaders: not a successful continuation plan, but a concrete warning and handoff that let pool users and maintainers prepare.

The most important part concerned the remaining company tokens. The message said that roughly **10 million KOIN/VHP** were not committed to anything, but that the tokens belonged to investors under Koinos Group's investment agreements when the company dissolved. Because of that, Koinos Group said it could not simply give those tokens away to another entity.

The tax explanation was also important. The message stated that Koinos Group had incurred taxable gains during market making and might need to sell KOIN cheaply in order to offset those gains with losses and reduce its IRS bill. If that happened, the company said it would sell KOIN at an extreme discount to prominent developers and community members who had demonstrated commitment and promised to use the tokens for the growth and development of the Koinos ecosystem.

That turned the remaining Koinos Group supply into both a risk and an opportunity. The risk was obvious: a large holder exiting could create market pressure or uncertainty. The opportunity was that, if handled carefully, those tokens could move from a defunct company balance sheet into the hands of active community builders.

Michael continued answering the uncomfortable details in October. He [explained the priority of SAFE investors and the directors' fiduciary constraints](https://t.me/koinos_community/361721), said the Foundation would receive the first opportunity to buy, and clarified the intended criterion: [deploy KOIN to improve the ecosystem, “not stack bags”](https://t.me/koinos_community/361727). On October 20 he warned contributors [not to wait for the legal dissolution](https://t.me/koinos_community/361882), because the company was already effectively shut down and the accounting could continue into the following year; proposals that could use the new funding system should move forward independently.

Telegram discussions the next day show how the community tried to reason through this. Some members argued that Koinos Group had few natural buyers, while the most interested buyers were already inside the community. Others suggested that the Koinos Community Foundation could act as the community representative and buy the tokens if Koinos Group made an offer, ideally at a very low or symbolic price. The group also discussed waiting until Koinos Group finished calculating taxes, expenses, and costs before making assumptions.

Those discussions also exposed governance concerns. If a foundation or community group received a large amount of KOIN, what should it do with it? Members discussed the need for a community communication, a rough consensus process through Telegram polling, and a multisig account to improve credibility outside the immediate working group. Even this was treated cautiously: Telegram sentiment could be manipulated, and a multisig would still require trusted signers and clear rules.

This episode is important because it compressed several Koinos tensions into one problem: investor rights, tax reality, market pressure, foundation legitimacy, community custody, and the unresolved question of whether Koinos could turn the remains of Koinos Group into a community-controlled asset rather than a final overhang.

## 14.10.2025 - Koinos Fund System Goes Live

On October 14, 2025, community developer Julián González published [The Koinos Fund System is Live!](https://hive.blog/koinos/@jga/the-koinos-fund-system-is-live). The post described KFS as a decentralized and transparent funding mechanism approved through governance. It changed inflation from a 2% flow to block producers into a 4% split: 2% for block producers and 2% for the Koinos Fund.

This was one of the clearest examples of Koinos moving from company-led funding hopes toward on-chain community funding. Telegram cross-checks show community members thanking `@joticajulian` for the KFS work, asking him KFS questions, and later asking him to review proposals after earlier proposal problems.

## 25.10.2025 - Donations Fund Moves to Community Control

On October 25, 2025, `@koinos_community` announced that the Koinos Community Donations Fund had been handed over to the Koinos Community Foundation for transparent community-run management.

The transferred funds were reported as 14,230 USD in stablecoins and 127,610.22 KOIN donated to the Koinos Funding System for future developer and ecosystem grants. The stablecoins were intended as initial liquidity for Koinos trading pairs, beginning on Solana and later expanding to other ecosystems.

## 04.11.2025 - vKOIN Reaches Solana Through Wormhole

On November 4, 2025, the community shared that vKOIN was live on Solana via Wormhole as part of an approved KFS proposal. This sits after the KFS launch because it shows the fund starting to support practical liquidity and multichain expansion.

The Koinos website also showed routes to acquire KOIN or wrapped representations through DeFiLlama DEX routes on Ethereum and Base, Jupiter on Solana, and KoinDX as the native DEX. It warned that long-term holders should bridge back to native KOIN on Koinos to avoid bridge and wrapped-token risk. In the same period, community developer and operator `@ederaleng` became a key visible maintainer of the liquidity layer, including KFS liquidity work and multichain expansion proposals.

## 15.12.2025 - Koinos Group Shutdown Is Summarized Publicly

On December 15, 2025, `@thekoinosarmy` summarized the situation directly: Koinos Group had shut down, Steve Gerbino and Michael Vandeberg were building Respublica, and the Koinos Community Foundation would take over core maintenance of Koinos Chain.

This turned the earlier 2025 drift into a public reality. From this point, the community was no longer only supplementing Koinos Group. It was responsible for keeping the chain, infrastructure, and narrative alive.

## 30.12.2025 - MiXiBo Moves On from Active KoinCity Development

At the end of 2025, MiXiBo [said he would try to keep the KoinCity website online](https://t.me/Koincity/9010) but was moving to a new project. He tied that decision directly to the departure of the core Koinos team and his loss of confidence in the chain's future after roughly two years of KoinCity development. This was a maintainer transition, not evidence that every contract or service stopped that day: MiXiBo had already restored the site several times and was still describing uptime as a goal.

The archival problem is sharper. In August 2025 MiXiBo [confirmed that no open-source KoinCity API was available](https://t.me/Koincity/8989). His GitHub account preserves several token, lock, minting, and NFT contracts, but not the complete frontend, backend, data services, deployment configuration, or operational history. As of this July 13, 2026 review, `koincity.com` no longer resolved in DNS, even though the current Koinos ecosystem page still listed KoinCity and linked to that domain. The official listing should therefore be read as historical recognition, not proof that the service is currently reachable.

KoinCity remains important precisely because its ending was not a simple product failure. It shipped a substantial no-code creation and launch workflow, processed real community projects, integrated much of the early Koinos application layer, and survived repeated infrastructure disruptions through personal spending and smaller servers. But it also concentrated a private application stack, operational authority, and recurring costs in one person. When adoption and funding did not match the workload—and the founding company withdrew—the contracts alone were not enough to preserve the full product.

## January-April 2026 - Delistings and the Shift Toward DEX Liquidity

The negative side belongs in the chronology as well. KOIN suffered a clearly unfavorable price evolution, liquidity weakened, centralized exchange visibility deteriorated, and the community had to improvise.

MEXC became the most visible example. In January 2026, `@koinos_community` explained that the Koinos Community Foundation could not reach new terms with MEXC to maintain the KOIN listing that had been active since 2022. In March and April 2026, the main group and Koinos Army openly discussed the damage caused by delisting, low activity, the difficulty of obtaining a replacement CEX, and the need to move tokens to native wallets or DeFi routes.

That deterioration forced a change in priorities. Instead of depending on centralized exchanges with low volume and delisting risk, the community pushed DEX liquidity and wrapped pairs:

- vKOIN/KOIN liquidity on Ethereum, Solana, and Base;
- Vortex as the route back to native KOIN;
- deeper DEX pools as an alternative to weak CEX listings.

On January 26, 2026, `@koinos_community` discussed roughly 5.1 million KOIN in combined ETH + SOL liquidity for wKOIN/vKOIN, more than Chainge historically had and backed 1:1. In February 2026, the community discussed a KFS proposal to expand Koinos to Base, deploy wKOIN through Wormhole, and launch a Base liquidity pool.

This shift did not erase the damage caused by price decline and delistings, but it did show adaptation: Koinos moved from seeking validation through centralized exchanges toward building its own multichain DEX liquidity paths.

The Chainge loss discussion fed directly into this shift. Community members argued that Koinos needed open, transparent pools on Ethereum, Solana, and Base, rather than depending on opaque wrapped assets or a single bridge provider. Whether every accusation against Chainge is ultimately proven or not, the practical consequence was clear: Koinos' liquidity strategy became more defensive, more multichain, and more community-operated.

## February-April 2026 - Foundation Work Becomes Operational

In 2026, the Koinos Community Foundation role became more concrete. On March 7, 2026, `@koinos_community` explained that the foundation was, for the moment, a group of users trying to keep infrastructure alive: seed nodes, API nodes, block producers, Vortex validators, websites, and domains. On April 19, the same idea was summarized bluntly: when Koinos Group shut down, the community formed the Koinos Community Foundation to maintain the blockchain voluntarily.

This is central because it grounds decentralization in operational labor. Maintaining a blockchain does not only mean voting. It means paying servers, running nodes, fixing failures, answering users, sustaining APIs, maintaining domains, and coordinating volunteers.

Julian's role also appears here in operational form. In February 2026, after a previous KFS proposal caused chain problems, community members asked him to review another proposal. On February 18, `pgarcgo` reported that starting chain microservices with a `merkle-fallback` tag, using a patch provided by `@joticajulian`, started both producers and the seed node. That is not a polished product launch, but it is exactly the kind of maintenance work a small post-company network depends on.

## 29.05.2026 - `api.koinos.io` Is Decentralized Behind a Load Balancer

On May 29, 2026, `@koinos_community` and `@thekoinosarmy` shared an ecosystem update: the public testnet was available again, and the "official" API was wired through a Cloudflare load balancer across multiple node operators.

That public update followed several days of working-group setup. On May 24, `pgarcgo` asked whether anyone had a running testnet, and Atb 3tb replied that the existing node had no faucet yet but could be made public under a Foundation domain. On May 25, `pgarcgo` announced that the testnet was up and running with a README at `github.com/pgarciagon/koinos_testnet`, then added that the faucet bot was also live as `@KoinosTestnetFaucetBot`. The practical endpoint was later confirmed as `https://testnet.koinosfoundation.org/jsonrpc`.

This matters more than it may appear. If `api.koinos.io` depends on a single server or operator, developers and users still face a single point of failure. By putting the API behind a load balancer with multiple operators, Koinos moved closer to its own narrative: not only decentralized consensus, but public infrastructure less dependent on one entity.

The same message invited more volunteers to join and told them to contact `@joticajulian` if they wanted to connect nodes to the load-balanced API setup. Infrastructure decentralization is not a final state. It is a process: the more independent operators support API nodes, seed nodes, and producers, the less fragile the ecosystem becomes.

The same May 29 update also mentioned EVM compatibility progress: a Uniswap V2 fork was already running on the Koinos testnet and could be used with MetaMask by adding the network. That connected the infrastructure work to a broader strategic question: should Koinos remain a distinct VM-only ecosystem, or should it also offer an EVM-compatible path for existing Solidity and Ethereum tooling?

## 03-13.06.2026 - Community Consultant `@interfecto` Publishes a Koinos EVM Engine Proof of Concept

On June 3, 2026, community consultant and developer `@interfecto` created the public GitHub repository [`interfecto/koinos-evm-engine`](https://github.com/interfecto/koinos-evm-engine). The repository describes the project as a proof-of-concept EVM execution layer for Koinos: `revm` compiled to WASM and deployed as a single Koinos contract, with a JSON-RPC relay that lets MetaMask, Foundry, `cast`, and Ethereum-style transactions drive tested paths.

The headline result was ambitious: unmodified Uniswap V2 and V3 contracts running on Koinos and producing byte-exact results against a reference EVM for the exercised paths. The project also included a local relay, UI experiments, guided quests, an EVM explorer, and documentation explaining that the system was a research artifact, not a production network.

On June 13, `@interfecto` shared the repo in `@koinos_community` and linked small testnet quests at `koinosscan.com/evm/quest.html`. The message explicitly warned that the work was partially reviewed, experimental, and not production-ready, but it showed that MetaMask-based interaction with Koinos testnet was possible.

This milestone matters because it broadens the post-Koinos Group roadmap. The community was not only keeping old infrastructure alive; it was also exploring whether Koinos could become a fee-less execution layer for familiar EVM applications. Even if the proof of concept never becomes mainnet software, it belongs in the chronology as one of the first concrete attempts to make Koinos interoperable at the developer-tooling layer, not only through token bridges.

## 26.06.2026 - Kondor 2.0 Returns

On June 26, 2026, `@koinos_community` announced Kondor v2 for beta testing. Kondor had been one of the most important wallets in the Koinos ecosystem since testnet, and its return carried both practical and symbolic weight.

Practically, users needed a maintained wallet to interact with native Koinos, move funds from MEXC or multichain routes, and use Vortex with a compatible wallet. Symbolically, after months of uncertainty, delistings, and the Koinos Group transition, Kondor v2 looked like a sign that foundational ecosystem pieces were returning.

On July 2, a user summarized the mood in the main group: "Some really foundational stuff coming back slowly. Kondor v2 as well... Really great to see." It was not an institutional announcement, but it captured the moment well: recovery was not coming from a grand campaign, but from basic infrastructure coming back online.

## 09.07.2026 - `koinos-chain v1.5.2` Fixes Fast Sync State Reconstruction

In 2026, the story moved further toward operational maturity. The main Koinos repository shows releases in the 2.x family. For example, `v2.1.0` introduced REST in the main package, `v2.2.0` included P2P stability improvements and support for sequential nonce transactions, and `v2.2.1` updated components such as `koinos-chain`.

On July 9, 2026, `koinos-chain v1.5.2` was published to fix a fast-sync state reconstruction problem. The issue involved how a node reconstructed historical state from receipts and deltas, potentially ending in errors such as `block previous state merkle mismatch` when reindexing, restoring, or syncing.

This fix reinforced something essential for any blockchain: producing blocks is not enough. Nodes must be able to replay and verify history reliably. The investigation around the issue shows a more mature network in which operators, developers, and maintainers worked together to isolate deep failures, reproduce them, and ship a fix.

The same day, `@koinos_community` shared a Spanish operator-facing explanation: `koinos-chain v1.5.2` fixed an important fast-sync state issue, added earlier Merkle-root verification, and safely handled two historical anomalies. That turned a technical release into an operational instruction for producers, API nodes, and community infrastructure maintainers.

## Summary

The Koinos story has several distinct phases:

1. **Steem era:** fee-less social blockchain UX proves that normal users can use blockchain if the product is simple.
2. **Pre-Koinos Discord roots:** OpenSeed, encrypted messaging, app interoperability, and Steem UX debates create the practical background for Koinos.
3. **Steem governance crisis:** exchange-backed governance capture, DPoS criticism, and the Hive fork shape Koinos' decentralization goals.
4. **OpenOrchard and Koinos Group:** the former Steem developers organize to build a new chain from scratch, with Andrew Levine acting as founding CEO and principal public interface, and Steve Gerbino and Michael Vandeberg co-designing the protocol while repeatedly explaining, reviewing, and operating it in public.
5. **Early internationalization:** Koinos en español / `@koinoshispano` appears during the ERC-20 era as an early Spanish-speaking community route.
6. **Fair launch:** KOIN is mined as an ERC-20 without ICO or pre-mine, while Discord debates gas costs, proof frequency, premine risk, and Cafe concentration.
7. **Testnet era:** microservices, Kondor and claim UX, Roamin's AssemblyScript/TypeScript smart contract path, fbslo's KoinoSwap joining forces with KoinDX, governance, KPoB, mana, tax concerns, and modular architecture take shape.
8. **Mainnet:** Koinos launches on November 5, 2022, amid claim, wallet, exchange, and liquidity questions, then completes initial decentralization on December 5, 2022.
9. **Snapshot and distribution debate:** KoinosScan claims data and the Cafe cluster show why fair launch did not eliminate concentration questions.
10. **First mainnet year:** Koiner.App, BurnKoin, Fogata, KAP, The Koin Press, motoengineer videos, Koinos Army, Kollection, the Wachsman/HackerEarth campaign, the first in-band upgrade, Adriano's Konio launch and ecosystem-wide onboarding campaign, VonLooten and Ederaleng's KoinDX, Saleh Hawi's exchange-listing campaign, KoinosPro, Koinos Polls, Nicknames, MiXiBo's no-code KoinCity launchpad, Chainge, Rhubarb, and the Koinos Federation debate show the chain moving from launch to usage.
11. **Governance proof:** Koinos demonstrates in-band upgradeability in 2023, and Julian Gonzalez's system-call proposal becomes the first community-driven forkless governance upgrade in 2024.
12. **Developer and user tooling:** KCS-2/Kollection, Arkinos, KCS-4 work, Kondor, Konio, Kuku Games, Veive, Sovrano, Sovry, Manuscript, Michael's REST API, and ecosystem dApps make the chain more usable. Adriano's sequence is especially instructive: mobile wallet, smart-account modules, consumer dApp, Telegram wallet, and social-login SDK all attacked different layers of the same onboarding problem.
13. **Community communication:** Andrew Levine's explainers, developer liaison work, campaigns, and public channel guidelines; Koinos en español; Koincast; Transeunte; `@nomad100x`; Saleh Hawi's onboarding and scam warnings; and Carlos Welele's bilingual explanations, Koinos Socials workflows, moderation, and fake-group reporting show that translation, amplification, and social guardrails became shared infrastructure.
14. **Bridge failure and market pressure:** Chainge-related losses, price decline, MEXC delisting, weak CEX presence, Saleh's listing coordination, and the community listing fund force a DEX and multichain liquidity strategy.
15. **Koinos Group transition:** after Koinos Group deploys resources such as the 1 million KOIN free-usage pool and ships Koinos.fun as a strong reference app for AI-generated NFTs over X, Andrew leaves but offers to mentor builders; Steve and Michael redirect their main effort toward the separate Respublica concept; and their September handoff transfers repositories, domains, and operational responsibility to community developers and infrastructure maintainers.
16. **The Koiner sustainability lesson:** Frank's explorer grows into a shared indexing and GraphQL data layer, but closes after personally funded infrastructure, 60-70-hour workweeks, insufficient adoption, and an unproven paid-service model make it unsustainable.
17. **The KoinCity product and sustainability lesson:** MiXiBo expands a no-code launchpad into an integrated token platform, runs its node, servers, backend, and support, accepts a community correction over operator control, and repeatedly downsizes hosting before moving on when adoption, funding, and confidence in the core project fail to sustain active development.
18. **Token overhang and tax reality:** the remaining Koinos Group tokens become a question of investor agreements, IRS losses, discounted sales, and possible community custody.
19. **Community infrastructure:** Adriano's early Foundation backlog and Vortex coordination precede the formal KCF; KFS, Vortex validators, API nodes, seed nodes, public testnet, and domains then become community responsibilities.
20. **Infrastructure decentralization and experimentation:** `api.koinos.io` moves behind a Cloudflare load balancer with multiple node operators, while `@interfecto` explores EVM compatibility on testnet.
21. **Rebuild signals:** Kondor v2 and `koinos-chain v1.5.2` show practical maintenance and recovery.

Koinos remains small compared with major layer-ones, but its history is unusually rich. It carries lessons from Steem, the Hive split, fair launch experiments, fee-less UX, modular blockchain architecture, company-led development, community-led maintenance, market failure, and infrastructure rebuilding.

That history is part of the asset. The chain is not only a repository, a whitepaper, a ticker, or a set of smart contracts. It is the cumulative result of decisions, mistakes, launches, arguments, migrations, integrations, transactions, and people. Every block after mainnet, every wallet created, every dApp deployed, every community proposal, every public disagreement, and every recovery effort added something that cannot be copied by cloning a GitHub repository.

That is why remembering the chronology matters. Koinos can inspire forks, competitors, experiments, and new implementations. But Koinos itself is the chain that went through this exact path. It exists because of its founding developers, its early miners, its users, its critics, its community builders, its infrastructure operators, and the transactions that now form its permanent record.

The central question is no longer only whether Koinos has interesting technology. It clearly does. The harder question is whether a community can keep that technology alive, useful, liquid, and legible after the founding company steps back. Since 2025, that has become the real test.

If that test succeeds, Koinos will not matter simply because it was another blockchain that could have been created. It will matter because it became a blockchain with continuity, memory, and ownership distributed across the people who kept building when there was no easy script to follow.

## Sources

- Original Hive chronology: [Algunos hechos importantes narrados en orden cronologico](https://hive.blog/koinos/@koinosenespanol/algunas-hechos-importantes-narrados-en-orden-cronologico)
- Koinos whitepaper: [Koinos whitepaper](https://koinos.io/whitepaper)
- KoinosScan: [KOIN claims and distribution analysis](https://koinosscan.com/claims)
- OpenOrchard / Koinos origin posts linked from the original Hive chronology
- Koinos official team page: [Who We Are](https://koinos.io/team)
- Koinos Network: [Koinos Update: Governance, Randomness, New CTO!](https://medium.com/koinosnetwork/koinos-update-governance-randomness-new-cto-58ee359f8ac7)
- Koinos Network: [Introducing the EASY FORK](https://medium.com/koinosnetwork/introducing-the-easy-fork-testnet-update-81e7d09a1016)
- Koinos Developer Hub: [AssemblyScript SDK](https://docs.koinos.io/developers/as-sdk/)
- GitHub: [koinos/koinos-sdk-as](https://github.com/koinos/koinos-sdk-as)
- Koinos Network: [Verifiable Randomness, DEXs, and tutorials - KoinoSwap joins KoinDX](https://medium.com/koinosnetwork/verifiable-randomness-dexs-and-tutorials-9a8c7bcfbc35)
- Web Archive: [fbslo introduces KoinoSwap, December 14, 2021](https://web.archive.org/web/20211214004941/https://twitter.com/fbsloXBT/status/1470555266307567620)
- Telegram: [KoinoSwap reports its core contract finished, May 10, 2022](https://t.me/koinos_community/81583)
- Web Archive: [KoinoSwap announces fbslo is joining KoinDX, May 16, 2022](https://web.archive.org/web/20220516214735/https://twitter.com/KoinoSwap/status/1526318305098797056)
- GitHub: [fbslo](https://github.com/fbslo)
- Koiner: [Koiner.App: Accelerating Decentralization by Making Koinos Blockchain Data Accessible](https://medium.com/@koiner/koiner-app-accelerating-decentralization-by-making-koinos-blockchain-data-accessible-45e6df75551a)
- GitHub: [`koiner-dao/koiner-backend` historical V1 URL, now unavailable](https://github.com/koiner-dao/koiner-backend)
- Telegram: [Frank confirms Koiner V1 is open source](https://t.me/koinos_community/307533)
- Telegram: [Frank describes Koiner V2 indexing architecture](https://t.me/koinos_community/324652)
- Telegram: [Frank announces the closure of Koiner](https://t.me/koinos_community/349832)
- Telegram: [Frank explains the costs, workload, and why V1 will not return](https://t.me/koinos_community/353328)
- BurnKoin: [Burn Koin](https://burnkoin.com/)
- GitHub: [lukemwillis/koinos-burn-pool](https://github.com/lukemwillis/koinos-burn-pool)
- motoengineer: [Burn KOIN, Earn KOIN. The first and simplest Proof of Burn mining pool](https://hive.blog/koinos/@motoengineer/burn-koin-earn-koin-the-first-and-simplest-proof-of-burn-mining-pool)
- Kui He: [BurnKoin Operator Fee Update](https://medium.com/@kuixihe/burnkoin-operator-fee-update-d27388499940)
- Kui He: [Announcing KAP Whitepaper: Free Blockchain Access For All](https://medium.com/@kuixihe/announcing-kap-whitepaper-free-blockchain-access-for-all-8adaa0a3db1f)
- Kui He: [Everything You Need to Know About KAP's April 19th Launch + Roadmap](https://medium.com/@kuixihe/everything-you-need-to-know-about-kaps-april-19th-launch-roadmap-1dcf8fa4ef77)
- The Koin Press: [Podcast archive](https://podcast.thekoinpress.com/)
- The Koin Press: [All episodes](https://podcast.thekoinpress.com/episodes)
- YouTube: [motoengineer / `@kuixihe`](https://www.youtube.com/@kuixihe)
- Spotify: [Koincast](https://open.spotify.com/show/4iINZLo8nDtC1YUHBdhR8o)
- Spotify: [Koincast interview with Ederaleng, CTO of KoinDX](https://open.spotify.com/episode/6omwPLm22w7V8UkSs7JRaZ)
- X indexed search result from [BabyCervantes / `@cervanteshive`](https://x.com/cervanteshive) mentioning `@pgarcgo` launching Koincast at `koincast.io`
- Telegram: [Welele reports early enthusiasm in the Spanish Koinos group, April 2021](https://t.me/koinos_community/8520)
- Telegram: [Welele volunteers Spanish subtitles and argues for accessible content](https://t.me/koinos_community/77315)
- Telegram: [Welele compiles reusable Koinos topics and X threads](https://t.me/koinos_community/168489)
- Telegram: [Welele calls non-developers to participate through Koinos Socials](https://t.me/koinos_community/191362)
- Telegram: [Welele organizes tagged community-marketing materials](https://t.me/koinos_community/204881)
- Telegram: [Welele reports the Koinos Socials preview bot](https://t.me/koinos_community/208073)
- Telegram: [Welele warns that legitimate administrators will not initiate private messages](https://t.me/koinos_community/206107)
- Telegram: [Welele warns users about fake migration groups](https://t.me/koinos_community/277230)
- Telegram: [Welele proposes community funding routes for developers, marketing, and listings](https://t.me/koinos_community/286813)
- Telegram: [Welele summarizes the operational components of a sustainable project](https://t.me/koinos_community/342252)
- Telegram: [Welele proposes safeguards for an early community-funding design](https://t.me/koinos_community/342801)
- DevNTell: [Koinos Account Protocol](https://www.devntell.com/podcast/koinos-account-protocol)
- Developer DAO: [DevNTell - Koinos Account Protocol](https://blog.developerdao.com/devntell-koinos-account-protocol)
- Andrew Levine on X: [KAP/Kondor fee-less UX demo](https://x.com/andrarchy/status/1681005550128046080)
- Koinos Network: [Snapshot FAQs by Andrew Levine](https://medium.com/koinosnetwork/snapshot-faqs-54568ae581c8)
- Telegram: [Andrew thanks testnet-era users for questions and critical feedback](https://t.me/koinos_community/22924)
- Telegram: [Andrew proposes rotating community social-media talking points](https://t.me/koinos_community/123915)
- Telegram: [Andrew describes Koinos Group as inventor but not controller of Koinos](https://t.me/koinos_community/159536)
- Telegram: [Andrew discusses expert recommendations and participation through Koinos Polls](https://t.me/koinos_community/188642)
- Telegram: [Andrew offers to connect community developers with Rhubarb Media](https://t.me/koinos_community/238426)
- Telegram: [Andrew asks the community to identify onboarding pain points after the 1 million KOIN deployment](https://t.me/koinos_community/287273)
- Telegram: [Andrew publishes draft guidelines for the Koinos Telegram community](https://t.me/koinos_community/296337)
- Telegram: [Andrew distributes measurable community-marketing links and sample messages](https://t.me/koinos_community/297527)
- Telegram: [Andrew announces his departure from Koinos Group but not from Koinos](https://t.me/koinos_community/319735)
- Telegram: [Andrew offers mentoring to anyone building on Koinos](https://t.me/koinos_community/348611)
- Telegram: [Andrew explains the personal reason for stepping down and affirms belief in community builders](https://t.me/koinos_community/351504)
- Koinos Group: [Koinos Group in 2023](https://medium.com/koinos-group/koinos-group-in-2023-f1b597839c79)
- Koinos Group on X: [KoinosPro developer-infrastructure post](https://x.com/TheKoinosGroup/status/1678865248164478976)
- Kollection: [Kollection Launch Announcement](https://kollection.medium.com/kollection-launch-announcement-8ca9e67273f9)
- GitHub: [kollection-nft/marketplace](https://github.com/kollection-nft/marketplace)
- GitHub: [KCS-2 NFT Collection Standard](https://github.com/koinos/koinos-contract-standards/blob/master/KCSs/kcs-2.md)
- Koinos Network: [A message from Steve](https://medium.com/koinosnetwork/a-message-from-steve-33ad9f685b8b)
- Telegram: [Steve announces cluster v2.0.3 and gives node-operator instructions](https://t.me/koinos_community/260316)
- Telegram: [Steve asks the community to make a professional first impression during TaskOn onboarding](https://t.me/koinos_community/298902)
- Telegram: [Steve explains KCS-4 governance and the role of pool participants](https://t.me/koinos_community/341700)
- Telegram: [Steve invites developers to contribute to the Koinos core](https://t.me/koinos_community/341790)
- Telegram: [Steve proposes a separate high-performance blockchain strategy](https://t.me/koinos_community/336660)
- Telegram: [Steve describes the new network as an evolution and discusses a possible KOIN-holder airdrop](https://t.me/koinos_community/350041)
- Telegram: [Steve and Michael announce the Koinos Group wind-down and community handoff](https://t.me/koinos_community/360591)
- Telegram: [Michael explains decentralized KOIN claiming](https://t.me/koinos_community/96211)
- Telegram: [Michael thanks Julián and Frank for logs and testing behind P2P fixes](https://t.me/koinos_community/316393)
- Telegram: [Michael describes the no-barriers developer-tooling objective](https://t.me/koinos_community/305277)
- Telegram: [Michael launches the new REST API beta](https://t.me/koinos_community/334929)
- Telegram: [Michael publishes the KCS-4 governance proposal and review artifacts](https://t.me/koinos_community/341589)
- Telegram: [Michael explains the legal and accounting constraints on Koinos Group tokens](https://t.me/koinos_community/361721)
- Telegram: [Michael says remaining KOIN should improve the ecosystem rather than accumulate in private holdings](https://t.me/koinos_community/361727)
- Telegram: [Michael tells community proposals not to wait for Koinos Group's legal dissolution](https://t.me/koinos_community/361882)
- Telegram: [Saleh identifies himself as part of the Koinos exchange group](https://t.me/koinos_community/223583)
- Telegram: [Saleh Hawi announces the Koinos exchange-listing campaign](https://t.me/koinos_community/224158)
- Telegram: [Saleh reports completed exchange paperwork and listing fees](https://t.me/koinos_community/276860)
- Telegram: [Saleh reports chain, DEX, and market-data listing requests](https://t.me/koinos_community/286110)
- Telegram: [Saleh discusses KoinDX investor interest and token-sale planning](https://t.me/koindx/14218)
- Telegram: [Saleh warns users about fake KOINDX tokens](https://t.me/koinos_community/293143)
- Telegram: [Saleh discusses the limits of using his Koinos administrator rights to promote KoinDX](https://t.me/koinos_community/296331)
- Telegram: [Saleh asks listing-fund donors about funding fiat ramps](https://t.me/koinos_community/308436)
- Telegram: [Saleh reports that the community listing funds remain untouched](https://t.me/koinos_community/346553)
- Telegram: [Saleh relays a KoinDX wallet fix from Ederaleng](https://t.me/koindx/20839)
- Telegram: [Saleh continues answering KoinDX user questions in September 2025](https://t.me/koindx/20885)
- Koinos Group on X: [20 dApps and 100,000 users campaign](https://x.com/TheKoinosGroup/status/1663975840151896066)
- Andrew Levine on X: [Wachsman marketing campaign](https://x.com/andrarchy/status/1672255967159779328)
- Andrew Levine on X: [HackerEarth hackathon strategy](https://x.com/andrarchy/status/1677338793404235776)
- Andrew Levine on X: [first successful forkless upgrade](https://x.com/andrarchy/status/1668803627237134337)
- Koinos Group on X: [DeGov in-band upgrade vote](https://x.com/TheKoinosGroup/status/1668804432052785153)
- Andrew Levine on X: [JGA Mining Pool governance participation](https://x.com/andrarchy/status/1681786592795541504)
- KoinDX: [KoinDX Announcement - original team, KNDX, governance, and launchpad](https://medium.com/@koindx/koindx-announcement-574aff8f3541)
- The Koin Press: [VonLooten - KoinDX](https://music.amazon.ca/podcasts/cd786eb4-bb23-4b5d-9b3e-40d8db6d157b/episodes/e5a104c8-dafe-4ec3-afd9-993839c05929/the-koin-press-vonlooten---koindx)
- Teing: [Community-developer interview with VonLooten and other Koinos builders](https://medium.com/@teingvvv/%E9%95%BF%E6%96%87%E7%89%88-%E5%92%8C%E7%A4%BE%E5%8C%BA%E5%BC%80%E5%8F%91%E8%80%85%E8%81%8A%E4%B8%80%E8%81%8A-%E4%BB%96%E4%BB%AC%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9-koinos-d6c404d32e20)
- Telegram: [KoinDX launch congratulations to VonLooten and Ederaleng](https://t.me/koinos_community/183430)
- Telegram: [June 2024 discussion of VonLooten leaving KoinDX and Ederaleng continuing as main developer](https://t.me/koinos_community/276060)
- Koinos Group: [ANN: KoinDX & Koinos Group Partnership](https://medium.com/koinos-group/ann-koindx-koinos-group-partnership-3916ebe57405)
- KoinDX: [KoinDX Docs](https://docs.koindx.com/)
- KoinDX: [KoinDX Mana Fountain](https://medium.com/@koindx/koindx-mana-fountain-98253a10dc2c)
- GitHub: [konio-io/konio-mobile](https://github.com/konio-io/konio-mobile)
- Konio: [Welcome in our Medium space!](https://medium.com/@konio_io/welcome-9b49af842775)
- GitHub: [Adriano Foschi](https://github.com/adrianofoschi)
- Telegram: [Adriano announces Konio's first public mobile release](https://t.me/koinos_community/174532)
- Telegram: [Konio becomes open source](https://t.me/koinos_community/174613)
- Telegram: [E-Time backs Konio while it remains open source](https://t.me/koinos_community/182422)
- Telegram: [Konio reaches the Apple App Store](https://t.me/koinos_community/183819)
- Telegram: [Konio named a HackerEarth runner-up](https://t.me/koinos_community/190739)
- Telegram: [Konio's major October 2023 wallet update](https://t.me/koinos_community/193815)
- Telegram: [Konio ecosystem onboarding giveaway announcement](https://t.me/koinos_community/201228)
- Veive: [Introduction article](https://medium.com/@veiveprotocol/veive-protocol-13c0f6f2a670)
- Telegram: [Adriano introduces Veive](https://t.me/koinos_community/256226)
- GitHub: [Veive modular smart-account repositories](https://github.com/veive-io)
- GitHub: [Sovrano authentication SDK](https://github.com/sovrano-io/auth-sdk)
- Telegram: [Sovry Telegram wallet beta release](https://t.me/koinos_community/324196)
- Telegram: [Veive and Sovrano repositories made public](https://t.me/koinos_community/326423)
- Telegram: [Adriano creates the early Koinos Foundation planning board](https://t.me/koinos_community/355994)
- Telegram: [Adriano coordinates Vortex launch dependencies](https://t.me/KoinosTCB/2538)
- Telegram: [Adriano explains his November 2025 pause from Koinos](https://t.me/koinos_community/362978)
- Koinos Discord authenticated searches in the Koinos server, accessed on July 11, 2026: early `#general` searches for `Steem`, `DPoS`, `OpenOrchard`, `ODESI`, `Koinos whitepaper`, `no ICO`, `premine`, `fair launch`, `KOIN mining`, `mining begins`, `proof frequency`, `Infura`, `Ropsten`, `Uniswap`, `gas price`, `big miners`, `cafe`, `0x1337cafe`, `testnet launch`, `easy fork`, `smart contracts API`, `docker testnet`, `Kondor`, `governance contract`, `Proof of Burn`, `mana`, `AssemblyScript`, `Roamin`, `BurnKoin`, `snapshot complete`, `mainnet tomorrow`, `claim koin`, and `MEXC`; later ecosystem searches for `Konio`, `Sovrano`, `Veive`, and `Adriano`
- MiXiBo: [The Koincity Project: Launchpad for the Koinos Blockchain](https://mixibo.medium.com/the-koincity-project-launchpad-for-the-koinos-blockchain-b7ed343e0229)
- GitHub: [MiXiBo profile and KoinCity repositories](https://github.com/MiXiBo)
- GitHub: [KoinCity Token Lock](https://github.com/MiXiBo/Koincity-Token-Lock), [Standard Token](https://github.com/MiXiBo/Koincity-Standard-Token), [Kollection NFT Contract](https://github.com/MiXiBo/Koincity-Kollection-NFT-Contract), and [Koinos Army NFT Contract](https://github.com/MiXiBo/Koinos-Army-Nft-Contract)
- Koinos official site: [KoinCity ecosystem listing](https://koinos.io/ecosystem)
- The Koin Press: [Episode 56 - MiXiBo / KoinCity](https://www.podcasts-online.org/the-koin-press-1600323819)
- Telegram: [KoinCity's reported early launchpad results](https://t.me/koinos_community/212542), [automatic token deployment](https://t.me/koinos_community/216997), and [automatic liquidity burning](https://t.me/koinos_community/228637)
- Telegram: [KoinCity KoinDX/Kondor integration and privacy-preserving metrics](https://t.me/Koincity/4809), [partner API keys](https://t.me/Koincity/5585), and [quick launches with pre-deployed contracts](https://t.me/Koincity/7072)
- Telegram: [MiXiBo moves KoinCity to its own node](https://t.me/Koincity/5040) and [restores premium services after a server move](https://t.me/Koincity/7806)
- Telegram: [WAR liquidity intervention](https://t.me/Koincity/6189) and [MiXiBo's reversal and apology](https://t.me/Koincity/6233)
- Telegram: [April 2025 KoinCity hosting-cost explanation](https://t.me/Koincity/8741), [May low-cost-server migration](https://t.me/Koincity/8844), and [return to service](https://t.me/Koincity/8874)
- Telegram: [MiXiBo's account of the proposed developer alliance](https://t.me/Koincity/8871), [lack of an open-source KoinCity API](https://t.me/Koincity/8989), and [decision to move to another project](https://t.me/Koincity/9010)
- Andrew Levine on X: [Koinos Federation and Jon Rice](https://x.com/andrarchy/status/1715443278202429875)
- Koinos Network: [Chainge integrates Koinos](https://medium.com/koinosnetwork/koinos-goes-cross-chain-57d6e311fa86)
- Andrew Levine on X: [first-year community dApps without grants](https://x.com/andrarchy/status/1735300843086217605)
- Koinos Network: [The Koinos Community is partnering with Rhubarb Media](https://medium.com/koinosnetwork/the-koinos-community-is-partnering-with-rhubarb-media-a146ddeff309)
- Koinos Network: [Welcome to 2024 Koinos Community!](https://medium.com/koinosnetwork/welcome-to-2024-koinos-community-cb45f1d59cde)
- Koinos Network: [First Koinos Governance Proposal Applied!](https://medium.com/koinosnetwork/first-koinos-governance-proposal-applied-a531dfb2a74e)
- Andrew Levine: [KoinosPro is LIVE](https://andrewlevine.medium.com/koinospro-is-live-a9619f8e93ab)
- Koinos Network: [Vortex Bridge Public Testing Now Live!](https://medium.com/koinosnetwork/vortex-bridge-public-testing-now-live-f7d2166d415a)
- Andrew Levine on X: [1 million KOIN free-usage pool](https://x.com/andrarchy/status/1817937409620783289)
- Koinos Network: [Koinos Technical Roadmap](https://medium.com/koinosnetwork/koinos-technical-roadmap-3be811a3dc0e)
- Koinos Network: [Roadmap Update Q4 2024](https://medium.com/koinosnetwork/roadmap-update-q4-2024-e16ba1b3c3ce)
- Koinos Network: [Koinos Group Update: 2025 is Our Year](https://medium.com/koinosnetwork/koinos-group-update-2025-is-our-year-46c4942e9390)
- Koinos.fun: [AI to NFT Generator](https://www.koinos.fun/)
- Crypto Briefing: [Koinos.fun beats Elon Musk to feeless, tokenless transfers over X social platform](https://cryptobriefing.com/koinos-fun-elon-musk-x-feeless/)
- Andrew Levine on X: [no longer CEO of Koinos Group](https://x.com/andrarchy/status/1869805708222562568)
- Andrew Levine on X: [leaving Koinos Group and future plans](https://x.com/andrarchy/status/1869831897565597735)
- Andrew Levine on X: [no longer working at Koinos Group but still bullish](https://x.com/andrarchy/status/1877464315462361175)
- Koinos official site: [koinos.io](https://koinos.io/)
- Koinos Developer Hub: [docs.koinos.io](https://docs.koinos.io/)
- Julian Gonzalez / @jga: [Hive posts](https://hive.blog/@jga/posts)
- Julian Gonzalez: [Fogata - mining pools for koinos](https://hive.blog/koinos/@jga/fogata)
- Julian Gonzalez: [How to setup a second producer in Koinos Blockchain](https://hive.blog/koinos/@jga/koinos-2-producers)
- Julian Gonzalez: [Is Koinos a decentralized blockchain?](https://hive.blog/koinos/@jga/is-koinos-a-decentralized-blockchain)
- Julian Gonzalez: [Koinos Polls](https://hive.blog/koinos/@jga/polls)
- Julian Gonzalez: [[koinos proposals] Improve security in koinos](https://hive.blog/koinos/@jga/improve-security-koinos)
- Julian Gonzalez: [The new koinos system call is now live in the testnet!](https://hive.blog/koinos/@jga/check-authority-2-testnet)
- Julian Gonzalez: [New Koinos System Call live in the Testnet](https://hive.blog/koinos/@jga/new-koinos-system-call-live-in-the-testnet)
- Julian Gonzalez: [Koinos Nicknames](https://hive.blog/koinos/@jga/nicknames)
- Julian Gonzalez: [Governance proposal in Koinos Mainnet (second try)](https://hive.blog/koinos/@jga/gov-proposal-in-koinos-mainnet-second-try)
- Julian Gonzalez: [The gov proposal has been submitted in Koinos mainnet](https://hive.blog/koinos/@jga/gov-proposal-get-contract-metadata)
- Julian Gonzalez: [New Tool "Arkinos": Create and deploy Koinos contracts FAST](https://hive.blog/koinos/@jga/arkinos)
- Julian Gonzalez: [Kondor v1.0.0 is live](https://hive.blog/koinos/@jga/kondor-v1-is-live)
- Julian Gonzalez: [Manuscript: Koinos wallet that supports hardware wallets](https://hive.blog/koinos/@jga/manuscript)
- Julian Gonzalez: [The Koinos Fund System is Live!](https://hive.blog/koinos/@jga/the-koinos-fund-system-is-live)
- GitHub: [pgarciagon/koinos_testnet](https://github.com/pgarciagon/koinos_testnet)
- GitHub: [interfecto/koinos-evm-engine](https://github.com/interfecto/koinos-evm-engine)
- GitHub: [koinos/koinos releases](https://github.com/koinos/koinos/releases)
- GitHub: [koinos/koinos-chain](https://github.com/koinos/koinos-chain)
- X: [Koinos Network](https://x.com/KoinosNetwork)
- Local Telegram evidence archive: `koinos-telegram-evidence.json`
- Telegram authenticated search: Koinos Community Working Group announcement, message 144 and revised message 182, September 4, 2025
- Telegram authenticated search: Koinos Community Working Group testnet and faucet bot messages, May 24-25, 2026
- Telegram authenticated search: `@koinos_community` EVM compatibility and `interfecto/koinos-evm-engine` messages, May 29 and June 13, 2026
- Telegram authenticated search: Koinos.fun launch announcement, January 28, 2025
- Telegram authenticated search: Koinos.fun community reaction and marketing discussion, January 31 and March 10, 2025
- Telegram authenticated search: Alberto / `@transeunte` bilingual blog, X updates, NFTs, and Koinos video message, February 10, 2025
- Telegram authenticated search: `@nomad100x` Koinos Garden, foundation, and funding-mechanism discussion messages, December 30, 2024 and June 26, 2025
- Telegram authenticated search: `@DeGemsCrew` / Koinos Army hub and NFT collectible messages, April 4-5, 2023
- Telegram authenticated search: Koinos Army / DeGems boundary message, October 6, 2023
- Telegram authenticated search: `@thekoinosarmy` Vortex Bridge launch message, September 14, 2025
- Telegram authenticated search: `@koinoshispano` early Spanish community messages, November 29, December 20, 2020 and January 11, 2021
- Telegram authenticated search: `@pgarcgo` official Spanish-channel references in the main Koinos group, November 14 and December 19, 2021
- Telegram channels: [`@koinos_community`](https://t.me/koinos_community), [`@thekoinosarmy`](https://t.me/thekoinosarmy), [`@DeGemsCrew`](https://t.me/DeGemsCrew), [`@koinoshispano`](https://t.me/koinoshispano), [`@KoinosTCB`](https://t.me/KoinosTCB), [`@Koincity`](https://t.me/Koincity), [`@koindx`](https://t.me/koindx), [`@koinsocials`](https://t.me/koinsocials)
