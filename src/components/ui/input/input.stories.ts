import { Input } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
  },
}

export const SearchInput: Story = {
  args: {
    placeholder: 'Input search',
    search: true,
  },
}

export const PasswordInput: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
  },
}

export const DefaultInputWithErr: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    placeholder: 'Error',
  },
}

export const InputWithSearchErr: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    placeholder: 'Input search',
    search: true,
  },
}

export const InputWithPasswordErr: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    placeholder: 'Error',
    type: 'password',
  },
}
