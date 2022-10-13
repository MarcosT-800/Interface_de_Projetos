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

<script type="module" src="hhtps://unpkg.com/ionicon@5.2/dist/ionicons/ionicons.esm.js"></script>
             <script nomodule src="http://unpkg.com/ionicons@5.3/dist/ionicons/ionicons.js"></script>
        <Container>
           <Navigation>
             <ul className="navigation">
                <li className="active">
                    <a href="#">
                        <span className="icon"></span>
                        <span className="text">Home</span>

                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon"><ion-icon nome="camera-outline"></ion-icon></span>
                        <span className="text">Profile</span>

                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon"><img src="tdhdt"/></span>
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

             <script type="module" src="hhtps://unpkg.com/ionicon@5.2/dist/ionicons/ionicons.esm.js"></script>
             <script nomodule src="http://unpkg.com/ionicons@5.3/dist/ionicons/ionicons.js"></script>
           </Navigation>
         </Container>
    </>
  )
}

export default Home
