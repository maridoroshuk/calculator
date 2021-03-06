import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { PageLayout, StyledHeader, Logo, Container, Button } from './Header.styled'


const Header = () => {

  return (
    <PageLayout>
      <StyledHeader>
        <Logo>
          <Link to="/">Calculator App</Link>
        </Logo>
        <Container>
          <Button>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
          </Button>
          <Button >
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/settings">Settings</NavLink>
          </Button>
        </Container>
      </StyledHeader>
      <Outlet />
    </PageLayout >
  )
}

export default Header