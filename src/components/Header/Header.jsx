import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { PageLayout, StyledHeader, Logo, Container, Button } from './Header.styled'


const Header = () => {

  return (
    <PageLayout>
      <StyledHeader>
        <Logo>
          <Link to="/">Calculator App</Link>
        </Logo>
        <Container>
          <Button active>
            <Link to="/">Home</Link>
          </Button>
          <Button active>
            <Link to="/settings">Settings</Link>
          </Button>
        </Container>
      </StyledHeader>
      <Outlet />
    </PageLayout>
  )
}

export default Header