import React from 'react'
import { InputContainer } from './InputContainer.styled'


const Input = ({ children }) => {
  return (
    <InputContainer>
      {children}
    </InputContainer>
  )
}

export default Input
