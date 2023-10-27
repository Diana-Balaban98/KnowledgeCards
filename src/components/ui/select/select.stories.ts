import { Select } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSelect: Story = {
  args: {
    label: 'Fruits',
    options: [
      { label: 'Banana', value: 'banana' },
      { label: 'Apple', value: 'apple' },
      { label: 'Orange', value: 'orange' },
    ],
    placeholder: 'Select an option',
  },
}
