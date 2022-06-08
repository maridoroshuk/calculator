import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 90%;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) =>
    theme.colors.secondary};
`
