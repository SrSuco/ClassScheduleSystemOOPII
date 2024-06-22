import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import scheduleService from '../services/scheduleService';
import './SchedulePage.css';

const SchedulePage = () => {
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      const data = await scheduleService.getSchedules();
      setSchedules(data);
    };
    fetchSchedules();
  }, []);

  return (
    <div className="schedule-page">
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
          <h1>Horário</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Horário</a>
          </nav>
          <button className="new-schedule" onClick={() => navigate('/new-schedule')}>Novo</button>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Curso</th>
                <th>Professor</th>
                <th>Disciplina</th>
                <th>Sala</th>
                <th>Horário</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {schedules.map(schedule => (
                <tr key={schedule._id}>
                  <td>#{schedule._id}</td>
                  <td>{schedule.course.name}</td>
                  <td>{schedule.teacher.name}</td>
                  <td>{schedule.subject.name}</td>
                  <td>{schedule.room.name}</td>
                  <td>{schedule.time}</td>
                  <td><button className="view" onClick={() => navigate(`/view-schedule/${schedule._id}`)}>Visualizar</button></td>
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
