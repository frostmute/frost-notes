---
title: Anytype Sync
designation: MEC-003
slug: anytype-sync
sphere: mechane
kind: instrument
date: 2026-06-02
revised: 2026-08-28
status: maintained
sigil: 6142889
reading: 6
epigraph: Local data is not the same thing as useful files.
summary: A local-first bridge that translates Anytype's object graph and JSON block AST into portable Obsidian Markdown and structured YAML, with a guarded back-sync that refuses to clobber newer remote state.
stack: [TypeScript, Obsidian API, Anytype local REST API, esbuild, Node test runner]
tags: [anytype, obsidian, plugin, local-first, ast, schema]
resonance: [tetromino, make-it-rain, frontmatter-load-bearing]
external: https://github.com/frostmute
external_label: Repository
license: MIT
plate: assets/anytype-sync-plate.jpg
plate_caption: Anytype Sync — bridging local-first graphs and Markdown archives.
---

Anytype stores your data on your machine, which sounds like it settles the ownership question. It does not. The data is local and the format is an object graph with a JSON block AST, which means your notes are on your disk in a shape only Anytype can read. Local and illegible is a better position than remote and illegible. It is not the finish line.

**Anytype Sync** connects to the official Anytype headless daemon over localhost, walks spaces, objects, properties, and block content, and writes ordinary Markdown into an Obsidian vault.

## The translation problem

An object graph does not map cleanly onto a folder of files, and pretending otherwise is where these tools usually break. Anytype objects have typed relations; Markdown has a YAML header and a body. Blocks nest arbitrarily; Markdown nests by convention.

So the conversion is explicit rather than clever. The JSON AST walks down to Markdown block by block, with per-type handlers. Anytype property types map to frontmatter through a declared type mapping rather than by guessing from the value. Filenames are collision-safe. Routing is configurable, so objects land where your vault expects them instead of where my vault expects them.

## Skip-on-unchanged

Imports compare state and skip objects that have not moved. This sounds like an optimization. It is really a correctness feature: a run that rewrites five thousand unchanged files destroys five thousand modification timestamps, and modification time is load-bearing metadata in a vault that other plugins read.

## Guarded back-sync

The plugin will write the active note back to Anytype. This is the one place a one-way rule made the tool worse — you notice a typo in Obsidian, and fixing it in two places is exactly the friction that makes people abandon the bridge.

So back-sync exists, for one object at a time, from the note you are looking at. And it runs a remote-newer check first. If Anytype's copy has changed since the import, the write is refused and you get told why. You can override it. You have to say so out loud.

Every destructive operation in a data bridge should require a sentence from the user, not a checkbox they set once in settings nine months ago and forgot.

## Notes for the next version

A spaces picker exists; a per-space schema profile does not, and it should. The type mapping is global, which is fine until you have two spaces with contradictory relation names. That is the next thing to break, so that is the next thing to build.


## Gallery

![Project Image](assets/anytype-sync-obsidian.jpg)
