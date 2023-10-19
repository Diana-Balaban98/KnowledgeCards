import { LogoutIcon } from '@/assets'
import { Button, Checkbox, Input, Typography } from '@/components'

export function App() {
  return (
    <>
      <Button variant={'primary'}>
        <Typography variant={'subtitle2'}>Button primary</Typography>
      </Button>
      <Button variant={'secondary'}>
        <Typography variant={'subtitle2'}>Button Secondary</Typography>
      </Button>
      <Button variant={'tertiary'}>
        <Typography variant={'subtitle2'}>Tertiary</Typography>
      </Button>
      <Button variant={'link'}>
        <Typography variant={'subtitle1'}>Link-button</Typography>
      </Button>
      <Button variant={'primary'}>
        <LogoutIcon color={'#fff'} size={'16px'} />
        <Typography variant={'subtitle2'}>Button primary</Typography>
      </Button>
      <Button disabled variant={'secondary'}>
        <LogoutIcon color={'#fff'} size={'16px'} />
        <Typography variant={'subtitle2'}>Button primary</Typography>
      </Button>
      <Input fullWidth label={'label'} variant={'password'} />
      <Checkbox />
    </>
  )
}
