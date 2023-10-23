import { ElementRef, forwardRef } from 'react'

import CheckIcon from '@/assets/icons-components/CheckIcon'
import { Label } from '@/components'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'
type CheckProps = {
  className?: string
  disabled?: boolean
  id?: string
  label?: string
}
export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckProps>(
  ({ className, id, label, ...rest }, ref) => {
    return (
      <div className={`${s.containerCheckBox} ${rest.disabled ? s.disabled : ''}`}>
        <div className={s.containerLabel}>
          {label && <Label htmlFor={id} title={label} />}
          <div className={s.buttonContainer} tabIndex={Number('0')}>
            <CheckboxRadix.Root
              className={`${s.checkboxRoot} ${className}`}
              id={id}
              {...rest}
              ref={ref}
            >
              <CheckboxRadix.Indicator className={s.checkIcon}>
                <CheckIcon />
              </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
          </div>
        </div>
      </div>
    )
  }
)
