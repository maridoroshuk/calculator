import styled from 'styled-components'

export const StyledDisplay = styled.div`
  height: 6rem;
  grid-column: 1 / -1;
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.calcColor};
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
  color: ${({ theme }) => theme.colors.calcColor};
  font-size: 1.5rem;
`
export const CurOperand = styled.div`
  color: ${({ theme }) => theme.colors.calcColor};
  font-size: 2rem;
`
