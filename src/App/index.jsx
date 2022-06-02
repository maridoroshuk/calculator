import Loader from '../components/Loader/index'
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { HOME_PAGE_ROUTE } from '../constants/router'
import Home from '../pages/Home'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={HOME_PAGE_ROUTE}
        element={<Home />}
      />
    </Routes>
  </BrowserRouter>

)

export default App
