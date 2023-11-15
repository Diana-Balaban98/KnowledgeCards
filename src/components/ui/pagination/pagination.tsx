import { FunctionComponent, useState } from 'react'

import { ArrowIosBackIcon, ArrowIosForwardIcon } from '@/assets'
import { Select, Typography } from '@/components'
import { usePagination } from '@/components/ui/pagination/usePagination'

import s from './pagination.module.scss'

type PaginationProps = {
  currentPage?: number
  pageSize: number
  siblingCount?: number
  totalCount: number
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  currentPage = 1,
  pageSize,
  siblingCount = 1,
  totalCount,
}) => {
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const [page, setPage] = useState(currentPage)

  const itemsArray = usePagination({ currentPage: page, siblingCount, totalPageCount })

  return (
    <div className={s.paginationContainer}>
      <button className={s.arrowIcon} onClick={() => setPage(page - 1)}>
        <ArrowIosBackIcon color={`var(--color-dark-100)`} />
      </button>
      <div className={s.bodyPagination}>
        {itemsArray.map((el, index) => (
          <button
            className={`${s.numPagination} ${page === el ? s.currentPage : ''}`}
            key={index}
            onClick={() => setPage(el !== '...' ? el : 0)}
          >
            {el}
          </button>
        ))}
      </div>
      <button className={s.arrowIcon} onClick={() => setPage(page + 1)}>
        <ArrowIosForwardIcon color={`var(--color-dark-100)`} />
      </button>
      <div className={s.containerSelect}>
        <Typography className={s.text} variant={'body2'}>
          Показать
        </Typography>
        <Select
          className={s.select}
          defaultValue={'100'}
          options={[
            { label: '10', value: '10' },
            { label: '20', value: '20' },
            { label: '30', value: '30' },
            { label: '50', value: '50' },
            { label: '100', value: '100' },
          ]}
        />
        <Typography className={s.text} variant={'body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
