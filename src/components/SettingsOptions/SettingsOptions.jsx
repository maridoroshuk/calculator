import { themeActions } from '../../store/theme/theme-slice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClearHistory, SettingsContainer, SettingsHeading, ThemeSwitcher } from './SettingsOptions.styled'
import { calculatorActions } from '../../store/calculator/calculator-slice'

function SettingsOptions() {
	const dispatch = useDispatch()
	const { theme } = useSelector(state => state.theme)
	const { history } = useSelector(state => state.calculator)
	console.log(history)

	const changeThemeHandlet = e => {
		dispatch(themeActions.changeTheme(e.target.value))
	}

	const clearHistoryHandler = () => {
		dispatch(calculatorActions.clearHistory())
	}
	return (
		<SettingsContainer>
			<SettingsHeading>
				Settings
			</SettingsHeading>
			<ThemeSwitcher>
				<select onChange={changeThemeHandlet}>
					<option selected={theme === 'light'} value="light">Light theme</option>
					<option selected={theme === 'colored'} value="colored">Colored theme</option>
					<option selected={theme === 'dark'} value="dark">Dark theme</option>
				</select>
			</ThemeSwitcher>
			<ClearHistory disabled={history.length === 0} onClick={clearHistoryHandler}>Clear All History</ClearHistory>
		</SettingsContainer >
	)
}

export default SettingsOptions