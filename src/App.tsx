import { useState } from 'react'
import { PasswordValidators } from './components'

function App() {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1 style={{ fontSize: 32 }}>Password Component</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <input value={value} onChange={handleChange} />

        <PasswordValidators value={value} />
      </div>
    </div>
  )
}

export default App
