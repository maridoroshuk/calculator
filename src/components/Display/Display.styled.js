import styled from 'styled-components'

export const StyledDisplay = styled.div`
  height: 6rem;
  grid-column: 1 / -1;
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 0.75rem;
  word-wrap: break-word;
  word-break: break-all;
`

export const PrevOperand = styled.div`
  color: gray;
  font-size: 1.5rem;
`
export const CurOperand = styled.div`
  color: black;
  font-size: 2rem;
`
