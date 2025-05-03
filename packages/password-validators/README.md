# @slifszyc/password-validators

A React component for password validation with visual indicators.

## Features

- Real-time password validation
- Visual indicators for password strength
- Customizable validation rules
- TypeScript support
- Fully tested with Jest and React Testing Library

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
  return (
    <PasswordValidators
      value={password}
      validators={[
        {
          id: '8-characters-validator',
          title: 'At least 8 characters',
          validator: (value) => value.length >= 8,
        },
      ]}
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

# Run tests
npm test

# Build the package
npm run build

# Lint the code
npm run lint
```

## License

MIT
