import { Pagination } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const DefaulPagination: Story = {
  args: {
    currentPage: 1,
    pageSize: 4,
    siblingCount: 3,
    totalCount: 150,
  },
}
