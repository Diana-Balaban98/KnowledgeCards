import { useForm } from 'react-hook-form'

import { Button } from '@/components'
import { ControlledCheckbox, ControlledInput } from '@/components/ui/controlled'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log(data)
  })

  return (
    <>
      <DevTool control={control} />

      <form onSubmit={onSubmit}>
        <ControlledInput
          control={control}
          error={errors.email?.message}
          label={'email'}
          name={'email'}
        />
        <ControlledInput
          control={control}
          error={errors.password?.message}
          label={'password'}
          name={'password'}
          type={'password'}
        />
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
