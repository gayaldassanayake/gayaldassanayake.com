import { getAllPosts } from "@repo/content-utils";
import { BlogPostCard } from "@repo/ui";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Posts",
  description: "Personal finance articles in English.",
};

export default function EnglishPostsPage() {
  const contentDir = path.join(process.cwd(), "content", "en");
  const posts = getAllPosts(contentDir);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-heading text-5xl font-bold mb-4">Finance Blog</h1>
      <p className="text-foreground/70 text-lg mb-12">
        Practical personal finance insights.
      </p>
      {posts.length === 0 ? (
        <p className="text-foreground/50">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              summary={post.summary}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
              basePath="/en"
            />
          ))}
        </div>
      )}
    </div>
  );
}
