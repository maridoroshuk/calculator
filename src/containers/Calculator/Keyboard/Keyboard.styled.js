import styled from 'styled-components'

export const KeyboardContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  display: grid;
  grid-template-columns: repeat(5, 8rem);
  grid-template-rows: repeat(4, 8rem);
  grid-template-areas:
    'r d m .'
    't y u c'
    'g h j s'
    'v b n a'
    'z p e e';
  margin: 2rem auto;
  justify-content: center;
`
