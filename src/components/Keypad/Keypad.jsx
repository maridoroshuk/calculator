import { calculatorActions } from '../../store/calculator/calculator-slice'
import React from 'react'
import { useDispatch } from 'react-redux'
import OperationButton from './Button/OperationButton'
import DigitButton from './Button/DigitButton'
import { StyledButton } from './Button/Button.styled'

const Keypad = () => {
	const dispatch = useDispatch()

	const clearHandler = () => {
		dispatch(calculatorActions.clear())
	}

	const evaluateHandler = () => {
		dispatch(calculatorActions.evaluate())
	}

	const deleteDigitHandler = () => {
		dispatch(calculatorActions.deleteDigit())
	}

	return (
		<React.Fragment>
			<StyledButton onClick={deleteDigitHandler}>C</StyledButton>
			<DigitButton dispatch={dispatch} digit="7" />
			<DigitButton dispatch={dispatch} digit="8" />
			<DigitButton dispatch={dispatch} digit="9" />
			<OperationButton dispatch={dispatch} operation="*" />
			<OperationButton dispatch={dispatch} operation="-" />
			<DigitButton dispatch={dispatch} digit="4" />
			<DigitButton dispatch={dispatch} digit="5" />
			<DigitButton dispatch={dispatch} digit="6" />
			<OperationButton dispatch={dispatch} operation="/" />
			<OperationButton dispatch={dispatch} operation="+" />
			<DigitButton dispatch={dispatch} digit="1" />
			<DigitButton dispatch={dispatch} digit="2" />
			<DigitButton dispatch={dispatch} digit="3" />
			<StyledButton onClick={evaluateHandler}>=</StyledButton>
			<DigitButton dispatch={dispatch} digit="." />
			<DigitButton dispatch={dispatch} digit="(" >&#40;</DigitButton>
			<DigitButton dispatch={dispatch} digit="0" />
			<DigitButton dispatch={dispatch} digit=")" >&#41;</DigitButton>
			<StyledButton onClick={clearHandler}>CE</StyledButton>
		</React.Fragment>
	)
}

export default Keypad