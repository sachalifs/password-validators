import type { Validator } from './types'

export const hasNumber: Validator = {
  id: 'has-number',
  title: 'Contains a number (0-9)',
  validate: (value: string) => /[0-9]/.test(value),
}

export const hasSpecialChar: Validator = {
  id: 'has-special-char',
  title: 'Contains a special character (!@#$%^&*)',
  validate: (value: string) => /[!@#$%^&*]/.test(value),
}

export const hasUppercase: Validator = {
  id: 'has-uppercase',
  title: 'Contains an uppercase letter',
  validate: (value: string) => /[A-Z]/.test(value),
}

export const noConsecutiveLetters: Validator = {
  id: 'no-consecutive-letters',
  title: 'No consecutive letters',
  validate: (value: string) =>
    value.length > 0 && !/[a-zA-Z][a-zA-Z]/.test(value),
}

export const defaultValidators: Validator[] = [
  hasNumber,
  hasSpecialChar,
  hasUppercase,
  noConsecutiveLetters,
]
