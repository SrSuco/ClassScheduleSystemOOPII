import React from 'react';
import './CourseEditingPage.css';
import { useNavigate } from 'react-router-dom';

const CourseEditingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="course-editing-page">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar"></div>
          <span className="username">leanderson</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><button onClick={() => navigate('/registered-courses')}>Cursos</button></li>
            <li><button onClick={() => navigate('/teachers')}>Professores</button></li>
            <li><button onClick={() => navigate('/subjects')}>Disciplinas</button></li>
            <li><button onClick={() => navigate('/rooms')}>Salas</button></li>
            <li><button onClick={() => navigate('/schedule')}>Horário</button></li>
            <li><button onClick={() => navigate('/logout')}>Sair</button></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1>Editar Curso</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Cursos</a> &gt; <a href="#">#1</a> &gt; Editar
          </nav>
        </header>
        <section>
          <form className="edit-form">
            <div className="form-group">
              <label htmlFor="course-id">ID</label>
              <input type="text" id="course-id" value="1" readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="course-name">Nome</label>
              <input type="text" id="course-name" value="Bacharel em Engenharia de Software" />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/registered-courses')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
              <button type="button" className="btn edit">Editar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default CourseEditingPage;
