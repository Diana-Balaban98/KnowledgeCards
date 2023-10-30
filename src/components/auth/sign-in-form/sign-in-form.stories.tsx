import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/components'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: SignInForm,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
  tags: ['autodocs'],
  title: 'Auth/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
