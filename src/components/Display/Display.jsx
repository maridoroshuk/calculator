import React from 'react'
import { useSelector } from 'react-redux'
import { StyledDisplay, Expression } from './Display.styled'

const Display = () => {
	const { expression } = useSelector(state => state.calculator)
	return (
		<StyledDisplay>
			<Expression>{expression}</Expression>
		</StyledDisplay>
	)
}

export default Display