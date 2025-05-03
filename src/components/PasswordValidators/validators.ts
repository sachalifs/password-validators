import type { Validator } from './types'

export const hasNumberValidator: Validator = {
  id: 'has-number',
  title: 'Has a number (0-9)',
  validate: (value: string) => /[0-9]/.test(value),
}

export const hasSpecialCharValidator: Validator = {
  id: 'has-special-char',
  title: 'Has a special char !@#$%^&*',
  validate: (value: string) => /[!@#$%^&*]/.test(value),
}

export const hasUppercaseValidator: Validator = {
  id: 'has-uppercase',
  title: 'Has uppercase Letter',
  validate: (value: string) => /[A-Z]/.test(value),
}

export const noConsecutiveLettersValidator: Validator = {
  id: 'no-consecutive-letters',
  title: 'Has no consecutive letters',
  validate: (value: string) =>
    value.length > 0 && !/[a-zA-Z][a-zA-Z]/.test(value),
}

export const defaultValidators: Validator[] = [
  hasNumberValidator,
  hasSpecialCharValidator,
  hasUppercaseValidator,
  noConsecutiveLettersValidator,
]
