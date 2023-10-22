import { useState } from 'react'

import { Tabs } from '@/components'
import { Meta } from '@storybook/react'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

const tabs = [
  { text: 'Cards', value: 'cards' },
  { text: 'All cards', value: 'allCards' },
  { text: 'Other cards', value: 'otherCards' },
]

export const Default = {
  render: () => {
    const [value, setValue] = useState('myCards')

    return (
      <div>
        <Tabs onValueChange={value => setValue(value)} tabs={tabs} value={value} />
      </div>
    )
  },
}
