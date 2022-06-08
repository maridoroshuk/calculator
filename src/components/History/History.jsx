import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StyledList, HistoryContainer, Heading } from './History.styled'

const History = () => {
  const { history } = useSelector(state => state.calculator)

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history))
  }, [history])

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
