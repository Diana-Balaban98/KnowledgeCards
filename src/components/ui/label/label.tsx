import { ElementRef, forwardRef } from 'react'

import { Typography } from '@/components'
import { clsx } from 'clsx'

import s from './label.module.scss'
type LabelProps = {
  className?: string
  color?: string
  disabled?: boolean
  htmlFor?: string
  title?: string
}

export const Label = forwardRef<ElementRef<typeof Typography>, LabelProps>(
  ({ className, color = 'var(--color-dark-100)', disabled, htmlFor, title }, _ref) => {
    const labelClassName = clsx(s.label, className, disabled && s.disabled)

    return (
      <Typography
        as={'label'}
        className={labelClassName}
        htmlFor={htmlFor}
        style={{ color: color }}
        variant={'body2'}
      >
        {title}
      </Typography>
    )
  }
)
