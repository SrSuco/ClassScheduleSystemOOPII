import React from 'react';
import './CourseEditingPage.css';

const CourseEditingPage = () => {
  return (
    <div className="course-editing-page">
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
              <button type="button" className="btn cancel">Cancelar</button>
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
