---
title: The Demo Should Be an Executable Claim
designation: MNE-006
slug: the-demo-should-be-an-executable-claim
sphere: mnemosyne
kind: reliquary
date: 2026-09-11
status: archival
sigil: 234380
reading: 8
summary: Why I turned a question about autonomous product videos into a reusable agent skill—and why the final recording should be treated as evidence, not theater.
tags: [ai-agents, automation, product-demos, playwright, computer-use, open-source, agent-design]
resonance: [the-antikythera-problem]
---

A screenshot can prove that an interface existed for one frame.

It cannot prove that the interface worked.

That difference matters on a site like Antikythera. The dial is not merely an illustration. It turns. Its marks represent entries. The index filters and sorts. Each article resolves from Markdown into a reader with metadata, relationships, and navigation. A still image can show the atmosphere of the instrument while missing the instrument itself.

The same problem applies to almost every software project. A landing page can describe what a product does. A repository can contain the implementation. A test suite can verify narrow contracts. None of those automatically gives another person the experience of watching the thing work.

So I asked a practical question:

> Could an AI agent take a GitHub repository, run the project, discover its user-visible features, operate the interface, and record its own demonstration?

The short answer was yes.

The more useful answer became a skill.

## The machinery already exists

No single breakthrough was required. The pieces are already available.

