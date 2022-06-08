import Header from '../../components/Header/Header'
import React from 'react'
import SettingsOptions from '../../components/SettingsOptions/SettingsOptions'
import { Container } from './Settings.styled'


const Settings = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <SettingsOptions />
      </Container>
    </React.Fragment>
  )
}

export default Settings
