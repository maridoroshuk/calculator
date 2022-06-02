import React from 'react'
import { KeyBtn } from './KeyButton.styled'


const KeyButton = ({ className, id, value, pushToInputHandler }) => {
  return (
    <KeyBtn className={className} id={id}
onClick={pushToInputHandler}>{value}
    </KeyBtn>
  )
}

export default KeyButton
