import React from 'react'
import { defaultValidators } from './validators'
import type { Validator } from './types'

interface Props {
  value: string
  validators?: Validator[]
  renderValidator?: (validator: Validator, index: number) => React.ReactNode
}

export const PasswordValidators: React.FC<Props> = ({
  value,
  validators = defaultValidators,
  renderValidator,
}) => {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {validators.map((validator, index) =>
        renderValidator ? (
          <React.Fragment key={validator.id}>
            {renderValidator(validator, index)}
          </React.Fragment>
        ) : (
          <li
            key={validator.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: validator.validate(value) ? 'green' : 'red',
            }}
          >
            {validator.validate(value) ? '✓' : '✗'} {validator.title}
          </li>
        )
      )}
    </ul>
  )
}
