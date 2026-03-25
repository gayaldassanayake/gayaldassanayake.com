export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  published: boolean;
  content: string;
  counterpartSlug?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  coverImage: string | null;
  featured: boolean;
  accentColor: "cyan" | "orange" | "yellow" | "purple";
}

export interface ResumeExperience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  period: string;
}

export interface Resume {
  name: string;
  headline: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: string[];
}
