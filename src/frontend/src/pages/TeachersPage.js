import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teachersService from '../services/teachersService';
import './TeachersPage.css';

const TeachersPage = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const data = await teachersService.getTeachers();
      setTeachers(data);
    };
    fetchTeachers();
  }, []);

  return (
    <div className="teachers-page">
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
          <h1>Professores</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Professores</a>
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
