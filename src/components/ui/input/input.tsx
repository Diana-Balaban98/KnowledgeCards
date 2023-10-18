import {
  ChangeEvent,
  FormEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  forwardRef,
  useState,
} from 'react'

import { EyeIcon, EyeOffIcon, SearchIcon } from '@/assets'
import { Typography } from '@/components'

import s from './input.module.scss'

type VariantInput = 'default' | 'password' | 'search'

export type InputProps = {
  error?: string
  fullWidth?: boolean
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
    disabled,
    error,
    fullWidth,
    label,
    onChange,
    onEnter,
    onKeyDown,
    onTextChange,
    type,
    variant = 'default',
    ...restProps
  },
  _ref
) {
  const [showPass, setShowPass] = useState(false)

  const withError = error ? s.withErr : ''
  const inFullWidth = fullWidth ? s.fullWidth : ''
  const searchInfo = variant === 'search'
  const indentIcon = searchInfo && s.ident
  const switchPassword = variant === 'password'

  const getTypeForInput = (showPassword: boolean, type?: string) => {
    if (!showPassword && switchPassword) {
      return 'password'
    }
    if (searchInfo) {
      return 'search'
    }

    return type ?? 'text'
  }

  const typeInput = getTypeForInput(showPass, type)

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
      {label && (
        <Typography as={'label'} className={s.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={`${s.inputContainer} ${inFullWidth}`}>
        {searchInfo && <SearchIcon className={s.searchIcon} />}

        <input
          className={`${s.defaultInput}  ${className} ${withError} ${indentIcon}`}
          disabled={disabled}
          onChange={handleInputChange}
          onKeyDown={handleEnterKey}
          type={typeInput}
          {...restProps}
        />
        {switchPassword && (
          <button className={s.hidePassword} onClick={showPasswordHandler} type={'button'}>
            {showPass ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        )}
      </div>
      {error && (
        <Typography as={'span'} className={s.err} variant={'error'}>
          {error}
        </Typography>
      )}
    </div>
  )
})
