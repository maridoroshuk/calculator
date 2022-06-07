import Home from '../../pages/Home/Home'
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Settings from '../../pages/Settings/Settings'


const App = () => (
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

)

export default App
