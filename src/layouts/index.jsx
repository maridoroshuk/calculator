import React from 'react'
import { Outlet } from 'react-router-dom'
import { PageLayout, Header, Logo, Container, Button } from './Layout.styled'

import Calculator from '../containers/Calculator'


const Layout = () => {
  return (
    <PageLayout>
      <Header>
        <Logo>Calculator App</Logo>
        <Container>
          <Button active>Home</Button>
          <Button active>Settings</Button>
        </Container>
      </Header>
      <Outlet />
    </PageLayout>
  )
}

export default Layout