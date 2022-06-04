import { calculatorActions } from '../../store/calculator/calculator-slice'
import React from 'react'
import { useDispatch } from 'react-redux'
import Button from './Button/Button'
import { Grid } from './Keypad.styled'

const Keypad = () => {
	const dispatch = useDispatch()

	const buttonClickHandler = e => {
		dispatch(calculatorActions.enterInput(e.target.value))
	}
	return (
		<Grid>
			<Button onClick={buttonClickHandler} label="C" />
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