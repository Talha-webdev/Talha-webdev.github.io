import { ArrowDown } from "lucide-react"
import { profile, hero } from "../../data/portfolio"
import { GithubIcon } from "../GithubIcon"

export function Hero() {
  const github = profile.socials.github

  return (
    <section
      id="top"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-20 md:py-24"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-4 text-sm font-medium tracking-wide text-accent">
            {hero.label}
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              <ArrowDown size={16} />
              View Work
            </a>
            <a
              href={github || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs text-muted">
            {hero.techLine.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                {i > 0 && <span className="text-border">•</span>}
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={profile.photo}
            alt={profile.name}
            className="aspect-square w-52 rounded-xl border border-border/60 object-cover shadow-soft sm:w-64"
          />
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <p className="text-xs tracking-wide text-muted">
          {hero.status}
        </p>
      </div>
    </section>
  )
}
