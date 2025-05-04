# @slifszyc/password-validators

A React component for password validation with visual indicators with a simple API and ready-to-use.

## Features

- Real-time password validation
- Visual indicators for password strength
- Customizable validation rules
- TypeScript support
- Fully tested with Jest and React Testing Library

## Tech Stack

- React 19
- TypeScript 5.7
- Styled Components 6
- Jest & React Testing Library for testing
- Storybook 8 for component documentation
- ESLint for code linting
- TSUP for building

## Installation

```bash
npm install @slifszyc/password-validators
# or
yarn add @slifszyc/password-validators
```

## Usage

```tsx
import { PasswordValidators } from '@slifszyc/password-validators'

function App() {
  return <PasswordValidators value={password} />
}
```

## Default Validators

The component comes with the following validators enabled by default:

- Has a number 0-9
- Has a special char !@#$%^&\*
- Has uppercase Letter
- Has no consecutive letters

You can override these defaults by providing your own `validators` prop.

### Example: Using Individual Validators

```tsx
import {
  PasswordValidators,
  hasNumberValidator,
  hasUppercaseValidator,
} from '@slifszyc/password-validators'

function App() {
  return (
    <PasswordValidators
      value={password}
      validators={[hasNumberValidator, hasUppercaseValidator]}
    />
  )
}
```

### Example: Creating Custom Validators

```tsx
import { PasswordValidators } from '@slifszyc/password-validators'

function App() {
  const customValidators = [
    {
      id: 'min-length',
      title: 'At least 8 characters',
      validate: (value: string) => value.length >= 8,
    },
    {
      id: 'no-spaces',
      title: 'No spaces allowed',
      validate: (value: string) => !value.includes(' '),
    },
  ]

  return <PasswordValidators value={password} validators={customValidators} />
}
```

### Example: Customizing Validator Display

```tsx
import { PasswordValidators } from '@slifszyc/password-validators'

function App() {
  const customRenderValidator = (value: string, validator, index) => {
    const isValid = validator.validate(value)

    return (
      <>
        <span>{index + 1}.</span> {validator.title} (
        {isValid ? 'passed' : 'failed'})
      </>
    )
  }

  return (
    <PasswordValidators
      value={password}
      renderValidator={customRenderValidator}
    />
  )
}
```

## Props

| Prop            | Type                                                                    | Required | Description                                                      |
| --------------- | ----------------------------------------------------------------------- | -------- | ---------------------------------------------------------------- |
| value           | string                                                                  | Yes      | The password value to validate                                   |
| validators      | Validator[]                                                             | No       | Array of validator objects that define the password requirements |
| renderValidator | (value: string, validator: Validator, index: number) => React.ReactNode | No       | Custom render function for each validator                        |
| className       | string                                                                  | No       | Custom className to apply to the root element                    |
| style           | React.CSSProperties                                                     | No       | Custom styles to apply to the root element                       |

## Validator Type

```typescript
interface Validator {
  id: string
  title: string
  validate: (value: string) => boolean
}
```

## Development

```bash
# Install dependencies
npm install

# Development
npm run storybook

# Run tests
npm test

# Build the package
npm run build

# Lint the code
npm run lint

# Publish the package
npm publish --access public
```

## License

MIT
