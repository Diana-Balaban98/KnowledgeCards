import { LogoutIcon } from '@/assets'
import { Button, Checkbox, Input, RadioGroup, SignInForm } from '@/components'

export function App() {
  return (
    <>
      <Button variant={'primary'}>Button Primary</Button>
      <Button variant={'secondary'}>Button Secondary</Button>
      <Button variant={'tertiary'}>Tertiary</Button>
      <Button variant={'link'}>Link-button</Button>
      <Button variant={'primary'}>
        <LogoutIcon color={'#fff'} size={'16px'} />
        Button primary
      </Button>
      <Button disabled variant={'secondary'}>
        <LogoutIcon color={'#fff'} size={'16px'} />
        Button primary
      </Button>
      <Input id={'122'} label={'label'} />
      <Checkbox id={'33'} label={'CheckBox'} />
      <RadioGroup
        name={'List'}
        options={[
          { label: 'Js', value: 'Zhenya' },
          { label: 'React', value: 'Diana' },
        ]}
      />
      <SignInForm />
    </>
  )
}
