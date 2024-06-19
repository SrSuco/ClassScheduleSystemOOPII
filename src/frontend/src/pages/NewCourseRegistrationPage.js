import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import coursesService from '../services/coursesService';
import './NewCourseRegistrationPage.css';

const NewCourseRegistrationPage = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await coursesService.createCourse(course);
    navigate('/registered-courses');
  };

  return (
    <div className="new-course-registration-page">
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
          <h1>Novo Curso</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Cursos</a> &gt; Novo
          </nav>
        </header>
        <section>
          <form className="new-course-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="course-name">Nome</label>
              <input type="text" id="course-name" name="name" placeholder="Informe o nome" value={course.name} onChange={handleChange} />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/registered-courses')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
              <button type="button" className="btn delete" onClick={() => setCourse({ ...course })}>Excluir</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewCourseRegistrationPage;
