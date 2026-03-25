import { getAllPosts } from "@repo/content-utils";
import { BlogPostCard } from "@repo/ui";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "සිංහල ලිපි",
  description: "සිංහලෙන් ලියූ ව්‍යක්තිගත මූල්‍ය ලිපි.",
};

export default function SinhalaPostsPage() {
  const contentDir = path.join(process.cwd(), "content", "si");
  const posts = getAllPosts(contentDir);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-heading text-5xl font-bold mb-4"> මූල්‍ය බ්ලොග්</h1>
      <p className="text-foreground/70 text-lg mb-12">
        ව්‍යක්තිගත මූල්‍ය පිළිබඳ ප්‍රායෝගික ලිපි.
      </p>
      {posts.length === 0 ? (
        <p className="text-foreground/50">තවම ලිපි නැත. ඉක්මනින් නැවත පරීක්ෂා කරන්න!</p>
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
              basePath="/si"
            />
          ))}
        </div>
      )}
    </div>
  );
}
