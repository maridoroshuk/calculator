import styled from 'styled-components'

export const FunctionBtn = styled.button`
  background-color: ${({ theme }) =>
    theme.colors.secondary};
  border-radius: 20%;
  width: 60px;
  height: 60px;
  border: 0.1rem solid black;
  margin: auto;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  &:active {
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }
`
