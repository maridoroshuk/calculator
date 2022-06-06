import { calculatorActions } from '../../../store/calculator/calculator-slice'
import React from 'react'
import { StyledButton } from './Button.styled'

const DigitButton = ({ digit, dispatch }) => {
	return (
		<StyledButton onClick={() => dispatch(calculatorActions.addDigit({ digit }))} value={digit}>{digit}</StyledButton>
	)
}

export default DigitButton