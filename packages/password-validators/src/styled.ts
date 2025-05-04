import styled from 'styled-components'

export const ValidatorsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`

export const ValidatorItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const size = 36

export const StyledIndicator = styled.div<{ passed: boolean }>`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  background-color: ${(props) => (props.passed ? 'green' : 'red')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  flex-shrink: 0;
`
