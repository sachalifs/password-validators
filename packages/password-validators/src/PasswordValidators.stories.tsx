import type { Meta, StoryObj } from '@storybook/react'
import { PasswordValidators } from './PasswordValidators'

const meta: Meta<typeof PasswordValidators> = {
  title: 'Components/PasswordValidators',
  component: PasswordValidators,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    validators: { control: 'object' },
    className: { control: 'text' },
    style: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof PasswordValidators>

export const Default: Story = {
  args: {
    value: 'Password123!',
  },
}

export const EmptyPassword: Story = {
  args: {
    value: '',
  },
}

export const CustomValidators: Story = {
  args: {
    value: 'Password123!',
    validators: [
      {
        id: 'length',
        title: 'At least 8 characters',
        validate: (value: string) => value.length >= 8,
      },
      {
        id: 'uppercase',
        title: 'Contains uppercase letter',
        validate: (value: string) => /[A-Z]/.test(value),
      },
      {
        id: 'special',
        title: 'Contains special character',
        validate: (value: string) => /[!@#$%^&*]/.test(value),
      },
    ],
  },
}
