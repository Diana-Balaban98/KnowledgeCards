import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(
  props: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>
) => {
  const { as: Component = 'div', className, ...rest } = props
  const cardClassName = clsx(s.card, className)

  return <Component className={cardClassName} {...rest} />
}
