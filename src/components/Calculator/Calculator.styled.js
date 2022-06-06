import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  font-size: 2rem;
  justify-content: center;
  margin-top: 2rem;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
`
