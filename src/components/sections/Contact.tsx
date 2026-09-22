import { Link, Mail } from "lucide-react"
import { Section } from "../Section"
import { GithubIcon } from "../GithubIcon"
import { profile } from "../../data/portfolio"

export function Contact() {
  const email = profile.email
  const github = profile.socials.github
  const linkedin = profile.socials.linkedin

  return (
    <Section id="contact" title="Get in Touch">
      <div className="rounded-xl border border-border bg-[#1E293B] p-8 shadow-card">
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
          I'm open to opportunities, collaborations, and interesting development
          work. Feel free to reach out through any of the channels below.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={email ? `mailto:${email}` : "#"}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href={github || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={linkedin || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Link size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  )
}
