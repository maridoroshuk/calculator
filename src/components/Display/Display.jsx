import React from 'react'
import { useSelector } from 'react-redux'
import { StyledDisplay } from './Display.styled'

const Display = () => {
	const expression = useSelector(state => state.calculator.display)
	console.log(expression)
	return (
		<StyledDisplay>{expression}</StyledDisplay>
	)
}

export default Display