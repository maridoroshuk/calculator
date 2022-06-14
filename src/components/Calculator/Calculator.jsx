import { calculatorActions } from '../../store/calculator/calculator-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'
import { Container } from './Calculator.styled'

const Calculator = () => {
	const [prevOperand, setPrevOperand] = useState(null)
	const [operation, setOperation] = useState(null)
	const [curOperand, setCurOperand] = useState(null)

	const dispatch = useDispatch()


	const updateStateHandler = payload => {
		setPrevOperand(payload?.prevOperand)
		setOperation(payload?.operation)
		setCurOperand(payload?.curOperand)
	}

	const addToHistoryHandler = () => {
		dispatch(calculatorActions.addHistory({ prevOperand, operation, curOperand }))
	}

	return (
		<Container>
			<Display
				prevOperand={prevOperand}
				operation={operation}
				curOperand={curOperand}
			/>
			<Keypad
				onUpdateState={updateStateHandler}
				onAddHistory={addToHistoryHandler}
			/>
		</Container>
	)
}

export default Calculator