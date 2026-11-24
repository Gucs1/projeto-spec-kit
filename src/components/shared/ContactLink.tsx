import type { ContactChannel } from '@/types/business'

export function ContactLink({ channel, className = '' }: { channel: ContactChannel; className?: string }) {
  if (!channel.active) return null
  return <a className={className} href={channel.href}>{channel.label}</a>
}
