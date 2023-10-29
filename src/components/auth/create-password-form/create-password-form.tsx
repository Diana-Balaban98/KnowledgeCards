import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/components'
import { ControlledInput } from '@/components/ui/controlled'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-password-form.module.scss'

const loginSchema = z.object({
  confirmPassword: z.string().min(3, 'Password must be at least 3 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
})

type FormValues = z.infer<typeof loginSchema>

export const CreateNewPasswordForm = () => {
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
        Create new password
      </Typography>
      <>
        <form className={s.form} onSubmit={onSubmit}>
          <div className={s.inputLine}>
            <ControlledInput
              control={control}
              error={errors.email?.message}
              label={'Password'}
              name={'email'}
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
