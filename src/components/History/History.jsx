import React from 'react'
import { useSelector } from 'react-redux'
import { StyledList, HistoryContainer, Heading } from './History.styled'

const History = () => {
  const { history } = useSelector(state => state.calculator)

  console.log(history)
  return (
    <HistoryContainer>
      <Heading>History</Heading>
      <StyledList>
        {history.map(item => {
          return <li key={item}>{item}</li>
        })}
      </StyledList>
    </HistoryContainer>
  )
}

export default History
