import { calculatorActions } from '../../store/calculator/calculator-slice'
import React, { useId, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { StyledButton } from './Keypad.styled'
import { addDigit, chooseOperation } from '../../helpers/digit-validation'

const BUTTONS = [
	"C", "7", "8", "9", "*",
	"-", "4", "5", "6", "/",
	"+", "1", "2", "3", "=",
	".", "0", "%", "±", "CE",
]

const Keypad = ({ onSetState }) => {
	const id = useId()
	const dispatch = useDispatch()

	const buttonClickHandler = e => {
		const digit = e.target.value
		switch (digit) {
			case "-":
				onSetState(chooseOperation(digit))
				break
			case "+":
				chooseOperation(digit)
				break
			case "*":
				chooseOperation(digit)
				break
			case "/":
				chooseOperation(digit)
				break
			case "%":
				chooseOperation(digit)
				break
			case "=":
				chooseOperation(digit)
				break
			case "C":
				break
			case "CE":
				break
			default:
				onSetState(() => addDigit(digit))

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