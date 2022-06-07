import React from 'react'
import { ClearHistory, SettingsContainer, SettingsHeading, ThemeSwitcher } from './SettingsOptions.styled'

function SettingsOptions() {
	return (
		<SettingsContainer>
			<SettingsHeading>
				Settings
			</SettingsHeading>
			<ThemeSwitcher>
				<select>
					<option>Light theme</option>
					<option>Colored theme</option>
					<option>Dark theme</option>
				</select>
			</ThemeSwitcher>
			<ClearHistory>Clear All History</ClearHistory>
		</SettingsContainer>
	)
}

export default SettingsOptions