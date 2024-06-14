import React from 'react';
import './NewCourseRegistrationPage.css';

const NewCourseRegistrationPage = () => {
  return (
    <div className="new-course-registration-page">
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
              <button type="button" className="btn cancel">Cancelar</button>
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
