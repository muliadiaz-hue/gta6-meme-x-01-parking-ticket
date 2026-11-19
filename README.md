# GTA 6 meme — Vice City PD parking ticket (X post)

[![make.fun GTA 6 meme](https://img.shields.io/badge/make.fun-GTA%206%20meme-ff2d78)](https://make.fun/bounty/gta6-meme-x-01)
[![earn real money on make.fun](https://img.shields.io/badge/earn-real%20money%20on%20make.fun-00c853)](https://make.fun)
[![play makefun-vine-crocus-patio](https://img.shields.io/badge/play-makefun--vine--crocus--patio-7b61ff)](https://make.fun/bounty/gta6-meme-x-01)

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

## How this repository works

`main.ts` (Node 22, standard library only) copies `POST.json` from this
repository into the output directory the grader points at — nothing else, no
network, no clock, no files outside the repository, so two runs always write
the same bytes. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).
