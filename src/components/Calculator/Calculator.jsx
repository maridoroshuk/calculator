import React, { useState } from 'react'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'
import { Container } from './Calculator.styled'

const Calculator = () => {
	const [state, setState] = useState({})

	const setStateHandler = payload => {
		console.log(payload)
		setState(payload)
		console.log(state)
	}


	return (
		<Container>
			<Display
				state={state}
			/>
			<Keypad
				onSetState={setState}
			/>
		</Container>
	)
}

export default Calculator