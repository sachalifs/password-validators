import React from 'react'

interface IndicatorProps {
  passed: boolean
}

const size = 36

const Indicator: React.FC<IndicatorProps> = ({ passed }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: passed ? '#4CAF50' : '#F44336',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
    >
      {passed ? '✔' : '✗'}
    </div>
  )
}

export default Indicator
