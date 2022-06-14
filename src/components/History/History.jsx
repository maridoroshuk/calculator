import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
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
          return <li key={uuidv4()}>{item}</li>
        })}
      </StyledList>
    </HistoryContainer>
  )
}

export default History
