import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './globalStyles'
import { Provider } from 'react-redux'
import App from './components/App/App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyles />
  </Provider>,
  document.getElementById('root'),
)
