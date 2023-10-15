import { CSSProperties, FC, FormEventHandler, InputHTMLAttributes, ReactNode } from 'react'

import s from './input.module.scss'

export type InputProps = {
  className?: string
  clearable?: boolean
  error?: string
  fullWidth?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  label?: string
  onClear?: FormEventHandler<Element>
  onIconClick?: () => void
  style?: CSSProperties
} & InputHTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = props => {
  const { className, label, ...restProps } = props

  return (
    <>
      <label>
        {label && <span>{label}</span>}
        <input className={`${s.defaultInput} ${className}`} {...restProps} />
      </label>
    </>
  )
}
