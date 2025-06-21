// src/pages/Home.js
import React from 'react';
import './Home.css'; // <--- Mantenha esta importação!

export default function Home() {
  return (
    <div className="ia-page-container">
      {/* Elementos abstratos de fundo (opcional) */}
      <div className="background-element circle1"></div>
      <div className="background-element circle2"></div>

      <div className="ia-content">
        <div className="ia-text-section">
          <div className="ia-hackathon-title-box">
            <h2>IA Preditiva: Segurança em Foco</h2> {/* Apenas "IA Preditiva: Segurança em Foco" */}
          </div>
          <h1 className="ia-title">Monitoramento Inteligente para Cidades Seguras</h1>
          <p className="ia-description">
            Transformamos dados urbanos em inteligência acionável. Nossa plataforma de IA preditiva otimiza o monitoramento e tratamento de desordens, elevando a segurança pública e a qualidade de vida nas cidades, fundamentada nos princípios da prevenção.
          </p>
          <div className="ia-buttons">
            <a href="#" className="ia-button primary">Ver Projeto</a>
            <a href="#" className="ia-button secondary">Saber Mais</a>
          </div>
        </div>

        <div className="ia-card-section">
          <div className="card-title">
            <span>Inteligência que Transforma a Segurança Urbana</span>
          </div>
          <ul className="card-question-list">
            <li>
              <h4 className="card-question-category">Sobre Ocorrências</h4>
              <ul>
                <li className="card-question-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                  Quais áreas têm maior índice de ocorrências?
                </li>
                <li className="card-question-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                  Previsão de novas desordens urbanas?
                </li>
                <li className="card-question-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                  Como otimizar a resposta policial?
                </li>
              </ul>
            </li>
            <li>
              <h4 className="card-question-category">Análise de Dados</h4>
              <ul>
                <li className="card-question-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                  Quais dados são cruciais para a IA?
                </li>
                <li className="card-question-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                  Como integrar dados de diferentes fontes?
                </li>
                <li className="card-question-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                  Monitoramento em tempo real?
                </li>
              </ul>
            </li>
            <li>
              <h4 className="card-question-category">Impacto Social</h4>
              <ul>
                <li className="card-question-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                  Como a IA melhora a vida nas cidades?
                </li>
                <li className="card-question-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                  Redução da criminalidade com IA?
                </li>
                <li className="card-question-item">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                  Papel da comunidade na coleta de dados?
                </li>
              </ul>
            </li>
          </ul>
          <div className="card-ask-me-anything">
            <input type="text" placeholder="Pergunte sobre segurança pública..." className="card-ask-input" />
            <button className="card-ask-button">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}