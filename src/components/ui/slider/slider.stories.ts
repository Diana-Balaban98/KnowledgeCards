import { Slider } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    defaultValue: {
      control: { type: 'number[]' },
    },

    max: {
      control: { type: 'number' },
    },

    step: {
      control: { type: 'number' },
    },
  },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSlider: Story = {
  args: {
    defaultValue: [1, 10],
  },
}

export const SliderWithValue: Story = {
  args: {
    defaultValue: [1, 10],
    max: 10,
    step: 1,
  },
}
