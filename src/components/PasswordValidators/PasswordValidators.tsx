import React from 'react'
import { defaultValidators } from './validators'
import type { Validator } from './types'
import Indicator from './Indicator'

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
  if (validators.length === 0) {
    return null
  }

  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {validators.map((validator, index) => (
        <li
          key={validator.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {renderValidator ? (
            renderValidator(validator, index)
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
