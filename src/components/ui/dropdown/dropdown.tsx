import { ElementRef, ReactElement, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type DropdownProps = {
  trigger?: ReactElement
} & DropdownMenu.DropdownMenuProps

export const Dropdown = forwardRef<ElementRef<typeof DropdownMenu.Root>, DropdownProps>(
  ({ trigger }, ref) => {
    return (
      <div className={s.box}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button aria-label={'Customise options'} className={'IconButton'}>
              {trigger}
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className={s.dropdownMenuContent} ref={ref}>
              <DropdownMenu.Item className={s.DropdownMenuItem}>New Tab</DropdownMenu.Item>
              <DropdownMenu.Item className={s.DropdownMenuItem}>New Window</DropdownMenu.Item>
              <DropdownMenu.Item className={s.DropdownMenuItem}>
                New Private Window
              </DropdownMenu.Item>
              <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
              <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    )
  }
)
