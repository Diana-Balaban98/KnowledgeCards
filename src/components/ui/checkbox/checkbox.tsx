import { ComponentPropsWithoutRef, FC } from 'react'

import CheckIcon from '@/assets/icons-components/CheckIcon'
import { Typography } from '@/components'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './checkbox.module.scss'

export const Checkbox: FC<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>> = ({
  className,
  ...rest
}) => {
  return (
    <div className={`${s.containerCheckBox} ${rest.disabled ? s.disabled : ''}`}>
      <LabelRadix.Root className={s.containerLabel}>
        <Typography variant={'body2'}>Check-box</Typography>
        <div className={s.buttonContainer} tabIndex={Number('0')}>
          <CheckboxRadix.Root className={`${s.checkboxRoot} ${className}`} {...rest}>
            <CheckboxRadix.Indicator className={s.checkIcon}>
              <CheckIcon />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
      </LabelRadix.Root>
    </div>
  )
}
