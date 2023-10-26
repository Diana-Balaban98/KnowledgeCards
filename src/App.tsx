import { LogoutIcon } from '@/assets'

import { Button, Checkbox, Input, Select, Typography } from '@/components'

import { Button, Checkbox, Input, RadioGroup, Typography } from '@/components'
import { LoginForm } from '@/components/auth/login-form'


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
      <Input id={'122'} label={'label'} />
      <Checkbox id={'33'} label={'CheckBox'} />

      <Select
        id={'7'}
        label={'Select'}
        options={[
          { label: 'Text', value: 'text' },
          { label: 'Text2', value: 'text2' },
          { label: 'Text3', value: 'text3' },
          { label: 'Text4', value: 'text4' },
          { label: 'Text5', value: 'text5' },
          { label: 'Text6', value: 'text6' },
        ]}
        placeholder={'Выберите опцию'}
      />

      <RadioGroup
        name={'List'}
        options={[
          { label: 'Js', value: 'Zhenya' },
          { label: 'React', value: 'Diana' },
        ]}
      />
      <LoginForm />
    </>
  )
}
