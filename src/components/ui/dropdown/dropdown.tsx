import { CSSProperties, ElementRef, ReactElement, forwardRef } from 'react'

import { MoreIcon } from '@/assets'
import { Typography } from '@/components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'

type DropdownProps = {
  align?: 'center' | 'end' | 'start'
  ariaLabel?: string
  className?: string
  heightTrigger?: CSSProperties['height']
  items: {
    icon: ReactElement
    label: string
    onClick: () => void
  }[]
  trigger?: ReactElement
  widthTrigger?: CSSProperties['width']
} & DropdownMenu.DropdownMenuProps

export const Dropdown = forwardRef<ElementRef<typeof DropdownMenu.Root>, DropdownProps>(
  ({ align = 'start', ariaLabel, className, heightTrigger, items, trigger, widthTrigger }, ref) => {
    const classNames = {
      box: s.box,
      btn: s.btn,
      dropdownContent: clsx(s.dropdownContent, className),
      dropdownItem: s.dropdownItem,
      dropdownSeparator: s.dropdownSeparator,
      trigger: s.trigger,
    }

    const sizeTrigger = { height: heightTrigger, width: widthTrigger }

    return (
      <div className={s.box}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className={classNames.trigger}>
            <button
              aria-label={ariaLabel ?? 'Customise options'}
              className={classNames.btn}
              style={sizeTrigger}
            >
              {trigger ?? <MoreIcon />}
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align={align}
              className={classNames.dropdownContent}
              onClick={e => e.stopPropagation()}
              ref={ref}
              sideOffset={5}
            >
              {items.map((item, index) => (
                <DropdownMenu.Item
                  className={classNames.dropdownItem}
                  key={index}
                  onSelect={item.onClick}
                >
                  {item.icon}
                  <Typography variant={'caption'}>{item.label}</Typography>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    )
  }
)
