import React from 'react'
import { useSelector } from 'react-redux'
import { StyledDisplay } from './Display.styled'

const Display = () => {
	const { value, operator, nextValue, result, input } = useSelector(state => state.calculator)
	return (
		<StyledDisplay>
			<p>{value} {operator} {nextValue} {result ? '=' : null}</p>
			<p>{result ?? input}</p>
		</StyledDisplay>
	)
}

export default Display