import styled from 'styled-components'

export const SettingsContainer = styled.div`
  width: 30%;
  margin: 5rem;
`
export const SettingsHeading = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`
export const ThemeSwitcher = styled.div`
  margin: 2rem 0;

  & select {
    border: none;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary}
    background-color: ${({ theme }) =>
      theme.colors.primary};  
  }
`
export const ClearHistory = styled.button`
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`
