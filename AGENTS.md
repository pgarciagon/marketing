# Repository Instructions

## Master chronology and interactive history

- Treat `koinos-exists-a-chronicle-of-a-blockchain-that-cannot-be-recreated.md` as the documentary source of truth for the Koinos history.
- Whenever the master chronology is modified, update the corresponding content in the interactive `/history` page of `/Users/pgarcgo/code/koinos-io-website` in the same task.
- Regenerate the website history from the local master by running the following command from `/Users/pgarcgo/code/koinos-io-website`:

  ```sh
  HISTORY_SOURCE_FILE=/Users/pgarcgo/code/marketing/koinos-exists-a-chronicle-of-a-blockchain-that-cannot-be-recreated.md npm run history:sync
  ```

- Review `data/history-content.json` to confirm that the intended milestones, text, links, and images were transferred correctly, then run `npm run build` in the website repository.
- Keep the interactive `Main characters` chapter ordered by the `total` field in `koinos-community-contribution-ranking.csv`, from highest to lowest. Do not alphabetize it. Profiles without a safely matched quantitative record must follow the ranked profiles in documentary source order.
- Keep documentary content in the master Markdown whenever it can be generated from there; do not maintain a conflicting independent version in the website.
- Preserve unrelated changes in both repositories and report any part of the master article that the website importer cannot represent faithfully.
