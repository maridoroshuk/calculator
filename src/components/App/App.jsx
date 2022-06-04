import Home from '../../pages/Home/Home'
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  </BrowserRouter>

)

export default App
