import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import teachersService from '../services/teachersService';
import './ViewTeacherPage.css';

const ViewTeacherPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState({
    id: '',
    name: '',
    lastUpdate: ''
  });

  useEffect(() => {
    const fetchTeacher = async () => {
      const data = await teachersService.getTeacher(id);
      setTeacher(data);
    };
    fetchTeacher();
  }, [id]);

  return (
    <div className="view-teacher-page">
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
          <h1>Visualizar Professor</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Professores</a> &gt; <a href="#">#{teacher.id}</a>
          </nav>
        </header>
        <section>
          <form className="view-form">
            <div className="form-group">
              <label htmlFor="teacher-id">ID</label>
              <input type="text" id="teacher-id" value={teacher.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="teacher-name">Nome</label>
              <input type="text" id="teacher-name" value={teacher.name} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="last-update">Data da Última atualização</label>
              <input type="text" id="last-update" value={teacher.lastUpdate} readOnly />
            </div>
            <div className="form-actions">
              <button type="button" className="btn edit" onClick={() => navigate(`/edit-teacher/${teacher.id}`)}>Editar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ViewTeacherPage;
