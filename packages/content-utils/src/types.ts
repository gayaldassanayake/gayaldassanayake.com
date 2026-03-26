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
  gpa?: string;
}

export interface ResumeCertification {
  name: string;
  valid: string;
}

export interface ResumeProject {
  name: string;
  period: string;
  description?: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Resume {
  name: string;
  headline: string;
  contact: {
    email: string;
    phone?: string;
    linkedin: string;
    github: string;
    medium?: string;
  };
  experience: ResumeExperience[];
  education: ResumeEducation[];
  certifications?: ResumeCertification[];
  projects?: ResumeProject[];
  topSkills?: { name: string; description: string }[];
  skills: string[];
}
