// App.js
import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagem1 from './imagens/imagem1.jpg';
import imagem2 from './imagens/imagem2.jpg';
import imagem3 from './imagens/imagem3.jpg';
import logo from './imagens/LogoPlantour.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Recursos do Plantour" className="logo" />
            <h1 className="logo-text">Plantour</h1>
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
        <section id="about" className="about-section">
          <div className="container">
            <h2>Sobre o Plantour</h2>
            <p>O Plantour é um aplicativo inovador que ajuda você a planejar suas viagens de forma eficiente e divertida. Com ele, você pode buscar destinos, encontrar pontos turísticos e organizar seus passeios em um só lugar.</p>
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
      <h2 >App Plantour</h2>
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
          <img src={imagem1} alt="Sobre Plantour" className="carousel-image" />
        </div>
        <div className="carousel-image-container">
          <img src={imagem2} alt="Recursos do Plantour" className="carousel-image" />
        </div>
        <div className="carousel-image-container">
          <img src={imagem3} alt="Logo Plantour" className="carousel-image" />
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
