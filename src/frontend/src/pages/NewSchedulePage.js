import React, { useState, useEffect } from 'react';
import coursesService from '../services/coursesService';
import teachersService from '../services/teachersService';
import subjectsService from '../services/subjectsService';
import roomsService from '../services/roomsService';
import scheduleService from '../services/scheduleService';
import './NewSchedulePage.css';

const NewSchedulePage = () => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [schedule, setSchedule] = useState({
    course: '',
    teacher: '',
    subject: '',
    room: '',
    time: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await coursesService.getCourses();
      const teachersData = await teachersService.getTeachers();
      const subjectsData = await subjectsService.getSubjects();
      const roomsData = await roomsService.getRooms();
      setCourses(coursesData);
      setTeachers(teachersData);
      setSubjects(subjectsData);
      setRooms(roomsData);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await scheduleService.createSchedule(schedule);
      alert('Schedule created successfully!');
    } catch (error) {
      console.error('Failed to create schedule:', error);
    }
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
            <li><a href="/registered-courses">Cursos</a></li>
            <li><a href="/teachers">Professores</a></li>
            <li><a href="/subjects">Disciplinas</a></li>
            <li><a href="/rooms">Salas</a></li>
            <li><a href="/schedule">Horário</a></li>
            <li><a href="/logout">Sair</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1>Novo Horário</h1>
          <nav className="breadcrumb">
            <a href="/">Início</a> &gt; <a href="/schedule">Horário</a> &gt; Novo
          </nav>
        </header>
        <section>
          <form className="new-schedule-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="course">Curso</label>
              <select id="course" name="course" value={schedule.course} onChange={handleChange} required>
                <option value="">Selecione um curso</option>
                {courses.map(course => (
                  <option key={course._id} value={course._id}>{course.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="teacher">Professor</label>
              <select id="teacher" name="teacher" value={schedule.teacher} onChange={handleChange} required>
                <option value="">Selecione um professor</option>
                {teachers.map(teacher => (
                  <option key={teacher._id} value={teacher._id}>{teacher.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Disciplina</label>
              <select id="subject" name="subject" value={schedule.subject} onChange={handleChange} required>
                <option value="">Selecione uma disciplina</option>
                {subjects.map(subject => (
                  <option key={subject._id} value={subject._id}>{subject.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="room">Sala</label>
              <select id="room" name="room" value={schedule.room} onChange={handleChange} required>
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
              <button type="button" className="btn cancel">Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewSchedulePage;
