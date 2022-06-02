import styled from 'styled-components'

export const PageLayout = styled.div``

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Logo = styled.h2`
  width: 30%;
  color: ${({ theme }) => theme.colors.white};
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Button = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1em;
  margin-left: 1rem;
  border: none;
  display: block;
  background-color: transparent;
  border-bottom: ${({ active }) =>
    active ? '2px solid white' : 'none'};
  cursor: pointer;
`
