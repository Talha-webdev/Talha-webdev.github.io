import type { ReactNode } from "react"

interface SectionProps {
  id: string
  title?: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-20"
    >
      {title && (
        <h2 className="mb-10 text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
