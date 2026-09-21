---
title: Local-First, Or Else
designation: MNE-004
slug: local-first-or-else
sphere: mnemosyne
kind: reliquary
date: 2025-11-30
revised: 2026-08-16
status: living
sigil: 8845210
reading: 6
epigraph: Software you rent is software that can be taken from you mid-sentence.
summary: On building tools that keep working when the vendor does not — and why every importer I have written is the same argument in a different costume.
tags: [local-first, architecture, ownership, plain-text, portability]
resonance: [tetromino, anytype-sync, digital-garden-to-github-pages]
---

I have lost tools to acquisition, to pivot, to a pricing change, and once to a company deciding my use case was no longer strategic. In every case the data was technically exportable and practically useless — a JSON dump with no reader, which is a museum piece, not a file.

So the rule: anything I intend to depend on for more than a year stores its state in a format I can read in a text editor, on a disk I own, and functions with the network unplugged. Sync is a feature. It is never the foundation.

## The exit test

Before I commit to a platform I ask one question. **If this company disappeared tonight, what would I have in the morning?**

Not "is there an export." There is always an export. The question is whether the export is *usable by something other than the thing that produced it* — whether a person with a text editor and no special knowledge could read it, and whether the structure that made it valuable survives the crossing.

Raindrop passes on data and fails on structure: you get your bookmarks, not the collection hierarchy that made them navigable. Are.na is similar. Anytype is more interesting — the data genuinely is on your machine, in an object graph and a JSON block AST that only Anytype can interpret. Local and illegible. Better than remote and illegible, and still not the finish line.

Obsidian passes completely, and it is worth naming why: a vault is a folder of Markdown files. The application is a reader. If Obsidian ended tomorrow my notes would be unaffected, because the notes were never inside Obsidian.

That is the whole standard. **The application should be a reader of your files, not a container for your data.**

## Which is why I keep writing importers

Look at the instruments on this dial and it is one tool, built five times against five services. Raindrop to Markdown. Are.na to Markdown. Anytype to Markdown. Amplenote work that keeps Markdown as the source of truth instead of a board database. A published vault moved off a hosted platform into a repository.

I did not set out to specialize in this. I kept hitting the same wall — a service holding my structure hostage — and each importer is a door cut in a specific wall.

## The rules that fell out of it

**One direction.** Two-way sync between a service and a file tree is a distributed-systems problem in a productivity costume. Every implementation confronts the same question — which side wins when both changed — and every answer is wrong for somebody. Declining is cheaper than answering badly.

**Show the write before you make it.** A diff, a dry run, a report. A tool that writes into thousands of files without showing its work is asking for trust it has not earned.

**Deterministic output.** Same source, same files. Otherwise re-running an import against a long-lived archive is an act of faith.

**Plain text or nothing.** Not because plain text is elegant. Because it is the only format with a proven survival record. Markdown and YAML will be readable in twenty years for the same reason a printed page is: no runtime is required.

## The uncomfortable part

Local-first is more work and a worse product on day one. No instant multi-device sync, no collaboration, no browser tab from a hotel computer. Hosted software wins the demo every time.

It wins the decade differently. I have notes from 2004 I can still open and tools from 2019 I cannot, and the difference between them was never quality. It was custody.

## The instrument argument

The Antikythera mechanism survived two thousand years underwater because it was bronze, and even then all it left us was the object — no manual, no lineage, no descendant for fourteen hundred years.

I cannot make software out of bronze. What I can do is make sure that when the mechanism finally corrodes, what is left behind is a folder of files somebody can still read.
