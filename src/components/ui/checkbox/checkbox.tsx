import { FC } from 'react'

import CheckIcon from '@/assets/icons-components/CheckIcon'
import { Typography } from '@/components'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './checkbox.module.scss'
export type CheckBoxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  onChange?: (checked: boolean) => void
  required?: boolean
}
export const Checkbox: FC<CheckBoxProps> = ({ checked, onChange }) => {
  return (
    <div className={s.containerCheckBox}>
      <LabelRadix.Root className={s.containerLabel}>
        <Typography variant={'body2'}>Check-box</Typography>
        <div className={s.buttonContainer} tabIndex={Number('0')}>
          <CheckboxRadix.Root
            checked={checked}
            className={s.checkboxRoot}
            defaultChecked
            onCheckedChange={onChange}
          >
            <CheckboxRadix.Indicator className={s.checkIcon}>
              <CheckIcon />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
      </LabelRadix.Root>
    </div>
  )
}
