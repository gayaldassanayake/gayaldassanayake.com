import { ProjectCard } from "@repo/ui";
import projectsData from "../../data/projects.json";
import type { Project } from "@repo/content-utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of things I've built.",
};

export default function ProjectsPage() {
  const projects = projectsData as Project[];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-heading text-5xl font-bold mb-4">Projects</h1>
      <p className="text-foreground/70 text-lg mb-12">
        A showcase of things I&apos;ve built — from side projects to open-source
        tools.
      </p>
      {projects.length === 0 ? (
        <p className="text-foreground/50">No projects yet. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
