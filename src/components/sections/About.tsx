import { Code2, Cpu, Globe } from "lucide-react"
import { Section } from "../Section"

const focusAreas = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Building reliable, well-structured applications and writing clean code.",
  },
  {
    icon: Globe,
    title: "Web Development",
    text: "Creating responsive, user-friendly websites and interfaces.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    text: "Exploring data-driven solutions and practical ML workflows.",
  },
]

export function About() {
  return (
    <Section id="about" title="About">
      <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
        <p className="max-w-3xl text-base leading-relaxed text-muted">
          I am a Computer Science student with a strong interest in software
          development, web development, and machine learning. I enjoy building
          practical projects that apply what I learn, and I am committed to
          continuous learning and improvement as I grow toward becoming a
          well-rounded developer.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-background p-5"
            >
              <Icon size={20} className="mb-3 text-accent" />
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
