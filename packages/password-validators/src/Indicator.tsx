import React from 'react'
import { StyledIndicator } from './styled'

interface IndicatorProps {
  passed: boolean
}

const Indicator: React.FC<IndicatorProps> = ({ passed }) => {
  return <StyledIndicator passed={passed}>{passed ? '✔' : '✗'}</StyledIndicator>
}

export default Indicator
