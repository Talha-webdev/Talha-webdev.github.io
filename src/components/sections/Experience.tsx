import { Briefcase } from "lucide-react"
import { Section } from "../Section"
import { GithubIcon } from "../GithubIcon"
import { experiences } from "../../data/portfolio"

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="rounded-xl border border-border bg-surface p-6 shadow-card"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-accent">
                  <Briefcase size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted">{exp.project} · {exp.period}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:mt-0.5">
                <a
                  href={exp.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubIcon size={14} />
                  Code
                </a>
                {exp.demo && (
                  <a
                    href={exp.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {exp.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-background px-2.5 py-0.5 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
