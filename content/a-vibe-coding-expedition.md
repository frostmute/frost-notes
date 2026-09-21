---
title: A Vibe-Coding Expedition
designation: EPH-004
slug: a-vibe-coding-expedition
sphere: ephemeris
kind: field-note
date: 2025-05-23
revised: 2026-08-04
status: open
sigil: 7248861
reading: 6
epigraph: I did not know TypeScript. I shipped a TypeScript plugin. Both of those sentences are load-bearing.
summary: Why I built a Raindrop-to-Obsidian importer, what the model could and could not do for me, and how a prototype became a maintained open-source plugin with real users.
tags: [obsidian, plugin, llm, learning, typescript, open-source]
resonance: [make-it-rain, welcome-to-the-archive, the-daimon-problem]
external: https://jonathanjwagner.super.site/blog-posts/a-dive-into-obsidian-plugin-development-a-vibe-coding-expedition
external_label: Original article
plate: assets/plate-interior.webp
plate_caption: The workshop as it would have been drawn: a plan you did not draw, executed by hands that are not yours.
---

In May 2025 I wanted a thing that did not exist — an Obsidian plugin that would pull eleven thousand Raindrop.io items into my vault with the metadata intact. I had twenty years of design and production behind me, working Python, and no TypeScript.

So I built it with a model in the loop, shipped it, and it is now the most-used thing I have made. This is the honest accounting of how that went, because the discourse around it is useless in both directions.

## What the model was genuinely good at

**Getting past the cold start.** The gap between "I understand this domain" and "I know this language's idioms" is where side projects die. The model erased that gap in an afternoon. Not the learning — the paralysis.

**Boilerplate with a known shape.** Plugin manifest, build config, settings tab scaffolding, API client with retry. Well-documented, heavily-precedented work.

**Explaining unfamiliar code back to me.** The highest-value use, and the least discussed. I would paste something I did not understand and ask it to walk me through it. That is tutoring, and it compounds.

## What it was bad at

**Architecture.** Every suggestion optimized for the file in front of it. Left unsupervised it produced five slightly different ways to handle a Raindrop item, because each request was answered locally and nothing was answered globally.

**Knowing when to stop.** It will happily add a feature to a design that should have been simplified instead. The one-way-valve decision in Make It Rain — no push-back to Raindrop, ever — is the single most important thing about that plugin, and no model proposed it. It came from having been burned by a sync engine.

**Someone else's rate limits.** The naive client it wrote worked on a hundred items and collapsed on two thousand. The 120-requests-per-minute limiter, the retries, the pre-flight token check: those came from watching it fail against reality.

## What actually made it a real plugin

Everything after it worked once. Documentation somebody else can follow. Contextual help next to the settings that confuse people. Overwrite protection. Verbose logging so a bug report is actionable. Issue triage, versioning, a release workflow, and answering strangers who are using it wrong because I explained it badly.

The model wrote a prototype in a weekend. Turning a prototype into something maintained took months and no model helped with the part that mattered.

## Where I landed

Twenty years of production taught me the thing that transfers: the code was never the deliverable. Judgment about what to build, what to refuse, and what a person should never have to see is the deliverable, and that is still entirely mine.

The model is the fastest apprentice I have ever had. It has no taste. Taste was always the job.
