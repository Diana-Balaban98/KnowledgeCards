import {
  ForgotPasswordForm,
  RadioGroup,
  SignInForm,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components'
import { Pagination } from '@/components/ui/pagination'

export function App() {
  return (
    <>
      <Pagination currentPage={1} pageSize={4} totalCount={100} />
      <RadioGroup
        name={'List'}
        options={[
          { label: 'Js', value: 'Zhenya' },
          { label: 'React', value: 'Diana' },
        ]}
      />
      <Slider defaultValue={[0, 10]} max={10} step={1} />
      <SignInForm onSubmit={() => {}} />
      <ForgotPasswordForm onSubmit={() => {}} />
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

      <Pagination pageSize={2} totalCount={100} />
    </>
  )
}
