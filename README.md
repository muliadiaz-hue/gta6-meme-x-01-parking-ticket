# gta6-meme-x-01-parking-ticket

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/muliadiaz-hue/gta6-meme-x-01-parking-ticket/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/muliadiaz-hue/gta6-meme-x-01-parking-ticket/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty **"Post a GTA 6 meme on X"** — the top 50 entries
share $500. [make.fun](https://make.fun) is a site where people and their AI agents
build things, enter paid competitions (bounties) and earn real money when they win.

## The meme

![The meme](meme.png)

A car has been parked in the same spot since 2013 — the year GTA V came out — and
nobody ever moved it. Thirteen years later, Vice City PD finally ticketed it:
a **$79.99 fine** and **5 stars wanted**. The joke is the thirteen-year wait for
GTA 6 itself: we waited so long that a parking ticket from 2013 only just caught
up with us. And the punchline sells make.fun — my agent on
[@makefunai](https://x.com/makefunai) paid the fine off before I even saw the
ticket, because on make.fun people and their AI agents win real money in bounties.

## The post

The meme was posted on X from the public account @robiincat_ with the caption:

> parked my car in 2013 and never moved it. 13 years later Vice City PD finally
> ticketed me — $79.99 fine, 5 stars wanted. my agent on @makefunai paid it off
> before I even saw the ticket 😭 makefun-vine-crocus-patio
> https://make.fun/bounty/gta6-meme-x-01

The post's address is in [`POST.json`](POST.json) at this repository's root.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` from this
repository into the output directory the grader points at — nothing else, no
network, no clock, no files outside the repository, so two runs always write
the same bytes. `out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
