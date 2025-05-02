import React, { useState } from 'react'
import { defaultValidators } from './passwordValidators'
import type { Validator } from './types'

interface SecurePasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  validators?: Validator[]
}

export const SecurePasswordInput: React.FC<SecurePasswordInputProps> = ({
  validators = defaultValidators,
  type = 'password',
  ...inputProps
}) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    if (inputProps.onChange) {
      inputProps.onChange(e)
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <input
        {...inputProps}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {validators.map((validator) => (
          <div
            key={validator.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: validator.validate(value) ? 'green' : 'red',
            }}
          >
            {validator.validate(value) ? '✓' : '✗'} {validator.title}
          </div>
        ))}
      </div>
    </div>
  )
}
