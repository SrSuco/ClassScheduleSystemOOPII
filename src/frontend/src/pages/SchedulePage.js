import React from 'react';
import './SchedulePage.css';
import { Link, useNavigate } from 'react-router-dom';

const SchedulePage = () => {
  const navigate = useNavigate();

  const schedules = [
    { id: 1, time: '8:00 - 10:00', course: 'Engenharia de Software' },
    { id: 2, time: '10:00 - 12:00', course: 'Sistemas de Informação' }
  ];

  return (
    <div className="schedule-page">
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
          <h1>Horário</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <span>Horário</span>
          </nav>
          <button className="new-schedule" onClick={() => navigate('/new-schedule')}>Novo</button>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Horário</th>
                <th>Curso</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {schedules.map(schedule => (
                <tr key={schedule.id}>
                  <td>#{schedule.id}</td>
                  <td>{schedule.time}</td>
                  <td>{schedule.course}</td>
                  <td><button className="view" onClick={() => navigate(`/view-schedule/${schedule.id}`)}>Visualizar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default SchedulePage;
