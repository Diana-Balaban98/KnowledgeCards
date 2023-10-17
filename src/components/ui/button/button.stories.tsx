import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'
import { LogoutIcon } from '@/assets'
import { Typography } from '@/components'

const meta = {
  argTypes: {
    fullWidth: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: <Typography variant={'subtitle2'}>Button primary</Typography>,
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: <Typography variant={'subtitle2'}>Button Secondary</Typography>,
    disabled: false,
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    children: <Typography variant={'subtitle2'}>Tertiary Button</Typography>,
    disabled: false,
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    children: <Typography variant={'subtitle1'}>Link Button</Typography>,
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: <Typography variant={'subtitle2'}>Button primary</Typography>,
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
export const AsLink: Story = {
  args: {
    as: 'a',
    children: <Typography variant={'subtitle1'}>Link Button</Typography>,
    href: '',
    variant: 'primary',
  },
}
export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <LogoutIcon color={'#fff'} size={'16px'} />
        <Typography variant={'subtitle2'}>Primary Button</Typography>
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}
export const SecondaryWithIcon: Story = {
  args: {
    children: (
      <>
        <LogoutIcon color={'#fff'} size={'16px'} />
        <Typography variant={'subtitle2'}>Secondary Button</Typography>
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}
