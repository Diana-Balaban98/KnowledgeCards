import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDownIcon } from '@/assets'
import { Label } from '@/components'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

export type Options = {
  label: string
  value: string
}

export type Props = {
  aria?: string
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  options: Options[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, Props>(
  ({ aria, className, disabled, id, label, options, placeholder, ...restProps }, ref) => {
    const mappedOptions = options.map(o => (
      <RadixSelect.Item className={s.selectItem} key={o.value} value={o.value}>
        <RadixSelect.ItemText>{o.label}</RadixSelect.ItemText>
      </RadixSelect.Item>
    ))

    const classNames = {
      selectTrigger: clsx(s.selectTrigger, className),
    }

    return (
      <div>
        <Label disabled htmlFor={id} title={label} />
        <RadixSelect.Root {...restProps}>
          <RadixSelect.Trigger
            aria-label={aria}
            className={classNames.selectTrigger}
            disabled={disabled}
            id={id}
            ref={ref}
          >
            <RadixSelect.Value placeholder={placeholder} />
            <RadixSelect.Icon className={s.selectIcon}>
              <ArrowDownIcon />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>

          <RadixSelect.Portal>
            <RadixSelect.Content
              className={s.selectContent}
              collisionPadding={0}
              position={'popper'}
              sticky={'always'}
            >
              <RadixSelect.Viewport className={s.selectViewport}>
                {mappedOptions}
              </RadixSelect.Viewport>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </div>
    )
  }
)
