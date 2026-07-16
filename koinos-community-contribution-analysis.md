# Koinos: análisis cuantitativo de contribuciones comunitarias

Fecha de corte: **2026-07-15**. Todas las fechas de las tablas están expresadas como día UTC.

Este informe responde dos preguntas diferentes:

1. ¿Quién aparece más arriba si se mide solamente el volumen verificable de mensajes de Telegram y Discord, publicaciones en X, artículos y vídeos?
2. ¿Qué personas alcanzan al menos **10 contribuciones** distribuidas en **dos o más días**?

El resultado es un índice de **actividad**, no una medida de calidad, impacto técnico, liderazgo, dificultad ni valor histórico. Un mensaje breve y un artículo de investigación cuentan como una unidad en sus respectivas columnas. Por eso el total sirve para descubrir continuidad y nombres olvidados, pero no debe transformarse por sí solo en una jerarquía de importancia.

## Resultado general

- **14 grupos públicos** revisados de principio a fin.
- **481,192 mensajes humanos** contabilizados tras excluir bots, publicaciones enviadas como canal y acciones de servicio de Telegram.
- **107,405 mensajes humanos en el servidor oficial de Discord** según la búsqueda autenticada por tipo de autor; bots y webhooks quedan fuera.
- **40,862 mensajes de Discord atribuidos exactamente a 13 identidades públicas** mediante búsquedas individuales de autor. El resto del servidor todavía no está desglosado por persona en esta tabla.
- **5,373 IDs humanos** observados antes de retirar cuentas eliminadas sin identidad utilizable.
- **1,405 cuentas eliminadas** excluidas de las listas nominales.
- **3,962 cuentas de Telegram humanas o seudónimas identificables**, más un perfil editorial externo sin correspondencia segura en Telegram.
- **955 personas** cumplen `total combinado >= 10` y actividad verificable en al menos dos fechas.
- **89 perfiles con más de 500 contribuciones** reciben resumen cualitativo: 23 breves, 46 ampliados y 20 en la lista prioritaria de más de 5.000.

La clasificación completa de los 3,963 perfiles está en [`koinos-community-contribution-ranking.csv`](koinos-community-contribution-ranking.csv). La segunda lista también está disponible como [`koinos-community-contributors-10-two-days.csv`](koinos-community-contributors-10-two-days.csv).

## Metodología y límites

### Telegram

Se recorrió el historial íntegro accesible de los siguientes megagrupos públicos. Cada mensaje se unificó por el ID estable del usuario; los cambios de nombre dentro de la misma cuenta no crean personas nuevas. Un mismo usuario activo en varios grupos aparece una sola vez, con el total acumulado.

| Grupo público | Mensajes existentes | Mensajes humanos contados | Primera | Última |
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

No se incluyeron grupos privados ni mensajes directos. Tampoco se publican teléfonos, correos, textos de mensajes ni otros datos personales. Las cuentas que Telegram marca como bot, los remitentes de tipo canal/organización, las acciones de servicio y las cuentas eliminadas sin identidad estable quedan fuera.

### Discord

El servidor oficial de Koinos se consultó con una sesión autenticada y el filtro **tipo de autor: usuario**. La búsqueda global devolvió **107,405 mensajes**, excluyendo bots y webhooks. Discord limita la interfaz a 400 páginas por consulta y aplica límites de frecuencia, por lo que no fue posible producir desde la interfaz un desglose exhaustivo de los 107,405 mensajes por cada miembro del servidor.

La columna `Discord†` contiene recuentos **exactos** solamente para identidades cuyo vínculo público entre Discord y la persona de Telegram ya estaba documentado. Se ejecutó una búsqueda individual por autor, se leyó el recuento total y se ordenaron los resultados por más antiguo y más nuevo para obtener las fechas. En las demás filas, `0` significa **“Discord no inventariado individualmente”**, no “esa persona nunca escribió en Discord”. No se fusionaron nombres parecidos, cuentas abandonadas ni identidades que solo pudieran inferirse.

| Persona | Usuario Discord | Mensajes† | Primera | Última |
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

### X, artículos y vídeos

Las columnas marcadas con `*` son **mínimos verificables dentro del corpus documental de la cronología**, no una descarga total de toda la vida de cada cuenta:

- **X:** estados individuales y únicos enlazados en la cronología. Los perfiles sin enlaces de estado reciben `0`, que significa “ninguna publicación individual inventariada”, no “nunca publicó”.
- **Artículos:** archivos personales verificables en Hive, Medium y WordPress, más piezas con autoría individual explícita. No se asignan automáticamente artículos colectivos de Koinos Network, Koinos Group, KoinDX, Koinos Army o Koinos en Español a una persona.
- **Vídeos:** obras originales documentadas y series de canal con recuento verificable. Los podcasts exclusivamente de audio no se suman; por ejemplo, los 57 episodios de *The Koin Press* quedan fuera del total solicitado.
- **Total mínimo:** `Telegram + Discord† + X + artículos + vídeos`. No es una puntuación ponderada. Debido a la cobertura parcial por autor de Discord y de las fuentes externas, es un mínimo verificable, no un total biográfico.
- **Primera / Última:** primera y última fecha de cualquiera de las contribuciones realmente contadas para esa fila. No afirman haber encontrado la primera o última acción biográfica absoluta de la persona fuera del corpus.
- **Días mín.:** mínimo de fechas distintas demostrables dentro del corpus combinado. Cuando existe historial de Telegram se conserva su número exacto de días; para las otras plataformas, fechas inicial y final diferentes prueban al menos dos días, aunque no permiten reconstruir todos los días intermedios.

### Resúmenes cualitativos por volumen

Para las 89 identidades con más de 500 contribuciones se volvió a recorrer el historial público de los catorce grupos de Telegram y se calcularon señales de periodo, grupos, temas y productos mencionados. Una muestra limitada de mensajes sustantivos se contrastó con las atribuciones ya investigadas en la cronología. Los resúmenes describen **de qué hablaba una persona y qué función documentada desempeñó**; no son análisis automáticos de sentimiento y no convierten frecuencia, promoción o mención en código, liderazgo o autoría.

## Análisis 1: clasificación cuantitativa

La tabla muestra las primeras 100 posiciones; el CSV enlazado arriba contiene **todas** las cuentas identificables, ordenadas por total mínimo descendente. Discord puede elevar a una persona cuando existe un recuento individual exacto, pero un `0` no la penaliza como prueba de inactividad: señala una cobertura todavía pendiente.

| # | Persona | Telegram | Discord† | X* | Artículos* | Vídeos* | Total mínimo | Días mín. | Primera | Última |
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

## Lista prioritaria: más de 5.000 contribuciones

Estas personas se separan para valorar una posible integración posterior en la narración o cronología. Cada entrada explica periodo, tipo de contribución y posiciones expresadas en el corpus; el volumen no sustituye la evaluación de impacto ni convierte conversación en autoría.

### 1. Kui He / motoengineer — 62.037

**Periodo verificable:** 2020-05-16–2026-07-11. **Desglose:** Telegram 44.234; Discord† 17.758; X* 0; artículos* 15; vídeos* 30.

Entre mayo de 2020 y julio de 2026 acumuló 62.037 contribuciones verificadas: 44.234 mensajes de Telegram, 17.758 de Discord, 15 artículos y 30 vídeos. Su actividad combina soporte cotidiano con trabajo entregado: lanzó Koinos Forum, reactivó AMAs, cofundó y operó BurnKoin y KAP, cofundó Koinos-Social, mantuvo nodos y produjo una biblioteca educativa de treinta vídeos antes de integrarse en la Koinos Community Foundation. Habló de minería, mana, gobernanza, seguridad de dApps, liquidez y financiación; defendió que los cambios difíciles de revertir debían evaluarse por su impacto colectivo y resumió el trabajo menos visible con la frase “Builders are laying foundation, you might not always see it”. En 2024-2025 también propuso escenarios explícitos de financiación e interoperabilidad y debatió si la infraestructura debía mantenerse incluso en un declive del ecosistema. Su volumen refuerza una continuidad ya demostrada por productos, operación y educación, pero no convierte en autoría suya el código que pertenece a Luke Willis, Roamin u otros colaboradores.

