import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import scheduleService from '../services/scheduleService';
import subjectsService from '../services/subjectsService';
import teachersService from '../services/teachersService';
import roomsService from '../services/roomsService';
import './EditSchedulePage.css';

const EditSchedulePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState({ subject: '', teacher: '', room: '', time: '' });
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [scheduleData, subjectsList, teachersList, roomsList] = await Promise.all([
          scheduleService.getScheduleById(id),
          subjectsService.getSubjects(),
          teachersService.getTeachers(),
          roomsService.getRooms()
        ]);
        setSchedule(scheduleData);
        setSubjects(subjectsList);
        setTeachers(teachersList);
        setRooms(roomsList);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await scheduleService.updateSchedule(id, schedule);
      navigate('/schedule');
    } catch (error) {
      console.error('Failed to update schedule:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-schedule-page">
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
          <h1>Editar Horário</h1>
          <nav className="breadcrumb">
            <a href="/">Início</a> &gt; <a href="/schedule">Horário</a> &gt; Editar
          </nav>
        </header>
        <section>
          <form className="edit-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="subject">Disciplina</label>
              <select
                id="subject"
                name="subject"
                value={schedule.subject}
                onChange={handleChange}
                required
              >
                <option value="">Selecione uma disciplina</option>
                {subjects.map(subject => (
                  <option key={subject._id} value={subject._id}>{subject.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="teacher">Professor</label>
              <select
                id="teacher"
                name="teacher"
                value={schedule.teacher}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um professor</option>
                {teachers.map(teacher => (
                  <option key={teacher._id} value={teacher._id}>{teacher.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="room">Sala</label>
              <select
                id="room"
                name="room"
                value={schedule.room}
                onChange={handleChange}
                required
              >
                <option value="">Selecione uma sala</option>
                {rooms.map(room => (
                  <option key={room._id} value={room._id}>{room.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="time">Horário</label>
              <input
                type="text"
                id="time"
                name="time"
                value={schedule.time}
                onChange={handleChange}
                required
              />
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

export default EditSchedulePage;
