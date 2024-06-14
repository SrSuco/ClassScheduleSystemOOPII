import React from 'react';
import './NewSubjectRegistrationPage.css';
import { Link, useNavigate } from 'react-router-dom';

const NewSubjectRegistrationPage = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Placeholder function for saving logic
    alert('Subject saved');
    navigate('/subjects');
  };

  return (
    <div className="new-subject-registration-page">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar"></div>
          <span className="username">leanderson</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/registered-courses">Cursos</Link></li>
            <li><Link to="/teachers">Professores</Link></li>
            <li><Link to="/subjects">Disciplinas</Link></li>
            <li><Link to="/rooms">Salas</Link></li>
            <li><Link to="/schedule">Horário</Link></li>
            <li><Link to="/logout">Sair</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1>Nova Disciplina</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <Link to="/subjects">Disciplinas</Link> &gt; <span>Novo</span>
          </nav>
        </header>
        <section>
          <form className="new-subject-form">
            <div className="form-group">
              <label htmlFor="subject-name">Nome</label>
              <input type="text" id="subject-name" placeholder="Informe o nome" />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/subjects')}>Cancelar</button>
              <button type="button" className="btn save" onClick={handleSave}>Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewSubjectRegistrationPage;
