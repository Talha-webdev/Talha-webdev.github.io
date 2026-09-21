import { Code2, Cpu, Globe } from "lucide-react"
import { Section } from "../Section"

const focusAreas = [
  {
    icon: Cpu,
    title: "Machine Learning",
    text: "Building data-driven solutions using PyTorch and modern ML pipelines for practical, real-world applications.",
  },
  {
    icon: Code2,
    title: "Software Development",
    text: "Writing clean, well-structured code and building reliable applications with Python and modern frameworks.",
  },
  {
    icon: Globe,
    title: "Web Development",
    text: "Developing responsive, user-friendly interfaces with React, Tailwind CSS, and FastAPI backends.",
  },
]

export function About() {
  return (
    <Section id="about" title="About">
      <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
        <p className="max-w-3xl text-[15px] leading-relaxed text-muted">
          I'm a Computer Science graduate focused on building practical software
          and machine learning solutions. My work combines Python and PyTorch for
          machine learning with modern web technologies such as React and
          FastAPI. I develop end-to-end systems — from model training and data
          processing to full-stack web interfaces — with an emphasis on
          reliability and real-world utility.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-background p-5"
            >
              <Icon size={18} className="mb-3 text-accent" strokeWidth={1.5} />
              <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
