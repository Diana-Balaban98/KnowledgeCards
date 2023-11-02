import { FunctionComponent } from 'react'

import {
  Button,
  Card,
  FormValues,
  Typography,
  createNewPasswordSchema,
  useAuthForm,
} from '@/components'
import { ControlledInput } from '@/components/ui/controlled'
import { DevTool } from '@hookform/devtools'

import s from './create-password-form.module.scss'

type Props = {
  onSubmit: (data: FormValues) => void
}

export const CreateNewPasswordForm: FunctionComponent<Props> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useAuthForm(createNewPasswordSchema, { password: '' })

  return (
    <Card as={'article'} className={s.card}>
      <DevTool control={control} />
      <Typography as={'h1'} className={s.titleCard} variant={'large'}>
        Create new password
      </Typography>
      <>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputLine}>
            <ControlledInput
              control={control}
              error={errors.password?.message}
              label={'Password'}
              name={'password'}
              type={'password'}
            />
          </div>
          <Typography as={'p'} className={s.text} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
          <div className={s.buttonLine}>
            <Button fullWidth type={'submit'}>
              Create New Password
            </Button>
          </div>
        </form>
      </>
    </Card>
  )
}
