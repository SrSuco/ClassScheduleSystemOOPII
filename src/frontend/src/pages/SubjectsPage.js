import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import subjectsService from '../services/subjectsService';
import './SubjectsPage.css';

const SubjectsPage = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const data = await subjectsService.getSubjects();
      setSubjects(data);
    };
    fetchSubjects();
  }, []);

  return (
    <div className="subjects-page">
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
          <h1>Disciplinas</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Disciplinas</a>
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
