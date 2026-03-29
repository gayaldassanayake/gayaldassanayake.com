import { getAllPosts } from "@repo/content-utils";
import { BlogPostCard } from "@repo/ui";
import { ProjectCard } from "@repo/ui";
import { Button } from "@repo/ui";
import Image from "next/image";
import path from "path";
import projectsData from "../data/projects.json";
import aboutData from "../data/about.json";
import type { Project } from "@repo/content-utils";

export default function HomePage() {
  const contentDir = path.join(process.cwd(), "content", "blog");
  const allPosts = getAllPosts(contentDir);
  const recentPosts = allPosts.slice(0, 3);
  const featuredProjects = (projectsData as Project[]).filter(
    (p) => p.featured
  );
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-20 flex flex-col md:flex-row items-center gap-12">
        {/* Image — left on desktop, top on mobile */}
        <div className="flex-shrink-0">
          <Image
            src="/gayal.png"
            alt="Gayal Dassanayake"
            width={480}
            height={480}
            className="rounded-full object-cover"
            priority
          />
        </div>

        {/* Text — right on desktop */}
        <div className="flex-1">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-brand-cyan">Gayal</span>.
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mb-12 leading-relaxed">
            Software engineer building real-world systems, obsessed with technology. 
            Self proclaimed personal finance enthusiast.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/blog" size="lg">
              Read the Blog
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-20">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-heading text-3xl font-bold">
              Featured Projects
            </h2>
            <a
              href="/projects"
              className="text-sm text-brand-cyan hover:opacity-80 font-medium"
            >
              View all &rarr;
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section>
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-heading text-3xl font-bold">
              Latest Posts
            </h2>
            <a
              href="/blog"
              className="text-sm text-brand-cyan hover:opacity-80 font-medium"
            >
              View all &rarr;
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                summary={post.summary}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
              />
            ))}
          </div>
        </section>
      )}

      {/* About */}
      <section className="mt-20">
        <h2 className="font-heading text-3xl font-bold mb-6 pb-2 border-b border-surface-muted">
          About
        </h2>
        <div className="flex flex-col gap-4">
          {aboutData.paragraphs.map((p, i) => (
            <p key={i} className="text-lg text-foreground/70 leading-relaxed">{p}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
