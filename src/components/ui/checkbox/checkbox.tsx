import { ElementRef, forwardRef } from 'react'

import CheckIcon from '@/assets/icons-components/CheckIcon'
import { Label } from '@/components'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'
type CheckProps = {
  className?: string
  disabled?: boolean
  id?: string
  label?: string
}
export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckProps>(
  ({ className, id, label, ...rest }, ref) => {
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
              <CheckboxRadix.Indicator className={classNames.checkIcon}>
                <CheckIcon />
              </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
          </div>
        </div>
      </div>
    )
  }
)