### 2. G Millie / DeGemsCrew — 36.303

**Periodo verificable:** 2021-11-07–2026-06-26. **Desglose:** Telegram 36.303; Discord† 0; X* 0; artículos* 0; vídeos* 0.

Entre noviembre de 2021 y junio de 2026 registró 36.303 mensajes, principalmente en Koinos Army. Fue organizador, administrador, anfitrión de AMAs e impulsor del producto NFT de la comunidad, además de enlace con DeGems Lounge; no fue el fundador técnico, artista ni desarrollador del contrato de Koinos Army Journey. Sus conversaciones se concentraron en mercado, KoinDX, NFTs, liquidez y coordinación comunitaria, y sostuvo que las prioridades y la financiación a corto plazo debían presentarse a la comunidad para votación. También dejó una memoria crítica de la etapa posterior a Koinos Group, describiendo la falta de desarrollo, awareness, exchanges y dinero como una situación “bleak”. La cifra muestra que sostuvo el espacio social durante años, mientras que las atribuciones de Glen, Eman, Adem y MiXiBo deben conservarse por separado.

### 3. Koinos The Goat — 24.886

**Periodo verificable:** 2021-03-05–2026-06-09. **Desglose:** Telegram 24.885; Discord† 0; X* 0; artículos* 0; vídeos* 1.

Entre marzo de 2021 y junio de 2026 reunió 24.886 contribuciones, casi todas mensajes, más su vídeo independiente The Chronicles of Koinos. Creó la persona Koinos The Goat y su metáfora de las comisiones, organizó y corrigió copy comunitario, explicó mana, inflación, wallets, claims y dApps, apareció en The Koin Press y más tarde relacionó mana con permisos para agentes de IA. En sus intervenciones insistió en que “Mana is WORTHLESS. That is why it is so valuable”, propuso hablar de game tokens en lugar de reducir todo a meme tokens y fue cada vez más crítico con la incapacidad del proyecto para alcanzar el mercado. Su papel fue narrativa económica, soporte y cultura comunitaria: él mismo dijo “I am not a dev”, y no existe código, cargo empresarial ni autoría del protocolo atribuible a su volumen.

### 4. Diamond Hands — 21.385

**Periodo verificable:** 2023-08-17–2025-09-17. **Desglose:** Telegram 21.385; Discord† 0; X* 0; artículos* 0; vídeos* 0.

Entre agosto de 2023 y septiembre de 2025 publicó 21.385 mensajes en los grupos principal, Army y TCB. Su actividad fue sobre todo conversación de mercado y seguimiento de wallets, NFTs y dApps, pero en 2025 se convirtió también en una voz insistente en el debate sobre fondos comunitarios, mantenimiento de desarrolladores y el puente Vortex. Planteó que los dos problemas centrales eran la falta de desarrolladores capaces de mantener la cadena y la economía del token, y pidió decidir públicamente si el KOIN y USDT donados debían ir al fondo de desarrollo y a la interoperabilidad. El registro demuestra una participación cuantitativa y deliberativa muy alta, no la autoría de Vortex, contratos, wallets o decisiones de la Fundación.

### 5. Carlos Welele — 18.338

**Periodo verificable:** 2021-03-08–2026-06-26. **Desglose:** Telegram 18.338; Discord† 0; X* 0; artículos* 0; vídeos* 0.

Entre marzo de 2021 y junio de 2026 aportó 18.338 mensajes en inglés y español, con fuerte presencia en el grupo principal, Koinos Army y Koinos Hispano. Actuó como explicador bilingüe, moderador práctico y operador de flujos de difusión de Koinos Socials: orientó claims, wallets sin custodia, seguridad, puentes, exchanges y dApps, y denunció grupos falsos o contactos sospechosos. Sus mensajes discutieron cómo Kondor, Konio y otras interfaces podían esconder fricción —por ejemplo, cubrir mana desde otra cuenta al mover todo un saldo— y presentó el ecosistema español como una sucesión de productos, integraciones y eventos que había que traducir para usuarios no técnicos. Parte de su volumen incluye retransmisión de anuncios y conversación social; por ello se reconoce su infraestructura comunicativa sin atribuirle la autoría de los productos que explicaba.

### 6. Andrew Levine — 16.119

**Periodo verificable:** 2019-11-18–2026-02-11. **Desglose:** Telegram 11.430; Discord† 4.667; X* 11; artículos* 11; vídeos* 0.

Entre noviembre de 2019 y febrero de 2026 suma 16.119 contribuciones verificadas, incluidas 4.667 intervenciones en Discord, 11 publicaciones de X y 11 artículos inventariados. Como fundador y principal comunicador inicial explicó OpenSeed/OpenOrchard, el fair launch, la arquitectura modular, mana, gobernanza y la misión de una experiencia fee-less, además de coordinar campañas y relación con desarrolladores. En 2022 decía que la gobernanza estaba completa, KoinDX ya funcionaba en testnet y una stablecoin sería una buena oportunidad; en 2023 subrayó que tres años de trabajo reunían aportes de Kondor, KoinDX, Roamin, Kollection, KAP y Koiner, no solo del equipo fundador. Su actividad mezcla diseño narrativo, decisiones de producto, soporte y reconocimiento de terceros, y debe distinguirse de la implementación técnica concreta de Steve, Michael, Julián u otros autores.

### 7. Saleh Hawi — 12.180

**Periodo verificable:** 2023-01-06–2026-04-07. **Desglose:** Telegram 12.180; Discord† 0; X* 0; artículos* 0; vídeos* 0.

Entre enero de 2023 y abril de 2026 registró 12.180 mensajes, especialmente en el grupo principal, Army y KoinDX. Fue organizador, moderador, operador de soporte y colaborador de producto y negocio de KoinDX, y coordinó una campaña comunitaria para conseguir nuevas listas en exchanges; no fue uno de los cofundadores originales ni el autor de los contratos del DEX. Explicó cómo entrar en ventas y marketplaces, cómo mover KOIN entre CEX, wallets y puentes, cómo funcionaban Fogata y los NFT de apoyo, y por qué una primera experiencia Web3 sin gas podía ser más comprensible para nuevos usuarios. También advirtió sobre imitaciones, preventas inexistentes y mensajes privados, de modo que su volumen refleja onboarding y seguridad además de promoción de mercado.

### 8. VonLooten — 11.395

**Periodo verificable:** 2021-06-30–2024-04-13. **Desglose:** Telegram 9.063; Discord† 2.327; X* 0; artículos* 5; vídeos* 0.

Entre junio de 2021 y abril de 2024 acumuló 11.395 contribuciones verificadas, incluidas 2.327 de Discord y cinco artículos. Como cofundador y CEO original de KoinDX dirigió estrategia, comunicación, documentación, KNDX/KOINDX, el DAO propuesto, IDO, launchpad, pares oficiales, partnerships y soporte, con trabajo de producto adicional. Explicó que los pares debían añadirse mediante gobernanza y controles de seguridad, que los NFT de apoyo eran donaciones opcionales sin utilidad especial y que el DEX fee-less podía cambiar la experiencia DeFi. También discutió el valor del token nativo y los límites de dApps sin una razón económica real. El código principal de los contratos AMM no debe atribuirse automáticamente a él: Ederaleng era CTO y existe evidencia técnica más fuerte para su implementación.

### 9. Techno🔮 — 9.968

