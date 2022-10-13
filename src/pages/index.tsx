import React from 'react';
import Head from 'next/head'
import Imagem from '../assets/rocketseat.svg'
import { Container, Header } from '../styles/pages/Home'


const Home: React.FC = () => {
  return (
<>
    <Header>
      <img className="spinner" src="https://o.remove.bg/downloads/3d30b416-a2c9-4f88-8108-0c64c022fb4b/tribal-removebg-preview.png" />
     <label></label>
    </Header>
    <Container>
      <Head>
        <title>Projetos</title>
      </Head>

      <Imagem />
      <h1>Welcome $Marcos</h1>
      <p>Bem-Vindo</p>
      <div className="container">
    <div className="card1">
        <div className="content">
       	   <h2>REDES</h2>
       	   <h3>REDES SOCIAIS</h3>
       	   <p>Clique aqui para Verificar suas Redes Sociais</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>
</div>
    </Container>
    </>
  )
}

export default Home
