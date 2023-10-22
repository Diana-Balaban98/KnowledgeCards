import { ElementRef, forwardRef } from 'react'

import * as TabsSwitcher from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

export type TabType = {
  text: string
  value: string
}

type TabsProps = {
  className?: string
  disabled?: boolean
  onValueChange: (value: string) => void
  tabs: TabType[]
  value?: string
}

export const Tabs = forwardRef<ElementRef<typeof TabsSwitcher.Root>, TabsProps>(
  ({ className, disabled, onValueChange, tabs, value }, ref) => {
    return (
      <TabsSwitcher.Root onValueChange={onValueChange} ref={ref} value={value}>
        <TabsSwitcher.List>
          {tabs.map(t => (
            <TabsSwitcher.Trigger
              className={`${s.trigger} ${className}`}
              disabled={disabled}
              key={t.value}
              value={t.value}
            >
              {t.text}
            </TabsSwitcher.Trigger>
          ))}
        </TabsSwitcher.List>
      </TabsSwitcher.Root>
    )
  }
)
