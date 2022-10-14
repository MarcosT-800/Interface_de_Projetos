import React from 'react';
import Head from 'next/head'
import Imagem from '../assets/rocketseat.svg'
import { Container, Navigation } from './style'

let list = document.querySelectorAll('.navigation li');

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click', activeLink))

const Home: React.FC = () => {

  return (
<>
        <Container>
           <Navigation>
           <body>
             <ul className="navigation">
                <li className="active">
                    <a href="1section">
                        <span className="icon"></span>
                        <span className="text">Home</span>

                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon"></span>
                        <span className="text">Profile</span>

                    </a>
                </li>
 
                <li>
                    <a href="#">
                        
                        <span className="icon"></span>
                        <span className="text">Messages</span>

                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon"></span>
                        <span className="text">Outros</span>

                    </a>
                </li>
             </ul>

              
             </body>
           </Navigation>
         </Container>
    </>
  )
}

export default Home
