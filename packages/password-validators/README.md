# @slifszyc/password-validators

A React component for password validation with visual indicators with a simple API and ready-to-use.

![demo](https://github.com/user-attachments/assets/f292b646-3974-49c1-955e-0eb7cbdc77f8)

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

## Assumptions

- The component is designed as a standalone, reusable package with a minimal API.
- This component is part of a larger design system, following established company's design rules and component patterns.
- While the component allows for visual customization, it maintains strict adherence to the _"company's"_ design system principles and brand guidelines.
- Styles are bundled using CSS-in-JS to provide a ready-to-use component without additional styling dependencies.

## Future improvements

- Enhance Storybook documentation with dedicated pages for different stakeholders showcasing different usages.
- Replace text-based status indicators with SVG icons to ensure consistent rendering across different environments and avoid different font browser issues.
- Implement visual regression testing using Cypress and Percy by Browserstack to prevent UI regressions and ensure visual consistency across component updates.

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
  return (
    <PasswordValidators
      value={password}
      renderValidator={(value, validator, index) => {
        const isValid = validator.validate(value)

        return (
          <>
            <span>{index + 1}.</span> {validator.title} (
            {isValid ? 'passed' : 'failed'})
          </>
        )
      }}
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
