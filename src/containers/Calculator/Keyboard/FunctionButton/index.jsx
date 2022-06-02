import React from 'react'
import { FunctionBtn } from './FunctionButton.styled'


const FunctionButton = ({ className, id, operationHandler, value }) => {
  return (
    <FunctionBtn className={className} id={id}
onClick={operationHandler}>{value}
    </FunctionBtn>
  )
}

export default FunctionButton
