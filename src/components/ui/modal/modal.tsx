import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useState } from 'react'

import { Card, Typography } from '@/components'
import * as RadixModal from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import s from './modal.module.scss'

export type ModalProps = Partial<{
  className: string
  title: string
  trigger: ReactNode
}> &
  ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<ElementRef<typeof RadixModal.Root>, ModalProps>(
  ({ children, title, trigger }, _ref): JSX.Element => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <RadixModal.Root onOpenChange={setOpen} open={open}>
          <RadixModal.Trigger asChild>{trigger}</RadixModal.Trigger>
          {open && (
            <RadixModal.Portal forceMount>
              <RadixModal.Overlay className={`${s.RadixModalOverlay}`} forceMount />
              <RadixModal.Content className={`${s.RadixModalContent}`}>
                <Card>
                  <header className={s.Fieldset}>
                    <Typography as={'h2'} variant={'h2'}>
                      {title}
                    </Typography>
                  </header>
                  <div>{children}</div>
                </Card>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 25 }}>
                  <RadixModal.Close asChild>
                    <button className={`${s.Button}${s.green}`}>Save changes</button>
                  </RadixModal.Close>
                </div>
                <RadixModal.Close asChild>
                  <Cross2Icon />
                  <button aria-label={'Close'} className={`${s.IconButton}`}></button>
                </RadixModal.Close>
              </RadixModal.Content>
            </RadixModal.Portal>
          )}
        </RadixModal.Root>
      </div>
    )
  }
)
