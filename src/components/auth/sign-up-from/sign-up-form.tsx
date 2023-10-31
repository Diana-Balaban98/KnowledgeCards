import { FunctionComponent } from 'react'

import { Button, Card, FormValues, Typography, signUpSchema, useSignIn } from '@/components'
import { ControlledInput } from '@/components/ui/controlled'
import { DevTool } from '@hookform/devtools'

import s from './sign-up-form.module.scss'

type Props = {
  onSubmit: (data: FormValues) => void
}

export const SignUpForm: FunctionComponent<Props> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useSignIn(signUpSchema, {
    confirmPassword: '',
    email: '',
    password: '',
  })

  return (
    <Card as={'article'} className={s.card}>
      <DevTool control={control} />
      <Typography as={'h1'} className={s.title} variant={'large'}>
        Sign Up
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
          <div className={s.inputLine}>
            <ControlledInput
              control={control}
              error={errors.password?.message}
              label={'Password'}
              name={'password'}
              type={'password'}
            />
          </div>
          <div className={s.inputLine}>
            <ControlledInput
              control={control}
              error={errors.confirmPassword?.message}
              label={'Confirm password'}
              name={'confirmPassword'}
              type={'password'}
            />
          </div>
          <div className={s.buttonLine}>
            <Button fullWidth type={'submit'}>
              Sign Up
            </Button>
          </div>
          <div className={s.textFormLine}>
            <Typography variant={'body2'}>Already have an account?</Typography>
          </div>
          <Button variant={'link'}>
            <span>Sign In</span>
          </Button>
        </form>
      </>
    </Card>
  )
}
