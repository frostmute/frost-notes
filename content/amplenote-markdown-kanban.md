---
title: Amplenote Markdown Kanban
designation: MEC-007
slug: amplenote-markdown-kanban
sphere: mechane
kind: instrument
date: 2025-11-09
revised: 2026-05-16
status: maintained
sigil: 4483126
reading: 5
epigraph: Headings become columns. Tasks become cards. The note stays the database.
summary: An Amplenote embed that turns any note into a working kanban board while keeping headings, tasks, and card edits in the underlying Markdown.
stack: [React, TypeScript, Amplenote Plugin API, mdast, Vitest, esbuild]
tags: [amplenote, plugin, markdown, kanban, interaction-design, plain-text]
resonance: [amplenote-spaced-repetition, frontmatter-load-bearing]
external: https://github.com/frostmute
external_label: Repository
license: MIT
plate: assets/amplenote-markdown-kanban-plate.jpg
plate_caption: Markdown Kanban — treating the text file as the database.
---

Every board tool eventually asks you to move your work into its database. Then the board becomes the source of truth, the note becomes a stale copy, and the export button produces a CSV with none of the structure that made the board useful.

**AMK** refuses the trade. The note is the database. The board is a view of it.

## The mapping

Headings are columns. Tasks are cards. That is the entire schema, and it is deliberately too simple to need documentation.

Drag a card between columns and the task moves under a different heading in the Markdown. Add a column and a heading appears. Edit a card and you have edited the text. Open the note in Amplenote's normal editor and you see a perfectly ordinary structured note — no fenced JSON payload, no HTML comment carrying hidden board state, nothing that breaks if a human edits around it.

## Why that constraint is worth the cost

It costs real capability. There are no swimlanes, no card IDs, no cross-board relations, no board-level metadata — because none of those have an obvious plain-Markdown representation that survives a human editing the note by hand.

What you get for the loss is that the board can be deleted and you have lost nothing. The work was never in the board.

## What is actually in it

A React embed with drag-and-drop, column creation and reordering, WIP limits, configurable completed-column behavior, raw Markdown editing on a card for when the structured view is in the way, image rendering, and refresh from the active note.

Parsing goes through **mdast** rather than regex. I tried regex first. Markdown parsing with regular expressions works on your own notes and fails on everyone else's, usually on a nested list inside a task inside a heading you did not anticipate.

## The hard part

Round-tripping. Reading Markdown into a board is easy. Writing the board back without reformatting the parts you did not touch is the whole engineering problem — a serializer that normalizes whitespace will rewrite the entire note on every card move, which turns version history into noise and makes the plugin feel dangerous even when it is correct.

The fix is surgical edits against the parsed tree rather than re-emitting the document. Slower to implement, and the only version worth shipping.
