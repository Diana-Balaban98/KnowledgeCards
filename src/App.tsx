import { LogoutIcon } from '@/assets'
import {
  Button,
  CheckEmailForm,
  Checkbox,
  ForgotPasswordForm,
  FormValues,
  Input,
  RadioGroup,
  Select,
  SignInForm,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  SignUpForm,
  Slider,
} from '@/components'

export function App() {
  const test = (data: FormValues) => {
    console.log(data)
  }

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
      <Slider defaultValue={[0, 10]} max={10} step={1} />
      <SignInForm onSubmit={test} />
      <ForgotPasswordForm onSubmit={test} />
      <Table>
        <TableHeader
          columns={[
            { key: '1', title: 'Name' },
            { key: '2', title: 'Cards' },
            { key: '3', title: 'Last Updated' },
            { key: '4', title: 'Created by' },
          ]}
        />
        <TableBody>
          <TableRow>
            <TableCell>Pack Name</TableCell>
            <TableCell>4</TableCell>
            <TableCell>18.03.2021</TableCell>
            <TableCell>Ivan Ivanov</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
