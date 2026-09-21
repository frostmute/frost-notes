---
title: Tetromino
designation: MEC-002
slug: tetromino
sphere: mechane
kind: instrument
date: 2026-02-14
revised: 2026-08-20
status: maintained
sigil: 3310774
reading: 6
epigraph: Curation without captivity. The channel is yours; the files should be too.
summary: Deterministic one-way import from Are.na channels into Obsidian — stable Markdown notes, metadata, comments, previews, and local attachments, with a dry-run diff before anything is written.
stack: [TypeScript, Obsidian API, Are.na API v3, esbuild, Jest, GitHub Actions]
tags: [obsidian, plugin, are-na, import, determinism, pkm]
resonance: [make-it-rain, anytype-sync, local-first-or-else]
external: https://github.com/frostmute
external_label: Repository
license: MIT
plate: assets/tetromino-plate.jpg
plate_caption: Tetromino — structural exploration of falling blocks.
---

Are.na is the best public thinking surface I know of and the worst place to keep anything. It rewards drift — you add a block, someone else's channel pulls you sideways, six months later there is a research trail you could not reconstruct if you tried. That is the point of it. It is also why the contents need to live somewhere you control.

**Tetromino** moves channels and blocks out of Are.na and into an Obsidian vault as ordinary Markdown. The design constraint that governs everything else: the same source produces the same file structure, every time.

## Determinism as a feature

Most importers are non-deterministic by accident. Filenames derive from mutable titles, ordering depends on API response order, and a second run against an unchanged channel produces a different vault. That makes the tool untrustworthy in exactly the situation it is meant for — the long-running archive you re-pull once a quarter.

Tetromino fixes the mapping. Block identity comes from Are.na's stable IDs, filenames are collision-safe, note structure is templated rather than improvised, and the renderers are pure functions from block to Markdown. Re-running a channel import is a no-op unless the upstream actually moved.

## Previewable and reversible

Before it writes, it shows you what it would write. The dry-run diff viewer lists creates, updates, and skips, and you approve or cancel. This is the single feature I would keep if I had to strip everything else out. An importer that writes into a vault of thousands of notes without showing its work is asking you to trust it, and nothing has earned that.

## One way, on purpose

No push-back to Are.na. No hidden cloud process. No background timer. The plugin runs when you invoke it and stops when it is done.

Two-way sync between a block-based service and a file-based vault is a distributed-systems problem wearing a productivity-tool costume. Every implementation eventually confronts the same question — which side wins when both changed — and every answer is wrong for somebody. Declining the problem is cheaper than solving it badly.

## What is inside

An API pagination and retry layer that survives long pulls. Markdown and frontmatter renderers per block type. An attachment pipeline that downloads images and files locally rather than hotlinking into a service that may reorganize its CDN. Generated channel index notes so the channel structure is navigable from inside the vault. A template system for anyone who wants a different note shape than mine. Settings, docs, and a release workflow, because a plugin nobody can install is a private script.


## Gallery

![Project Image](assets/tetromino.png)