**Periodo verificable:** 2021-01-31–2024-11-04. **Desglose:** Telegram 9.968; Discord† 0; X* 0; artículos* 0; vídeos* 0.

Entre enero de 2021 y noviembre de 2024 publicó 9.968 mensajes, casi todos en el grupo principal. Fue una voz de mercado y soporte muy constante: siguió minería y grandes holders, explicó cómo comprar o puentear activos, orientó sobre Kondor, Koiner, KoinDX y MEXC, promocionó campañas y recordó a los recién llegados que los miembros del equipo no iniciaban mensajes privados. Defendió públicamente el trabajo no remunerado de Julián y utilizó el NFT de Kondor como ejemplo de apoyo directo a un desarrollador. Su posición en esta lista procede de conversación, ayuda y amplificación, no de un producto, repositorio o cargo formal verificado.

### 10. Steve Gerbino — 9.393

**Periodo verificable:** 2020-10-06–2026-03-22. **Desglose:** Telegram 5.873; Discord† 3.520; X* 0; artículos* 0; vídeos* 0.

Entre octubre de 2020 y marzo de 2026 suma 9.393 contribuciones, con 5.873 mensajes de Telegram y 3.520 de Discord. Como fundador y CTO explicó desde el fair launch que la frecuencia de pruebas afectaba al gasto de ETH y la varianza, no al hardware; después cubrió arquitectura, releases, nodos, Proof of Burn, KCS, upgrades y soporte a operadores. En 2025 defendió que KCS-4 podía permitir listados automáticos seguros de tokens y NFTs y llegó a proponer una nueva cadena que conservara WASM, recursos, Proof of Burn, StateDB y account abstraction, pero eliminara gobernanza y microservicios para priorizar velocidad. Ese último planteamiento es una posición de diseño posterior, no un milestone ya entregado de Koinos. Su volumen sí acompaña una función técnica fundacional y sostenida, aunque la autoría de cada componente debe seguir el historial de repositorios.

### 11. Julián González / Jga — 9.200

**Periodo verificable:** 2020-10-20–2026-07-01. **Desglose:** Telegram 5.743; Discord† 3.421; X* 0; artículos* 36; vídeos* 0.

Entre octubre de 2020 y julio de 2026 acumula 9.200 contribuciones: 5.743 mensajes de Telegram, 3.421 de Discord y 36 artículos. Su arco va desde minería y pools hasta Koilib, Kondor, el claim de WKOIN, Fogata, Koinos Polls, Nicknames, Arkinos, smart wallets, KFS, estándares y mantenimiento de red; también sostuvo soporte técnico bilingüe y operación de productores. Explicó que un NFT estándar básico no debía incorporar precios ni llamadas a KOIN por defecto, presentó Arkinos como una vía para crear contrato y frontend en minutos y ayudó a usuarios a recuperar o mover fondos basándose en las reglas verificables de los contratos. Su volumen corresponde a una producción técnica excepcionalmente amplia, pero varios productos y estándares fueron colaboraciones y no lo convierten en arquitecto fundador del protocolo.

### 12. q t — 8.875

**Periodo verificable:** 2022-11-21–2026-07-04. **Desglose:** Telegram 8.875; Discord† 0; X* 0; artículos* 0; vídeos* 0.

Entre noviembre de 2022 y julio de 2026 registró 8.875 mensajes repartidos entre el grupo principal, Army, KoinCity, KoinDX y Koin Crew. Fue un usuario intensivo y observador crítico de KoinCity, KoinDX, Chainge, Kollection, KAP, Kanvas, exploradores y minería, con frecuentes debates sobre liquidez, marketing y financiación. Animó a la gente a usar las dApps disponibles y a conocer sus diferencias, pero advirtió que gastar KOIN inflado en propuestas no tenía sentido sin asegurar antes exchanges, DEX y Vortex; también cuestionó campañas cuyo resultado debía medirse por volumen y adopción. El registro sirve para reconstruir recepción de producto y escepticismo económico, no autoría técnica ni poder de decisión.

### 13. edje Ӄ — 8.688

**Periodo verificable:** 2020-11-18–2026-01-28. **Desglose:** Telegram 8.688; Discord† 0; X* 0; artículos* 0; vídeos* 0.

Entre noviembre de 2020 y enero de 2026 publicó 8.688 mensajes en los grupos principal, Army, KoinCity, Koin Crew y KoinDX. Actuó como usuario explorador y catalogador informal: probó wallets y puentes, comparó utilidades de colecciones NFT, preguntó por mana gratuito y propuso una vista unificada de servicios y un asistente de IA actualizado con wallets, bridges y dApps. Sus intervenciones documentan fallos reales de onboarding —por ejemplo claims de Chainge que no se reflejaban— y la dificultad de explicar qué utilidad tenía cada colección o producto. Su valor histórico es la observación sostenida de UX y ecosistema, sin evidencia de autoría de los productos mencionados.

### 14. Pablo García / pgarcgo — 8.367

**Periodo verificable:** 2020-04-16–2026-07-15. **Desglose:** Telegram 7.971; Discord† 396; X* 0; artículos* 0; vídeos* 0.

Entre abril de 2020 y julio de 2026 suma 8.367 contribuciones verificadas, incluidas 396 de Discord. Empezó como organizador y educador de la comunidad española, creó Koincast y directorios de proyectos, probó testnet, claims, wallets, pools y dApps, y evolucionó hacia operación de nodos, testnet/API comunitarios, Koinos One, el nodo monolítico Teleno y trabajo de reparación de state database y replay. En español explicó custodia propia, semillas y el proceso de claim; en 2025 resumió prioridades como operación de red, Vortex, KFS y custodia comunitaria de infraestructura. Su actividad demuestra un cambio de comunicación a infraestructura y contribución consensus-adjacent, pero no lo convierte retrospectivamente en arquitecto fundador de Koinos.

### 15. Justin Welch / Justin W. — 7.196

**Periodo verificable:** 2020-10-14–2026-05-12. **Desglose:** Telegram 5.390; Discord† 1.806; X* 0; artículos* 0; vídeos* 0.

Entre octubre de 2020 y mayo de 2026 registra 7.196 contribuciones, incluidas 1.806 de Discord. Pasó de minero y solucionador técnico a cofundador de Kollection, iniciador del repositorio Koinos Contract Standards, coautor de KCS-2 y colaborador de Koinos.io, Vortex, Koinos.fun y la Fundación, trabajando en contratos, frontend, indexación, AWS y despliegues. Explicó cómo agregadores como DefiLlama dependen de APIs separadas, defendió liquidez nativa y un puente accesible desde Ethereum, y en 2025 dijo que Vortex debía lanzarse pero que él no podía liderarlo responsablemente por falta de tiempo, aunque ayudaría con ingeniería. Su volumen acompaña entregas verificables, pero Kollection, KCS-2, Vortex y Koinos.fun tuvieron equipos y autorías compartidas.

### 16. Tobi — 6.979

**Periodo verificable:** 2021-04-05–2026-06-27. **Desglose:** Telegram 6.979; Discord† 0; X* 0; artículos* 0; vídeos* 0.

Entre abril de 2021 y junio de 2026 publicó 6.979 mensajes, más de seis mil en Koinos Army. Su conversación combinó seguimiento de precio, consejos sobre BurnKoin/Fogata/VHP, expectativas sobre KoinDX y dApps, y debates sobre donaciones y financiación comunitaria. Explicó que quemar KOIN era una estrategia de largo plazo y que VHP podía recuperar liquidez mediante pools o mercado; con el tiempo pasó de esperar que las dApps impulsaran adopción a expresar frustración porque, tras cinco años, el crecimiento seguía siendo casi nulo. Es una voz útil para medir sentimiento y continuidad del holder, no una autoría de productos o infraestructura.

