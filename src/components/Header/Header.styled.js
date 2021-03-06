import styled from 'styled-components'

export const PageLayout = styled.div``

export const StyledHeader = styled.nav`
  height: 10vh;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

  & .active {
    border-bottom: 2px solid white;
  }

  & a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
  }

  & a:link,
  a:visited {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`

export const Logo = styled.h2``

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Button = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1em;
  margin-right: 2rem;
  border: none;
  display: block;
  background-color: transparent;
  cursor: pointer;

  & a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }

  & a:link,
  a:visited {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`
