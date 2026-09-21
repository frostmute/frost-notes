---
title: Publishing an Obsidian Digital Garden to GitHub Pages
designation: EPH-002
slug: digital-garden-to-github-pages
sphere: ephemeris
kind: field-note
date: 2024-11-30
revised: 2026-06-11
status: settled
sigil: 5560118
reading: 5
epigraph: The plugin assumes one host. The host is not the point of the plugin.
summary: A compact deployment note for moving an Obsidian Digital Garden off its default host and onto GitHub Pages — and the ownership argument underneath it.
tags: [obsidian, digital-garden, github-pages, deployment, publishing, local-first]
resonance: [local-first-or-else, frontmatter-load-bearing]
external: https://jonathanjwagner.super.site/blog-posts/how-to-publish-with-the-obsidian-digital-garden-plugin-to-github-pages
external_label: Original article
---

Obsidian's Digital Garden plugin is excellent and opinionated. It expects to deploy to one particular host, and the documentation reasonably assumes you will do that. If you would rather your published vault live in a repository you control and serve from GitHub Pages, the pieces all exist — they are just not wired together for you.

This is the note I wrote for myself after doing it, kept short on purpose.

## The shape of the problem

The plugin does two separate jobs and it is easy to mistake them for one. It **transforms** — takes the notes you have marked for publication, resolves wikilinks, handles transclusions, processes frontmatter, and emits a site source tree. Then it **deploys** that tree to a host.

Only the second job is host-specific. The transformation is generic, and it is the valuable half.

So the work is not fighting the plugin. It is letting it transform, taking the output, and pointing your own pipeline at it: a repository, a build action, and Pages serving the result.

## What actually bites

**Base paths.** A project-level Pages site is served under a subpath, and every absolutely-rooted asset and link you have will break. Either configure the base path properly or serve from a user site at the root. Do not discover this in production.

**Frontmatter as the publish switch.** Which notes ship is decided entirely by a frontmatter flag. This is correct design, and it means the discipline described in the entry on frontmatter is not optional here — an inconsistent header means a note silently does not publish, and nothing tells you.

**The build step is the only thing to keep working.** Once the action runs on push, the daily loop is: mark a note, sync, done. If the action is fragile you will stop publishing within a month.

## Why bother

The default host works fine. I moved anyway, for the reason that shows up in nearly every entry on this dial: the published site is now a directory of files in a repository I own, buildable on any machine, serveable by anything that serves static files. If the plugin is abandoned tomorrow, the vault still publishes.

Full walkthrough with the configuration specifics is in the original article.
