import React from 'react';
import './TeachersPage.css';
import { Link, useNavigate } from 'react-router-dom';

const TeachersPage = () => {
  const navigate = useNavigate();

  const teachers = [
    { id: 1, name: 'Professor A' },
    { id: 2, name: 'Professor B' }
  ];

  return (
    <div className="teachers-page">
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
          <h1>Professores</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <span>Professores</span>
          </nav>
          <button className="new-teacher" onClick={() => navigate('/new-teacher')}>Novo</button>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {teachers.map(teacher => (
                <tr key={teacher.id}>
                  <td>#{teacher.id}</td>
                  <td>{teacher.name}</td>
                  <td><button className="view" onClick={() => navigate(`/view-teacher/${teacher.id}`)}>Visualizar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default TeachersPage;
