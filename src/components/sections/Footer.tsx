import { Link, Mail } from "lucide-react"
import { profile } from "../../data/portfolio"
import { GithubIcon } from "../GithubIcon"

export function Footer() {
  const email = profile.email
  const github = profile.socials.github
  const linkedin = profile.socials.linkedin

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center">
        <span className="text-lg font-semibold text-foreground">
          {profile.name}
        </span>
        <p className="text-sm text-muted">
          Building, learning, and improving one project at a time.
        </p>
        <div className="flex items-center gap-5 text-muted">
          <a
            href={github || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={linkedin || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <Link size={18} />
          </a>
          <a
            href={email ? `mailto:${email}` : "#"}
            aria-label="Email"
            className="transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-muted">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
