import { EditIcon, LogoutIcon, PersonIcon } from '@/assets'
import { Dropdown } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    align: {
      control: { type: 'radio' },
    },
  },
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const DefaulDropdown: Story = {
  args: {
    items: [
      { icon: <PersonIcon />, label: 'My profile', onClick: () => alert('Profile') },
      { icon: <EditIcon />, label: 'Edit', onClick: () => alert('Edit') },
      { icon: <LogoutIcon />, label: 'My profile', onClick: () => alert('Logout') },
    ],
  },
}
