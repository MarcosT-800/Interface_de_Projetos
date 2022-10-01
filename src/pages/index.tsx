import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>Welcome $Marcos</h1>
      <p>Bem-Vindo</p>
      <button>Entrar</button>
    </Container>
  )
}

export default Home
