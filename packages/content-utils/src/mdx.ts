import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "./types";

export function getAllPosts(contentDir: string): Post[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      summary: data.summary ?? "",
      published: data.published !== false,
      content,
      counterpartSlug: data.counterpartSlug,
      accentColor: data.accentColor ?? "cyan",
    } satisfies Post;
  });

  return posts
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(contentDir: string, slug: string): Post | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    tags: data.tags ?? [],
    summary: data.summary ?? "",
    published: data.published !== false,
    content,
    counterpartSlug: data.counterpartSlug,
    accentColor: data.accentColor ?? "cyan",
  };
}
