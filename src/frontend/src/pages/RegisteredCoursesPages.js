import React from 'react';
import './RegisteredCoursesPage.css';

const RegisteredCoursesPage = () => {
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
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Professores</a></li>
            <li><a href="#">Disciplinas</a></li>
            <li><a href="#">Salas</a></li>
            <li><a href="#">Horário</a></li>
            <li><a href="#">Sair</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1>Cursos</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; Cursos
          </nav>
          <button className="btn new-course">Novo</button>
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
                  <td><button className="btn view">Visualizar</button></td>
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
