import React from 'react';
import './SubjectsPage.css';
import { Link, useNavigate } from 'react-router-dom';

const SubjectsPage = () => {
  const navigate = useNavigate();

  const subjects = [
    { id: 1, name: 'Subject A' },
    { id: 2, name: 'Subject B' }
  ];

  return (
    <div className="subjects-page">
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
          <h1>Disciplinas</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <span>Disciplinas</span>
          </nav>
          <button className="new-subject" onClick={() => navigate('/new-subject')}>Novo</button>
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
              {subjects.map(subject => (
                <tr key={subject.id}>
                  <td>#{subject.id}</td>
                  <td>{subject.name}</td>
                  <td><button className="view" onClick={() => navigate(`/view-subject/${subject.id}`)}>Visualizar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default SubjectsPage;
