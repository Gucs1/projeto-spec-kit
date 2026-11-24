import type { PropsWithChildren } from 'react'

export function Container({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <div className={`container mx-auto w-full px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
}
