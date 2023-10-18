import {
  ChangeEvent,
  FormEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { EyeIcon, EyeOffIcon, SearchIcon } from '@/assets'
import { Typography } from '@/components'

import s from './input.module.scss'

type VariantInput = 'default' | 'password' | 'search'

export type InputProps = {
  clearable?: boolean
  error?: string
  fullWidth?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  label?: string
  onClear?: FormEventHandler<Element>
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onIconClick?: () => void
  onTextChange?: (value: string) => void
  variant?: VariantInput
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    clearable,
    error,
    fullWidth,
    iconLeft,
    iconRight,
    label,
    onChange,
    onEnter,
    onKeyDown,
    onTextChange,
    variant = 'default',
    ...restProps
  },
  _ref
) {
  const [showPass, setShowPass] = useState(false)

  const getTypeForInput = (showPassword: boolean, variant: VariantInput) => {
    if (!showPassword && variant === 'password') {
      return 'password'
    }
    if (variant === 'search') {
      return 'search'
    }

    return 'text'
  }

  const typeInput = getTypeForInput(showPass, variant)
  const withError = error ? s.inputWithError : ''
  const inFullWidth = fullWidth ? s.fullWidth : ''

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onTextChange?.(e.currentTarget.value)
  }

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }

  const showPasswordHandler = () => setShowPass(prevState => !prevState)

  return (
    <div className={s.box}>
      <label>
        {label && (
          <Typography as={'span'} className={s.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <span className={s.inputContainer}>
          {variant === 'password' && (
            <button className={s.showPassword} onClick={showPasswordHandler} type={'button'}>
              {showPass ? (
                <EyeIcon color={'var(--color-light-100)'} size={'20px'} />
              ) : (
                <EyeOffIcon color={'var(--color-light-100)'} size={'20px'} />
              )}
            </button>
          )}
          {variant === 'search' && (
            <div className={s.searchContainer}>
              <SearchIcon />
            </div>
          )}
          {!!iconLeft && (
            <div className={s.iconContainer}>
              <span className={s.iconLeft}>{iconLeft}</span>
            </div>
          )}
          <input
            className={`${s.defaultInput} ${inFullWidth} ${className} ${withError}`}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
            type={typeInput}
            {...restProps}
          />
          {!!iconRight && (
            <div className={s.iconContainer}>
              <span className={s.iconRight}>{iconRight}</span>
            </div>
          )}
        </span>
        {error && (
          <Typography as={'span'} className={s.error} variant={'caption'}>
            {error}
          </Typography>
        )}
      </label>
    </div>
  )
})
