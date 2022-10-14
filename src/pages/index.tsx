import React from 'react';
import Head from 'next/head'
import Imagem from '../assets/rocketseat.svg'
import { Container, Header, Section } from '../styles/pages/Home'
import Navegator from '../components/Navegator/index'


const Home: React.FC = () => {
  return (
<>
    <Header>
      <img className="spinner" src="https://img1.gratispng.com/20180322/pbw/kisspng-gray-wolf-moon-coyote-red-wolf-clip-art-wolf-5ab448817cdd43.4156014315217644815115.jpg" />
     <label></label>
    </Header>

    <Container>
      <Head>
        <title>Projetos</title>
      </Head>

      <h1>Welcome Marcos</h1>
      <p>Explore seus projetos por aqui</p>
      <div className="container">
    <div className="card1">
        <div className="content">
          <img height="200px" src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Notion-900x0.png"/>
       	   <h2>Notion</h2>
       	   <h3>Notion</h3>
       	   <p>Clique para ir ao Notion</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>

  <div className="card1">
        <div className="content">
          <img height="200px" src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Linkedin-Black-900x0.png"/>
       	   <h2>Linkedin</h2>
       	   <h3>LinkeIn</h3>
       	   <p>Clique para ir ao LinkedIn</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>

  <div className="card1">
        <div className="content">
          <img height="200px" src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/GitHub-Colored-900x0.png"/>
       	   <h2>Github</h2>
       	   <h3>Github</h3>
       	   <p>Clique para ir ao Github</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>

  <div className="card1">
        <div className="content">
          <img height="200px" src="https://branditechture.agency/brand-logos/wp-content/uploads/2022/08/Webblog-1-768x576.png"/>
       	   <h2>Blog</h2>
       	   <h3>Blog</h3>
       	   <p>Clique para ir ao Blog</p>
       	   <a href="#">Entrar</a>
       </div>		
	</div>
</div>

<Navegator/>
         </Container>
    </>
  )
}

export default Home
