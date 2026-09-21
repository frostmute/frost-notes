---
title: Three Hundred and Fifty Coins
designation: MNE-002
slug: three-hundred-fifty-coins
sphere: mnemosyne
kind: reliquary
date: 2026-01-18
revised: 2026-08-22
status: living
sigil: 3505013
reading: 8
epigraph: A badge is worn by someone who can be identified by it in a hearing. Design accordingly.
summary: Eight years designing challenge coins, public-safety badges, insignia, and Fiesta medals — and why regulated physical production is the best training available for building software.
tags: [production, craft, constraints, insignia, manufacturing, career]
resonance: [the-antikythera-problem, ghostlist, frontmatter-load-bearing]
plate: assets/plate-mechanism.webp
plate_caption: Die-struck geometry, exploded — every line here costs money in tooling and cannot be revised after the strike.
---

From 2013 to 2021 I ran production and the in-house art team at an awards and insignia company in San Antonio. Personally designed more than three hundred and fifty challenge coins. Also badges for the San Antonio Police Department, San Antonio Fire Department, and the Bexar County Sheriff's Office; insignia for Joint Base San Antonio, USAF Command Chiefs and First Sergeants, the Thunderbirds showline crew; Fiesta medals for organizations across the city; work that reached Google data centers, Cisco, the Spurs, the Rampage, the City's Tricentennial, and one job that ended up on a daytime talk show.

People assume that era is unrelated to the software. It is the most relevant training I have.

![Challenge coin production showcase](assets/coin-showcase.webp)

## No undo

A die-struck coin has a tooling cost and a lead time. Once the die is cut, the design is what it is. If the relief is wrong, the enamel wells too shallow, the smallest text below what the process can hold — you find out when a box of five hundred arrives, and there is no patch, no hotfix, no point release.

Twenty years of that installs one habit permanently: **measure twice, cut once.** Not as a slogan. As the only available method. You review the proof against the spec, then you review it again against the process, then you release it. The cost of being wrong is denominated in money and weeks rather than in a redeploy.

Every piece of software on this dial that refuses to write before showing you a diff is that habit, ported.

## Regulated artwork changes how you think about correctness

A public-safety badge is not a graphic. It is a legal object. Rank insignia, seals, department heraldry, and state-specific rules govern what may appear and how — and the person wearing it will be identified by it in a courtroom.

You cannot design that by taste. You design it against a specification you did not write, verify against an authority, and document what was approved. That is the first time I understood that constraints are not the enemy of the work; they are the structure that makes the work verifiable.

Software people say "correctness" and usually mean "no exceptions thrown." Regulated production means correct against an external authority that will tell you, on the record, that you were wrong.

![Public safety agency badges showcase](assets/badge-showcase.webp)

## Managing the pipeline taught me systems

Art team, prepress, vendor coordination, production across multiple divisions, full lifecycle from concept to delivery. The interesting failures were never artistic. They were handoffs — a file that met spec for one vendor and not the next, an approval that existed in an email nobody could find, a rush order that jumped a queue and quietly delayed nine others.

I spent years fixing those, which is to say I spent years doing systems design without the vocabulary for it. When I later built a five-agent orchestration system and made every claim on its dashboard trace back to a file on disk, I was not applying a software pattern. I was applying a prepress lesson: **the state of the job is what the paperwork says it is, and the paperwork must be a record rather than a claim.**

## Fiesta medals, or: shipping under a hard deadline

Fiesta medals are a San Antonio institution. They are also date-locked. The parade does not slip because your vendor did.

Nothing has taught me more about scope. You ask what the object must accomplish, cut everything that does not serve it, and ship. Every year. The instinct that makes me build one narrow tool that works instead of a platform that almost works came from a calendar I could not negotiate with.

![Fiesta medal showcase](assets/medal-showcase.webp)

## What did not transfer, and what did

The software is barely two years old and the tools change monthly. The judgment is twenty years old and has not changed at all.

The code is the easy part. Deciding what a person should see first, what they should never have to see, and what should be refused outright — that was the job when it was struck in brass, and it is the job now that it is written in TypeScript.


## Extended Artifacts

To explore these projects in a visual-first layout, view the extended case studies on Behance:

- [Challenge Coin Design](https://www.behance.net/gallery/179811501/Challenge-Coin-Design)
- [Law Enforcement &amp; Public Safety Badges](https://www.behance.net/gallery/179826957/Law-Enforcement-Public-Safety-Badges)
- [San Antonio Fiesta Medal Design](https://www.behance.net/gallery/179840363/San-Antonio-Fiesta-Medal-Design)
