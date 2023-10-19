import { FC, useId } from 'react'

import { CheckIcon } from '@/assets'
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
export const Checkbox: FC<CheckBoxProps> = ({ onChange }) => {
  const uid = useId()

  return (
    <div className={s.containerCheckBox}>
      <div className={s.buttonContainer}>
        <CheckboxRadix.Root
          className={'CheckboxRoot'}
          defaultChecked
          id={uid}
          onCheckedChange={onChange}
        >
          <CheckboxRadix.Indicator className={'CheckboxIndicator'}>
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      <LabelRadix.Root className={s.label} htmlFor={uid}>
        Check-box
      </LabelRadix.Root>
    </div>
  )
}
