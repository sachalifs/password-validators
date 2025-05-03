import React, { useEffect } from 'react'
import { defaultValidators } from './validators'
import type { Validator } from './types'
import Indicator from './Indicator'
import './PasswordValidators.css'

interface Props {
  /** The password value to validate */
  value: string
  /**
   * Array of validator objects that define the password requirements
   * @default defaultValidators
   */
  validators?: Validator[]
  /**
   * Custom render function for each validator
   * @param value - The password value to validate
   * @param validator - The validator object containing validation rules
   * @param index - The index of the validator in the array
   * @returns React node to render for the validator
   */
  renderValidator?: (
    value: string,
    validator: Validator,
    index: number
  ) => React.ReactNode
  /**
   * Custom className to apply to the root element
   */
  className?: string
  /**
   * Custom styles to apply to the root element
   */
  style?: React.CSSProperties
}

/**
 * PasswordValidators component displays a list of password requirements and their validation status
 *
 * @example
 * ```tsx
 * <PasswordValidators value="Password123!" />
 * ```
 *
 * @example
 * ```tsx
 * <PasswordValidators
 *   value="Password123!"
 *   renderValidator={(validator, index) => (
 *     <div key={validator.id}>
 *       <Checkbox checked={validator.validate(value)} />
 *       <span>{validator.title}</span>
 *     </div>
 *   )}
 * />
 * ```
 */
export const PasswordValidators: React.FC<Props> = ({
  value,
  validators = defaultValidators,
  renderValidator,
  className,
  style,
}) => {
  if (validators.length === 0) {
    return null
  }

  return (
    <ul
      className={`password-validators${className ? ` ${className}` : ''}`}
      style={style}
    >
      {validators.map((validator, index) => (
        <li key={validator.id} className='password-validator-item'>
          {renderValidator ? (
            renderValidator(value, validator, index)
          ) : (
            <>
              <Indicator passed={validator.validate(value)} />
              <span>{validator.title}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