### 17. Nomad100x — 6.346

**Periodo verificable:** 2021-02-05–2026-07-11. **Desglose:** Telegram 6.346; Discord† 0; X* 0; artículos* 0; vídeos* 0.

Entre febrero de 2021 y julio de 2026 acumuló 6.346 mensajes, sobre todo en la comunidad española y el grupo principal. Como participante, patrocinador y crítico impulsó Koinos Garden pagando a un desarrollador externo para construir un DAO de inversión y votación con acceso NFT, y debatió después Federación, KFS, inflación, puentes, liquidez y prioridades de producto. Sostuvo que dos años de mainnet sin bridge ni DeFi suficiente era un problema, defendió inflación limitada mediante propuestas y presentó la regla “un NFT, un voto” como base de descentralización para Garden. Él mismo se definió como no desarrollador: el contrato pertenece al autor de GitHub, y no hay evidencia de que Garden financiara proyectos concretos.

### 18. Ӄirky Ӄirk 🔮 — 5.987

**Periodo verificable:** 2021-08-29–2025-02-24. **Desglose:** Telegram 5.987; Discord† 0; X* 0; artículos* 0; vídeos* 0.

Entre agosto de 2021 y febrero de 2025 registró 5.987 mensajes, principalmente en el grupo principal y Koinos Army. Su actividad fue onboarding y cultura comunitaria: comparó narrativas, orientó sobre CLI, Kondor y MEXC, sugirió accesos rápidos a KoinDX/KoinCity/Kollection y advirtió que ningún miembro del equipo debía contactar primero por privado. Defendía que gráficos y comparaciones podían despertar curiosidad si se acompañaban de whitepapers y fuentes, y pedía due diligence para evitar que la promoción pareciera otro proyecto fraudulento. No se encontró producto, repositorio ni puesto formal asociado a este volumen.

### 19. Luke Willis — 5.786

**Periodo verificable:** 2021-11-10–2024-06-14. **Desglose:** Telegram 3.225; Discord† 2.560; X* 0; artículos* 1; vídeos* 0.

Entre noviembre de 2021 y junio de 2024 suma 5.786 contribuciones, con 3.225 mensajes de Telegram, 2.560 de Discord y un artículo inventariado, además de 57 episodios de audio excluidos del total solicitado. Creó The Koin Press, propuso el Virtual Hash Power fungible que fue acreditado en el diseño KPoB, escribió los contratos y frontend originales de BurnKoin, cofundó KAP y construyó su interfaz. Habló de seguridad de upgrades, incentivos de minería, inflación y accesibilidad; sostuvo que el objetivo no debía ser simplemente quien compra KOIN, sino quien aprende, construye una dApp y se convierte en embajador. Su contribución une protocolo, producto y educación, con la frontera de que Roamin escribió gran parte de los contratos supervivientes de KAP y Kui compartió operación y comunicación.

### 20. MiXiBo — 5.518

**Periodo verificable:** 2021-03-06–2026-05-04. **Desglose:** Telegram 4.884; Discord† 630; X* 0; artículos* 4; vídeos* 0.

Entre marzo de 2021 y mayo de 2026 registra 5.518 contribuciones, incluidas 630 de Discord y cuatro artículos. Como principal desarrollador y operador de KoinCity amplió un launchpad no-code hacia presales, locks, mercados, staking, chats, integración con KoinDX, APIs, NFT minting y su propia infraestructura; también mantuvo soporte directo en el grupo del producto. Explicó diseños como órdenes procesadas por un hot wallet con mana compartido, evaluó la utilidad real de más de 170 launchpads y reconoció tanto la dificultad de partnerships informales como la necesidad de seguir construyendo tras cierres o fallos. Su volumen está especialmente concentrado en KoinCity y sí acompaña autoría y operación, aunque las colecciones, tokens y proyectos creados por terceros no pasan a ser obra suya.

## Resúmenes ampliados: entre 1.001 y 5.000 contribuciones

Para este nivel se ofrece un párrafo por persona. Los perfiles con trabajo histórico ya documentado conservan sus atribuciones específicas; los demás se resumen mediante temas, productos y grupos observados, sin asignarles autoría no demostrada.

### 21. Alberto / Transeunte — 4.779

Entre noviembre de 2021 y junio de 2026 reunió 4.779 contribuciones combinando 4.743 mensajes, 34 artículos y dos vídeos. Su trabajo fue comunicación bilingüe, archivo de productos, storytelling visual y defensa del usuario no técnico: creó Mundo Koinos/Koinos World, experimentó con vídeos y NFTs, amplificó campañas y presentó un centro de comunicación y marketing para financiación. En sus mensajes predominan mercado, wallets, seguridad y productos como MEXC, Kondor, Sovrano y Koiner, siempre desde la pregunta de cómo hacer visible y comprensible el ecosistema. No fue desarrollador; sus colecciones NFT tempranas llegaron a prueba, no a un lanzamiento mantenido.

### 22. Jm - Kantian — 4.755

Entre 2023-09-20 y 2025-05-31 registró 4.755 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, wallets, exploradores y dApps del ecosistema y coordinación comunitaria, campañas, contenidos y difusión. Entre los productos citados con más frecuencia aparecen KoinCity, KoinDX y MEXC, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 23. MoonMan — 4.719

Entre 2022-03-17 y 2025-03-06 registró 4.719 contribuciones, con mayor presencia en Koinos y KoinDX. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, conversación social, saludos, humor y cultura cotidiana del grupo y coordinación comunitaria, campañas, contenidos y difusión. Entre los productos citados con más frecuencia aparecen KoinDX, MEXC y Kondor, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 24. Tonimontana — 4.099

Entre 2020-11-16 y 2024-03-22 registró 4.099 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, minería, VHP, productores, nodos y operación de infraestructura y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen MEXC, KoinDX y Chainge, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 25. Yo Yo — 3.970

Entre 2024-10-11 y 2025-09-27 registró 3.970 contribuciones, con mayor presencia en Koinos y Koinos TCB. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, wallets, exploradores y dApps del ecosistema y coordinación comunitaria, campañas, contenidos y difusión. Entre los productos citados con más frecuencia aparecen Chainge, KoinDX y Vortex, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 26. Sergio🔮 — 3.793

Entre 2021-12-24 y 2025-12-31 registró 3.793 contribuciones, con mayor presencia en Koincast / Koinos Hispano y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, coordinación comunitaria, campañas, contenidos y difusión y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen KoinDX, Kondor y Konio, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 27. J Lo 🔮 — 3.623

Entre 2021-12-21 y 2026-06-14 registró 3.623 contribuciones, con mayor presencia en Koinos Army y Koinos. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, conversación social, saludos, humor y cultura cotidiana del grupo y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen MEXC, KoinDX y Chainge, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 28. Blank User — 3.481

Entre 2024-06-16 y 2026-07-13 registró 3.481 contribuciones, con mayor presencia en Koinos Army y Koincity. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, conversación social, saludos, humor y cultura cotidiana del grupo y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen KoinCity, MEXC y Koiner, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 29. Isaac Dozier Ӄ 🔮 — 3.397

Entre 2020-11-21 y 2026-05-19 registró 3.397 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en wallets, exploradores y dApps del ecosistema, coordinación comunitaria, campañas, contenidos y difusión y precios, liquidez, exchanges y evolución del mercado. Entre los productos citados con más frecuencia aparecen KoinDX, KAP y Kondor, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 30. H🔮 — 3.308

Entre 2021-01-21 y 2023-11-21 registró 3.308 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, coordinación comunitaria, campañas, contenidos y difusión y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen Koiner, MEXC y KoinDX, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 31. Adem / Kenpachi — 3.280

