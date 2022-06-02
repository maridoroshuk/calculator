import History from '../../containers/Calculator/History'
import React from 'react'
import Layout from '../../layouts'



import { Card, Heading } from './components'
import CalculatorPanel from '../../containers/Calculator'


const Home = () => {
  return (
    <React.Fragment>
      <Layout />
      <CalculatorPanel />
    </React.Fragment>
  )
}

export default Home
