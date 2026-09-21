---
title: The Antikythera Problem
designation: MNE-001
slug: the-antikythera-problem
sphere: mnemosyne
kind: reliquary
date: 2026-07-25
revised: 2026-08-30
status: living
sigil: 4471932
reading: 8
epigraph: Somebody in the second century BC built a machine that knew where the moon would be. Then nobody built another for fourteen hundred years.
summary: On found instruments, lost lineages, and what it means that most sophisticated tools die without descendants.
tags: [mythology, instruments, history, craft, obsolescence]
resonance: [three-hundred-fifty-coins, local-first-or-else]
plate: assets/plate-mechanism.webp
plate_caption: Corroded gear train, exploded view — thirty surviving bronze wheels of an original count nobody agrees on.
---

A sponge diver pulled it off the sea floor near Antikythera in 1901: a lump of corroded bronze and rotted wood, catalogued, shelved, and largely ignored for half a century because nobody could imagine what it was supposed to be.

It was a computer. Thirty-odd surviving bronze gears — the original count is still argued over — driving pointers that tracked the positions of the sun and moon, predicted eclipses, modeled the moon's variable speed across the sky with a pin-and-slot mechanism that implements an elliptical orbit two millennia before Kepler described one, and kept a calendar of the Panhellenic games. It has a differential gear. It was made around the second century BC.

And then nothing. No comparable geared instrument survives from anywhere for roughly fourteen hundred years.

## The lineage did not survive the object

This is the part I keep circling. The device is not primitive. It is not a first attempt — the tolerances and the confidence of the design say clearly that it sits somewhere in the middle of a tradition, with predecessors we do not have and a workshop culture we cannot reconstruct. Somebody taught somebody how to cut those teeth.

That tradition then vanished so completely that when geared astronomical clocks reappear in medieval Europe, they appear to be an independent reinvention. The object outlasted the knowledge that produced it by fourteen centuries, which is exactly backwards from how we assume progress works.

We tell ourselves technology ratchets. It accumulates, it compounds, each generation stands on the last. The Antikythera mechanism is a bronze counterargument sitting in a case in Athens. Sophistication is not self-preserving. A capability held by a small number of people in a small number of workshops is one bad century away from being gone, and the artifact it leaves behind is not sufficient to regenerate it.

## Every tool I have written is more fragile than that gear train

The mechanism survived two thousand years underwater in salt.

My work will not last twenty. Not because the code is bad but because the code is not the thing — the thing is a dependency graph. It runs on a runtime that depends on a package registry that depends on a company, targeting an API owned by another company, inside an application whose plugin interface will be rewritten. Remove any layer and what remains is not a corroded artifact somebody can reverse-engineer in a lab. It is a directory of text files that no longer do anything, and unlike bronze they do not even suggest their own function.

This is the strongest argument I know for local-first, plain-text, boring formats — not ideology, just decay resistance. A Markdown file with a YAML header is legible to a human with no tooling at all. That is a much lower bar than "runs," and a much longer half-life.

## The mythological reading, which I do not entirely trust

The Greeks had a word for a made thing that models the cosmos: they built orreries and called the practice *sphairopoiia*, sphere-making. Cicero describes Archimedes' bronze spheres being carried off as war loot to Rome, where — the detail I find unbearable — they were admired as marvels by people who had no idea how they worked and could not have built another.

There is an obvious moral available here about hubris and the gods, and I want to be careful with it, because the moral is a story we impose on a data point. The mechanism was probably not lost to divine punishment or civilizational decadence. It was probably lost to something much more boring: a handful of workshops, a disrupted trade route, two generations without an apprentice.

That is worse. Punishment implies significance. Attrition implies nothing at all.

## What I do about it

Write documentation as though the reader has no access to me. Prefer formats that outlive their readers. Assume the tool dies and ask what remains — and try to make what remains be an explanation rather than a binary.

And take the apprenticeship problem seriously. The mechanism's real failure mode was not material. It was that the knowledge lived in too few heads. Everything I have learned about plugin architecture, about metadata discipline, about the specific way a knowledge base rots, exists in one head and some Markdown. So: the Markdown. Publicly. Which is most of what this site is for.
