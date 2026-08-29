import { Section } from "../Section"
import { skillCategories } from "../../data/portfolio"

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border border-border bg-surface p-6 shadow-card"
          >
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
