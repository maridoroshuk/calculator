import React from 'react'

import Calculator from '../../components/Calculator/Calculator'
import { Container } from './Home.styled'
import Header from '../../components/Header/Header'
import History from '../../components/History/History'


const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Calculator />
        <History />
      </Container>
    </React.Fragment>
  )
}

export default Home
