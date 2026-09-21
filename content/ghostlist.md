---
title: Ghostlist
designation: MEC-005
slug: ghostlist
sphere: mechane
kind: instrument
date: 2026-03-05
revised: 2026-07-19
status: prototype
sigil: 2274508
reading: 5
epigraph: The photo is not the listing. Everything between them is unpaid labor.
summary: A vision-to-listing pipeline that turns raw product photos into cleaned images, structured item data, pricing evidence, and marketplace-ready drafts.
stack: [Python, vision models, SQLite, image processing, marketplace APIs]
tags: [automation, vision, ecommerce, pipelines, resale, llm]
resonance: [pantheon, three-hundred-fifty-coins]
external: https://github.com/frostmute
external_label: Repository
plate: assets/ghostlist-plate.jpg
plate_caption: Ghostlist — sneaker release tracking and analytical workflow.
---

I have run a storefront. The part nobody warns you about is not sourcing, shipping, or customer service. It is the forty minutes between photographing an item and having a listing that a human would actually click — background cleanup, measurement, category, condition language, title keywording, and a price you can defend.

Multiply that by inventory and it becomes the reason people with good stock have empty stores.

**Ghostlist** compresses it. Photos in; cleaned images, structured item data, pricing evidence, and a marketplace-ready draft out.

## Stages, not one prompt

The pipeline is deliberately staged, because a single model call that does identification, pricing, and copywriting at once produces confident nonsense you cannot audit.

**Image conditioning** — deduplicate, orient, crop, remove background where appropriate, and produce the size variants each destination platform actually wants.

**Identification** — vision extraction into a structured record: item type, brand marks, materials, colorway, visible flaws, legible text. Fields, not prose. If a field cannot be read from the photo it stays empty rather than getting invented, because a hallucinated brand attribution is a return, a refund, and possibly a policy strike.

**Pricing evidence** — comparable sold listings, gathered and cited, with the range and the sample size shown. The pipeline does not set a price. It hands me the evidence and a suggestion. Pricing is judgment and judgment stays with the operator.

**Draft assembly** — title, bullets, condition statement, and category, assembled from the structured record. Because the copy is generated from fields rather than from the photo directly, it cannot describe something that is not in the record.

## Everything is reviewable

Each stage writes its output to disk before the next stage reads it. A bad draft is traceable to a bad record, and a bad record is traceable to a specific photo. When a listing comes out wrong I can see exactly which step invented something, which is the difference between a tool I can fix and a tool I have to trust.

## Status

Prototype, and honest about it. Identification is strong on apparel and hard goods with visible branding and weak on unmarked vintage, which is the category where the money actually is. Pricing evidence is only as good as the comparables it can reach. The image conditioning stage is the part I would ship tomorrow.


## Gallery

![Project Image](assets/ghostlist.png)
