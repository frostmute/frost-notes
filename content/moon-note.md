---
title: Moon Note
designation: MEC-015
slug: moon-note
sphere: mechane
kind: instrument
date: 2026-09-19
status: maintained
sigil: 6194205
reading: 4
summary: A lightweight, self-hosted Markdown knowledge base with folders, backlinks, wikilinks, a graph view, and JSON file storage.
stack: [Node.js, Express, Vanilla JavaScript, D3.js, Markdown, Docker]
tags: [markdown, knowledge-base, self-hosting, notes, backlinks, graph]
resonance: [your-knowledge-base-is-not-a-database, digital-garden-to-github-pages, local-first-or-else]
external: https://github.com/frostmute/moon-note
external_label: Repository
plate: assets/moon-note.png
plate_caption: Moon Note — Markdown editor, folders, backlinks, and preview in a self-hosted browser interface.
---

I recently built **Moon Note**, a small self-hosted note-taking app designed around Markdown, backlinks, folders, and a visual knowledge graph. The goal was simple: create a personal knowledge base that feels useful immediately, is easy to understand, and can be deployed by anyone without needing to manage a database or complicated infrastructure.

Moon Note is available on GitHub: [github.com/frostmute/moon-note](https://github.com/frostmute/moon-note)

## Why I Built It

A lot of personal knowledge management tools are powerful, but they can also become heavy quickly. Some require accounts, cloud sync, databases, plugins, or a large desktop app. I wanted something much smaller:

- A web app I could run locally or self-host
- Notes written in Markdown
- Simple `[[wikilinks]]` between notes
- Backlinks to show relationships automatically
- A graph view to visualize connected ideas
- Local file-based persistence
- Easy deployment with Docker

The result is Moon Note: a tiny Node.js app that stores notes in a single JSON file and serves a clean browser-based interface.

## What Moon Note Does

Moon Note is built around connected writing. You can create notes, organize them into folders, write in Markdown, and connect concepts using wikilinks like this:

```markdown
This note connects to [[Another Note]].
```

You can also use aliases:

```markdown
Read more about [[this topic|Another Note]].
```

When notes link to each other, Moon Note automatically calculates backlinks and displays them in the note view. This makes it easier to see how ideas relate without manually maintaining references.

## Core Features

### Markdown Editing

Moon Note supports Markdown writing with a preview workflow, making it comfortable for drafting notes, documentation, research, or project plans.

### Wikilinks and Backlinks

The app recognizes `[[Note Title]]` links and uses them to build relationships between notes. Each note can show which other notes link back to it.

### Folders

Notes can be grouped into folders, keeping the sidebar manageable as the knowledge base grows.

### Knowledge Graph

Moon Note includes a D3-powered graph view that visualizes note relationships. Each note becomes a node, and wikilinks become edges between them.

### Moon Phase Widget

Because the app has a moonlit visual theme, I added a live moon-phase widget. It calculates and renders the current lunar phase directly in the interface.

### No Database Required

All notes are persisted to:

```text
data/notes.json
```

That keeps the app easy to back up, move, inspect, and self-host.

## Tech Stack

Moon Note intentionally uses a small stack:

- **Node.js** for the runtime
- **Express** for the API and static file server
- **Vanilla JavaScript** on the frontend
- **D3.js** for the graph visualization
- **JSON file storage** instead of a database
- **Docker Compose** for deployment

The app structure is straightforward:

```text
moon-note/
├── Dockerfile
├── docker-compose.yml
├── install.sh
├── package.json
├── server.js
├── store.js
├── data/
│   └── notes.json
└── public/
    ├── index.html
    ├── css/
    │   └── style.css
    └── js/
        ├── app.js
        ├── graph.js
        ├── markdown.js
        └── moonphase.js
```

## Deployment Philosophy

One of the main goals was to make Moon Note easy for someone else to run. The simplest deployment path is Docker Compose:

```bash
git clone https://github.com/frostmute/moon-note.git
cd moon-note
docker compose up -d --build
```

After that, the app is available at:

```text
http://localhost:3000
```

To make it even easier, I added an installer script:

```bash
curl -fsSL https://raw.githubusercontent.com/frostmute/moon-note/main/install.sh | bash
```

The installer clones the repository, creates the data directory, builds the container, and starts the app.

## API Overview

Moon Note exposes a small JSON API:

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/notes` | List all notes |
| `GET` | `/api/notes/:id` | Get one note with backlinks |
| `POST` | `/api/notes` | Create a note |
| `PUT` | `/api/notes/:id` | Update a note |
| `DELETE` | `/api/notes/:id` | Delete a note |
| `GET` | `/api/search?q=` | Search notes |
| `GET` | `/api/graph` | Get graph nodes and links |
| `GET` | `/api/stats` | Get note statistics |

Keeping the API small makes the project easier to understand and extend.

## What I Like About This Approach

The best part of Moon Note is its simplicity. There is no database migration system, no authentication provider, no cloud dependency, and no required build step for the frontend. The app can be cloned, run, backed up, and modified with very little overhead.

That also makes it a good project for experimentation. New features can be added without fighting a large framework or complex architecture.

## Possible Future Improvements

Some ideas I may explore later:

- Import/export tools
- Better mobile layout
- Optional authentication for public servers
- Tags view
- Note history or snapshots
- Full-text search improvements
- Theme customization
- Published/read-only note sharing

## Closing Thoughts

Moon Note is intentionally small. It is not trying to replace every note-taking app or become a massive productivity platform. It is a focused personal knowledge base that is easy to run, easy to understand, and easy to own.

For me, that is the appeal: a tool that keeps my notes local, connected, and portable.

You can check out the project here:

[https://github.com/frostmute/moon-note](https://github.com/frostmute/moon-note)
