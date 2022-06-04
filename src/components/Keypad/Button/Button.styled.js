import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({ theme }) =>
    theme.colors.secondary};
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  border: none;
  margin: auto;
  font-weight: 400;
  font-size: 2rem;
  cursor: pointer;
  &:active {
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }
`
