import React from 'react';
import './RegisteredCoursesPage.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisteredCoursesPage = () => {
  const navigate = useNavigate();

  const courses = [
    { id: 1, name: 'Bacharel em Engenharia de Software' },
    { id: 2, name: 'Bacharel em Sistemas de Informação' }
  ];

  return (
    <div className="registered-courses-page">
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
          <h1>Cursos</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <span>Cursos</span>
          </nav>
          <button className="new-course" onClick={() => navigate('/new-course')}>Novo</button>
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
              {courses.map(course => (
                <tr key={course.id}>
                  <td>#{course.id}</td>
                  <td>{course.name}</td>
                  <td><button className="view" onClick={() => navigate(`/view-course/${course.id}`)}>Visualizar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default RegisteredCoursesPage;
