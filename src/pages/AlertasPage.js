// src/pages/AlertasPage.js
import React, { useState, useEffect } from 'react';
import './AlertasPage.css'; // Importa o CSS para esta página

function AlertasPage() {
    // Exemplo de alertas falsos (dados mockados) para demonstração.
    // Em uma aplicação real, esses dados viriam de uma API ou backend.
    const [alertas, setAlertas] = useState([
        {
            id: 1,
            tipo: 'Atualização do Sistema',
            titulo: 'Nova Funcionalidade: Filtro de Ocorrências Avançado',
            mensagem: 'Agora você pode filtrar ocorrências por múltiplos critérios para uma busca mais eficiente.',
            data: '2025-06-18T10:30:00', // Formato ISO 8601
            status: 'lido' // 'lido' ou 'nao-lido'
        },
        {
            id: 2,
            tipo: 'Manutenção Programada',
            titulo: 'Manutenção Essencial do Servidor',
            mensagem: 'Nossa plataforma passará por uma breve manutenção em 25/06/2025, das 02:00h às 04:00h (BRT). Agradecemos a compreensão.',
            data: '2025-06-17T15:00:00',
            status: 'nao-lido'
        },
        {
            id: 3,
            tipo: 'Melhoria de Performance',
            titulo: 'Melhorias de Velocidade no Carregamento de Dados',
            mensagem: 'Implementamos otimizações significativas que resultarão em um carregamento mais rápido das suas informações.',
            data: '2025-06-16T09:00:00',
            status: 'lido'
        },
        {
            id: 4,
            tipo: 'Aviso Importante',
            titulo: 'Novas Diretrizes de Segurança de Dados',
            mensagem: 'Por favor, revise nossas diretrizes de segurança atualizadas na seção de Suporte para garantir a proteção de suas informações.',
            data: '2025-06-15T11:45:00',
            status: 'nao-lido'
        },
        // Adicione mais alertas conforme necessário
    ]);

    // useEffect para simular carregamento de dados (opcional para este cenário, mas útil para o futuro)
    // useEffect(() => {
    //     // Aqui você faria uma chamada a uma API para buscar alertas reais
    //     // Ex: fetch('/api/alertas').then(res => res.json()).then(data => setAlertas(data));
    // }, []);

    // Função para alternar o status de um alerta (lido/não lido)
    const toggleStatus = (id) => {
        setAlertas(prevAlertas =>
            prevAlertas.map(alerta =>
                alerta.id === id ? { ...alerta, status: alerta.status === 'lido' ? 'nao-lido' : 'lido' } : alerta
            )
        );
    };

    return (
        <div className="alertas-container">
            <h1>Central de Alertas e Avisos</h1>
            <p>Fique por dentro das últimas notícias, atualizações e comunicados importantes da plataforma.</p>

            <section className="section-card alertas-list-section">
                <h2>Avisos Anteriores</h2>
                {alertas.length === 0 ? (
                    <p>Nenhum aviso disponível no momento.</p>
                ) : (
                    <div className="alertas-grid">
                        {/* Ordena os alertas do mais recente para o mais antigo antes de mapear */}
                        {[...alertas]
                            .sort((a, b) => new Date(b.data) - new Date(a.data))
                            .map(alerta => (
                                <div key={alerta.id} className={`alerta-item status-${alerta.status}`}>
                                    <div className="alerta-header">
                                        <h3>{alerta.titulo}</h3>
                                        <span className={`alerta-tag alerta-tag-${alerta.tipo.toLowerCase().replace(/\s/g, '-')}`}>
                                            {alerta.tipo}
                                        </span>
                                    </div>
                                    <p>{alerta.mensagem}</p>
                                    <div className="alerta-footer">
                                        <span className="alerta-data">
                                            {new Date(alerta.data).toLocaleString('pt-BR', { dateStyle: 'medium', timeStyle: 'short' })}
                                        </span>
                                        <button
                                            onClick={() => toggleStatus(alerta.id)}
                                            className={`btn-status ${alerta.status}`}
                                        >
                                            {alerta.status === 'lido' ? 'Marcar como Não Lido' : 'Marcar como Lido'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default AlertasPage;