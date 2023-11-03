import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useState } from 'react'

import { Card, Typography } from '@/components'
import * as RadixModal from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import s from './modal.module.scss'

export type ModalProps = {
  open?: boolean
  setOpen?: (open: boolean) => void
  title: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<ElementRef<typeof RadixModal.Root>, ModalProps>(
  ({ children, className, title, trigger, ...restProps }, ref): JSX.Element => {
    const [open, setOpen] = useState(false)

    return (
      <RadixModal.Root onOpenChange={setOpen} open={open}>
        <RadixModal.Trigger asChild>{trigger}</RadixModal.Trigger>

        {open && (
          <RadixModal.Portal forceMount>
            <RadixModal.Overlay className={s.overlay} forceMount />

            <div className={s.root} ref={ref} {...restProps}>
              <RadixModal.Content asChild forceMount>
                <Card>
                  <header className={s.header}>
                    <Typography as={'h2'} variant={'h2'}>
                      {title}
                    </Typography>
                    <RadixModal.Close asChild>
                      <button aria-label={'Close'} className={s.IconButton}>
                        <Cross2Icon />
                      </button>
                    </RadixModal.Close>
                  </header>
                  <div>{children}</div>
                </Card>
              </RadixModal.Content>
            </div>
          </RadixModal.Portal>
        )}
      </RadixModal.Root>
    )
  }
)
