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
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-16"
    >
      {title && (
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
