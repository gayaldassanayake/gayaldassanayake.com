import { Card } from "./Card";

interface BlogPostCardProps {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  slug: string;
  basePath?: string;
  accentColor?: "cyan" | "orange" | "yellow" | "purple";
}

export function BlogPostCard({
  title,
  summary,
  date,
  tags,
  slug,
  basePath = "/blog",
  accentColor = "cyan",
}: BlogPostCardProps) {
  return (
    <a href={`${basePath}/${slug}`} className="block group">
      <Card accentColor={accentColor} className="h-full">
        <div className="flex flex-col gap-3 h-full">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-1 rounded-full bg-surface-muted text-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-brand-cyan transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-foreground/70 text-sm flex-1 leading-relaxed">
            {summary}
          </p>
          <time className="text-xs text-foreground/40 mt-auto">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </Card>
    </a>
  );
}
