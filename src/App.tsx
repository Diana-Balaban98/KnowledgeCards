import { Button, Typography } from '@/components'

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
    </>
  )
}
