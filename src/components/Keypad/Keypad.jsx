import { calculatorActions } from '../../store/calculator/calculator-slice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button/Button'
import { Grid } from './Keypad.styled'
import { setInput } from '../utils/setInput'

const Keypad = () => {
	const dispatch = useDispatch()
	const { operator, input } = useSelector(state => state.calculator)

	const buttonClickHandler = () => { }

	const calcHandler = e => {
		const symbol = e.target.value
		setInput(input, symbol, operator)
	}

	const deleteHandler = () => {
		dispatch(calculatorActions.removeNumber())
	}

	const addNumberHandler = num => {
		dispatch(calculatorActions.addNumber(num))
	}

	const resetHandler = () => {
		dispatch(calculatorActions.resetOperaton())
	}

	return (
		<Grid>
			<Button onClick={deleteHandler} label="C" />
			<Button onClick={buttonClickHandler} label="7" />
			<Button onClick={buttonClickHandler} label="8" />
			<Button onClick={buttonClickHandler} label="9" />
			<Button onClick={buttonClickHandler} label="*" />
			<Button onClick={buttonClickHandler} label="-" />
			<Button onClick={buttonClickHandler} label="4" />
			<Button onClick={buttonClickHandler} label="5" />
			<Button onClick={buttonClickHandler} label="6" />
			<Button onClick={buttonClickHandler} label="\" />
			<Button onClick={buttonClickHandler} label="+" />
			<Button onClick={buttonClickHandler} label="1" />
			<Button onClick={buttonClickHandler} label="2" />
			<Button onClick={buttonClickHandler} label="3" />
			<Button onClick={buttonClickHandler} label="=" />
			<Button onClick={buttonClickHandler} label="." />
			<Button onClick={buttonClickHandler} label="(" />
			<Button onClick={buttonClickHandler} label="0" />
			<Button onClick={buttonClickHandler} label=")" />
			<Button onClick={buttonClickHandler} label="CE" />
		</Grid>
	)
}

export default Keypad