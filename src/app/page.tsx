"use client";
import { marked } from "marked";
import notesData from "../../public/content.json";

import { useMemo, useState } from "react";

const categories = ["All", "AI", "Systems", "Design", "Visual", "Notes", "Civic", "Web", "Open Source"] as const;
type Category = (typeof categories)[number];

type Post = {
  slug: string;
  title: string;
  eyebrow: string;
  date: string;
  readTime: string;
  category: Exclude<Category, "All">;
  excerpt: string;
  bodyHtml: string;
  tags: string[];
  accent: string;
};
const posts: Post[] = notesData as Post[];



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
      </div>
    </section>
  );
}

function Article({ post }: { post: Post }) {
  return (
    <article className="article-panel">
      <header className="article-header">
        <p className="kicker">{post.eyebrow}</p>
        <div className="article-tags">
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </header>

      <div className="article-body" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
    </article>
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
      </section>
    </main>
  );
}
