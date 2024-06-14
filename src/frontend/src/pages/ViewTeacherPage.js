import React from 'react';
import './ViewTeacherPage.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ViewTeacherPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const teacher = {
    id: 1,
    name: 'John Doe',
    lastUpdate: '10/06/2024'
  }; // This should be fetched from a data source

  return (
    <div className="view-teacher-page">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar"></div>
          <span className="username">leanderson</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/registered-courses">Cursos</Link></li>
            <li><Link to="/teachers">Professores</Link></li>
            <li><Link to="/subjects">Disciplinas</Link></li>
            <li><Link to="/rooms">Salas</Link></li>
            <li><Link to="/schedule">Horário</Link></li>
            <li><Link to="/logout">Sair</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1>Visualizar Professor</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <Link to="/teachers">Professores</Link> &gt; <span>{teacher.name}</span>
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
              <button type="button" className="btn edit" onClick={() => navigate(`/edit-teacher/${id}`)}>Editar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ViewTeacherPage;
