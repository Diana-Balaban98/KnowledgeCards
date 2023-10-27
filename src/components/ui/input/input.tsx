import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FormEventHandler,
  KeyboardEvent,
  forwardRef,
  useState,
} from 'react'

import { EyeIcon, EyeOffIcon, SearchIcon } from '@/assets'
import { Label, Typography } from '@/components'
import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  error?: string
  id?: string
  label?: string
  onClear?: FormEventHandler<Element>
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onIconClick?: () => void
  onTextChange?: (value: string) => void
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      error,
      id,
      label,
      onChange,
      onEnter,
      onKeyDown,
      onTextChange,
      search,
      type,
      ...restProps
    },
    ref
  ) => {
    const [showPass, setShowPass] = useState(false)
    const switchPassword = type === 'password'
    const inputType = showPass && switchPassword ? 'type' : type

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
      input: clsx(s.defaultInput, className, error && s.withErr, search && s.ident),
      inputContainer: s.inputContainer,
      label: s.label,
      searchIcon: s.searchIcon,
    }

    return (
      <div className={classNames.box}>
        {label && <Label color={'var(--color-dark-100)'} htmlFor={id} title={label} />}
        <div className={classNames.inputContainer}>
          {search && <SearchIcon className={classNames.searchIcon} />}

          <input
            className={classNames.input}
            disabled={disabled}
            id={id}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
            ref={ref}
            type={inputType}
            {...restProps}
          />
          {switchPassword && (
            <button
              className={classNames.hidePassword}
              onClick={showPasswordHandler}
              type={'button'}
            >
              {showPass ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          )}
        </div>
        {error && (
          <Typography as={'span'} className={s.inputError} variant={'error'}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
