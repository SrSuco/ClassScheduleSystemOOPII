import React from 'react';
import './NewCourseRegistrationPage.css';
import { useNavigate } from 'react-router-dom';

const NewCourseRegistrationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="new-course-registration-page">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar"></div>
          <span className="username">leanderson</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><a onClick={() => navigate('/registered-courses')}>Cursos</a></li>
            <li><a onClick={() => navigate('/teachers')}>Professores</a></li>
            <li><a onClick={() => navigate('/subjects')}>Disciplinas</a></li>
            <li><a onClick={() => navigate('/rooms')}>Salas</a></li>
            <li><a onClick={() => navigate('/schedule')}>Horário</a></li>
            <li><a onClick={() => navigate('/logout')}>Sair</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1>Novo Curso</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Cursos</a> &gt; Novo
          </nav>
        </header>
        <section>
          <form className="new-course-form">
            <div className="form-group">
              <label htmlFor="course-name">Nome</label>
              <input type="text" id="course-name" placeholder="Informe o nome" />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/registered-courses')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
              <button type="button" className="btn delete">Excluir</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewCourseRegistrationPage;
