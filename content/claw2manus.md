---
title: Claw2Manus
designation: MEC-006
slug: claw2manus
sphere: mechane
kind: instrument
date: 2026-07-08
revised: 2026-08-12
status: maintained
sigil: 7719340
reading: 4
epigraph: Two agent platforms, two skill formats, one afternoon of hand-translation you should never have to do twice.
summary: Converts OpenClaw and ClawHub skill packages into Manus-compatible skills, with configurable tool mapping, validation, and per-run conversion reports.
stack: [Python, YAML, JSON Schema, CLI]
tags: [agents, interop, skills, tooling, openclaw, manus]
resonance: [pantheon, local-first-or-else]
external: https://github.com/frostmute
external_label: Repository
license: MIT
plate: assets/claw2manus-plate.jpg
plate_caption: Claw2Manus — automating the translation between agent ecosystems.
---

Every agent platform has invented its own skill package format, and none of them are far apart. A skill is a name, a description, some instructions, a declared set of tools, and occasionally bundled files. The differences are in the envelope, not the content — which means the translation is mechanical, which means nobody should be doing it by hand.

I was doing it by hand. **Claw2Manus** is the result of doing it by hand three times.

## What it does

Takes an OpenClaw or ClawHub skill package and emits a Manus-compatible skill. Directory in, directory out, plus a report.

## Tool mapping is the actual problem

The metadata converts trivially. The tools do not. Platform A's `web.search` is platform B's `search_web` with a different parameter shape, and some tools have no counterpart at all.

So the mapping is configurable and declarative — a mapping file you can read and edit, not logic buried in the converter. When a tool has no target equivalent, the converter does not silently drop it or guess a substitute. It records the gap in the report and marks the skill as partial. A skill that quietly lost a capability during conversion is worse than one that refused to convert, because you will discover the loss at runtime, in the middle of a task, with no idea why.

## Validation before emission

Output is validated against the target schema before it is written. Malformed skills fail at conversion time with a line to look at, rather than at load time with a stack trace from somebody else's runtime.

## Conversion reports

Every run writes a report: what converted cleanly, what mapped through a substitution, what could not be mapped, and what was dropped from the source envelope because the target has no field for it.

This is the same principle as the diff view in Tetromino and the dashboard rule in Pantheon, applied to a converter. If the tool made a decision on your behalf, the tool tells you which decision it made. Anything else is a black box, and a black box in the middle of a toolchain is a future outage with your name on it.

## Scope

It converts skills. It does not convert agent definitions, runtime configuration, or anything with platform-specific execution semantics, and it will not grow into a general interop layer. One narrow thing, exactly.


## Gallery

![Project Image](assets/claw2manus-hero.png)
