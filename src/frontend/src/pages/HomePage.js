import React from 'react';
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
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Professores</a></li>
            <li><a href="#">Disciplinas</a></li>
            <li><a href="#">Salas</a></li>
            <li><a href="#">Horário</a></li>
            <li><a href="#">Sair</a></li>
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
