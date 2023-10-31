import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button, Card, FormValues, Typography, signInSchema, useSignIn } from '@/components'
import { ControlledCheckbox, ControlledInput } from '@/components/ui/controlled'

import s from './sign-in-form.module.scss'

type Props = {
  onSubmit: (data: FormValues) => void
}

export const SignInForm: FunctionComponent<Props> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useSignIn(signInSchema, {
    email: '',
    password: '',
    rememberMe: false,
  })

  return (
    <Card as={'article'} className={s.card}>
      <Typography as={'h1'} className={s.title} variant={'large'}>
        Sign In
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
          <div className={s.checkboxLine}>
            <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
          </div>
          <div className={s.linkLine}>
            <Typography as={'a'} variant={'body2'}>
              Forgot Password?
            </Typography>
          </div>
          <div className={s.buttonLine}>
            <Button fullWidth type={'submit'}>
              Sign In
            </Button>
          </div>
        </form>
        <div className={s.textFormLine}>
          <Typography variant={'body2'}>{"Don't have an account?"}</Typography>
        </div>
        <Button as={Link} to={'./'} variant={'link'}>
          <span>Sign Up</span>
        </Button>
      </>
    </Card>
  )
}
