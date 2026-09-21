---
title: Civic Tech That Works: Building the Texas Tenant Advisor
designation: EPH-010
slug: civic-tech-that-works
sphere: ephemeris
kind: field-note
date: 2026-09-19
status: open
sigil: 6192907
reading: 5
epigraph: A right hidden behind the wrong procedure is a right most people cannot use.
summary: How Texas Tenant Advisor turns Chapter 92 into cautious, privacy-preserving workflows without pretending software can replace legal judgment.
tags: [civic-tech, legal-design, accessibility, privacy, texas]
resonance: [tenant-rights-diagnostic, three-hundred-fifty-coins, frontmatter-load-bearing]
---

A broken air conditioner in July is not an abstract legal question. Neither is mold behind a baseboard, a changed lock, or a security deposit that never came back. But finding out what Texas law allows can still mean reading a statute while already dealing with the thing the statute is supposed to remedy.

The protections are mostly in Chapter 92 of the Texas Property Code. The harder problem is execution: identifying the relevant rule, preserving the right evidence, giving notice in the right form, and knowing when the next step becomes available.

That is the problem behind **Texas Tenant Advisor**. It is not a lawyer in a browser. It is a route from a lived problem to the questions, records, deadlines, and primary sources that matter.

## The procedure is part of the right

Texas landlords generally have a duty to repair conditions that materially affect an ordinary tenant's physical health or safety, subject to statutory conditions including notice and rent status. That sentence sounds simple. The procedure is not.

Under [Texas Property Code § 92.056](https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.056), a tenant may need to provide a second written notice before pursuing certain remedies. One notice can be sufficient when it is sent by registered or certified mail, return receipt requested, or by another trackable delivery service. Seven days is a rebuttable presumption of reasonable time, not a universal deadline; the severity of the condition and the availability of labor and materials also matter.

Security deposits have their own clock and prerequisites. [Section 92.103](https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.103) generally requires a refund or itemized accounting within 30 days after the tenant surrenders the premises, while [§ 92.107](https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.107) ties that obligation to the tenant providing a forwarding address.

A useful tool cannot flatten those distinctions into a green check mark.

```text
[ A tenant describes the problem ]
                 │
                 ▼
       ┌────────────────────┐
       │ Texas Tenant       │
       │ Advisor            │
       └────────────────────┘
          /       │       \
         ▼        ▼        ▼
 [ Questions ] [ Sources ] [ Next steps ]
 [ & records  ] [ & clocks ] [ & notices  ]
```

## Translating law into a workflow

The interface begins with situations rather than legal categories: the air conditioning is out; the landlord changed the lock; a deposit was withheld. Each answer narrows the path until the tool can identify a relevant statute and explain what the tenant may need to document or do next.

Four design rules shape the result:

* **Workflows over encyclopedias.** Repairs, deposits, lockouts, utility interruption, and retaliation are separate paths because their facts and procedures differ.
* **Evidence before escalation.** The tool prompts for dates, photographs, written communications, delivery receipts, and other records while they can still be collected.
* **Drafts, not declarations.** A generated notice organizes facts supplied by the tenant and cites the relevant source. It does not decide that the tenant qualifies for a remedy.
* **Primary sources in reach.** Every legal rule should lead back to the statute behind it, not end at an unsupported summary.

## Privacy is part of the product

Housing disputes can expose addresses, financial details, health conditions, and conflict inside a home. Texas Tenant Advisor keeps its question flow and notice drafting in the browser so those facts do not need to be retained by an application server.

That boundary is also a product constraint. No account is required. No case file is quietly assembled. A visitor can use the tool, save the output, and leave.

## Where software must stop

The most important feature is a refusal to guess. A decision path that cannot reach a supported result should say so and point toward qualified legal help. The tool provides legal information, not legal advice, and unusual facts can change the analysis.

Civic software is useful when it reduces an information imbalance without manufacturing certainty. The statute remains the authority. The tenant keeps the records. The instrument's job is to make the next responsible step visible.
