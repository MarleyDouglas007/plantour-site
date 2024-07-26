import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagem1 from './imagens/imagem1.jpg';
import imagem2 from './imagens/imagem2.jpg';
import imagem3 from './imagens/imagem3.jpg';
import logo from './imagens/LogoPlantour.png';
import splash from './imagens/splash.jpeg';
import login from './imagens/login.jpeg';
import perfil1 from './imagens/perfil1.jpg';
import perfil2 from './imagens/perfil2.jpeg';
import perfil3 from './imagens/perfil3.jpeg';
import perfil4 from './imagens/perfil4.jpg';
import perfil5 from './imagens/perfil5.jpg';
import postaCard from './imagens/postaCard.jpeg';
import roteiro from './imagens/roteiro.jpeg';
import configuracao from './imagens/configuracao.jpeg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Recursos do Plantour" className="logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">Sobre</a></li>
              <li><a href="#features">Recursos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <section className="content-section">
          <div id="about" className="about-section">
            <div className="container about-container">
              <div className="about-text">
                <h2>Sobre o Plantour</h2>
                <p>O Plantour é um aplicativo inovador que ajuda você a planejar suas viagens de forma eficiente e divertida. Com ele, você pode buscar destinos, encontrar pontos turísticos e organizar seus passeios em um só lugar.</p>
              </div>
              <Carousel
                className="features-carousel"
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                transitionTime={500}
              >
                <div className="carousel-image-container">
                  <img src={splash} alt="Sobre Plantour" className="carousel-image" />
                </div>
                <div className="carousel-image-container">
                  <img src={login} alt="Sobre Plantour" className="carousel-image" />
                </div>
                <div className="carousel-image-container">
                  <img src={imagem1} alt="Sobre Plantour" className="carousel-image" />
                </div>
                <div className="carousel-image-container">
                  <img src={imagem2} alt="Recursos do Plantour" className="carousel-image" />
                </div>
                <div className="carousel-image-container">
                  <img src={imagem3} alt="Logo Plantour" className="carousel-image" />
                </div>
              </Carousel>
            </div>
            <div className="comment-section">
              <div className="comment">
                <img src={perfil1} alt="Usuário 1" className="comment-image" />
                <p>Excelente aplicativo! Planejei minhas férias perfeitamente com o Plantour! - João Silva</p>
              </div>
              <div className="comment">
                <img src={perfil2} alt="Usuário 2" className="comment-image" />
                <p>Muito prático e fácil de usar. Recomendo a todos os viajantes. - Mario Ferreira</p>
              </div>
              <div className="comment">
                <img src={perfil5} alt="Usuário 4" className="comment-image" />
                <p>O Plantour tornou o planejamento das minhas viagens muito mais divertido e fácil. - Juliana Costa</p>
              </div>
              <div className="comment">
                <img src={perfil3} alt="Usuário 3" className="comment-image" />
                <p>Adorei as recomendações de pontos turísticos!- Carlos Alberto</p>
              </div>
              <div className="comment">
                <img src={perfil4} alt="Usuário 4" className="comment-image" />
                <p>Organizei toda minha viagem com o Plantour. Sensacional! - Ana Paula</p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="features-section">
          <div className="container features-carousel-container">
            <div className="features-text">
              <h2>Recursos</h2>
              <ul className="features-list">
                <li>Busca de destinos e pontos turísticos</li>
                <li>Organização de roteiros de viagem</li>
                <li>Informações detalhadas sobre locais</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Carousel
                className="features-carousel"
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                transitionTime={500}
              >
                <div className="carousel-image-container">
                  <img src={configuracao} alt="Sobre Plantour" className="carousel-image" />
                </div>
                <div className="carousel-image-container">
                  <img src={roteiro} alt="Sobre Plantour" className="carousel-image" />
                </div>
                <div className="carousel-image-container">
                  <img src={postaCard} alt="Sobre Plantour" className="carousel-image" />
                </div>
               
              </Carousel>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Plantour. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;