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
  const { className, clearable, error, fullWidth, label, ...restProps } = props
  const withError = error ? s.inputWithError : ''
  const inFullWidth = fullWidth ? s.fullWidth : ''

  return (
    <>
      <label>
        <div className={s.wrapperInput}>
          {label && (
            <Typography as={'span'} className={s.label} variant={'body2'}>
              {label}
            </Typography>
          )}
          <div className={s.innerInput}>
            <input
              className={`${s.defaultInput} ${inFullWidth} ${className} ${withError}`}
              {...restProps}
            />
            {error && (
              <Typography as={'span'} className={s.error} variant={'caption'}>
                {error}
              </Typography>
            )}
          </div>
        </div>
      </label>
    </>
  )
}
