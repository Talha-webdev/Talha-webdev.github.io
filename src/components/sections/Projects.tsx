import { Dumbbell, ExternalLink, Shield } from "lucide-react"
import { Section } from "../Section"
import { GithubIcon } from "../GithubIcon"
import { projects, type Project } from "../../data/portfolio"

const iconMap: Record<Project["icon"], typeof Shield> = {
  shield: Shield,
  dumbbell: Dumbbell,
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-shadow hover:shadow-soft"
          >
            <div className="flex aspect-video items-center justify-center border-b border-border bg-accent-soft text-accent">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-center">
                  {(() => {
                    const Icon = iconMap[project.icon] ?? Shield
                    return <Icon size={36} strokeWidth={1.5} />
                  })()}
                  <span className="text-xs font-medium text-muted">
                    {project.name}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-background px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubIcon size={15} />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
