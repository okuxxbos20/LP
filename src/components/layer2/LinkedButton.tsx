import { FC } from 'react'
import Link from 'next/link'

export const LinkedButton: FC<{ link: string; label: string }> = ({
  link,
  label,
}) => {
  return (
    <Link href={link}>
      <p>{label}</p>
    </Link>
  )
}
