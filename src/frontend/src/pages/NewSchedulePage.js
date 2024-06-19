import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import scheduleService from '../services/scheduleService';
import './NewSchedulePage.css';

const NewSchedulePage = () => {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState({
    courseName: '',
    teacherName: '',
    subjectName: '',
    roomName: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await scheduleService.createSchedule(schedule);
    navigate('/schedule');
  };

  return (
    <div className="new-schedule-page">
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
          <h1>Novo Horário</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Horário</a> &gt; Novo
          </nav>
        </header>
        <section>
          <form className="new-schedule-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="course-name">Curso</label>
              <input type="text" id="course-name" name="courseName" placeholder="Informe o curso" value={schedule.courseName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="teacher-name">Professor</label>
              <input type="text" id="teacher-name" name="teacherName" placeholder="Informe o professor" value={schedule.teacherName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="subject-name">Disciplina</label>
              <input type="text" id="subject-name" name="subjectName" placeholder="Informe a disciplina" value={schedule.subjectName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="room-name">Sala</label>
              <input type="text" id="room-name" name="roomName" placeholder="Informe a sala" value={schedule.roomName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="time">Horário</label>
              <input type="text" id="time" name="time" placeholder="Informe o horário" value={schedule.time} onChange={handleChange} />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/schedule')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewSchedulePage;
