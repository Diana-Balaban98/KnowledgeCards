import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import s from './card.module.scss'

export type CardProps = {
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Card: FC<CardProps> = ({ children, className, ...rest }) => {
  return <div className={s.card} {...rest}></div>
}
