import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  margin-top: 1rem;
  padding: 1rem;
  justify-content: center;
  grid-template-columns: repeat(5, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(1, 6rem);
  grid-gap: 2rem;
  border-right: 2px solid black;
`
