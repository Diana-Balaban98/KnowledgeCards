import { FunctionComponent } from 'react'

import { Button, Card, FormValues, Typography, forgotPasswordSchema, useSignIn } from '@/components'
import { ControlledInput } from '@/components/ui/controlled'
import { DevTool } from '@hookform/devtools'

import s from './forgot-password-form.module.scss'

type Props = {
  onSubmit: (data: FormValues) => void
}

export const ForgotPasswordForm: FunctionComponent<Props> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useSignIn(forgotPasswordSchema, {
    email: '',
  })

  return (
    <Card as={'article'} className={s.card}>
      <DevTool control={control} />
      <Typography as={'h1'} className={s.titleCard} variant={'large'}>
        Forgot your password?
      </Typography>
      <>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputLine}>
            <ControlledInput
              control={control}
              error={errors.email?.message}
              label={'Email'}
              name={'email'}
            />
          </div>
          <Typography as={'p'} className={s.text} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <div className={s.buttonLine}>
            <Button fullWidth type={'submit'}>
              Send Instructions
            </Button>
          </div>
          <div className={s.textFormLine}>
            <Typography variant={'body2'}>Did you remember your password?</Typography>
          </div>
          <Button type={'submit'} variant={'link'}>
            <span>Try logging in</span>
          </Button>
        </form>
      </>
    </Card>
  )
}
