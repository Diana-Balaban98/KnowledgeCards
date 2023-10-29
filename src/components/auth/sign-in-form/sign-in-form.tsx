import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledCheckbox, ControlledInput } from '@/components/ui/controlled'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in-form.module.scss'
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const SignInForm = () => {
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
      <Typography as={'h1'} className={s.title} variant={'large'}>
        Sign In
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
        <Button as={'a'} variant={'link'}>
          <span>Sign Up</span>
        </Button>
      </>
    </Card>
  )
}
//&:not(:nth-child(:last-child))
