import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const useSignIn = (
  schemaForm: z.ZodType<FormValues>,
  defaultValues: Partial<FormValues>
) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schemaForm),
  })

  return {
    control,
    errors,
    handleSubmit,
  }
}

const validationMessage = {
  email: 'Please enter a valid email',
  password: 'Password must be at least 6 characters',
}

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, validationMessage.password),
  rememberMe: z.boolean().default(false),
})

export const forgotPasswordSchema = z.object({
  email: z.string().email(validationMessage.email),
})

export const signUpSchema = z.object({
  confirmPassword: z.string().min(3, validationMessage.password),
  email: z.string().email(validationMessage.email),
  password: z.string().min(3, validationMessage.password),
})

export const createNewPasswordSchema = z.object({
  password: z.string().min(3, validationMessage.password),
})

export type FormValues =
  | z.infer<typeof createNewPasswordSchema>
  | z.infer<typeof forgotPasswordSchema>
  | z.infer<typeof signInSchema>
  | z.infer<typeof signUpSchema>
