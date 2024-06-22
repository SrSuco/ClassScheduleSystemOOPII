import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import courseService from '../services/coursesService';
import './CourseEditingPage.css';

const CourseEditingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({ name: '', description: '' });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await courseService.getCourse(id);
        setCourse(data);
      } catch (error) {
        console.error('Failed to fetch course:', error);
      }
    };
    fetchCourse();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await courseService.updateCourse(id, course);
      navigate(`/view-course/${id}`);
    } catch (error) {
      console.error('Failed to update course:', error);
    }
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
            <a href="/">Início</a> &gt; <a href="/registered-courses">Cursos</a> &gt; <a href={`/view-course/${id}`}>#{id}</a> &gt; Editar
          </nav>
        </header>
        <section>
          <form className="edit-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="course-id">ID</label>
              <input type="text" id="course-id" value={id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="course-name">Nome</label>
              <input type="text" id="course-name" name="Nome" value={course.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="course-description">Descrição</label>
              <textarea id="course-description" name="description" value={course.description} onChange={handleInputChange}></textarea>
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate(`/view-course/${id}`)}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default CourseEditingPage;
