---
title: The Agent Should Not Own the Workflow
designation: MNE-005
slug: the-agent-should-not-own-the-workflow
sphere: mnemosyne
kind: reliquary
date: 2026-09-04
status: archival
sigil: 943635
reading: 7
summary: How to build AI-assisted tools that preserve user intent, expose state, and make automation reversible.
tags: [ai-agents, mcp, product-design, automation, local-first, plugin-development]
resonance: [the-antikythera-problem]
---

The most dangerous thing about AI agents is not that they can act.

It is that they can act in ways that look plausible enough to escape scrutiny.

When an agent can browse, call APIs, update records, create files, send messages, and coordinate other tools, the design challenge is no longer simply “How do we give the model access?” It becomes:

How do we give users leverage without hiding the consequences of automation?

The answer is not to avoid agents. The answer is to place them inside systems with boundaries.

An agent should be a capable collaborator operating inside a visible workflow—not the workflow itself.

Capability is not authority
Language models are becoming more practical because they can interact with real systems through structured tools rather than only generating text. The Model Context Protocol, for example, formalizes several useful primitives: tools for actions, resources for readable context, and prompts for reusable user-invoked templates.

That division is more important than it first appears.

It separates three fundamentally different things:

Primitive	What it represents	Product-design implication
Resource	Information the system can read	Make provenance and scope visible
Prompt	A reusable workflow or instruction	Keep user intent explicit
Tool	An operation that can change something	Require boundaries, validation, and review
Many early agent experiences collapse these categories into one opaque chat window. You ask for something; the system decides what context to retrieve, what tools to call, and what changes to make. The output may be impressive, but the user has little sense of what happened, why it happened, or how to recover if it was wrong.

That is not a trustworthy interface. It is an automation demo.

A useful agent product exposes the boundary between:

what the model knows,

what it inferred,

what it is permitted to do,

what it actually did,

and what the user can undo.

Start with read-only intelligence
The easiest way to make an agent useful is to give it broad write access.

The wiser way is to begin with read-only capabilities.

For a personal knowledge system, that might mean an agent can:

Search notes and bookmarks.

Retrieve the metadata and links around an item.

Compare multiple sources.

Identify duplicate captures.

Propose a taxonomy change.

Draft a synthesis note.

Explain why two ideas may be connected.

Generate a review queue based on stale or unresolved material.

None of these operations must alter the user’s data. Yet they can produce real value because they reduce cognitive overhead and restore forgotten context.

Only after the system demonstrates reliable retrieval and useful proposals should it be allowed to write—and even then, writing should occur through narrow, inspectable operations.

For example, avoid a tool like this:

ts
updateVault(anything: string): Promise<void>
Prefer capabilities that encode intent and constraints:

ts
createNote({
  path,
  frontmatter,
  body,
  overwrite: false
})

updateBookmarkMetadata({
  bookmarkId,
  tagsToAdd,
  tagsToRemove,
  expectedVersion
})

linkNotes({
  sourcePath,
  targetPath,
  relationship,
  dryRun: true
})
The second approach is less magical. That is a feature, not a flaw.

It gives the system fewer ways to misunderstand. It gives the user clearer review surfaces. It makes logging, testing, validation, and reversal possible.

A tool should have a blast radius
Every action has a blast radius: the number of records, systems, people, or future decisions affected if it is wrong.

An agent that drafts a summary has a small blast radius. An agent that mass-retags 12,000 bookmarks has a large one. An agent that publishes a post, emails a client, deletes content, changes a billing setting, or modifies tenant-rights guidance may have consequences far beyond the current session.

So permission design should follow a simple rule:

The larger the blast radius, the more explicit the review, confirmation, and rollback must be.

This can be implemented as an action ladder:

Level	Agent behavior	Example
0	Read	Search a vault or inspect a bookmark collection
1	Suggest	Recommend tags or propose related notes
2	Draft	Create an unpublished note or a dry-run migration
3	Stage	Prepare a batch update for user review
4	Execute	Apply a user-approved, constrained change
5	Publish or communicate	Send, post, delete, or alter external state
The agent should not jump from Level 0 to Level 5 because a user wrote an ambiguous sentence in a chat box.

Instead, it should make the proposed work concrete:

text
---
action: add-tags
scope: "47 bookmarks in collection: AI Research Inbox"
changes:
  add:
    - agent-architecture
  remove:
    - uncategorized
dry-run: true
reversible: true
requires-confirmation: true
---
This is not just good engineering. It is good interaction design. The system turns an uncertain natural-language request into a bounded plan a human can inspect.

