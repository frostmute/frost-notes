import { getNotes } from "@/lib/content";
import Link from "next/link";

export default function NotePage({ params }: { params: { slug: string } }) {
  const notes = getNotes();
  const note = notes.find((n) => n.slug === params.slug);
  if (!note) return <div>Not found</div>;
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/" className="text-sm text-neutral-500 hover:text-white">← Back</Link>
      <h1 className="text-4xl font-bold mt-4 mb-2">{note.title}</h1>
      <p className="text-neutral-400 text-sm mb-8">{note.date} · {note.tags.join(", ")}</p>
      <article className="prose prose-invert" dangerouslySetInnerHTML={{ __html: note.bodyHtml }} />
    </main>
  );
}

export async function generateStaticParams() {
  return getNotes().map((n) => ({ slug: n.slug }));
}
