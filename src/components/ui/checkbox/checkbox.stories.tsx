import { Checkbox } from './'
import { Meta, StoryObj } from '@storybook/react'
const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>
export const Uncontrolled: Story = {
  args: {
    disabled: false,
    label: 'Check-box',
  },
}

export const CheckboxDefault: Story = {
  render: args => {
    return (
      <Checkbox
        {...args}
        checked={false}
        label={'Click here'}
        onChange={(checked: boolean) => !checked}
      />
    )
  },
}
