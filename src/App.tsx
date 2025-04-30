import {
  SecurePasswordInput,
  SecurePasswordInput,
} from './components/SecurePasswordInput'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>
          Password Validator
        </h1>
        <SecurePasswordInput
          type='text'
          placeholder='Enter your password'
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '300px',
          }}
        />
      </div>
    </div>
  )
}

export default App
