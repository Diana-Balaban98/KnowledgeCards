import {
  ChangeEvent,
  FormEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  forwardRef,
  useState,
} from 'react'

import { EyeIcon, EyeOffIcon, SearchIcon } from '@/assets'
import { Label, Typography } from '@/components'
import { clsx } from 'clsx'

import s from './input.module.scss'

type VariantInput = 'default' | 'password' | 'search'

export type InputProps = {
  error?: string
  fullWidth?: boolean
  id?: string
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
    id,
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

  const searchInfo = variant === 'search'
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
  const classNames = {
    box: s.box,
    hidePassword: s.hidePassword,
    input: clsx(s.defaultInput, className, error && s.withErr, searchInfo && s.ident),
    inputContainer: clsx(s.inputContainer, fullWidth && s.fullWidth),
    label: s.label,
    searchIcon: s.searchIcon,
  }

  return (
    <div className={classNames.box}>
      {label && <Label color={'var(--color-dark-100)'} htmlFor={id} title={label} />}
      <div className={classNames.inputContainer}>
        {searchInfo && <SearchIcon className={classNames.searchIcon} />}

        <input
          className={classNames.input}
          disabled={disabled}
          id={id}
          onChange={handleInputChange}
          onKeyDown={handleEnterKey}
          type={typeInput}
          {...restProps}
        />
        {switchPassword && (
          <button className={classNames.hidePassword} onClick={showPasswordHandler} type={'button'}>
            {showPass ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        )}
      </div>
      {error && (
        <Typography as={'span'} variant={'error'}>
          {error}
        </Typography>
      )}
    </div>
  )
})
