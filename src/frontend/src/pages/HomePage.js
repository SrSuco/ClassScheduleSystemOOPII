import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar"></div>
          <span className="username">leanderson</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/registered-courses">Cursos</Link></li>
            <li><Link to="/professores">Professores</Link></li>
            <li><Link to="/disciplinas">Disciplinas</Link></li>
            <li><Link to="/salas">Salas</Link></li>
            <li><Link to="/horario">Horário</Link></li>
            <li><Link to="/sair">Sair</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1>Início</h1>
        </header>
        <section>
          <p>Início</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
