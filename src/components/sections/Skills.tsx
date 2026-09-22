import { Section } from "../Section"
import { skillCategories } from "../../data/portfolio"

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border border-border bg-[#1E293B] p-5 shadow-card"
          >
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-[#334155] px-2.5 py-0.5 text-xs text-muted"
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
