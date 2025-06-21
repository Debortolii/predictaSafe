// src/pages/OcorrenciasPage.js
import React, { useState, useEffect } from 'react'; // Importe useState e useEffect
import './OcorrenciasPage.css';

function OcorrenciasPage() {
  // Estado para armazenar as ocorrências
  // Tenta carregar do localStorage, se não houver, usa os exemplos iniciais
  const [ocorrencias, setOcorrencias] = useState(() => {
    const savedOcorrencias = localStorage.getItem('ocorrencias');
    // Adicionei 'T' para garantir que o formato de data/hora seja compatível com datetime-local
    return savedOcorrencias ? JSON.parse(savedOcorrencias) : [
      { id: 1, tipo: 'Roubo', local: 'Rua X, 123', data: '2024-06-15T10:00', status: 'Atendida' },
      { id: 2, tipo: 'Vandalismo', local: 'Praça Y', data: '2024-06-16T14:30', status: 'Em Análise' },
      { id: 3, tipo: 'Barulho Excessivo', local: 'Av. Z, 456', data: '2024-06-17T22:00', status: 'Pendente' },
    ];
  });

  // Efeito para salvar as ocorrências no localStorage sempre que elas mudarem
  useEffect(() => {
    localStorage.setItem('ocorrencias', JSON.stringify(ocorrencias));
  }, [ocorrencias]); // Dependência: executa quando 'ocorrencias' muda

  // Estado para o formulário de nova ocorrência
  const [novaOcorrencia, setNovaOcorrencia] = useState({
    tipo: '',
    local: '',
    data: '',
  });

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaOcorrencia(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Função para adicionar uma nova ocorrência
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajuste no formato da data para corresponder ao datetime-local
    const formattedDate = novaOcorrencia.data; 

    if (novaOcorrencia.tipo && novaOcorrencia.local && formattedDate) {
      const nova = {
        id: ocorrencias.length > 0 ? Math.max(...ocorrencias.map(o => o.id)) + 1 : 1, // Gera um ID único
        tipo: novaOcorrencia.tipo,
        local: novaOcorrencia.local,
        data: formattedDate,
        status: 'Pendente' 
      };
      setOcorrencias(prevOcorrencias => [...prevOcorrencias, nova]);
      setNovaOcorrencia({ tipo: '', local: '', data: '' }); 
      alert('Ocorrência adicionada com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos da ocorrência.');
    }
  };

  return (
    <div className="ocorrencias-container">
    <h1><span className="h1-text-content">Painel de Ocorrências</span></h1> {/* AQUI A MUDANÇA */}
      <p>Aqui você poderá visualizar e interagir com os dados das ocorrências em tempo real.</p>

      {/* Seção para ADICIONAR NOVA OCORRÊNCIA */}
      <section className="section-card add-ocorrencia-section">
        <h2>Adicionar Nova Ocorrência</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="tipo">Tipo:</label>
            <input
              type="text"
              id="tipo"
              name="tipo"
              value={novaOcorrencia.tipo}
              onChange={handleChange}
              placeholder="Ex: Roubo, Vandalismo, Barulho"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="local">Local:</label>
            <input
              type="text"
              id="local"
              name="local"
              value={novaOcorrencia.local}
              onChange={handleChange}
              placeholder="Ex: Rua A, Bairro C"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="data">Data e Hora:</label>
            <input
              type="datetime-local"
              id="data"
              name="data"
              value={novaOcorrencia.data}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Adicionar Ocorrência</button>
        </form>
      </section>

      {/* Seção para OCORRÊNCIAS RECENTES / DE OUTROS USUÁRIOS */}
      <section className="section-card ocorrencias-list-section">
        <h2>Ocorrências Recentes</h2>
        {ocorrencias.length === 0 ? (
          <p>Nenhuma ocorrência registrada ainda.</p>
        ) : (
          <div className="ocorrencias-grid">
            {/* Ordene as ocorrências por data, da mais nova para a mais antiga */}
            {[...ocorrencias].sort((a, b) => new Date(b.data) - new Date(a.data)).map(ocorrencia => (
              <div key={ocorrencia.id} className="ocorrencia-item">
                <h3>{ocorrencia.tipo}</h3>
                <p><strong>Local:</strong> {ocorrencia.local}</p>
                <p><strong>Data:</strong> {new Date(ocorrencia.data).toLocaleString('pt-BR')}</p>
                <p><strong>Status:</strong> <span className={`status-${ocorrencia.status.toLowerCase().replace(' ', '-')}`}>{ocorrencia.status}</span></p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Seção para VISUALIZAÇÃO DE DADOS (Ocorrências Passadas/Análise) */}
      <section className="section-card data-visualization-section">
        <h2>Análise de Ocorrências (Visão Geral)</h2>
        <p>Gráficos e estatísticas sobre ocorrências por tipo, local, período, etc., virão aqui.</p>
        {/* Aqui poderíamos integrar uma biblioteca de gráficos como Chart.js ou Recharts */}
        <div className="chart-placeholder">
          <p>[Gráfico de Ocorrências por Tipo]</p>
        </div>
        <div className="chart-placeholder">
          <p>[Gráfico de Ocorrências por Mês]</p>
        </div>
      </section>

    </div>
  );
}

export default OcorrenciasPage;