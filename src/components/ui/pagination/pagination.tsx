import { FunctionComponent, useState } from 'react'

import { ArrowBackIcon, ArrowForwardIcon } from '@/assets'
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

  return (
    <div className={s.paginationContainer}>
      <button onClick={() => setPage(page - 1)}>
        <ArrowBackIcon />
      </button>
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
      <button onClick={() => setPage(page + 1)}>
        <ArrowForwardIcon />
      </button>
    </div>
  )
}
