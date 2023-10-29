import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledInput } from '@/components/ui/controlled'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

const loginSchema = z.object({
  confirmPassword: z.string().min(3, 'Password must be at least 3 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
})

type FormValues = z.infer<typeof loginSchema>

export const SignUpForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log(data)
  })

  return (
    <Card as={'article'} className={s.card}>
      <DevTool control={control} />
      <Typography as={'h1'} className={s.title} variant={'large'}>
        Sign Up
      </Typography>
      <>
        <form className={s.form} onSubmit={onSubmit}>
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
            <Button as={'a'} fullWidth type={'submit'}>
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
