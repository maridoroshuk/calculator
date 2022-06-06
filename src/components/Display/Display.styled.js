import styled from 'styled-components'

export const StyledDisplay = styled.div`
  grid-column: 1/ -1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
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
