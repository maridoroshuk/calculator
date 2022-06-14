import { state } from '../../helpers/digit-validation'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StyledDisplay, PrevOperand, CurOperand } from './Display.styled'

const Display = ({ prevOperand, operation, curOperand }) => {
	console.log(curOperand)
	return (
		<StyledDisplay>
			<PrevOperand>{prevOperand} {operation}</PrevOperand>
			<CurOperand>{curOperand}</CurOperand>
		</StyledDisplay>
	)
}

export default Display