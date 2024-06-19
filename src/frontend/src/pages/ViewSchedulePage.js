import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import scheduleService from '../services/scheduleService';
import './ViewSchedulePage.css';

const ViewSchedulePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState({
    id: '',
    courseName: '',
    teacherName: '',
    subjectName: '',
    roomName: '',
    time: '',
    lastUpdate: ''
  });

  useEffect(() => {
    const fetchSchedule = async () => {
      const data = await scheduleService.getSchedule(id);
      setSchedule(data);
    };
    fetchSchedule();
  }, [id]);

  return (
    <div className="view-schedule-page">
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
          <h1>Visualizar Horário</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Horário</a> &gt; <a href="#">#{schedule.id}</a>
          </nav>
        </header>
        <section>
          <form className="view-form">
            <div className="form-group">
              <label htmlFor="schedule-id">ID</label>
              <input type="text" id="schedule-id" value={schedule.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="course-name">Curso</label>
              <input type="text" id="course-name" value={schedule.courseName} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="teacher-name">Professor</label>
              <input type="text" id="teacher-name" value={schedule.teacherName} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="subject-name">Disciplina</label>
              <input type="text" id="subject-name" value={schedule.subjectName} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="room-name">Sala</label>
              <input type="text" id="room-name" value={schedule.roomName} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="time">Horário</label>
              <input type="text" id="time" value={schedule.time} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="last-update">Data da Última atualização</label>
              <input type="text" id="last-update" value={schedule.lastUpdate} readOnly />
            </div>
            <div className="form-actions">
              <button type="button" className="btn edit" onClick={() => navigate(`/edit-schedule/${schedule.id}`)}>Editar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ViewSchedulePage;