Entre agosto de 2021 y diciembre de 2024 publicó 3.280 mensajes, sobre todo en Koinos Army y KoinDX. Fue co-owner temprano de Army, moderador y contacto de soporte de KoinDX y curador/marketing de Koinos Army Journey; dio la bienvenida a usuarios, difundió eventos y releases, explicó KNDX/IDO/Mana y alertó de suplantaciones y ofertas antes del lanzamiento. Su conversación es principalmente coordinación y cultura comunitaria, no desarrollo: no existe GitHub público ni evidencia de contratos, arte o tokenomics escritos por él.

### 32. @interfecto / Atb 3tb — 3.126

Entre noviembre de 2022 y julio de 2026 suma 3.126 contribuciones, con actividad especialmente intensa desde 2025 en el grupo principal, Army y TCB. Construyó guías de contratos asistidas por LLM, testnet y faucet, KoinosScan, dashboards, monitorización, un indexador Go/SQLite y el prototipo Koinos EVM Engine, además de mantener enlaces y datos públicos. Sus mensajes se centran en wallets, MEXC/Chainge/Vortex, seguridad, nodos y soporte; recomendaba transacciones pequeñas, wallets vacías para pruebas y cautela ante DMs, y distinguía prototipos funcionales de software auditado. El patrón es feedback-to-commit y operación aplicada, no autoría del protocolo base.

### 33. Filipe Menchen Ӄ🔮🇧🇷 — 2.821

Entre 2021-12-22 y 2026-04-13 registró 2.821 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en wallets, exploradores y dApps del ecosistema, precios, liquidez, exchanges y evolución del mercado y conversación social, saludos, humor y cultura cotidiana del grupo. Entre los productos citados con más frecuencia aparecen Konio, Kondor y KoinDX, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 34. Henk Cryptotank🔮 — 2.725

Entre 2021-11-16 y 2024-06-24 registró 2.725 contribuciones, con mayor presencia en Koinos Army y Koinos. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, coordinación comunitaria, campañas, contenidos y difusión y conversación social, saludos, humor y cultura cotidiana del grupo. Entre los productos citados con más frecuencia aparecen MEXC, KoinDX y Kondor, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 35. Claudio Cascone — 2.567

Entre 2022-02-04 y 2025-11-18 registró 2.567 contribuciones, con mayor presencia en Koinos Italia y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en conversación social, saludos, humor y cultura cotidiana del grupo, wallets, exploradores y dApps del ecosistema y coordinación comunitaria, campañas, contenidos y difusión. Entre los productos citados con más frecuencia aparecen Konio, BurnKoin y Kondor, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 36. Sergi Ӄ — 2.441

Entre 2021-12-11 y 2026-01-18 registró 2.441 contribuciones, con mayor presencia en Koinos y Koincast / Koinos Hispano. La clasificación del historial sitúa sus mensajes principalmente en wallets, exploradores y dApps del ecosistema, precios, liquidez, exchanges y evolución del mercado y coordinación comunitaria, campañas, contenidos y difusión. Entre los productos citados con más frecuencia aparecen Kondor, KoinDX y MEXC, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 37. KOBA 🔮 — 2.433

Entre 2021-02-22 y 2025-01-23 registró 2.433 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, coordinación comunitaria, campañas, contenidos y difusión y conversación social, saludos, humor y cultura cotidiana del grupo. Entre los productos citados con más frecuencia aparecen Koinos Army, Kondor y KoinDX, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 38. Roamin — 2.356

Entre enero de 2022 y julio de 2024 suma 2.356 contribuciones, de las cuales 2.340 proceden de Discord y solo 16 de los grupos públicos de Telegram. Creó el toolchain AssemblyScript que se convirtió en software first-party, Local-Koinos, My Koinos Wallet y su SDK, el primer puente Koinos-Ethereum end-to-end, WalletConnect, el SDK de Armana, el REST server original, get_contract_metadata, pruebas VRF/estrés y Koinos-Social con Kui. En Discord presentó AssemblyScript como un CDT tipo TypeScript y, al cerrar Koinos-Social, explicó que los usuarios conservaban sus claves y podían mover sus fondos. Su bajo volumen de Telegram demuestra por qué el total debe sumar plataformas; aun así, proyectos posteriores como Vortex o el REST de producción tuvieron otros autores y mantenedores.

### 39. Michael Vandeberg — 2.096

Entre octubre de 2020 y marzo de 2026 registra 2.096 contribuciones, 901 de ellas en Discord. Como fundador y blockchain architect explicó minería, dificultad, microservicios, contratos de sistema, StateDB, KCS, upgrades y operación; en la muestra temática predominan desarrollo, protocolo, nodos y seguridad. Señaló desde el fair launch que aumentar la frecuencia de pruebas no elevaba el hash rate y en 2025 publicó y apoyó la propuesta KCS-4, además de diagnosticar problemas operativos como límites de descriptores. Es actividad técnica fundacional, pero la atribución de código concreto debe seguir commits y revisiones.

### 40. Adriano Foschi — 2.026

Entre abril de 2023 y junio de 2026 publicó 2.026 mensajes, principalmente sobre Konio, Sovrano, Veive, integración de wallets, seguridad y desarrollo. Creó el primer wallet móvil nativo de Koinos, el framework modular de smart accounts Veive, la línea de autenticación/pagos Sovrano, Sovry y el prototipo Kuku Games, además de coordinar onboarding y planificación comunitaria. Sus mensajes muestran soporte a dApps y un esfuerzo constante por ocultar claves, mana y complejidad tras interfaces familiares. Las menciones de otros wallets o servicios son integración y comparación, no autoría de esos productos.

### 41. carlos🔮 — 1.911

Entre 2022-09-30 y 2025-09-17 registró 1.911 contribuciones, con mayor presencia en Koincast / Koinos Hispano y Koinos. La clasificación del historial sitúa sus mensajes principalmente en coordinación comunitaria, campañas, contenidos y difusión, precios, liquidez, exchanges y evolución del mercado y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen Kondor, MEXC y KoinDX, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 42. Sh11fty — 1.887

Entre 2023-12-16 y 2025-04-13 registró 1.887 contribuciones, con mayor presencia en Koinos Army y Koinos. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, wallets, exploradores y dApps del ecosistema y soporte de transacciones, custodia, seguridad y prevención de estafas. Entre los productos citados con más frecuencia aparecen MEXC, KoinDX y Chainge, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 43. ⟁ ⃤Aʟı — 1.768

Entre 2023-04-06 y 2023-05-30 registró 1.768 contribuciones, con mayor presencia en Koinos Army y Koinos. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, soporte de transacciones, custodia, seguridad y prevención de estafas y conversación social, saludos, humor y cultura cotidiana del grupo. Entre los productos citados con más frecuencia aparecen MEXC y KoinDX, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 44. Dokterkraakbeen — 1.713

Entre octubre de 2021 y julio de 2026 registró 1.713 mensajes vinculados sobre todo a comunicación, KoinDX, Kollection, NFTs y soporte. Lanzó Planet Koinos como recurso visual y de traducción, rediseñó KoinDX, fue coautor nominal de KCS-2, integró el equipo de lanzamiento de Kollection y coordinó la vertiente visual y de patrocinio de KAMP. El corpus muestra diseño, estándares, producto y operación sostenida, pero no un historial público que permita atribuirle contratos del DEX o marketplace.

### 45. Pepper — 1.677

Entre 2021-11-14 y 2023-12-06 registró 1.677 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, coordinación comunitaria, campañas, contenidos y difusión y conversación social, saludos, humor y cultura cotidiana del grupo. Entre los productos citados con más frecuencia aparecen MEXC, Kollection y KAP, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 46. silas — 1.677

Entre 2022-02-02 y 2024-03-17 registró 1.677 contribuciones, con mayor presencia en Koinos Army y Koinos. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, conversación social, saludos, humor y cultura cotidiana del grupo y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen MEXC, Koiner y Kondor, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 47. Carlos — 1.606

