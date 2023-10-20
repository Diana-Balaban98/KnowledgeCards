import { RadioGroup } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRadioGroup: Story = {
  args: {
    name: 'Fruits',
    onValueChange: (value: string) => console.log(value),
    options: [
      { label: 'Banana', value: 'banana' },
      { label: 'Apple', value: 'apple' },
      { label: 'Orange', value: 'orange' },
    ],
  },
}
