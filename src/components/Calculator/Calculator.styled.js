import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  padding: 1rem;
  justify-content: center;
  grid-template-columns: repeat(5, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(1, 6rem);
  grid-gap: 1.5rem;
  border-right: 2px solid
    ${({ theme }) => theme.colors.calcColor};
`
