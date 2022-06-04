import React from 'react'
import { StyledButton } from './Button.styled'

const Button = ({ label, onClick }) => {
	return (
		<StyledButton onClick={e => onClick(e)} value={label}>{label}</StyledButton>
	)
}

export default Button