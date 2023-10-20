import { ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type Option = {
  label: string
  value: string
}

export type RadioGroupProps = {
  disabled?: boolean
  name: string
  onValueChange?: (value: string) => void
  options: Option[]
  value?: string
}

export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  ({ disabled, name, options, ...restProps }, ref) => {
    return (
      <RadixRadioGroup.Root name={name} required {...restProps} className={s.box} ref={ref}>
        {options.map(o => (
          <Typography
            as={'label'}
            className={`${s.item} ${disabled ? s.disabled : ''}`}
            key={o.value}
            variant={'body2'}
          >
            <div className={s.state}>
              <RadixRadioGroup.Item className={s.radio} value={o.value}>
                <div className={s.frame}></div>
                <RadixRadioGroup.Indicator className={s.indicator} />
              </RadixRadioGroup.Item>
            </div>
            {o.label}
          </Typography>
        ))}
      </RadixRadioGroup.Root>
    )
  }
)
