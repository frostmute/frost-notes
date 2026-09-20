"use client";

import { useMemo, useState } from "react";

const categories = ["All", "AI", "Systems", "Web", "Notes"] as const;
type Category = (typeof categories)[number];

type Post = {
  slug: string;
  title: string;
  eyebrow: string;
  date: string;
  readTime: string;
  category: Exclude<Category, "All">;
  excerpt: string;
  body: string[];
  tags: string[];
  accent: string;
};

const posts: Post[] = [
  {
    slug: "small-models-sharp-tools",
    title: "Small Models, Sharp Tools",
    eyebrow: "Field note 001",
    date: "Sep 20, 2026",
    readTime: "6 min",
    category: "AI",
    excerpt:
      "A practical note on using focused models, strong context, and tight feedback loops instead of throwing scale at every problem.",
    body: [
      "The best agent workflows feel less like autocomplete and more like a careful workshop. You give the model a precise bench, sharp tools, and a small enough part to finish cleanly.",
      "That means research artifacts, typed interfaces, screenshots, test commands, and explicit acceptance criteria. Context is not a pile of files; context is the shape of the work.",
      "Small models become surprisingly capable when the environment makes correctness cheap to verify. The loop matters more than the monologue.",
    ],
    tags: ["agents", "workflow", "context"],
    accent: "01",
  },
  {
    slug: "terminal-as-studio",
    title: "The Terminal as a Creative Studio",
    eyebrow: "Interface essay",
    date: "Sep 18, 2026",
    readTime: "4 min",
    category: "Systems",
    excerpt:
      "A dark-room argument for fast local tools, composable scripts, and interfaces that keep your hands on the keyboard.",
    body: [
      "A terminal is not only a place to run commands. It is a sketchbook, a console, a logbook, and a dark studio where tiny instruments can be wired together.",
      "The magic is not nostalgia. It is latency. A good shell gives immediate pressure against an idea, and immediate pressure is how craft develops taste.",
      "When the system is scriptable, every repeated annoyance becomes material. You turn friction into a tool, then forget the tool exists.",
    ],
    tags: ["unix", "tools", "craft"],
    accent: "02",
  },
  {
    slug: "designing-with-traces",
    title: "Designing With Traces",
    eyebrow: "Reverse engineering",
    date: "Sep 14, 2026",
    readTime: "8 min",
    category: "Web",
    excerpt:
      "How screenshots, computed styles, and interaction sweeps turn visual imitation into an auditable engineering process.",
    body: [
      "A screenshot tells you what happened once. A trace tells you why it keeps happening. The difference matters when you are rebuilding an interface instead of merely admiring it.",
      "Computed styles, asset maps, responsive captures, and behavior notes convert taste into evidence. The work stops being a guessing game and becomes a set of falsifiable claims.",
      "That evidence-first approach is useful even when you are not cloning anything. It teaches you to see layout as a system of constraints rather than a collection of decorations.",
    ],
    tags: ["css", "inspection", "visual-qa"],
    accent: "03",
  },
  {
    slug: "notes-on-quiet-software",
    title: "Notes on Quiet Software",
    eyebrow: "Notebook",
    date: "Sep 10, 2026",
    readTime: "3 min",
    category: "Notes",
    excerpt:
      "Quiet software explains itself, keeps promises, and gives the user room to think without becoming invisible.",
    body: [
      "Quiet software is not plain software. It can be beautiful, opinionated, even theatrical. What makes it quiet is that it does not constantly renegotiate the relationship with the user.",
      "It keeps state where you expect it, names actions honestly, and makes the next step legible. It treats attention as a finite resource.",
      "The goal is not minimalism. The goal is composure.",
    ],
    tags: ["product", "ux", "taste"],
    accent: "04",
  },
];

function BlogNav({ selected, onSelect }: { selected: Category; onSelect: (category: Category) => void }) {
  return (
    <nav className="blog-tabs" aria-label="Post categories">
      {categories.map((category) => (
        <button
          className={selected === category ? "active" : ""}
          key={category}
          onClick={() => onSelect(category)}
          type="button"
        >
          {category}
        </button>
      ))}
    </nav>
  );
}

function PostList({ posts: visiblePosts, activeSlug, onSelect }: { posts: Post[]; activeSlug: string; onSelect: (slug: string) => void }) {
  return (
    <aside className="post-list">
      <div className="brand-block">
        <p className="kicker">Frost Notes</p>
        <h1>Dark-room essays for builders.</h1>
        <p>
          Short, practical writing about AI agents, systems, interface craft, and the weird edges where tools become taste.
        </p>
      </div>

      <div className="list-stack">
        {visiblePosts.map((post) => (
          <button
            className={`post-card ${activeSlug === post.slug ? "active" : ""}`}
            key={post.slug}
            onClick={() => onSelect(post.slug)}
            type="button"
          >
            <span className="post-number">{post.accent}</span>
            <span className="post-meta">{post.category} · {post.readTime}</span>
            <strong>{post.title}</strong>
            <span>{post.excerpt}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

function FeaturedPanel({ post }: { post: Post }) {
  return (
    <section className="feature-panel" aria-label="Featured visual">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="grid-plane" />
      <div className="feature-content">
        <p className="kicker">Currently reading</p>
        <div className="feature-index">{post.accent}</div>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <div className="tag-row">
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Article({ post }: { post: Post }) {
  return (
    <article className="article-panel">
      <header className="article-header">
        <p className="kicker">{post.eyebrow}</p>
        <h2>{post.title}</h2>
        <div className="article-meta">
          <span>{post.date}</span>
          <span>{post.category}</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="article-body">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

function NewsletterCard() {
  return (
    <section className="newsletter-card">
      <div>
        <p className="kicker">Dispatch</p>
        <h3>Get the next note.</h3>
        <p>No growth hacks. Just compact essays when there is something worth shipping.</p>
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input aria-label="Email address" placeholder="you@example.com" type="email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default function Home() {
  const [category, setCategory] = useState<Category>("All");
  const visiblePosts = useMemo(
    () => posts.filter((post) => category === "All" || post.category === category),
    [category],
  );
  const [activeSlug, setActiveSlug] = useState(posts[0].slug);
  const activePost = visiblePosts.find((post) => post.slug === activeSlug) ?? visiblePosts[0] ?? posts[0];

  function handleCategory(nextCategory: Category) {
    setCategory(nextCategory);
    const nextPost = posts.find((post) => nextCategory === "All" || post.category === nextCategory);
    if (nextPost) setActiveSlug(nextPost.slug);
  }

  return (
    <main className="blog-shell">
      <BlogNav selected={category} onSelect={handleCategory} />
      <PostList posts={visiblePosts} activeSlug={activePost.slug} onSelect={setActiveSlug} />
      <section className="reading-pane">
        <FeaturedPanel post={activePost} />
        <Article post={activePost} />
        <NewsletterCard />
      </section>
    </main>
  );
}
