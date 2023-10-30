import { CheckEmailIcon } from '@/assets'
import { Button, Card, Typography } from '@/components'

import s from './check-email-form.module.scss'
export type CheckEmailFormProps = {}

export const CheckEmailForm = () => {
  return (
    <Card as={'article'} className={s.card}>
      <Typography as={'h1'} className={s.titleCard} variant={'large'}>
        Check Email
      </Typography>
      <div className={s.iconLine}>
        <CheckEmailIcon />
      </div>
      <Typography className={s.textLine} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button fullWidth>Back to Sign In</Button>
    </Card>
  )
}
