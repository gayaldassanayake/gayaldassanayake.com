import { getAllPosts, getPostBySlug } from "@repo/content-utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

const contentDir = () => path.join(process.cwd(), "content", "si");

export async function generateStaticParams() {
  const posts = getAllPosts(contentDir());
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(contentDir(), slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function SinhalaPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(contentDir(), slug);
  if (!post || !post.published) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {post.counterpartSlug && (
        <div className="mb-8 p-4 bg-surface-muted rounded-xl text-sm">
          <a href={`/en/${post.counterpartSlug}`} className="text-brand-cyan hover:opacity-80 font-medium">
            Read in English &rarr;
          </a>
        </div>
      )}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-surface-muted text-foreground/60">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
        <time className="text-foreground/50 text-sm">
          {new Date(post.date).toLocaleDateString("si-LK", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </div>
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
