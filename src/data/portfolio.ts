export const profile = {
  name: "Muhammad Talha",
  email: "6bcs11@gmail.com",
  // Place profile photo in /public and set the path, e.g. "/profile.jpg"
  photo: "/profile.jpeg",
  socials: {
    github: "https://github.com/Talha-webdev",
    linkedin: "https://www.linkedin.com/in/m-talha-904945283",
  },
}

export interface Project {
  id: string
  name: string
  title: string
  description: string
  technologies: string[]
  // Icon key used in the card visual (no screenshot available yet)
  icon: "shield" | "dumbbell"
  // Place screenshot in /public/projects and set path, e.g. "/projects/phishguard.png"
  image: string
  github: string
  demo: string | null
}

// NOTE: `github`/`demo` use "#" as placeholders. Replace with real URLs later.
export const projects: Project[] = [
  {
    id: "phishguard",
    name: "PhishGuard",
    title: "Phishing Email Detection System",
    description:
      "PhishGuard is a machine-learning based phishing email detection system that uses a BiLSTM model to classify emails and integrates the trained model with an API and frontend.",
    technologies: ["Python", "PyTorch", "BiLSTM", "FastAPI", "React"],
    icon: "shield",
    image: "",
    github: "#",
    demo: null,
  },
  {
    id: "project-gym",
    name: "Project GYM",
    title: "Fitness Membership & Content Platform",
    description:
      "A fitness platform featuring membership functionality, premium content, blogs, gallery, comments, and administrative management.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Cloudinary"],
    icon: "dumbbell",
    image: "",
    github: "https://github.com/Talha-webdev/projectGym",
    demo: null,
  },
]

export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  { title: "Languages", skills: ["Python", "JavaScript", "HTML", "CSS"] },
  { title: "Frontend", skills: ["React", "Tailwind CSS"] },
  { title: "Backend", skills: ["FastAPI"] },
  {
    title: "Machine Learning / Data",
    skills: ["PyTorch", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Database / Tools",
    skills: ["PostgreSQL", "Git", "GitHub"],
  },
]

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Government Degree College Thana Malakand",
  period: "2022 – 2026",
  finalYearProject: {
    name: "PhishGuard",
    description: "Phishing Email Detection System",
  },
}
