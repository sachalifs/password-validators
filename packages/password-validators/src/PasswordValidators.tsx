import React from 'react'
import { defaultValidators } from './validators'
import type { Validator } from './types'
import Indicator from './Indicator'
import { ValidatorsList, ValidatorItem } from './styled'

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
export const PasswordValidators = React.forwardRef<HTMLUListElement, Props>(
  (
    {
      value,
      validators = defaultValidators,
      renderValidator,
      className,
      style,
    },
    ref
  ) => {
    if (validators.length === 0) {
      return null
    }

    return (
      <ValidatorsList ref={ref} className={className} style={style}>
        {validators.map((validator, index) => (
          <ValidatorItem key={validator.id}>
            {renderValidator ? (
              renderValidator(value, validator, index)
            ) : (
              <>
                <Indicator passed={validator.validate(value)} />
                <span>{validator.title}</span>
              </>
            )}
          </ValidatorItem>
        ))}
      </ValidatorsList>
    )
  }
)

PasswordValidators.displayName = 'PasswordValidators'
