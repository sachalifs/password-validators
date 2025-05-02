import { render, screen, fireEvent } from '@testing-library/react'
import { SecurePasswordInput } from './SecurePasswordInput'
import { defaultValidators } from './passwordValidators'
import type { Validator } from './types'

describe('SecurePasswordInput', () => {
  it('renders correctly with default props', () => {
    render(<SecurePasswordInput placeholder='Enter password' />)

    const input = screen.getByPlaceholderText('Enter password')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')

    defaultValidators.forEach((validator) => {
      expect(
        screen.getByRole('menuitem', {
          name: `✗ ${validator.title}`,
        })
      ).toBeInTheDocument()
    })
  })

  it('updates input value correctly', () => {
    render(<SecurePasswordInput placeholder='Enter password' />)

    const input = screen.getByPlaceholderText('Enter password')

    fireEvent.change(input, { target: { value: 'test123' } })

    expect(input).toHaveValue('test123')
  })

  it('validates password correctly with default validators', () => {
    render(<SecurePasswordInput placeholder='Enter password' />)
    const input = screen.getByPlaceholderText('Enter password')

    // Test with a valid password
    fireEvent.change(input, { target: { value: 'T35t.123!' } })

    // All validators should pass
    defaultValidators.forEach((validator) => {
      const validatorElement = screen.getByRole('menuitem', {
        name: `✓ ${validator.title}`,
      })
      expect(validatorElement).toHaveStyle({ color: 'green' })
    })

    // Test with an invalid password
    fireEvent.change(input, { target: { value: 'test' } })

    // Most validators should fail
    defaultValidators.forEach((validator) => {
      const validatorElement = screen.getByRole('menuitem', {
        name: `✗ ${validator.title}`,
      })
      expect(validatorElement).toHaveStyle({ color: 'red' })
    })
  })

  it('works with custom validators', () => {
    const customValidators: Validator[] = [
      {
        id: 'custom-validator',
        title: 'Must be exactly 5 characters',
        validate: (value: string) => value.length === 5,
      },
    ]

    render(
      <SecurePasswordInput
        placeholder='Enter password'
        validators={customValidators}
      />
    )
    const input = screen.getByPlaceholderText('Enter password')

    // Test with valid input
    fireEvent.change(input, { target: { value: '12345' } })
    expect(
      screen.getByRole('menuitem', {
        name: `✓ ${customValidators[0].title}`,
      })
    )

    // Test with invalid input
    fireEvent.change(input, { target: { value: '1234' } })
    expect(
      screen.getByRole('menuitem', {
        name: `✗ ${customValidators[0].title}`,
      })
    )
  })

  it('works with custom renderer', () => {
    const customRenderer = (value: string, validator: Validator) => (
      <div data-testid={`custom-${validator.id}`}>
        {validator.validate(value) ? 'PASS' : 'FAIL'}{' '}
        {validator.title.toUpperCase()}
      </div>
    )

    render(
      <SecurePasswordInput
        placeholder='Enter password'
        renderValidator={customRenderer}
      />
    )

    const input = screen.getByPlaceholderText('Enter password')

    fireEvent.change(input, { target: { value: 'Test123!' } })

    defaultValidators.forEach((validator) => {
      const customElement = screen.getByTestId(`custom-${validator.id}`)
      // expect(customElement).toHaveTextContent('PASS')
      expect(customElement).toHaveTextContent(validator.title.toUpperCase())
    })
  })
})
