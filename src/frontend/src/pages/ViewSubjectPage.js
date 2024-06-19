import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import subjectsService from '../services/subjectsService';
import './ViewSubjectPage.css';

const ViewSubjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subject, setSubject] = useState({
    id: '',
    name: '',
    lastUpdate: ''
  });

  useEffect(() => {
    const fetchSubject = async () => {
      const data = await subjectsService.getSubject(id);
      setSubject(data);
    };
    fetchSubject();
  }, [id]);

  return (
    <div className="view-subject-page">
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
          <h1>Visualizar Disciplina</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Disciplinas</a> &gt; <a href="#">#{subject.id}</a>
          </nav>
        </header>
        <section>
          <form className="view-form">
            <div className="form-group">
              <label htmlFor="subject-id">ID</label>
              <input type="text" id="subject-id" value={subject.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="subject-name">Nome</label>
              <input type="text" id="subject-name" value={subject.name} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="last-update">Data da Última atualização</label>
              <input type="text" id="last-update" value={subject.lastUpdate} readOnly />
            </div>
            <div className="form-actions">
              <button type="button" className="btn edit" onClick={() => navigate(`/edit-subject/${subject.id}`)}>Editar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ViewSubjectPage;
