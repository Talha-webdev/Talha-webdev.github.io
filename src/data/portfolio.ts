export const profile = {
  name: "Muhammad Talha",
  email: "6bcs11@gmail.com",
  photo: "/profile.jpeg",
  socials: {
    github: "https://github.com/Talha-webdev",
    linkedin: "https://www.linkedin.com/in/m-talha-904945283",
  },
}

export const hero = {
  label: "Computer Science Graduate",
  title: "AI | Machine Learning Engineer & Web Developer",
  description:
    "Computer Science graduate  building practical applications with Python, PyTorch, React, and modern web technologies. I develop machine learning systems and full-stack web applications that solve real-world problems.",
  techLine: ["Python", "PyTorch", "React", "FastAPI"],
  status: "Focused on Machine Learning, AI & Software Development",
}

export interface Experience {
  id: string
  role: string
  project: string
  period: string
  description: string
  technologies: string[]
  github: string
  demo: string | null
}

export const experiences: Experience[] = [
  {
    id: "phishguard-exp",
    role: "Machine Learning Developer",
    project: "PhishGuard",
    period: "2025 – 2026",
    description:
      "Designed and developed a phishing email detection system using a BiLSTM neural network. Built the end-to-end pipeline from model training with PyTorch to a REST API with FastAPI and a React frontend for real-time email classification.",
    technologies: ["Python", "PyTorch", "BiLSTM", "FastAPI", "React"],
    github: "https://github.com/Talha-webdev/PhishGuard",
    demo: null,
  },
  {
    id: "gym-exp",
    role: "Full-Stack Developer",
    project: "Project GYM",
    period: "2024 – 2025",
    description:
      "Built a full-stack fitness platform with membership management, premium content delivery, blogs, and administrative tools. Implemented the backend API, database schema, and responsive frontend interface.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Cloudinary"],
    github: "https://github.com/Talha-webdev/projectGym",
    demo: null,
  },
]

export interface Project {
  id: string
  name: string
  title: string
  description: string
  technologies: string[]
  icon: "shield" | "dumbbell"
  image: string
  github: string
  demo: string | null
}

export const projects: Project[] = [
  {
    id: "phishguard",
    name: "PhishGuard",
    title: "Phishing Email Detection System",
    description:
      "A machine learning application that detects phishing emails using a BiLSTM neural network. The system classifies emails in real-time through a trained model served via a REST API with a clean web interface.",
    technologies: ["Python", "PyTorch", "BiLSTM", "FastAPI", "React"],
    icon: "shield",
    image: "",
    github: "https://github.com/Talha-webdev/PhishGuard",
    demo: null,
  },
  {
    id: "project-gym",
    name: "Project GYM",
    title: "Fitness Membership & Content Platform",
    description:
      "A full-stack fitness platform with membership management, premium content, blogs, gallery, and administrative tools. Built with a modern React frontend and FastAPI backend.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Cloudinary"],
    icon: "dumbbell",
    image: "",
    github: "https://github.com/Talha-webdev/projectGym",
    demo: "https://project-gym-rouge.vercel.app/",
  },
]

export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Machine Learning & Data",
    skills: ["PyTorch", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["FastAPI"],
  },
  {
    title: "Database & Tools",
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
