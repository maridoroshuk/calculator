import React from 'react'
import FunctionButton from './FunctionButton'
import { KeyboardContainer } from './Keyboard.styled'
import KeyButton from './KeyButton'


const Keyboard = () => {
  const clearHandler = () => { }
  const operatorHandler = () => { }
  const decimalHandler = () => { }
  const equalsHandler = () => { }
  const bracketHandler = () => { }
  const pushToInputHandler = () => { }


  return (
    <KeyboardContainer>
      <FunctionButton
        className="C"
        id=""
        value="C"
        onClick={clearHandler}>
        C
      </FunctionButton>
      <KeyButton
        className="seven"
        id="seven"
        value="7"
        onClick={pushToInputHandler}>
        7
      </KeyButton>
      <KeyButton
        className="eight"
        id="eight"
        value="8"
        onClick={pushToInputHandler}>
        8
      </KeyButton>
      <KeyButton
        className="nine"
        id="nine"
        value="9"
        onClick={pushToInputHandler}>
        9
      </KeyButton>
      <FunctionButton
        className="multiply"
        id="multiply"
        value="*"
        onClick={operatorHandler}>
        *
      </FunctionButton>
      <FunctionButton
        className="subtract"
        id="subtract"
        value="-"
        onClick={operatorHandler}>
        -
      </FunctionButton>
      <KeyButton
        className="four"
        id="four"
        value="4"
        onClick={pushToInputHandler}>
        4
      </KeyButton>
      <KeyButton
        className="five"
        id="five"
        value="5"
        onClick={pushToInputHandler}>
        5
      </KeyButton>
      <KeyButton
        className="six"
        id="six"
        value="6"
        onClick={pushToInputHandler}>
        6
      </KeyButton>
      <FunctionButton
        className="divide"
        id="divide"
        value="\"
        onClick={operatorHandler}>
        \
      </FunctionButton>
      <FunctionButton
        className="add"
        id="add"
        value="+"
        onClick={operatorHandler}>
        +
      </FunctionButton>
      <KeyButton
        className="one"
        id="one"
        value="1"
        onClick={pushToInputHandler}>
        1
      </KeyButton>
      <KeyButton
        className="two"
        id="two"
        value="2"
        onClick={pushToInputHandler}>
        2
      </KeyButton>
      <KeyButton
        className="three"
        id="three"
        value="3"
        onClick={pushToInputHandler}>
        3
      </KeyButton>
      <KeyButton
        className="equal"
        id="equal"
        value="="
        onClick={equalsHandler}>
        =
      </KeyButton>
      <KeyButton
        className="point"
        id="decimal"
        value="."
        onClick={decimalHandler}>
        .
      </KeyButton>
      <KeyButton
        className="bracket"
        id="bracket"
        value="("
        onClick={bracketHandler}>
        (
      </KeyButton>
      <KeyButton
        className="zero"
        id="zero"
        value="0"
        onClick={pushToInputHandler}>
        0
      </KeyButton>
      <KeyButton
        className="reverseBracket"
        id="reverseBracket"
        value=")"
        onClick={bracketHandler}>
        )
      </KeyButton>
      <FunctionButton
        className="CE"
        id="clear"
        value="CE"
        onClick={clearHandler}>
        CE
      </FunctionButton>
    </KeyboardContainer>
  )
}

export default Keyboard
