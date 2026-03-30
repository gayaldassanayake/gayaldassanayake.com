import { Button } from "@repo/ui";
import resumeData from "../../data/resume.json";
import type { Resume } from "@repo/content-utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Learn more about my background, experience, and skills.",
};

export default function ResumePage() {
  const resume = resumeData as Resume;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <section className="mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h1 className="font-heading text-5xl font-bold mb-2">{resume.name}</h1>
          <p className="text-xl text-foreground/70">{resume.headline}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-foreground/60">
            <a href={`mailto:${resume.contact.email}`} className="hover:text-brand-cyan transition-colors">
              {resume.contact.email}
            </a>
            <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">
              LinkedIn
            </a>
            <a href={resume.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">
              GitHub
            </a>
          </div>
        </div>
        <Button href="/resume/pdf" variant="outline" target="_blank" rel="noopener noreferrer">
          Download PDF
        </Button>
      </section>

      {/* Top Skills */}
      {resume.topSkills && resume.topSkills.length > 0 && (
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6 pb-2 border-b border-surface-muted">
            Top Skills
          </h2>
          <ul className="flex flex-col gap-2">
            {resume.topSkills.map((skill) => (
              <li key={skill.name} className="text-foreground/80">
                <span className="font-semibold text-foreground">{skill.name}</span>
                {" - "}
                {skill.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && (
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6 pb-2 border-b border-surface-muted">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            {resume.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-foreground/70">{exp.company}</p>
                    {exp.companyDescription && (
                      <p className="text-sm text-foreground/50 italic">{exp.companyDescription}</p>
                    )}
                  </div>
                  <span className="text-sm text-foreground/50 shrink-0">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-foreground/80 text-sm">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {resume.education.length > 0 && (
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6 pb-2 border-b border-surface-muted">
            Education
          </h2>
          <div className="flex flex-col gap-4">
            {resume.education.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-foreground/70">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-foreground/50">GPA {edu.gpa}</p>}
                </div>
                <span className="text-sm text-foreground/50 shrink-0">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {resume.certifications && resume.certifications.length > 0 && (
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6 pb-2 border-b border-surface-muted">
            Certifications
          </h2>
          <div className="flex flex-col gap-4">
            {resume.certifications.map((cert, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h3 className="font-semibold">{cert.name}</h3>
                <span className="text-sm text-foreground/50 shrink-0">{cert.valid}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resume.projects && resume.projects.length > 0 && (
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6 pb-2 border-b border-surface-muted">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            {resume.projects.map((project, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                  <h3 className="font-semibold">{project.name}</h3>
                  <span className="text-sm text-foreground/50 shrink-0">{project.period}</span>
                </div>
                {project.description && (
                  <p className="text-sm text-foreground/70 mb-2">{project.description}</p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-full bg-surface-muted text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-3 text-sm">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors text-foreground/60">
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors text-foreground/60">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
