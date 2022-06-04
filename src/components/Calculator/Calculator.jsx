import React from 'react'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'
import { Container } from './Calculator.styled'

const Calculator = () => {
	return (
		<Container>
			<Display />
			<Keypad />
		</Container>
	)
}

export default Calculator