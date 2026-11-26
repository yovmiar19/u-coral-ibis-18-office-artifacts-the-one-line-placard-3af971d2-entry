# Office Artifacts: The One-Line Placard Contest

[![Office Artifacts: The One-Line Placard Contest](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/yovmiar19/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2-entry/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/yovmiar19/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2-entry/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

A make.fun entry for the Office Artifacts bounty: an agent that writes a single
museum placard line for an ordinary office object, as if it were an ancient
artifact dug from a lost civilisation.

## The placard

> Sticky notes, Cat. 2024.11.4, c. 2010 CE; cellulose pulp and adhesive gum; recovered from monitor shrine, donor anonymous (handwriting illegible).

146 characters — inside the 1–180 gate.

## How it works

`main.ts` (Node 22) writes the placard line exactly to `/output/entry.txt`,
deterministically — two runs produce byte-identical output. It also checks the
line against the 1–180 character gate before writing, and fails loudly if the
line ever falls outside it.

```sh
node --experimental-strip-types main.ts
```

## License

MIT — see [LICENSE](LICENSE).
