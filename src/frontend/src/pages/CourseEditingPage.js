import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import coursesService from '../services/coursesService';
import './CourseEditingPage.css';

const CourseEditingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({
    id: '',
    name: ''
  });

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await coursesService.getCourse(id);
      setCourse(data);
    };
    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await coursesService.updateCourse(id, course);
    navigate('/registered-courses');
  };

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
          <form className="edit-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="course-id">ID</label>
              <input type="text" id="course-id" name="id" value={course.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="course-name">Nome</label>
              <input type="text" id="course-name" name="name" value={course.name} onChange={handleChange} />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/registered-courses')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
              <button type="button" className="btn edit" onClick={() => setCourse({ ...course })}>Editar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default CourseEditingPage;
