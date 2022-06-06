import React from 'react'
import { useSelector } from 'react-redux'
import { StyledDisplay, PrevOperand, CurOperand } from './Display.styled'

const Display = () => {
	const { curOperand, prevOperand, operation } = useSelector(state => state.calculator)
	return (
		<StyledDisplay>
			<PrevOperand>{prevOperand} {operation}</PrevOperand>
			<CurOperand>{curOperand}</CurOperand>
		</StyledDisplay>
	)
}

export default Display