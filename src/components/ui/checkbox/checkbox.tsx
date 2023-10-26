import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import CheckIcon from '@/assets/icons-components/CheckIcon'
import { Label } from '@/components'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onBlur?: () => void
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ className, id, label, onBlur, ...rest }, ref) => {
    const classNames = {
      btnContainer: s.buttonContainer,
      checkIcon: s.checkIcon,
      containerCheckbox: clsx(s.containerCheckBox, rest.disabled && s.disabled),
      containerLabel: s.containerLabel,
      root: clsx(s.checkboxRoot, className),
    }

    return (
      <div className={classNames.containerCheckbox}>
        <div className={classNames.containerLabel}>
          {label && <Label htmlFor={id} title={label} />}
          <div className={classNames.btnContainer} tabIndex={Number('0')}>
            <CheckboxRadix.Root className={classNames.root} id={id} {...rest} ref={ref}>
              <CheckboxRadix.Indicator className={classNames.checkIcon} onBlur={onBlur}>
                <CheckIcon />
              </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
          </div>
        </div>
      </div>
    )
  }
)
