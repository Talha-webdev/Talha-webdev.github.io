import { useState } from "react"
import { Menu, X } from "lucide-react"
import { profile } from "../../data/portfolio"
import { GithubIcon } from "../GithubIcon"

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const github = profile.socials.github
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3.5">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="text-base font-semibold tracking-tight text-foreground"
        >
          Muhammad Talha
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className="transition-colors hover:text-accent"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="text-muted transition-colors hover:text-accent"
            href={github || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="text-muted transition-colors hover:text-accent md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <ul className="mx-auto flex w-full max-w-5xl flex-col px-6 py-2 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
