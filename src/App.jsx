import React from 'react';
import './App.css';

// Lembre-se de que suas imagens devem estar na pasta 'src/assets'
// e com os nomes corretos, ou ajuste os nomes aqui.
import meuLogo from './assets/minha-logo.png';
import studentsImage from './assets/students.png';
import appMockupImage from './assets/app-mockup.png';
import campusUfersaImage from './assets/campus-ufersa.png';


// --- COMPONENTES DE ÍCONES ---
const AppStoreBadge = () => (<a href="#" aria-label="Baixar na App Store"><img className="store-badge" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>);
const GooglePlayBadge = () => (<a href="#" aria-label="Disponível no Google Play"><img className="store-badge" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" /></a>);
const FeatureIcon = ({ children }) => <div className="feature-item-icon">{children}</div>;


function App() {
  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="container">
          <a href="/" aria-label="Página Inicial ASA">
            <img src={meuLogo} alt="Logo do App" className="logo-asa" />
          </a>
          <nav className="main-nav">
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#sobre">Sobre o ASA</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-text">
              <h1>Realize seu agendamento com um profissional</h1>
              <p>
                A plataforma ASA agora na palma da sua mão. Baixe o aplicativo e tenha acesso
                simplificado a psicólogos, pedagogos e outros profissionais da Ufersa.
              </p>
              <div className="app-store-buttons">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
            </div>
            <div className="hero-image">
              <img src={studentsImage} alt="Estudantes universitários" />
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="app-features-section">
          <div className="container">
            <div className="phone-mockup">
              <img src={appMockupImage} alt="Aplicativo ASA em um smartphone" />
            </div>
            <div className="features-list">
              <h2>Tudo o que você precisa, em um só lugar.</h2>
              <ul>
                <li className="feature-item">
                  <FeatureIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></FeatureIcon>
                  <div className="feature-item-text">
                    <h3>Agendamento Fácil</h3>
                    <p>Veja os horários livres e marque sua consulta com apenas alguns toques.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <FeatureIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></FeatureIcon>
                  <div className="feature-item-text">
                    <h3>Lembretes e Notificações</h3>
                    <p>Receba alertas para não se esquecer de nenhum compromisso importante.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <FeatureIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></FeatureIcon>
                  <div className="feature-item-text">
                    <h3>Acompanhe seu Histórico</h3>
                    <p>Acesse facilmente o registro de todos os seus agendamentos passados.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="sobre" className="info-section">
          <div className="container">
            <div className="info-main-image">
              <img src={campusUfersaImage} alt="Campus da Ufersa" />
            </div>
            <div className="info-text">
              <h2>Bem-vindo e conheça o sistema ASA</h2>
              <p>
                A Universidade Federal Rural do Semi-Árido (Ufersa) campus Pau dos Ferros em
                conjunto com a Coordenadoria de Assuntos Estudantis (COAE) compartilham e
                promovem a gestão dos serviços voltados à assistência estudantil.
              </p>
              <p>
                O Agendamento de Serviços Acadêmicos (ASA) centraliza os serviços em um só
                local, facilitando o acesso aos profissionais e tornando o processo de agendamento
                mais transparente e atrativo para os universitários.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <span>
            UFERSA | 
            <a href="https://github.com/liviabeatrizml/sistema-asa" target="_blank" rel="noopener noreferrer">
              Repositório
            </a>
          </span>
          <span>Agendamento de Serviços Acadêmicos - ASA | v1.0.0</span>
        </div>
      </footer>
    </div>
  );
}

export default App;