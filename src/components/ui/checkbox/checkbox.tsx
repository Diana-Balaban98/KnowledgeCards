import { FC, useId } from 'react'

import CheckIcon from '@/assets/icons-components/CheckIcon'
import { Typography } from '@/components'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './checkbox.module.scss'
export type CheckBoxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  required?: boolean
}
export const Checkbox: FC<CheckBoxProps> = ({ checked, onChange }) => {
  const uid = useId()

  return (
    <div className={s.containerCheckBox}>
      <div className={s.buttonContainer} tabIndex={Number('0')}>
        <CheckboxRadix.Root
          checked={checked}
          className={s.checkboxRoot}
          defaultChecked
          id={uid}
          onCheckedChange={onChange}
        >
          <CheckboxRadix.Indicator className={s.checkIcon}>
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      <LabelRadix.Root className={s.label} htmlFor={uid}>
        <Typography variant={'body2'}>Check-box</Typography>
      </LabelRadix.Root>
    </div>
  )
}
