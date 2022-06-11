import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  height: 90vh;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) =>
    theme.colors.secondary};
`
