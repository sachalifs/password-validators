import { useState } from 'react'
import { PasswordValidators } from '@slifszyc/password-validators'
import './App.css'

function App() {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className='app-container'>
      <h1 className='app-title'>Password Component</h1>
      <div className='input-container'>
        <input value={value} onChange={handleChange} />
        <PasswordValidators value={value} />
      </div>
    </div>
  )
}

export default App
