import React from 'react'
import { Container, HistoryContainer, Panel } from './CalculatorPanel.styled'
import History from './History'
import Input from './Input'
import Keyboard from './Keyboard'


const CalculatorPanel = () => {
  return (
    <Container>
      <Panel>
        <Input />
        <Keyboard />
      </Panel>
      <HistoryContainer>
        <History />
      </HistoryContainer>
    </Container>
  )
}

export default CalculatorPanel
