import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './globalStyles'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import App from './components/App/App'
import store from './store'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root'),
)
