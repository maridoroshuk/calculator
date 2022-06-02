import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './globalStyles'
import { store } from './store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
