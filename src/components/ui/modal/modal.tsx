import * as RadixModal from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export type ModalProps = Partial<{
  className: string
  defaultValue: number[]
  max: number
  minStepsBetweenThumbs: number
  step: number
}>

export const Modal = () => {
  return (
    <RadixModal.Root>
      <RadixModal.Trigger asChild>
        <button className={`${s.Button}${s.violet}`}>Edit profile</button>
      </RadixModal.Trigger>
      <RadixModal.Portal>
        <RadixModal.Overlay className={`${s.RadixModalOverlay}`} />
        <RadixModal.Content className={`${s.RadixModalContent}`}>
          <RadixModal.Title className={`${s.RadixModalTitle}`}>Edit profile</RadixModal.Title>
          <RadixModal.Description className={`${s.RadixModalDescription}`}>
            Make changes to your profile here. Click save when you are done.
          </RadixModal.Description>
          <fieldset className={`${s.Fieldset}`}>
            <label className={`${s.Label}`} htmlFor={'name'}>
              Name
            </label>
            <input className={`${s.Input}`} defaultValue={'Pedro Duarte'} id={'name'} />
          </fieldset>
          <fieldset className={`${s.Fielset}`}>
            <label className={`${s.Label}`} htmlFor={'username'}>
              Username
            </label>
            <input className={`${s.Input}`} defaultValue={'@peduarte'} id={'username'} />
          </fieldset>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 25 }}>
            <RadixModal.Close asChild>
              <button className={`${s.Button}${s.green}`}>Save changes</button>
            </RadixModal.Close>
          </div>
          <RadixModal.Close asChild>
            <button aria-label={'Close'} className={`${s.IconButton}`}></button>
          </RadixModal.Close>
        </RadixModal.Content>
      </RadixModal.Portal>
    </RadixModal.Root>
  )
}