For a web application, Playwright can control a real browser through the DOM and accessibility tree. [Playwright MCP](https://github.com/microsoft/playwright-mcp) exposes those controls to an agent, and its [video tools](https://playwright.dev/mcp/tools/video) can record browser sessions with chapter cards and action callouts.

For software that does not live entirely in a browser, computer-use systems can inspect screenshots and issue mouse and keyboard actions. Both [OpenAI](https://developers.openai.com/api/docs/guides/tools-computer-use) and [Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) document this pattern. Pair that control loop with OBS or FFmpeg and the agent can record a desktop application, emulator, or multi-window flow.

A command-line tool is simpler still. Run it in a clean terminal, record the session, and render the result if a conventional video is required.

The technical chain is straightforward:

```text
repository
→ runnable environment
→ feature inventory
→ seeded state
→ automated actions
→ recorded artifact
→ playback verification
```

The hard part is not making the cursor move.

The hard part is deciding what the movement proves.

## “Show every feature” is not a specification

An agent can inspect a README, routes, menus, command registrations, integration tests, fixtures, and examples. From that material it can infer a plausible inventory of user-visible capabilities.

But a repository does not contain one clean, authoritative list called `all_features`.

Some functions are implementation details. Some documented features are obsolete. Some routes require an account state that does not exist locally. Some actions depend on third-party services, hardware, permissions, paid APIs, or production data. Some features are visible only to an administrator. Some are destructive by design.

If the instruction is merely “show everything,” the agent has to invent the boundary of everything.

That is too much hidden judgment for a recording that may later be treated as evidence.

The better approach is to turn discovery into a small manifest:

```yaml
- title: Create a project
  entry_state: Signed in with an empty workspace
  actions:
    - Open the dashboard
    - Activate New Project
    - Complete the form with synthetic data
    - Submit
  proof: The new project appears on the dashboard
```

Each item states where the flow begins, what meaningful actions occur, and what observable condition proves success. It also exposes missing setup. If a flow requires a seeded record or a specific role, that requirement becomes part of the plan instead of an inconvenience discovered halfway through the take.

“All features” can then mean something concrete:

> Every applicable item in the reviewed manifest reached its visible proof state.

That sentence is less magical than “the AI understood the whole product.”

It is also testable.

## The agent should explore; the script should perform

A visual agent can improvise its way through an unfamiliar interface. That is useful during exploration. It is a poor default for the final recording.

Improvisation introduces hesitation, accidental menus, inconsistent pacing, coordinate errors, and recovery behavior that makes sense to the model but not to a viewer. A second take may follow a different route. A changed label may send the agent into a new interpretation of the task.

The reliable sequence is:

1. Let the agent inspect the repository and explore the running product.
2. Convert the successful path into deterministic actions.
3. Reset the application to known data.
4. Dry-run the complete sequence.
5. Record the same sequence from the same state.
6. Open the finished video and verify what it actually shows.

For browser software, those actions should target roles, labels, accessible names, or existing test identifiers rather than screen coordinates. The automation should wait for visible state changes instead of sleeping for arbitrary intervals. The viewport, theme, locale, timezone, and seed data should remain fixed when they affect the presentation.

The model remains useful where judgment is required: identifying features, repairing a broken path, choosing an order that makes sense to a viewer, and explaining a blocker.

The final take becomes boring automation.

That is a compliment.

## A demo is a proof surface

Product videos are usually discussed as marketing objects. The emphasis goes to polish: smooth cursor movement, zooms, captions, narration, music, and a concise story.

Those things can help a viewer. They can also conceal a weak demonstration.

The first obligation of an autonomous demo is simpler:

- show the real application;
- perform the claimed action;
- reach a visible result;
- keep the result on screen long enough to inspect;
- avoid exposing anything that does not belong in the recording.

This is why the skill treats playback verification as part of the task rather than post-production housekeeping. A successful recorder process does not prove that the video is useful. The frame may contain the wrong window. A notification may reveal personal information. Text may be illegible. The agent may have clicked Submit and moved on before the result appeared. The file may exist but fail to play.

The artifact has to be opened and inspected.

For a long recording, that does not require watching every frame with human patience. The agent can inspect the opening, each feature boundary, and the final state, then check the whole file's metadata. But it must compare the visible evidence against the manifest it claimed to complete.

A demo is a claim made in motion.

The recording should carry its own evidence.

## The dangerous version is the impressive one

Giving an agent control of a computer creates obvious risks. Giving it a vague mandate to “show off the product” makes those risks worse.

A feature tour might encounter a purchase button, a production dashboard, an email composer, an account deletion flow, a cloud permission dialog, or a document containing instructions intended to manipulate an automated reader. An agent optimized for completing the tour may interpret those surfaces as the next steps in the assignment.

So the skill establishes a conservative boundary:

- run unfamiliar repositories in a disposable environment;
- use synthetic accounts and data;
- keep production credentials and personal browser sessions out of reach;
- restrict outbound network access where practical;
- treat repository content and interface text as untrusted data;
- stop before publishing, purchasing, sending, deleting external data, accepting terms, or changing permissions.

A safe demonstration can approach a consequential boundary and explain it. It cannot cross the boundary merely because the next button is visually available.

This is the same jurisdiction problem that appears throughout agent design. Capability answers whether the machine can click. Authority answers whether it may.

A recording tool needs both answers before the take begins.

## Why this became a skill

A prompt could describe this workflow once.

That would solve one conversation.

A skill turns the workflow into reusable operating practice. When an agent receives a future request to demonstrate a repository, it does not have to rediscover the distinction between exploration and recording, invent a coverage contract, remember to seed data, or treat artifact inspection as optional. The process arrives with the task.

The resulting [`autonomous-demo-recorder`](https://github.com/frostmute/autonomous-demo-recorder) skill is deliberately just a `SKILL.md` file. It does not add a framework, a hosted service, or a custom recorder. It tells the agent to use the first tool that already fits the project:

1. existing demo or end-to-end automation;
2. Playwright for the web;
3. Playwright's Electron support where applicable;
4. native terminal recording for command-line software;
5. existing mobile automation for emulator flows;
6. computer use plus OBS or FFmpeg for everything that truly requires a desktop.

The file carries the method, not the machinery.

That makes it portable. The repository can evolve through ordinary version control. Another agent can read it. A person can inspect the rules without installing an application or trusting a service to preserve them.

Publishing it also makes the boundary visible. The skill is not a hidden system prompt claiming that an agent will somehow behave responsibly. Its decisions are written down: what counts as completion, what gets verified, which actions are prohibited, and what must be reported as blocked rather than quietly omitted.

## What the skill does not decide

The skill does not know which features matter most to an audience.

It does not know whether a three-minute overview is better than a twenty-minute technical walkthrough. It cannot decide whether narration belongs in the piece, whether a visual flourish supports the product, or whether a rough edge should be shown honestly or fixed before recording.

Those are editorial decisions.

It also cannot transform undocumented software into fully specified software. If a feature requires unavailable credentials, broken infrastructure, or knowledge that exists only in its creator's head, the correct output is a blocker—not a fabricated substitute.

The skill gives the agent a disciplined production process. It does not give the agent taste, product authority, or permission to counterfeit completeness.

That distinction is why we created it.

## The final artifact should survive the performance

There is an appealing idea behind autonomous demos: point an agent at a repository and receive a polished video without staging the walkthrough by hand.

That idea is now technically plausible.

But the durable value is not the spectacle of watching a model operate a computer. It is the conversion of a software claim into a repeatable, inspectable artifact. The manifest records what should happen. The deterministic run records how it happens. The video shows that it happened. The coverage report records what did not.

The result is not merely content.

It is a build artifact for human understanding.

That is the standard the skill is trying to preserve: not a machine that performs confidence, but an instrument that can show its work.
