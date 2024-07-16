import React from 'react';
import './App.css';
import about from './assets/about.jpg'
import hero from './assets/hero.jpg'

// URL das imagens
const HERO_IMAGE_URL = hero
const ABOUT_IMAGE_URL = about

const App: React.FC = () => {
  return (
    <>
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
    </>
  );
};

const Header: React.FC = () => {
  return (
    <header>
      <h1>Meu Portfolio</h1>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}>
      <h1>Bem-vindo à Minha página</h1>
      <p>Esta é uma página que conto um pouco sobre mim.</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about">
      <h2>Sobre</h2>
      <img src={ABOUT_IMAGE_URL} alt="About" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <p>Eu me chamo Ramon, sou um desenvolvedor com 3 anos de experiência em React, TypeScript e Node.</p>
      <p>Atualmente trabalho com sistemas legados usando .NET MVC5 e C#</p>
    </section>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services">
      <h2>Serviços</h2>
      <ul>
        <li>Desenvolvimento de Aplicações Web</li>
        <li>Desenvolvimento de APIs</li>
        <li>Consultoria em Tecnologia</li>
      </ul>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <p>© 2024 Ramon Sabino. Todos os direitos reservados.</p>
      <div>
        <a href="https://www.linkedin.com/in/ramon-sabino-2904a61b1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/ramonsabino" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default App;