Entre 2022-11-01 y 2026-04-27 registró 1.606 contribuciones, con mayor presencia en Koincast / Koinos Hispano y Koinos. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, coordinación comunitaria, campañas, contenidos y difusión y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen MEXC, Kondor y Konio, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 48. John 🔮 — 1.505

Entre 2022-01-15 y 2024-06-20 registró 1.505 contribuciones, con mayor presencia en Koinos Army y Koinos. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, coordinación comunitaria, campañas, contenidos y difusión y conversación social, saludos, humor y cultura cotidiana del grupo. Entre los productos citados con más frecuencia aparecen MEXC, KoinDX y Kondor, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 49. Lucky Bitcoin — 1.472

Entre 2022-10-29 y 2026-07-12 registró 1.472 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en wallets, exploradores y dApps del ecosistema, precios, liquidez, exchanges y evolución del mercado y código, contratos, APIs, testnet, mainnet y resolución de errores. Entre los productos citados con más frecuencia aparecen KoinDX, Portal y KoinCity, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 50. X — 1.371

Entre 2022-08-28 y 2026-07-01 registró 1.371 contribuciones, con mayor presencia en Koinos Army y Koinos. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, wallets, exploradores y dApps del ecosistema y conversación social, saludos, humor y cultura cotidiana del grupo. Entre los productos citados con más frecuencia aparecen MEXC, KoinDX y Koiner, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 51. Ederaleng — 1.361

Entre abril de 2020 y febrero de 2026 suma 1.361 contribuciones verificadas, incluidas 356 de Discord. Como cofundador y CTO original de KoinDX, colaborador de Kollection, responsable técnico del Vortex reanudado y miembro fundador de la Fundación, trabajó en contratos, SDKs, pruebas, registries, validators, relayers, despliegues y liquidez multichain. Sus conversaciones cubren KoinDX, Chainge/Vortex, mercado, integración y soporte; el peso técnico se confirma en artefactos, no se deduce solo del volumen.

### 52. Karlos — 1.311

Entre noviembre de 2022 y marzo de 2026 publicó 1.311 mensajes sobre wallets, productos, minería, mercado y soporte. Aportó el logo de My Koinos Wallet, su versión SVG del símbolo VHP usado por Koiner y solicitado por Konio, logos de monedas y pruebas de Konio v1.4, además de apoyo al NFT de Kondor. Es contribución visual y de testing: no existe evidencia para llamarlo desarrollador de wallets o contratos.

### 53. Heather S — 1.305

Entre 2023-04-25 y 2025-01-30 registró 1.305 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en coordinación comunitaria, campañas, contenidos y difusión, precios, liquidez, exchanges y evolución del mercado y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen Koinos Army, Kollection y Vortex, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 54. JM — 1.225

Entre 2021-11-02 y 2024-07-17 registró 1.225 contribuciones, con mayor presencia en Koincast / Koinos Hispano y Koinos. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, wallets, exploradores y dApps del ecosistema y coordinación comunitaria, campañas, contenidos y difusión. Entre los productos citados con más frecuencia aparecen MEXC, Chainge y Koiner, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 55. Jeremy Clark — 1.194

Entre 2021-02-16 y 2023-06-10 registró 1.194 contribuciones, con mayor presencia en Koinos y Koincast / Koinos Hispano. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, coordinación comunitaria, campañas, contenidos y difusión y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen Kondor y MEXC, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 56. Dani — 1.179

Entre 2020-11-25 y 2024-12-14 registró 1.179 contribuciones, con mayor presencia en Koinos y Koincast / Koinos Hispano. La clasificación del historial sitúa sus mensajes principalmente en NFTs, juegos, colecciones y marketplaces, wallets, exploradores y dApps del ecosistema y conversación social, saludos, humor y cultura cotidiana del grupo. Entre los productos citados con más frecuencia aparecen Kondor, Konio y KoinDX, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 57. Aliasghar Khodaei — 1.165

Entre 2024-05-07 y 2025-10-28 registró 1.165 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, wallets, exploradores y dApps del ecosistema y soporte de transacciones, custodia, seguridad y prevención de estafas. Entre los productos citados con más frecuencia aparecen MEXC, Sovrano y Konio, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 58. Lint - Flourishing Lead Force — 1.083

Entre 2020-12-18 y 2025-11-05 registró 1.083 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, wallets, exploradores y dApps del ecosistema y coordinación comunitaria, campañas, contenidos y difusión. Entre los productos citados con más frecuencia aparecen KoinDX, MEXC y KoinCity, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 59. Eman🔮 — 1.078

Entre 2022-10-27 y 2025-01-25 registró 1.078 contribuciones, con mayor presencia en Koinos Army y Koinos. La clasificación del historial sitúa sus mensajes principalmente en conversación social, saludos, humor y cultura cotidiana del grupo, wallets, exploradores y dApps del ecosistema y coordinación comunitaria, campañas, contenidos y difusión. Entre los productos citados con más frecuencia aparecen Kollection, Koinos Army y Kondor, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 60. Moon Ӄ — 1.060

Entre 2023-12-22 y 2026-06-09 registró 1.060 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, coordinación comunitaria, campañas, contenidos y difusión y conversación social, saludos, humor y cultura cotidiana del grupo. Entre los productos citados con más frecuencia aparecen MEXC, Vortex y Chainge, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 61. Ali.n — 1.033

Entre 2021-08-21 y 2025-08-30 registró 1.033 contribuciones, con mayor presencia en Koinos y KoinDX. La clasificación del historial sitúa sus mensajes principalmente en wallets, exploradores y dApps del ecosistema, coordinación comunitaria, campañas, contenidos y difusión y soporte de transacciones, custodia, seguridad y prevención de estafas. Entre los productos citados con más frecuencia aparecen Konio, KoinDX y Chainge, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 62. El Cid Holdeador — 1.026

Entre 2021-06-01 y 2026-03-02 registró 1.026 contribuciones, con mayor presencia en Koincast / Koinos Hispano y Koinos. La clasificación del historial sitúa sus mensajes principalmente en precios, liquidez, exchanges y evolución del mercado, wallets, exploradores y dApps del ecosistema y coordinación comunitaria, campañas, contenidos y difusión. Entre los productos citados con más frecuencia aparecen MEXC, Koiner y KoinDX, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 63. Vaxis2 — 1.026

Entre 2021-10-10 y 2026-07-02 registró 1.026 contribuciones, con mayor presencia en Koinos y KoinDX. La clasificación del historial sitúa sus mensajes principalmente en wallets, exploradores y dApps del ecosistema, coordinación comunitaria, campañas, contenidos y difusión y conversación social, saludos, humor y cultura cotidiana del grupo. Entre los productos citados con más frecuencia aparecen KoinDX, Kondor y Konio, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 64. Razor Chrom — 1.024

Entre 2023-11-11 y 2026-07-09 registró 1.024 contribuciones, con mayor presencia en Koinos y KoinDX. La clasificación del historial sitúa sus mensajes principalmente en wallets, exploradores y dApps del ecosistema, precios, liquidez, exchanges y evolución del mercado y coordinación comunitaria, campañas, contenidos y difusión. Entre los productos citados con más frecuencia aparecen KoinDX, Chainge y KoinCity, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 65. A T — 1.009

Entre 2021-12-28 y 2026-03-12 registró 1.009 contribuciones, con mayor presencia en Koinos y Koinos Army. La clasificación del historial sitúa sus mensajes principalmente en wallets, exploradores y dApps del ecosistema, precios, liquidez, exchanges y evolución del mercado y minería, VHP, productores, nodos y operación de infraestructura. Entre los productos citados con más frecuencia aparecen KoinDX, BurnKoin y Chainge, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

