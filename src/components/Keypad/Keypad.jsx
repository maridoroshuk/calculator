import { calculatorActions } from '../../store/calculator/calculator-slice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from './Keypad.styled'
import { setInput } from '../../utils/setInput'
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
		<Grid>
			<StyledButton onClick={deleteDigitHandler}>C</StyledButton>
			<DigitButton dispatch={dispatch} digit="7" />
			<DigitButton dispatch={dispatch} digit="8" />
			<DigitButton dispatch={dispatch} digit="9" />
			<OperationButton dispatch={dispatch} operation="*" />
			<OperationButton dispatch={dispatch} operation="-" />
			<DigitButton dispatch={dispatch} digit="4" />
			<DigitButton dispatch={dispatch} digit="5" />
			<DigitButton dispatch={dispatch} digit="6" />
			<OperationButton dispatch={dispatch} operation="\" />
			<OperationButton dispatch={dispatch} operation="+" />
			<DigitButton dispatch={dispatch} digit="1" />
			<DigitButton dispatch={dispatch} digit="2" />
			<DigitButton dispatch={dispatch} digit="3" />
			<StyledButton onClick={evaluateHandler}>=</StyledButton>
			<DigitButton dispatch={dispatch} digit="." />
			<StyledButton>&#40;</StyledButton>
			<DigitButton dispatch={dispatch} digit="0" />
			<StyledButton>&#41;</StyledButton>
			<StyledButton onClick={clearHandler}>CE</StyledButton>
		</Grid >
	)
}

export default Keypad