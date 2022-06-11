import styled from 'styled-components'

export const HistoryContainer = styled.div`
  align-self: flex-start;
  text-align: start;
  width: 20%;
  margin: 1rem 3rem;
  color: ${({ theme }) => theme.colors.calcColor};
`
export const StyledList = styled.ul`
  display: flex;
  margin-top: 1rem;
  list-style-type: none;
  flex-direction: column-reverse;
  max-height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;

  & li {
    margin-top: 1rem;
  }
`
export const Heading = styled.h2`
  font-size: 2rem;
`