### 66. Doyle B. Runson — 1.002

Entre 2022-01-09 y 2025-05-29 registró 1.002 contribuciones, con mayor presencia en Koinos Army y Koinos. La clasificación del historial sitúa sus mensajes principalmente en conversación social, saludos, humor y cultura cotidiana del grupo, precios, liquidez, exchanges y evolución del mercado y wallets, exploradores y dApps del ecosistema. Entre los productos citados con más frecuencia aparecen Kondor, Chainge y MEXC, lo que permite reconstruir qué partes del ecosistema seguía, probaba o comentaba. Este resumen describe actividad conversacional verificable; las menciones y el volumen no demuestran por sí mismos autoría técnica, liderazgo formal ni impacto del mismo nivel.

## Resúmenes breves: entre 501 y 1.000 contribuciones

Para este nivel se ofrecen dos frases basadas en periodo, temas dominantes y productos mencionados.

### 67. DK — 999

Entre 2022-10-21 y 2025-11-08 registró 999 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y wallets, exploradores y dApps del ecosistema. Mencionó con frecuencia MEXC, Kondor y Fogata; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 68. W — 985

Entre 2022-11-15 y 2025-05-28 registró 985 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y soporte de transacciones, custodia, seguridad y prevención de estafas. Mencionó con frecuencia MEXC, Konio y KoinDX; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 69. High CheeӃs — 966

Entre 2023-01-09 y 2025-05-07 registró 966 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y wallets, exploradores y dApps del ecosistema. Mencionó con frecuencia MEXC, KoinDX y Kondor; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 70. Jon Rice — 895

Entre septiembre de 2022 y julio de 2026 registra 895 contribuciones combinando 892 mensajes y tres artículos. Su actividad trató comunicación, coordinación, adopción y financiación: fundó la Koinos Federation, formuló la tesis “free, frictionless, familiar”, escribió el caso público por Koinos y amplificó Koinos.fun y otros productos; fue advocacy y estrategia editorial, no ingeniería del protocolo.

### 71. Gamaliel Laryea 🔮 — 850

Entre 2022-01-21 y 2025-08-04 registró 850 contribuciones, centradas sobre todo en conversación social, saludos, humor y cultura cotidiana del grupo y precios, liquidez, exchanges y evolución del mercado. Mencionó con frecuencia MEXC, Kondor y KoinDX; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 72. QNguyen — 848

Entre 2022-03-15 y 2025-03-10 registró 848 contribuciones, centradas sobre todo en wallets, exploradores y dApps del ecosistema y precios, liquidez, exchanges y evolución del mercado. Mencionó con frecuencia Kondor, MEXC y Koiner; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 73. Take Your Future BacӃ — 800

Entre 2023-11-10 y 2025-05-04 registró 800 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y wallets, exploradores y dApps del ecosistema. Mencionó con frecuencia KoinCity, KoinDX y Chainge; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 74. Ignis — 796

Entre 2023-11-20 y 2024-11-24 registró 796 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y wallets, exploradores y dApps del ecosistema. Mencionó con frecuencia KoinCity, MEXC y KoinDX; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 75. Mo — 759

Entre 2022-04-17 y 2024-03-31 registró 759 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y wallets, exploradores y dApps del ecosistema. Mencionó con frecuencia MEXC, Kondor y KoinDX; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 76. Pablo G. — 746

Entre 2022-10-24 y 2024-11-24 registró 746 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y coordinación comunitaria, campañas, contenidos y difusión. Mencionó con frecuencia MEXC, Koinos Social y KAP; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 77. 🔮Snape Several — 726

Entre 2021-11-15 y 2025-12-05 registró 726 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y coordinación comunitaria, campañas, contenidos y difusión. Mencionó con frecuencia MEXC, Kondor y KAP; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 78. Eduard Schindler — 710

Entre 2021-05-03 y 2025-05-29 registró 710 contribuciones, centradas sobre todo en código, contratos, APIs, testnet, mainnet y resolución de errores y conversación social, saludos, humor y cultura cotidiana del grupo. Mencionó con frecuencia KoinDX, MEXC y KAP; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 79. 照顾好自己 — 703

Entre 2024-04-04 y 2025-09-19 registró 703 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y wallets, exploradores y dApps del ecosistema. Mencionó con frecuencia Vortex, Chainge y MEXC; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 80. koinosrex.koin — 691

Entre 2023-01-03 y 2025-07-23 registró 691 contribuciones, centradas sobre todo en conversación social, saludos, humor y cultura cotidiana del grupo y precios, liquidez, exchanges y evolución del mercado. Mencionó con frecuencia KoinCity, Chainge y KoinDX; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 81. sanamo — 686

Entre 2021-11-14 y 2025-12-30 registró 686 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y coordinación comunitaria, campañas, contenidos y difusión. Mencionó con frecuencia MEXC, Kondor y KoinDX; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 82. Frank / ElImbatido — 677

Entre noviembre de 2021 y abril de 2026 suma 677 contribuciones, con foco desproporcionado en Koiner, desarrollo, nodos y economía del protocolo. Creó y operó Koiner.App, su indexador, backend y API GraphQL, y explicó tanto la evolución hacia infraestructura de datos compartida como su cierre por costes, carga de trabajo y falta de adopción; su cifra es menor que la de muchos conversadores, pero el impacto técnico fue alto.

### 83. Shims Bud — 672

Entre 2023-11-15 y 2024-05-26 registró 672 contribuciones, centradas sobre todo en conversación social, saludos, humor y cultura cotidiana del grupo y precios, liquidez, exchanges y evolución del mercado. Mencionó con frecuencia Koinos Army, Koinos-Social y Koinos Social; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 84. Acoma Ӄ — 662

Entre 2021-11-15 y 2025-05-15 registró 662 contribuciones, centradas sobre todo en coordinación comunitaria, campañas, contenidos y difusión y precios, liquidez, exchanges y evolución del mercado. Mencionó con frecuencia Vortex y Kollection; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 85. Victor — 616

Entre 2021-11-03 y 2021-12-01 registró 616 contribuciones, centradas sobre todo en precios, liquidez, exchanges y evolución del mercado y soporte de transacciones, custodia, seguridad y prevención de estafas. Mencionó con frecuencia Koinos Army; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 86. mog — 611

Entre 2023-04-15 y 2023-05-20 registró 611 contribuciones, centradas sobre todo en coordinación comunitaria, campañas, contenidos y difusión y precios, liquidez, exchanges y evolución del mercado. Mencionó con frecuencia MEXC y KoinDX; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 87. Jas — 568

Entre 2023-11-20 y 2024-06-08 registró 568 contribuciones, centradas sobre todo en conversación social, saludos, humor y cultura cotidiana del grupo y coordinación comunitaria, campañas, contenidos y difusión. Mencionó con frecuencia MEXC; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 88. A.H.D — 559

Entre 2022-01-16 y 2026-06-27 registró 559 contribuciones, centradas sobre todo en wallets, exploradores y dApps del ecosistema y precios, liquidez, exchanges y evolución del mercado. Mencionó con frecuencia Kondor, BurnKoin y Fogata; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

### 89. Marc — 556

Entre 2020-11-16 y 2024-03-01 registró 556 contribuciones, centradas sobre todo en mana, Proof of Burn, oferta, inflación y gobernanza del protocolo y minería, VHP, productores, nodos y operación de infraestructura. Mencionó con frecuencia KoinDX; el dato acredita continuidad conversacional, no autoría o responsabilidad formal sobre esos productos.

## Análisis 2: todas las personas con al menos 10 contribuciones en dos días

