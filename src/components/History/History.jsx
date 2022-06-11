import React, { useEffect, useId } from 'react'
import { useSelector } from 'react-redux'
import { StyledList, HistoryContainer, Heading } from './History.styled'

const History = () => {
  const { history } = useSelector(state => state.calculator)
  const id = useId()

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history))
  }, [history])

  return (
    <HistoryContainer>
      <Heading>History</Heading>
      <StyledList>
        {history.map(item => {
          return <li key={id}>{item}</li>
        })}
      </StyledList>
    </HistoryContainer>
  )
}

export default History
