import React from 'react';
import Head from 'next/head'
import Imagem from '../assets/rocketseat.svg'
import { Container, Header, Section } from '../styles/pages/Home'
import Navegator from '../components/Navegator/index'


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

<Section className="1section">
      <Imagem />
      <h1>Welcome Marcos</h1>
      <p>Explore seus projetos por aqui</p>
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
</Section>

        <Section> 
              <Imagem />
      <h1>1 Section</h1>
      <p>Explore seus projetos por aqui</p>
      <div className="container">
    <div className="card1">
        <div className="content">
       	   <h2>REDES</h2>
       	   <h3>REDES SOCIAIS</h3>
       	   <p>Clique aqui para Verificar suas Redes Sociais</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>

  <div className="card1">
        <div className="content">
       	   <h2>REDES</h2>
       	   <h3>REDES SOCIAIS</h3>
       	   <p>Clique aqui para Verificar suas Redes Sociais</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>
</div>
         </Section>
  
         <Section > 
            <Imagem />
      <h1>2 Section</h1>
      <p>Explore seus projetos por aqui</p>
      <div className="container">
    <div className="card1">
        <div className="content">
       	   <h2>REDES</h2>
       	   <h3>REDES SOCIAIS</h3>
       	   <p>Clique aqui para Verificar suas Redes Sociais</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>
  <div className="card1">
        <div className="content">
       	   <h2>REDES</h2>
       	   <h3>REDES SOCIAIS</h3>
       	   <p>Clique aqui para Verificar suas Redes Sociais</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>
</div>
         </Section>
 
         <Section> 
            <Imagem />
      <h1>3 Section</h1>
      <p>Explore seus projetos por aqui</p>
      <div className="container">
    <div className="card1">
        <div className="content">
       	   <h2>REDES</h2>
       	   <h3>REDES SOCIAIS</h3>
       	   <p>Clique aqui para Verificar suas Redes Sociais</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>
  <div className="card1">
        <div className="content">
       	   <h2>REDES</h2>
       	   <h3>REDES SOCIAIS</h3>
       	   <p>Clique aqui para Verificar suas Redes Sociais</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>
</div>
         </Section>
         <Navegator/>
         </Container>
    </>
  )
}

export default Home
