// src/pages/Sobre.js
import React from 'react';
import './Sobre.css'; // Importa o CSS para esta página

function Sobre() {
  return (
    <div className="sobre-container">
      <h1>Conheça a Nossa Missão</h1>
      <p>Inspirando mentes jovens a transformar curiosidade em conhecimento e tecnologia, construindo o amanhã.</p>

      {/* Seção Sobre a Equipe */}
      <section className="section-card sobre-equipe-section">
        <h2>Sobre a Unimate Team</h2>
<p>A Unimate Team é a renomada equipe de robótica da EEEFM Honório Fraga, uma iniciativa vibrante que tem impulsionado a inovação e a criatividade desde sua fundação em 2017. Idealizada e criada pelos professores Fabio Bigati e André Avelino, a equipe nasceu com a ambição de explorar os horizontes da tecnologia robótica e inspirar mentes jovens no universo STEM (Ciência, Tecnologia, Engenharia e Matemática).</p>
<p>O nome "Unimate" carrega um significado histórico e simbólico profundo, prestando homenagem ao primeiro robô industrial do mundo. Essa escolha reflete a essência da equipe: a fusão harmoniosa entre o avanço tecnológico e o poder do trabalho colaborativo, onde cada membro contribui com suas habilidades únicas para um objetivo comum.</p>
<p>Desde sua concepção, a Unimate Team tem se destacado em diversas competições de robótica, demonstrando consistentemente sua capacidade de superação e excelência. Um dos marcos mais significativos foi a participação no Campeonato Latino-Americano de Robótica 2024, sediado na prestigiada Campus Party São Paulo. Enfrentando um campo competitivo de mais de 40 equipes, a Unimate Team garantiu um impressionante 8º lugar na categoria de Seguidor de Linha com o seu engenhoso robô, o Zorth. Além de seus feitos em nível latino-americano, a equipe é uma presença constante e bem-sucedida no Torneio Brasil de Robótica (TBR), onde continua a aprimorar suas habilidades, aplicar novos conhecimentos e celebrar resultados expressivos, consolidando sua posição como referência na robótica educacional.</p>

<h3>A Unimate Team em 2025: Inovação em Ação</h3>
<p>Neste ano de 2025, a Unimate Team é composta por uma equipe dinâmica de 11 estudantes talentosos, selecionados a dedo a partir de seu notável desempenho em competições de tecnologia, inovação e robótica realizadas no ano anterior. Esses jovens, que se destacaram por sua paixão e habilidade, agora formam o coração da equipe, impulsionando novos projetos e desafios.</p>
<p>Nosso arsenal robótico inclui três exemplares dedicados à categoria de Seguidor de Linha: o já conhecido Zorth e os mais recentes Vendra e Rios. Destes, Vendra e Rios demonstram versatilidade adicional, sendo também habilidosos robôs perseguidores. A equipe orgulha-se ainda de possuir três robôs de Lego montados e preparados para as intensas competições da TBR (Torneio Brasil de Robótica) e OBR (Olimpíada Brasileira de Robótica), torneios nos quais a Unimate Team competirá ativamente este ano.</p>
<p>O calendário de 2025 é promissor, com a equipe se preparando para grandes desafios. Além das participações contínuas na TBR e OBR, a Unimate Team marcará presença na Campus Party Brasil, em Brasília. Este evento de destaque sediará o maior campeonato de Seguidor e Perseguidor do país, proporcionando à equipe uma valiosa oportunidade de testar seus robôs e habilidades contra os melhores do cenário nacional.</p>
      </section>

      {/* Você pode adicionar outras seções aqui, como "Nossos Valores", "Linha do Tempo", etc. */}
    </div>
  );
}

export default Sobre;