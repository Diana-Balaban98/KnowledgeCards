import { ElementRef, forwardRef } from 'react'

import { Label } from '@/components'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type Option = {
  label: string
  value: string
}

export type Props = {
  disabled?: boolean
  id?: string
  name: string
  onValueChange?: (value: string) => void
  options: Option[]
  value?: string
} & RadixRadioGroup.RadioGroupProps

export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, Props>(
  ({ disabled, id, name, options, ...restProps }, ref) => {
    return (
      <RadixRadioGroup.Root name={name} {...restProps} className={s.box} ref={ref}>
        {options.map(o => (
          <div className={s.item} key={o.value}>
            <div className={s.state} tabIndex={Number('1')}>
              <RadixRadioGroup.Item className={s.radio} id={`${id}-${o.value}`} value={o.value}>
                <div className={s.frame}></div>
                <RadixRadioGroup.Indicator className={s.indicator} />
              </RadixRadioGroup.Item>
            </div>
            <Label htmlFor={`${id}-${o.value}`} title={o.label} />
          </div>
        ))}
      </RadixRadioGroup.Root>
    )
  }
)
