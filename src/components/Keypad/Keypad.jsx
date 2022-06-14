import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { StyledButton } from './Keypad.styled'
import { addDigit, chooseOperation, clear, deleteDigit, evaluate } from '../../helpers/digit-validation'

const BUTTONS = [
	"C", "7", "8", "9", "*",
	"-", "4", "5", "6", "/",
	"+", "1", "2", "3", "=",
	".", "0", "%", "±", "CE",
]

const Keypad = ({ onUpdateState, onAddHistory }) => {

	const buttonClickHandler = e => {
		const digit = e.target.value
		switch (digit) {
			case "-":
				onUpdateState(chooseOperation(digit))
				break
			case "+":
				onUpdateState(chooseOperation(digit))
				break
			case "*":
				onUpdateState(chooseOperation(digit))
				break
			case "/":
				onUpdateState(chooseOperation(digit))
				break
			case "%":
				onUpdateState(chooseOperation(digit))
				break
			case "=":
				onUpdateState(evaluate())
				onAddHistory()
				break
			case "C":
				onUpdateState(deleteDigit())
				break
			case "CE":
				onUpdateState(clear())
				break
			default:
				onUpdateState(addDigit(digit))

		}
	}

	return (
		<React.Fragment>
			{BUTTONS.map(val => {
				return (
					<StyledButton
						onClick={buttonClickHandler}
						key={uuidv4()}
						value={val}>
						{val}
					</StyledButton>
				)
			})}
		</React.Fragment>
	)
}

export default Keypad