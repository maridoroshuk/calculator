import { state } from '../../helpers/digit-validation'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StyledDisplay, PrevOperand, CurOperand } from './Display.styled'

const Display = ({ state }) => {
	return (
		<StyledDisplay>
			<PrevOperand>{state?.prevOperand} {state?.operation}</PrevOperand>
			<CurOperand>{state?.curOperand}</CurOperand>
		</StyledDisplay>
	)
}

export default Display