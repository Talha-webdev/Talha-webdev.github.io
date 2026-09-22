import { Link, Mail } from "lucide-react"
import { profile } from "../../data/portfolio"
import { GithubIcon } from "../GithubIcon"

export function Footer() {
  const email = profile.email
  const github = profile.socials.github
  const linkedin = profile.socials.linkedin

  return (
    <footer className="border-t border-border bg-[#020617]">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-6 py-8 text-center">
        <span className="text-sm font-semibold text-foreground">
          {profile.name}
        </span>
        <div className="flex items-center gap-4 text-muted">
          <a
            href={github || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={linkedin || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <Link size={16} />
          </a>
          <a
            href={email ? `mailto:${email}` : "#"}
            aria-label="Email"
            className="transition-colors hover:text-accent"
          >
            <Mail size={16} />
          </a>
        </div>
        <p className="text-xs text-muted">&copy; 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
