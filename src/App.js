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
import ImagemPlaces from './imagens/imagemPlaces.webp';
import imagemRoteiro from './imagens/imagemRoteiro.jpg';
import locais from './imagens/locais.avif';
import playstore from './imagens/playstore.webp';


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Recursos do Plantour" className="logo" />
            <h1>Plantour</h1>
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
                <p>O PlanTour é um software inovador desenvolvido para apoiar viajantes do mundo todo. Por meio de sua plataforma, os usuários têm acesso a roteiros populares, vendas de passeios e sugestões de lugares, tudo baseado nas avaliações e experiências de outros viajantes. O PlanTour personaliza as recomendações de acordo com as preferências individuais de cada usuário, proporcionando uma experiência única e sob medida. Além disso, o software visa simplificar o processo de planejamento de viagens, tornando-o mais eficiente e agradável. Com o PlanTour, os viajantes podem explorar novos destinos, descobrir atrações populares e obter informações valiosas para tornar suas viagens ainda mais enriquecedoras.</p>
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
           
          </div>
        </section>
        <section id="features" className="features-section">
          <div className="container features-carousel-container">
            <div className="features-text">
              <h2>Recursos</h2>
              <ul className="features-list">
                <li>Busca de destinos e pontos turísticos</li>
                <div className="recurso" >
                <img src={ImagemPlaces} alt="Sobre Plantour" className="imagem" />
                <p>O Plantour utiliza a avançada tecnologia do Google Places API para oferecer informações detalhadas e atualizadas sobre destinos e pontos turísticos ao redor do mundo. Com essa integração, você pode buscar por locais populares, obter descrições precisas, fotos, avaliações e planejar suas viagens com confiança, garantindo acesso às melhores recomendações e tornando suas aventuras inesquecíveis.</p>
                </div>
                <li>Organização de roteiros de viagem</li>
                <div className="recurso" >
                <p>O Plantour facilita a organização de roteiros de viagem, permitindo que os usuários planejem seus itinerários com facilidade. Com uma interface intuitiva, é possível adicionar destinos, programar atividades e ajustar horários conforme preferências pessoais. O Plantour também sugere pontos turísticos com base em avaliações de outros usuários, garantindo roteiros enriquecidos e personalizados para uma experiência de viagem inesquecível.</p>
                <img src={imagemRoteiro} alt="Sobre Plantour" className="imagem" />
                </div>
                <li>Informações detalhadas sobre locais</li>
                <div className="recurso" >
                <img src={locais} alt="Sobre Plantour" className="imagem" />
                <p>O Plantour oferece informações detalhadas sobre locais, incluindo descrições precisas, fotos e avaliações atualizadas. Com esses dados, os usuários podem conhecer melhor os destinos e atrações, facilitando a escolha dos melhores lugares para visitar e garantindo uma experiência de viagem mais informada e agradável.</p>
                </div>
              </ul>

            </div>
          </div>
        </section>
      </main>

    <div className="recurso" >
    <img src={playstore} alt="Sobre Plantour" className="playLogo" />
    <p className="playText" >O Plantour é um aplicativo móvel para Android que facilita o planejamento das suas viagens de forma prática e intuitiva. Em breve disponível na Google Play Store, o Plantour oferece uma experiência completa para explorar destinos, criar roteiros personalizados e descobrir locais incríveis. Com recursos que incluem exploração de destinos turísticos, criação de roteiros ajustáveis, sugestões personalizadas baseadas em avaliações de outros usuários e informações detalhadas e atualizadas, o Plantour é a ferramenta ideal para transformar suas viagens em aventuras inesquecíveis. Fique atento para a nossa chegada na loja de aplicativos e prepare-se para planejar sua próxima viagem com facilidade e eficiência!</p>
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
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Plantour. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
