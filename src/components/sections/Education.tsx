import { GraduationCap } from "lucide-react"
import { Section } from "../Section"
import { education } from "../../data/portfolio"

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="rounded-xl border border-border bg-[#1E293B] p-6 shadow-card">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-accent">
            <GraduationCap size={20} strokeWidth={1.5} />
          </span>
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {education.institution} · {education.period}
            </p>

            <p className="mt-3 text-sm text-muted">
              <span className="font-medium text-foreground">Final Year Project: </span>
              {education.finalYearProject.name} — {education.finalYearProject.description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
