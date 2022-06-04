import React from 'react'
import { Outlet } from 'react-router-dom'
import { PageLayout, StyledHeader, Logo, Container, Button } from './Header.styled'


const Header = () => {
  return (
    <PageLayout>
      <StyledHeader>
        <Logo>Calculator App</Logo>
        <Container>
          <Button active>Home</Button>
          <Button active>Settings</Button>
        </Container>
      </StyledHeader>
      <Outlet />
    </PageLayout>
  )
}

export default Header