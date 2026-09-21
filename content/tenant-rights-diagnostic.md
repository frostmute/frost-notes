---
title: Texas Tenant Advisor
designation: MEC-009
slug: tenant-rights-diagnostic
sphere: mechane
kind: instrument
date: 2026-03-11
revised: 2026-09-19
status: in-flight
sigil: 7712044
reading: 6
epigraph: A right hidden behind the wrong procedure is a right most people cannot use.
summary: A privacy-preserving tenant-rights workflow that turns Texas Property Code Chapter 92 into cautious questions, evidence prompts, statutory clocks, and notice drafts.
stack: [TypeScript, Vanilla DOM, JSON decision graph, client-side drafting, CSS container queries]
tags: [civic-tech, legal-design, accessibility, privacy, texas]
resonance: [civic-tech-that-works, three-hundred-fifty-coins, frontmatter-load-bearing]
status_note: Content review pending with a local tenant advocacy group before public release.
plate: assets/texas-tenant-advisor-home.png
plate_caption: Texas Tenant Advisor — the home workflow for turning tenant problems into cautious next steps.
---

**Texas Tenant Advisor** is a browser-based guide for Texas renters who know something is wrong but do not yet know which rule, deadline, record, or notice matters. A broken air conditioner in July, a lockout, a utility interruption, or a missing security deposit is not experienced as a legal category. The instrument starts with the lived problem and works toward the relevant procedure.

It is not a lawyer in a browser. It is a route from a tenant's facts to the questions, records, deadlines, primary sources, and draft notices that may help them take the next responsible step.

## The procedure is part of the right

Many tenant protections in Texas are procedural. Repair remedies under Texas Property Code Chapter 92 can depend on notice, rent status, delivery method, reasonable time, severity of the condition, and whether a second notice is required. Security deposit claims have a different clock and can depend on whether the tenant supplied a forwarding address. Lockouts and utility interruptions follow still other paths.

A useful tool cannot flatten those distinctions into a green check mark. Texas Tenant Advisor models them as workflows: repairs, deposits, lockouts, utility interruption, and retaliation each have their own decision path because the facts and remedies are different.

## Decision graph, not encyclopedia

The core artifact is a JSON decision graph. Nodes ask one plain-language question at a time. Edges represent legally meaningful distinctions. Terminal nodes carry the statute, the relevant clock, the records to preserve, and the next-step language the tenant can use.

The interface deliberately avoids the reference-site pattern where every answer requires already knowing the vocabulary. The first screen asks about the situation. Subsequent screens narrow the path until the tool can either identify a supported next step or admit that the facts need human review.

Refusal is a feature. If a path cannot reach a supported result, the instrument says so and points toward qualified legal help rather than improvising legal advice.

## Evidence before escalation

The tool prompts for records while they can still be collected: dates, photographs, written communications, rent status, delivery receipts, forwarding addresses, and prior notices. Those prompts are treated as part of the workflow, not as optional decoration, because evidence is often what turns a right on paper into a usable remedy.

The generated output is a draft notice, not a declaration that the tenant wins. It organizes the facts supplied by the tenant, cites the relevant source, names the applicable clock, and includes delivery instructions where the delivery method affects the legal path.

## Privacy as architecture

Housing disputes can expose addresses, finances, health conditions, family conflict, and retaliation risk. Texas Tenant Advisor keeps the question flow and notice drafting in the browser. No account is required. No case file is assembled on an application server. A visitor can use the tool, save or print the result, and leave.

That constraint shaped the implementation: a static front end, no framework requirement, one decision-graph payload, accessible controls, and components designed to be embedded on an advocacy group's existing site.

## Built for the phone in a laundromat

The likely device is not a developer laptop. It may be a five-year-old Android on cellular, held one-handed while the user is standing somewhere stressful. The interface uses one question per screen, large touch targets, readable default text, keyboard access, screen-reader-friendly state changes, and container queries so the flow survives narrow embeds.

Average paths are short by design. The hard work is not adding every possible question; it is cutting questions until the remaining ones actually change the outcome.

## Where it stands

Repair-and-deduct, security deposit return, lockout, and utility-interruption paths are implemented. Retaliation and eviction-defense paths are drafted but remain unshipped until reviewed. Legal content review is the release gate, because an unreviewed civic tool can create exactly the kind of false certainty it is supposed to prevent.
