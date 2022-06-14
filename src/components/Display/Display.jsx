import React from 'react'
import { StyledDisplay, PrevOperand, CurOperand } from './Display.styled'

const Display = ({ prevOperand, operation, curOperand }) => {
	return (
		<StyledDisplay>
			<PrevOperand>{prevOperand} {operation}</PrevOperand>
			<CurOperand>{curOperand}</CurOperand>
		</StyledDisplay>
	)
}

export default Display