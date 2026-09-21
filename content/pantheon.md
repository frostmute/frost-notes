---
title: Pantheon
designation: MEC-004
slug: pantheon
sphere: mechane
kind: instrument
date: 2026-04-11
revised: 2026-08-30
status: living
sigil: 9028461
reading: 7
epigraph: Five gods, one workshop, and a rule that every claim on the dashboard must be backed by a file on disk.
summary: A five-agent orchestration system with persistent specialist identities, explicit role boundaries, deterministic delivery contracts, atomic artifact storage, and a near-black mission-control dashboard that reports real state rather than simulated status.
stack: [Hermes Agent, Python, SQLite, shell, HTML/CSS/JavaScript, Tailscale]
tags: [agents, orchestration, mythology, automation, dashboards, llm]
resonance: [the-daimon-problem, ghostlist, claw2manus]
external: https://github.com/frostmute
external_label: Repository
plate: assets/pantheon-plate.jpg
plate_caption: Pantheon — classical structure and organizational logic.
---

Most multi-agent demos are theater. A supervisor prompt spawns anonymous workers, the workers narrate progress at each other, and at the end you have a transcript. A transcript is not an artifact. If the run produced nothing you could hand to somebody, the agents did not do work; they described work.

**Pantheon** is built around the opposite premise: an agent's output is a file, and the system is only as real as the files in the store.

## Five persistent identities

Five Hermes Agent profiles with fixed specializations and names taken from the appropriate mythology — **Calliope** for writing, **Clio** for research, **Eris** for marketing, **Prometheus** for engineering, and **Nyx** for system-wide orchestration.

The names are not decoration. Persistent identity does two things that anonymous workers cannot. It gives each agent a stable, accumulated context — Clio's research conventions are Clio's, and they hold across runs. And it makes the boundaries legible to me: when an output is wrong, I know whose contract failed and where to go read it.

Nyx coordinates. The other four do not talk to each other freely, because unconstrained agent chatter is where token budgets go to die and where accountability dissolves.

## Delivery contracts

Every role has an explicit output contract: what artifact type it produces, where it writes, what fields are required, what constitutes done. The contract is checked, not assumed.

Artifact storage is atomic — a task either lands a complete artifact or lands nothing. There is no partially-written deliverable in the store waiting to be mistaken for finished. Task logging is separate from artifact storage, so the record of what happened survives independently of what was produced.

## Mission control that cannot lie

The dashboard is near-black, dense, and reads live state out of SQLite and the artifact store. It does not accept status reports from agents.

This is the whole design argument, restated in the interface. An agent that says it is 80% done is generating text. A dashboard that shows six artifacts on disk and one task in flight is reporting a fact. Wherever the two could disagree, I removed the agent's ability to speak.

Reachable over Tailscale, so mission control is available from anywhere without exposing anything.

## What it cost to learn

The first version let agents hand work to each other directly and report their own progress. It was more impressive to watch and completely unusable — plausible narration, inconsistent output, and no way to locate a failure. Cutting the conversation and forcing everything through files made it duller and made it work.


## Gallery

![Project Image](assets/pantheon-hero.jpg)
