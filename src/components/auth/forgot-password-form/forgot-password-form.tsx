import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledInput } from '@/components/ui/controlled'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password-form.module.scss'

const loginSchema = z.object({
  confirmPassword: z.string().min(3, 'Password must be at least 3 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
})

type FormValues = z.infer<typeof loginSchema>

export const ForgotPasswordForm = () => {
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
      <Typography as={'h1'} className={s.titleCard} variant={'large'}>
        Forgot your password?
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
          <Typography as={'p'} className={s.text} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <div className={s.buttonLine}>
            <Button as={'a'} fullWidth type={'submit'}>
              Send Instructions
            </Button>
          </div>
          <div className={s.textFormLine}>
            <Typography variant={'body2'}>Did you remember your password?</Typography>
          </div>
          <Button variant={'link'}>
            <span>Try logging in</span>
          </Button>
        </form>
      </>
    </Card>
  )
}
