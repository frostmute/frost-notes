---
title: Make It Rain
designation: MEC-001
slug: make-it-rain
sphere: mechane
kind: instrument
date: 2025-05-18
revised: 2026-08-02
status: maintained
sigil: 5077315
reading: 7
epigraph: Eleven thousand bookmarks are not a library. They are a weather system.
summary: An Obsidian plugin that pulls Raindrop.io bookmarks, highlights and notes into the vault as Markdown, with YAML frontmatter deep enough to query against.
stack: [TypeScript, Obsidian API, Raindrop.io REST, esbuild, Jest, GitHub Actions]
tags: [pkm, obsidian, plugin, metadata, sync, raindrop]
resonance: [a-vibe-coding-expedition, frontmatter-load-bearing, tetromino]
external: https://github.com/frostmute/make-it-rain
external_label: Repository
license: MIT
plate: assets/make-it-rain-plate.jpg
plate_caption: Make It Rain — local-first data extraction and archiving.
---

I had accumulated something past eleven thousand items in Raindrop.io. Articles I meant to read, tools I meant to try, half of a research trail on some question I no longer remembered asking. Raindrop is a good collector. It is a poor thinking surface. Obsidian is the opposite. The gap between them was where all my actual work went to die.

**Make It Rain** closes that gap in one direction, deliberately. It fetches from Raindrop and writes Markdown into the vault. It does not push back. A one-way valve is easier to reason about than a sync engine, and a sync engine you cannot reason about will eventually eat your notes.

## What it does

Fetching happens on demand, from the Command Palette or a ribbon icon — never on a timer, because a background process that writes files is a background process that writes files you did not ask for. Two entry points: **Fetch Raindrops** for a filtered bulk pull, and **Quick Import Raindrop by URL/ID** for the single item you have open in another tab right now.

The filters are the interesting part. You can constrain a pull by collection — by ID, by name, or by picking from a live filterable list populated from your account — and optionally walk down into nested subcollections. Tags filter with explicit AND or OR matching, because "articles tagged both `psychedelics` and `methodology`" is a different question from "articles tagged either." Content type narrows further: links, articles, images, videos, documents, audio.

Selective sync keeps repeat pulls cheap. Fetch only new items, or update existing notes when Raindrop's `last_update` has moved. Collection hierarchies replicate as folder structures, so the shape you built in the collector survives the crossing.

## Frontmatter as the real product

The note body is a convenience. The frontmatter is the artifact.

Every generated note carries the Raindrop ID, title, source URL, type, creation and update dates, the collection's ID, title, full path and parent ID, tags, and a banner image URL. That last field is configurable, because half of Obsidian's banner plugins disagree about what to call it.

Once that block is consistent across eleven thousand notes, Dataview stops being a toy. You can ask which collections have gone stale, which domains you over-trust, what you saved in the six weeks before a project shipped. The bookmarks become queryable terrain instead of a pile.

## Templates

Version 1.7.0 introduced a Handlebars-like template system, enabled by default, and it changed how the plugin gets used. There is a default template plus pre-filled, editable templates for each content type — link, article, image, video, document, audio — so a saved video does not pretend to be an essay.

Templates can be toggled globally, edited in settings, enabled or disabled per content type, reset to defaults, or overridden for a single fetch from the fetch modal. Pre-calculated variables cover the things you would otherwise re-derive in every template: `formattedCreatedDate`, `formattedUpdatedDate`, `renderedType`, `domain`, `formattedTags`. Collection data arrives flattened. With templating disabled the plugin falls back to a basic note structure, which is the correct behavior for a feature that is on by default.

Filenames get their own template: `{{title}}`, `{{id}}`, `{{collectionTitle}}`, `{{date}}`.

## Behaving well against someone else's API

Rate limiting is built in at 120 requests per minute, with automatic retries and progress notices, because the failure mode of a naive importer is a rate-limit wall two thousand items into a five thousand item pull. Tokens are verified before a fetch begins rather than at the first 401. Existing notes are protected from accidental overwrite.

Verbose console logging stays in. Contextual help links sit next to the settings that actually confuse people. Installation works manually from `main.js`, `manifest.json` and `styles.css` for anyone who does not want to wait on the community catalog. MIT licensed.

## What I would change

The one-way valve is still right, but the update path wants to be smarter — a diff view before overwrite, rather than a policy decision made once in settings. And the template editor is a textarea. It deserves to be an editor.


## Gallery

![Project Image](assets/make-it-rain.png)
