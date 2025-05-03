import { render, screen } from '@testing-library/react'
import { PasswordValidators } from './PasswordValidators'
import { defaultValidators, hasNumberValidator } from './validators'
import { Validator } from './types'

// Mock the Indicator component
jest.mock('./Indicator', () => ({
  __esModule: true,
  default: ({ passed }: { passed: boolean }) => (
    <div data-testid='indicator'>{passed ? '✓' : '✗'}</div>
  ),
}))

describe('PasswordValidators', () => {
  it('renders all validators as failed for an empty password', () => {
    render(<PasswordValidators value='' />)

    const indicators = screen.getAllByTestId('indicator')

    defaultValidators.forEach((validator, index) => {
      expect(screen.getByText(validator.title)).toBeInTheDocument()
      expect(indicators[index]).toHaveTextContent('✗')
    })
  })

  it('accepts a single validator', () => {
    render(<PasswordValidators value='' validators={[hasNumberValidator]} />)

    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  })

  it('validates a correct password', () => {
    render(<PasswordValidators value='R2@' />)

    const indicators = screen.getAllByTestId('indicator')

    defaultValidators.forEach((validator, index) => {
      expect(screen.getByText(validator.title)).toBeInTheDocument()
      expect(indicators[index]).toHaveTextContent('✓')
    })
  })

  it('updates the validators when the password changes', () => {
    const validators = [hasNumberValidator]

    const { rerender } = render(
      <PasswordValidators value='' validators={validators} />
    )

    expect(screen.getByText(validators[0].title)).toBeInTheDocument()
    expect(screen.getByTestId('indicator')).toHaveTextContent('✗')

    rerender(<PasswordValidators value='12345' validators={validators} />)

    expect(screen.getByText(validators[0].title)).toBeInTheDocument()
    expect(screen.getByTestId('indicator')).toHaveTextContent('✓')
  })

  it('works with custom validators', () => {
    const customValidators: Validator[] = [
      {
        id: 'custom-validator',
        title: 'Must be exactly 5 characters',
        validate: (value: string) => value.length === 5,
      },
    ]

    render(<PasswordValidators value='12345' validators={customValidators} />)

    expect(screen.getByText(customValidators[0].title)).toBeInTheDocument()
    expect(screen.getByTestId('indicator')).toHaveTextContent('✓')
  })

  it('works with custom renderer', () => {
    let value = ''
    const validators = [hasNumberValidator]
    const customRenderer = (validator: Validator, index: number) => (
      <>
        {index + 1}. {validator.validate(value) ? 'PASS' : 'FAIL'}:{' '}
        {validator.title.toUpperCase()}
      </>
    )

    const { rerender } = render(
      <PasswordValidators
        value=''
        validators={validators}
        renderValidator={customRenderer}
      />
    )

    expect(
      screen.getByText('1. FAIL: CONTAINS A NUMBER (0-9)')
    ).toBeInTheDocument()

    value = '12345'

    rerender(
      <PasswordValidators
        value={value}
        validators={validators}
        renderValidator={customRenderer}
      />
    )

    expect(
      screen.getByText('1. PASS: CONTAINS A NUMBER (0-9)')
    ).toBeInTheDocument()
  })

  it('returns null when there are no validators', () => {
    const { container } = render(
      <PasswordValidators value='' validators={[]} />
    )
    expect(container.firstChild).toBeNull()
  })
})
