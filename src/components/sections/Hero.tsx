import { ArrowDown, User } from "lucide-react"
import { profile } from "../../data/portfolio"
import { GithubIcon } from "../GithubIcon"

export function Hero() {
  const github = profile.socials.github

  return (
    <section
      id="top"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium text-accent">
            Hi, I&apos;m Muhammad Talha.
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
            Computer Science Student &amp; Developer
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            I&apos;m a computer science student interested in software development,
            web development, and machine learning. I enjoy building practical
            projects that solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              <ArrowDown size={16} />
              View Projects
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
        </div>

        <div className="flex justify-center md:justify-end">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-square w-64 rounded-2xl border border-border object-cover shadow-card sm:w-80"
            />
          ) : (
            <div className="flex aspect-square w-64 items-center justify-center rounded-2xl border border-border bg-accent-soft text-muted shadow-card sm:w-80">
              <div className="flex flex-col items-center gap-3 text-center">
                <User size={48} strokeWidth={1.5} />
                <span className="text-sm font-medium">Profile Image</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
