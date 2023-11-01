import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TableHead, TableHeadCell, TableRow, Typography } from '@/components'

type Column = {
  key: string
  title: string
}
type Sort = {
  key: string
  sorting: 'asc' | 'desc' | null
}

type TableHeaderProps = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: Column[]
    setSort?: (sort: Sort) => void
    sort?: Sort
  },
  'children'
>

export const TableHeader = forwardRef<ElementRef<'thead'>, TableHeaderProps>(
  ({ columns, setSort, sort, ...rest }, ref) => {
    return (
      <TableHead ref={ref} {...rest}>
        <TableRow>
          {columns.map(column => {
            return (
              <TableHeadCell key={column.key}>
                <Typography as={'span'} variant={'subtitle2'}>
                  {column.title}
                </Typography>
              </TableHeadCell>
            )
          })}
        </TableRow>
      </TableHead>
    )
  }
)
