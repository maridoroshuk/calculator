import { calculatorActions } from '../../../store/calculator/calculator-slice'
import React from 'react'
import { StyledButton } from './Button.styled'

const OperationButton = ({ operation, dispatch }) => {
	return (
		<StyledButton onClick={() => dispatch(calculatorActions.chooseOperation({ operation }))} value={operation}>{operation}</StyledButton>
	)
}

export default OperationButton