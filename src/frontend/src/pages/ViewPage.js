import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesService from '../services/coursesService';
import './ViewPage.css';

const ViewCoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await coursesService.getCourse(id);
        setCourse(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCourse();
  }, [id]);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!course) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="view-course-page">
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
          <h1>Detalhes do Curso</h1>
          <nav className="breadcrumb">
            <a onClick={() => navigate('/')}>Início</a> &gt; <a onClick={() => navigate('/registered-courses')}>Cursos</a> &gt; <span>Detalhes</span>
          </nav>
        </header>
        <section>
          <div className="course-detail">
            <div><strong>ID:</strong> {course._id}</div>
            <div><strong>Nome:</strong> {course.name}</div>
            <div><strong>Descrição:</strong> {course.description}</div>
          </div>
          <div className="form-actions">
            <button className="btn edit" onClick={() => navigate(`/edit-course/${course._id}`)}>Editar</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ViewCoursePage;