The UI is the agent’s conscience
A chat transcript is not sufficient interface design for consequential automation.

Users need stable surfaces that answer questions chat hides:

What sources did the agent use?

What did it assume?

Which fields will change?

Which items were skipped, and why?

What conflicts did it find?

Can I preview the diff?

Can I stop this?

Can I undo it later?

Where is the audit trail?

A good agent interface looks less like a mystical oracle and more like a well-designed version-control workflow.

For an Obsidian or Raindrop-adjacent integration, that could mean:

A plan panel showing intended operations before execution.

A diff view for frontmatter changes and note edits.

A source panel listing the notes, bookmarks, or documents retrieved.

An exceptions queue for ambiguous mappings.

A run log with timestamps, tool calls, outputs, and error states.

An undo artifact, such as a JSON patch or reversible transaction record.

A confidence signal that distinguishes deterministic actions from model-mediated judgments.

The agent does not become less intelligent when its work is visible. It becomes more accountable.

Graphs are useful when they answer a question
The renewed interest in graph-based retrieval is understandable. Conventional vector search is good at finding passages that resemble a query. But personal and organizational knowledge often depends on relationships that are not obvious from semantic similarity alone: a person connected to a project, a decision connected to evidence, a bookmark connected to an implementation note, a concept connected to a contradiction.

GraphRAG-style approaches combine graph structure, semantic retrieval, and language-model reasoning. Microsoft’s GraphRAG work describes graph construction and community detection to generate higher-level summaries of related entities, while current platform guidance frames graph-enhanced retrieval as a way to combine knowledge graphs, vector search, and LLM reasoning for better grounding.

That said, a graph should not be built because graphs are visually compelling.

Build graph structure when you need to answer questions such as:

“What projects depend on this decision?”

“Which sources support or contradict this claim?”

“What concepts keep appearing across my saved research?”

“Who, what, and which tools were involved in this experiment?”

“What is the shortest path between this note and an active product idea?”

“Which parts of this workflow are repeatedly blocked by the same constraint?”

For a personal knowledge system, an explicit relationship vocabulary is more valuable than an enormous cloud of automatic links:

text
relationships:
  - type: supports
    target: "[[Local-First Architecture]]"
  - type: implements
    target: "[[make-it-rain]]"
  - type: contradicts
    target: "[[Cloud-Only Sync Assumption]]"
  - type: inspired-by
    target: "[[Source - Article Title]]"
This kind of schema makes relationships available to both human navigation and machine reasoning. More importantly, it makes their meaning inspectable.

Design for disagreement
The most useful agent is not the one that sounds most certain. It is the one that knows when to surface uncertainty.

That matters especially in systems that touch research, legal information, health information, personal records, or strategic decisions. A model may produce a clean answer from incomplete evidence. It may merge two similar concepts that should remain distinct. It may tag an article according to the dominant theme while missing the reason you saved it.

A robust workflow needs places for disagreement:

text
---
agent-suggestion:
  tags:
    - graph-rag
    - knowledge-graphs
  confidence: 0.71
human-review: pending
user-rationale: ""
---
The agent’s output should be treated as a proposal with provenance, not as silent truth inserted into the system.

This is especially relevant when building tools for real people. A tenant-rights diagnostic, for example, should make the source of its logic, the limits of its guidance, and the unanswered facts visible. An agent can help collect, organize, and explain information. It should not disguise an uncertain interpretation as a final legal conclusion.

The same principle applies to personal knowledge. The system should preserve the difference between:

“The model inferred this relationship.”

“I reviewed and accepted this relationship.”

“This was imported from an external service.”

“This is a source-backed fact.”

“This is an open question.”

Once those categories collapse, your knowledge base becomes easier to query but harder to trust.

The future is not autonomous. It is legible.
The most promising agent software will not be the software that removes the human from every loop.

It will be the software that makes the right loop cheap.

That means giving people a system that can do tedious work at scale while still preserving intent, ownership, reversibility, and clarity. It means treating the language model as one component in a broader architecture: retrieval, schemas, permissions, state machines, audit logs, review interfaces, and durable user-controlled data.

The technology is moving toward richer tool use, more structured protocol interfaces, and increasingly capable retrieval systems. The Model Context Protocol’s separation of resources, prompts, and tools is a useful reminder that not every connection should become an autonomous action.

The product opportunity is not to build an agent that acts like a person.

It is to build a system that helps a person act with more context, less friction, and better evidence—without losing control of the trail they leave behind.
