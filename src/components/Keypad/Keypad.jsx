import { calculatorActions } from '../../store/calculator/calculator-slice'
import React, { useId } from 'react'
import { useDispatch } from 'react-redux'
import { StyledButton } from './Keypad.styled'

const BUTTONS = [
	"C", "7", "8", "9", "*",
	"-", "4", "5", "6", "/",
	"+", "1", "2", "3", "=",
	".", "0", " % ", "±", "CE",
]

const Keypad = () => {
	const id = useId()
	const dispatch = useDispatch()

	const buttonClickHandler = e => {
		const digit = e.target.value
		switch (digit) {
			case "-":
				dispatch(calculatorActions.chooseOperation({ operation: digit }))
				break
			case "+":
				dispatch(calculatorActions.chooseOperation({ operation: digit }))
				break
			case "*":
				dispatch(calculatorActions.chooseOperation({ operation: digit }))
				break
			case "/":
				dispatch(calculatorActions.chooseOperation({ operation: digit }))
				break
			case "%":
				dispatch(calculatorActions.chooseOperation({ operation: digit }))
				break
			case "=":
				dispatch(calculatorActions.evaluate())
				break
			case "C":
				dispatch(calculatorActions.deleteDigit())
				break
			case "CE":
				dispatch(calculatorActions.clear())
				break
			default:
				dispatch(calculatorActions.addDigit({ digit }))
		}
	}


	return (
		<React.Fragment>
			{BUTTONS.map(val => {

				return (
					<StyledButton
						onClick={buttonClickHandler}
						key={id}
						value={val}>
						{val}
					</StyledButton>
				)
			})}
		</React.Fragment>
	)
}

export default Keypad