import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1 className="logo">Plantour</h1>
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
          <div className="container">
            <h2>Recursos</h2>
            <ul className="features-list">
              <li>Busca de destinos e pontos turísticos</li>
              <li>Organização de roteiros de viagem</li>
              <li>Informações detalhadas sobre locais</li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Plantour. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
