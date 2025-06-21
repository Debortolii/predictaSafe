// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png'; // <--- CAMINHO DA LOGO: se logo.png está em src/components/ então está certo, senão ajuste para '../logo.png' ou './logo.svg' se for o caso

function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <img src={logo} alt="Logo da Empresa" className="header-logo" />
        {/* Seu bloco de pesquisa comentado */}
        {/* <div className="search-box">
          <input type="text" placeholder="Pesquisar..." className="search-input" />
          <button className="search-button">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div> */}
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">IA</Link> {/* Link para a Home/IA */}
          </li>
         
          <li className="nav-item">
            <Link to="/ocorrencias" className="nav-link">Ocorrências</Link> {/* Ajuste se tiver página específica */}
          </li>
          <li className="nav-item">
            <Link to="/alertas" className="nav-link">Alertas</Link> {/* Ajuste se tiver página específica */}
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link">Sobre</Link> {/* Link para Sobre */}
          </li>
          {/* Adicione o link para Contato se tiver */}
          {/* <li className="nav-item">
            <Link to="/contato" className="nav-link">Contato</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;