import { CSSProperties, FC, FormEventHandler, InputHTMLAttributes, ReactNode } from 'react'

import { Typography } from '@/components'

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
  const { className, fullWidth, label, ...restProps } = props

  return (
    <>
      <label>
        <div className={s.wrapperInput}>
          {label && (
            <Typography as={'span'} className={s.label} variant={'body2'}>
              {label}
            </Typography>
          )}
          <input
            className={`${s.defaultInput} ${fullWidth ? s.fullWidth : ''} ${className}`}
            {...restProps}
          />
        </div>
      </label>
    </>
  )
}
