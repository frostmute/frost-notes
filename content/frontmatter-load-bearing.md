---
title: Frontmatter Is Load-Bearing
designation: EPH-005
slug: frontmatter-load-bearing
sphere: ephemeris
kind: field-note
date: 2025-09-14
revised: 2026-05-04
status: settled
sigil: 1204773
reading: 4
epigraph: A note without metadata is a note you will find exactly once.
summary: Why the YAML block at the top of the file is the actual interface, and why inconsistency in it compounds faster than any other kind of debt.
tags: [pkm, metadata, schema, discipline]
resonance: [make-it-rain, anytype-sync, digital-garden-to-github-pages]
---

People treat frontmatter as decoration — a place to stash a tag and a date, filled in when convenient, skipped when not. Then two years later they have eleven thousand notes and no way to ask a question of them.

The frontmatter is not decoration. It is the only machine-readable surface the note has. Everything below the `---` is prose, which is to say it is opaque to every tool you will ever point at your vault. Everything above it is a database row.

## Inconsistency compounds

One note with `status: done` and another with `status: complete` is not a small problem that stays small. Every query you write from then on has to know about both. Every new tool has to know about both. Somebody — you, later, annoyed — has to write a migration, and migrations over prose files are archaeology.

The fix is not more fields. It is *fewer fields, chosen once, enforced*. My working set is small: `title`, `date`, `revised`, `status`, `kind`, `tags`, and `resonance` for deliberate cross-links. Seven keys. `status` is a closed vocabulary of five values. `kind` is a closed vocabulary of three. Closed vocabularies are the entire trick; an open text field is a promise to be inconsistent later.

## Write it at creation or not at all

Backfilling metadata does not happen. It is a task with no deadline and no reward, and it loses to every other task forever. The only frontmatter that survives is frontmatter written by a template at the moment the note is created, when the context is still in your head and the marginal cost is four keystrokes.

Which means the template system is more important than the schema. A perfect schema nobody fills in is worth less than a mediocre schema applied automatically to every note.

## The payoff arrives late and all at once

For the first year this feels like bureaucracy. There is no return. You are typing YAML into files nobody reads.

Then you build something that reads it, and the whole vault turns over at once. Dataview queries that actually answer questions. Retrieval that can filter by status before it filters by similarity. A site — this one — where the navigation is generated from the metadata rather than maintained by hand, and every entry's position on the dial is computed from its date because the date is trustworthy.

That is the argument. Not tidiness. Leverage, deferred.
