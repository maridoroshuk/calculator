import styled from 'styled-components'

export const PageLayout = styled.div``

export const StyledHeader = styled.header`
  height: 5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

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
  margin-left: 1rem;
  border: none;
  display: block;
  background-color: transparent;
  border-bottom: ${({ active }) =>
    active ? '2px solid white' : 'none'};
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
