---
title: The Daimon Problem
designation: MNE-003
slug: the-daimon-problem
sphere: mnemosyne
kind: reliquary
date: 2026-01-22
revised: 2026-08-25
status: open
sigil: 6621490
reading: 6
epigraph: Socrates had one daemon and it only ever told him what not to do.
summary: Notes from building multi-agent orchestration into existing applications — on why the hard part is not capability but jurisdiction.
tags: [agents, orchestration, architecture, llm, cost]
resonance: [pantheon, a-vibe-coding-expedition, claw2manus]
---

Every agent framework demos beautifully and deploys badly, and the reason is consistent: the demo has one agent with unlimited authority over a toy domain, and the deployment has several agents with unclear authority over a real one.

The capability question is basically solved. A competent model with tool access can do the work. The unsolved question is jurisdiction — which agent is allowed to decide what, who arbitrates when two of them disagree, and what happens to the work in flight when one of them is wrong.

## Orchestration is a permissions problem wearing a scheduling costume

The instinct is to model orchestration as a pipeline: planner emits steps, workers execute them, aggregator assembles. This works until a worker discovers that the plan was wrong. Then you find out whether your architecture has a mechanism for a subordinate to invalidate a superior's premise, and almost none of them do. The worker either fails loudly or, much worse, quietly does the wrong thing competently.

What has worked better for me: give every agent a narrow, explicitly bounded mandate and a required escalation path. Not "research this topic" but "return sources matching these constraints, or return the specific reason you cannot." A failure that names itself is recoverable. A confident wrong answer is not.

Socrates' daimon, by his own account, never told him what to do. It only ever stopped him. That is a better model for an autonomous subsystem than the one we keep building.

## Cost is a design constraint, not an ops problem

Fan out five agents on a task and you have multiplied your token spend by five and your latency by roughly one, which is the appeal. You have also multiplied the number of ways the task can silently degrade by rather more than five.

The discipline I have landed on: the expensive model plans and arbitrates, cheap models execute bounded subtasks, and nothing gets escalated to the expensive model without a specific question. Most agent cost is not reasoning, it is re-reading — the same context shipped to the same model six times because nobody thought about who owns state. Put the state in a file. Pass the path.

## State belongs on disk

Passing large results between agents through their context windows is the most expensive possible way to move data. Agents that write to a shared filesystem and hand each other paths are cheaper, debuggable after the fact, and resumable when something dies halfway through.

It is also the only version where I can read what happened. An orchestration I cannot audit is an orchestration I will not trust with anything that matters.

## Still open

Arbitration between peers with equal mandate. Detecting the confident-wrong case without a second model to check the first, which just moves the problem. And a real cost ceiling enforced by the runtime rather than by my own attention, which is the least reliable component in the system.
