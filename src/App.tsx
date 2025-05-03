import { useState } from 'react'
import { PasswordValidators } from './components'
import { Validator } from './components/PasswordValidators/types'

function App() {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>
          Password Validator
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <input value={value} onChange={handleChange} />

          <PasswordValidators
            value={value}
            renderValidator={(validator, index) => (
              <li>
                {index + 1}. {validator.validate(value) ? 'PASS' : 'FAIL'}:{' '}
                {validator.title.toUpperCase()}
              </li>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default App
