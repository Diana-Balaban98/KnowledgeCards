import { FunctionComponent, useState } from 'react'

import { ArrowBackIcon, ArrowForwardIcon } from '@/assets'
import { Button } from '@/components'
import { usePagination } from '@/components/ui/pagination/usePagination'

import s from './pagination.module.scss'

type PaginationProps = {
  currentPage: number
  pageSize: number
  siblingCount?: number
  totalCount: number
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  currentPage,
  pageSize,
  siblingCount = 1,
  totalCount,
}) => {
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const [page, setPage] = useState(currentPage)

  const itemsArray = usePagination({ currentPage: page, siblingCount, totalPageCount })

  console.log(page)

  return (
    <div className={s.paginationContainer}>
      <Button onClick={() => setPage(page - 1)}>
        <ArrowBackIcon />
      </Button>
      <div>
        {itemsArray.map((el, index) => (
          <button
            key={index}
            onClick={() => setPage(el !== '...' ? el : 0)}
            style={{ all: 'unset' }}
          >
            {el}
          </button>
        ))}
      </div>
      <Button onClick={() => setPage(page + 1)}>
        <ArrowForwardIcon />
      </Button>
    </div>
  )
}
