import { readFileSync, readdirSync } from "fs";
import path from "path";
import { marked } from "marked";

export interface Note {
  slug: string;
  title: string;
  designation: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  bodyHtml: string;
  tags: string[];
  accent: string;
  eyebrow: string;
}

function parseFrontmatter(raw: string) {
  const parts = raw.split(/---\r?\n/);
  const meta: Record<string, string> = {};
  if (parts[0].trim() === "" && parts.length > 2) {
    const lines = parts[1].split("\n");
    lines.forEach((line) => {
      const colon = line.indexOf(":");
      if (colon > -1) meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
    });
    return { meta, body: parts.slice(2).join("---\n") };
  }
  const lines = parts[0].split("\n");
  lines.forEach((line) => {
    const colon = line.indexOf(":");
    if (colon > -1) meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
  });
  return { meta, body: parts.slice(1).join("\n") };
}

export function getNotes(): Note[] {
  const dir = path.join(process.cwd(), "content");
  const files = readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((f, i) => {
    const raw = readFileSync(path.join(dir, f), "utf-8");
    const { meta, body } = parseFrontmatter(raw);
    const tagsRaw = meta.tags || "";
    const tags = tagsRaw.replace(/[\[\]]/g, "").split(",").map((t) => t.trim()).filter(Boolean);
    const categoryMap: Record<string, string> = {
      "ai": "AI", "agents": "AI", "ai-agents": "AI", "mcp": "AI", "anytype": "AI",
      "systems": "Systems", "amplenote": "Systems", "obsidian": "Systems", "plugin": "Systems",
      "pkm": "Systems", "local-first": "Systems", "automation": "Systems", "chromeos": "Systems",
      "omarchy": "Systems", "development": "Systems", "devops": "Systems", "tooling": "Systems",
      "web": "Web", "web-design": "Web",
      "typography": "Design", "branding": "Design", "print": "Design", "signage": "Design",
      "illustration": "Design", "design": "Design", "production": "Design", "abstract": "Design",
      "photography": "Visual", "documentary": "Visual", "retail": "Visual", "visual": "Visual", "apparel": "Visual",
      "open-source": "Open Source", "template": "Open Source", "architecture": "Open Source",
      "meta": "Notes", "notes": "Notes", "writing": "Notes", "portfolio": "Notes",
      "philosophy": "Notes", "craftsmanship": "Notes", "history": "Notes", "mythology": "Notes",
      "civic-tech": "Civic", "legal-design": "Civic", "accessibility": "Civic",
    };
    const category = tags.find(t => categoryMap[t.toLowerCase()]) ? categoryMap[tags.find(t => categoryMap[t.toLowerCase()])!.toLowerCase()] : "Notes";
    const bodyHtml = marked.parse(body.trim()) as string;
    return {
      slug: meta.slug || f.replace(".md", ""),
      title: meta.title || f.replace(".md", ""),
      designation: meta.designation || meta.kind || "Note",
      eyebrow: meta.designation || meta.kind || "Note",
      date: meta.date || "2026",
      readTime: meta.reading ? meta.reading + " min" : "5 min",
      category: category as Note["category"],
      excerpt: meta.summary ? meta.summary.substring(0, 140) + (meta.summary.length > 140 ? "..." : "") : "",
      bodyHtml: bodyHtml,
      tags: tags.slice(0, 5),
      accent: String(i + 1).padStart(2, "0"),
    };
  }).sort((a, b) => (a.date > b.date ? -1 : 1));
}
