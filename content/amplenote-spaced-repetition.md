---
title: Amplenote Spaced Repetition
designation: MEC-008
slug: amplenote-spaced-repetition
sphere: mechane
kind: instrument
date: 2025-09-27
revised: 2026-04-02
status: maintained
sigil: 8830572
reading: 5
epigraph: A scheduler is about forty lines of arithmetic. Everything else flashcard apps sell you is packaging.
summary: Zero-dependency FSRS-5 flashcards built inside Amplenote, using ordinary Markdown tables for cards and unobtrusive local state for review history.
stack: [JavaScript, Amplenote Plugin API, FSRS-5, Markdown tables]
tags: [amplenote, plugin, spaced-repetition, fsrs, plain-text, learning]
resonance: [amplenote-markdown-kanban, frontmatter-load-bearing]
external: https://github.com/frostmute
external_label: Repository
license: MIT
plate: assets/amplenote-spaced-repetition-plate.jpg
plate_caption: Spaced Repetition — algorithmic review directly inside the note.
---

I wanted spaced repetition on notes I was already writing, without moving anything into a flashcard app and without a card format that only a flashcard app can read.

**FSRS-5** — the free spaced repetition scheduler — is published, well-tested, and small. Implementing it is not the hard part of a flashcard tool. Storage is.

## Cards are table rows

A card is a row in an ordinary Markdown table. Two columns you care about: front and back. Write them the way you would write any table in any note, inside the note where the material already lives.

No custom syntax to learn. No separate deck file. No plugin-specific fence that renders as garbage if the plugin is uninstalled. If you drop the plugin tomorrow, you are left with a note containing a table of questions and answers, which is a perfectly reasonable thing to be left with.

## Review state, kept out of the way

FSRS needs per-card state — stability, difficulty, last review, next due. That state is machine-generated bookkeeping and it should not be sitting in the middle of your prose competing for attention.

So it lives in local plugin state keyed to the card, not smeared across the note body. The note stays readable. The scheduler stays correct. The tradeoff is that review history is device-local rather than portable, which I decided was the right call: the cards are the intellectual asset and they are fully portable. The scheduling metadata is a convenience, and a convenience that pollutes your notes is not a convenience.

## Zero dependencies

No build chain to rot, no transitive package that gets deprecated, no supply-chain surface. FSRS-5 in plain JavaScript against the Amplenote plugin API.

For a tool whose entire premise is longevity — you review a card in four years or the scheduler was pointless — a dependency tree is a liability with a timer on it.

## What it does not do

No cloze deletion, no image occlusion, no shared decks, no sync, no statistics dashboard beyond due counts. It answers one question well: what should I look at today, out of the notes I already wrote.


## Gallery

![Project Image](assets/amplenote-spaced-repetition.png)
