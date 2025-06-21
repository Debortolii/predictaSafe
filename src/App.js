// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Certifique-se de que este caminho está correto
import Home from './pages/Home'; // Certifique-se de que este caminho está correto
import Contato from './pages/Contato'; // Certifique-se de que este caminho está correto
import Sobre from './pages/Sobre'; // Certifique-se de que este caminho está correto
import OcorrenciasPage from './pages/OcorrenciasPage'; // Certifique-se de que este caminho está correto
import AlertasPage from './pages/AlertasPage'; // Importe a nova página de Alertas

// Se você tiver um arquivo App.css global e quiser usá-lo, descomente a linha abaixo.
// import './App.css'; 

export default function App() {
  return (
    <Router> 
      {/* O componente Header (seu menu de navegação) vai aqui */}
      <Header />

      {/* As rotas da sua aplicação */}
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />

        {/* Rota para a página de Ocorrências */}
        <Route path="/ocorrencias" element={<OcorrenciasPage />} /> 

        {/* Rota para a nova página de Alertas */}
        <Route path="/alertas" element={<AlertasPage />} />

        {/* Rotas para as páginas Sobre e Contato */}
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

        {/* Rotas que estão comentadas porque você ainda não as criou ou não as está usando */}
        {/* Descomente e adicione os imports correspondentes quando criá-los */}
        {/* <Route path="/ia" element={<IAPage />} /> */} 
        {/* <Route path="/painel" element={<PainelPage />} /> */}
        {/* <Route path="/mapa" element={<MapPage />} /> */} 

      </Routes>
    </Router>
  );
}