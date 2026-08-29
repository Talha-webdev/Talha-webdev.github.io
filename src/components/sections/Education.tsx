import { GraduationCap } from "lucide-react"
import { Section } from "../Section"
import { education } from "../../data/portfolio"

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
        <div className="flex items-start gap-4">
          <span className="mt-1 text-accent">
            <GraduationCap size={24} />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-foreground">{education.institution}</p>
            <p className="mt-1 text-sm text-muted">{education.period}</p>

            <p className="mt-4 text-sm text-muted">
              <span className="font-medium text-foreground">Final Year Project: </span>
              {education.finalYearProject.name} — {education.finalYearProject.description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
