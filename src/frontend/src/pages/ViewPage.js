import React from 'react';
import { Link } from 'react-router-dom';
import './ViewPage.css';

const ViewPage = () => {
  return (
    <div className="view-page">
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
          <h1>Visualizar Curso</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <Link to="/registered-courses">Cursos</Link> &gt; <Link to="/view-course">#1</Link>
          </nav>
        </header>
        <section>
          <form className="view-form">
            <div className="form-group">
              <label htmlFor="course-id">ID</label>
              <input type="text" id="course-id" value="1" readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="course-name">Nome</label>
              <input type="text" id="course-name" value="Bacharel em Engenharia de Software" readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="last-update">Data da Última atualização</label>
              <input type="text" id="last-update" value="10/06/2024" readOnly />
            </div>
            <div className="form-actions">
              <Link to="/edit-course" className="btn edit">Editar</Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ViewPage;