Esta lista aplica el umbral al **total combinado de Telegram, Discord, X, artículos y vídeos**. Para evitar falsos positivos temporales también exige actividad demostrable en dos fechas distintas: los días de Telegram son exactos y, cuando otra plataforma amplía el periodo, una fecha inicial y otra final diferentes prueban un mínimo de dos días. El corpus sigue anclado en identidades de Telegram más el perfil editorial externo documentado; todavía no constituye un censo exhaustivo de perfiles exclusivos de Discord.

| # global | Persona | Total mínimo | Telegram | Discord† | X* | Artículos* | Vídeos* | Días mín. | Primera | Última |
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
| 104 | ＢＩＲＤＹ \| Nerver DM First \| (@birdy00097) | 401 | 401 | 0 | 0 | 0 | 0 | 60 | 2023-05-07 | 2025-11-18 |
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
| 122 | Ethan 🇦🇪 \| Listing Exchanges (@Ethan_Cex) | 318 | 318 | 0 | 0 | 0 | 0 | 119 | 2023-01-03 | 2023-07-07 |
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
| 186 | Mark Rayson \| I will never DM You (@markrayson) | 164 | 164 | 0 | 0 | 0 | 0 | 43 | 2022-02-07 | 2026-02-27 |
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
| 290 | linasonthemoon (🦀,🦀) \| COMPROMISED (@linasonthemoon) | 78 | 78 | 0 | 0 | 0 | 0 | 22 | 2021-09-11 | 2024-01-08 |
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
| 348 | 暗•\|Kenjiツ (@EMOTIONALDAMAGE1000X) | 59 | 59 | 0 | 0 | 0 | 0 | 15 | 2022-12-14 | 2023-06-14 |
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
| 390 | Ph \| NoToRuG (GemHunter) pixlands (@RugHater) | 50 | 50 | 0 | 0 | 0 | 0 | 13 | 2021-10-29 | 2026-01-07 |
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
| 429 | Saylor \| Drops💧 (@Mr5503) | 43 | 43 | 0 | 0 | 0 | 0 | 3 | 2022-10-23 | 2022-10-31 |
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
| 456 | •—พՀ\| 4R50 \|Հ—• (Amiri) (@AmiriA001) | 39 | 39 | 0 | 0 | 0 | 0 | 6 | 2024-03-26 | 2024-07-09 |
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
| 474 | Airdrop Alpha 🐾\| Drops💧'Meshchain.Ai' Σ (@alphacryptoZ) | 36 | 36 | 0 | 0 | 0 | 0 | 8 | 2025-01-30 | 2025-02-20 |
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
| 498 | Mario \| I Never DM first (@TehRibbon) | 34 | 34 | 0 | 0 | 0 | 0 | 8 | 2021-12-12 | 2023-11-24 |
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
| 702 | Roy \| Crypto Totaal (@CryptoTotaalRoy) | 20 | 20 | 0 | 0 | 0 | 0 | 9 | 2024-11-08 | 2024-11-26 |
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
| 871 | Minmin 🐾 \| Drops💧 @HiRollCasino (@Balahtarus) | 14 | 14 | 0 | 0 | 0 | 0 | 4 | 2023-11-21 | 2023-11-26 |
| 872 | Okazaki (@cryptoffland) | 14 | 14 | 0 | 0 | 0 | 0 | 5 | 2021-01-25 | 2021-01-29 |
| 873 | peter (@k_3f45) | 14 | 14 | 0 | 0 | 0 | 0 | 3 | 2021-10-25 | 2023-11-28 |
| 875 | Rocky (@rockyjayn) | 14 | 14 | 0 | 0 | 0 | 0 | 6 | 2023-09-23 | 2023-11-11 |
| 876 | sajad (@S_barzin81) | 14 | 14 | 0 | 0 | 0 | 0 | 6 | 2021-03-22 | 2024-03-19 |
| 877 | Shivum (@Shivum_10) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2023-01-08 | 2023-01-13 |
| 878 | Spencer W (@spencerwal) | 14 | 14 | 0 | 0 | 0 | 0 | 10 | 2021-12-20 | 2023-04-28 |
| 879 | T (@Timobilr) | 14 | 14 | 0 | 0 | 0 | 0 | 2 | 2021-10-22 | 2021-10-23 |
| 880 | Victor \|\| Ñurika (@VictorLivingstone) | 14 | 14 | 0 | 0 | 0 | 0 | 10 | 2022-11-05 | 2023-12-14 |
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
| 998 | Murat \| Kripto Tutkunları (@muratcanKT) | 11 | 11 | 0 | 0 | 0 | 0 | 4 | 2024-11-19 | 2024-11-28 |
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
| 1021 | yang \| Scorpio vc (@youngerbest1) | 11 | 11 | 0 | 0 | 0 | 0 | 3 | 2021-11-09 | 2021-11-11 |
| 1022 | yassine (@yassinao) | 11 | 11 | 0 | 0 | 0 | 0 | 7 | 2021-03-06 | 2021-04-07 |
| 1023 | £/-\R\|-\|/-\\|) (@Farhad_aaas) | 11 | 11 | 0 | 0 | 0 | 0 | 6 | 2025-01-25 | 2025-10-23 |
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

## Inventario externo atribuido a personas

| Persona | X* | Artículos* | Vídeos* | Base cuantitativa |
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

## Exclusiones nominales importantes

Además de los bots y remitentes de tipo canal excluidos automáticamente, se retiraron de la clasificación humana las cuentas de marca o colectivas **Koin Crew**, **blocks.Barcelona**, **BTK Team**, **Koinos World**, **Admin / socialmediaadmins** y **Liquidity / Liquidity_koinos**. Las publicaciones de producto no se transfirieron a un fundador salvo que la cronología documentase una autoría personal concreta.

Los seudónimos sí se conservan cuando Telegram los presenta como una cuenta humana (`bot=false`). Esto permite incluir actividad histórica sin intentar descubrir nombres civiles.

## Fuentes primarias y corpus

- [Cronología inglesa de Koinos](koinos-exists-a-chronicle-of-a-blockchain-that-cannot-be-recreated.md), utilizada como inventario de identidades y fuentes externas.
- [Grupo principal de Koinos](https://t.me/koinos_community) y los otros trece grupos públicos enumerados en la tabla de cobertura.
- [Servidor oficial de Koinos en Discord](https://discord.com/channels/613823471679438898), búsqueda autenticada global y búsquedas individuales de autor realizadas el 15 de julio de 2026.
- [`koinos-community-contributor-summaries.json`](koinos-community-contributor-summaries.json), señales temáticas auditables y resúmenes cualitativos de los 89 perfiles por encima de 500 contribuciones.
- Hive: [`@jga`](https://hive.blog/@jga/posts) y [`@motoengineer`](https://hive.blog/@motoengineer/posts).
- Medium: [`@kuixihe`](https://medium.com/@kuixihe), [`@teingvvv`](https://medium.com/@teingvvv), [`@vonlooten`](https://medium.com/@vonlooten), [`@koiner`](https://medium.com/@koiner), [MiXiBo](https://mixibo.medium.com/) y [Andrew Levine](https://andrewlevine.medium.com/).
- WordPress: [Mundo Koinos](https://mundokoinos.wordpress.com/) y [Koinos World](https://koinosworld.wordpress.com/).
- YouTube: [motoengineer / Kui He](https://www.youtube.com/@kuixihe) y [Koinos The Goat](https://www.youtube.com/@koinosthegoat3756).

## Lectura recomendada

Usa esta tabla para encontrar continuidad, moderadores, educadores y participantes que merecen una investigación cualitativa posterior. Para valorar “importancia” conviene cruzarla con código entregado, productos mantenidos, estándares, infraestructura, traducciones, capacidad de coordinación y duración de los resultados. El volumen por sí solo no distingue entre una explicación técnica, soporte cotidiano, conversación casual, campaña promocional o crítica.
