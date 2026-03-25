import { Card } from "./Card";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  coverImage: string | null;
  featured: boolean;
  accentColor: "cyan" | "orange" | "yellow" | "purple";
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card accentColor={project.accentColor} className="flex flex-col gap-4">
      {project.coverImage && (
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-40 object-cover rounded-xl"
        />
      )}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-heading text-xl font-bold text-foreground">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-1 rounded-full bg-surface-muted text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-auto pt-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            GitHub &rarr;
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-cyan hover:opacity-80 transition-opacity"
          >
            Live Demo &rarr;
          </a>
        )}
      </div>
    </Card>
  );
}
