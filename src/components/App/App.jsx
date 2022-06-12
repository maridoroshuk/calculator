import Home from '../../pages/Home/Home'
import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Settings from '../../pages/Settings/Settings'
import { ThemeContext, ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { themeActions } from '../../store/theme/theme-slice'
import { ColoredTheme, DarkTheme, LightTheme } from '../../theme'
import ErrorBoundery from '../ErrorBoundery/ErrorBoundery'


const App = () => {

  const { theme } = useSelector(state => state.theme)
  const { changeTheme } = themeActions.changeTheme


  let chosenTheme

  if (theme === 'colored') {
    chosenTheme = ColoredTheme
  } else if (theme === 'dark') {
    chosenTheme = DarkTheme
  } else if (theme === 'light') {
    chosenTheme = LightTheme
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])


  return (
    <ErrorBoundery>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <ThemeProvider theme={chosenTheme ?? LightTheme}>
          <BrowserRouter>
            <Routes>
              <Route
                index
                path="/"
                element={<Home />}
              />
              <Route
                path="/settings"
                element={<Settings />}
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </ErrorBoundery>
  )
}

export default App
