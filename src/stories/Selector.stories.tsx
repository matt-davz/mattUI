import type {Meta, StoryObj } from '@storybook/react'
import Selector from '../../component/Selector'

const meta: Meta<typeof Selector> = {
    component: Selector,
    title: 'Selector',
    argTypes: {
        onOkay: { action: 'clicked' },
        onCancel: { action: 'clicked' },
        data: { control: 'object' },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        
    }
}