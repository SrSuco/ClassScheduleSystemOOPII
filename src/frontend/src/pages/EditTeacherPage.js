import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import teachersService from '../services/teachersService';
import './EditTeacherPage.css';

const TeacherEditingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [teacher, setTeacher] = useState({
    id: '',
    name: ''
  });

  useEffect(() => {
    const fetchTeacher = async () => {
      const data = await teachersService.getTeacher(id);
      setTeacher(data);
    };
    fetchTeacher();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await teachersService.updateTeacher(id, teacher);
    navigate('/teachers');
  };

  return (
    <div className="teacher-editing-page">
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
          <h1>Editar Professor</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Professores</a> &gt; <a href="#">#1</a> &gt; Editar
          </nav>
        </header>
        <section>
          <form className="edit-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="teacher-id">ID</label>
              <input type="text" id="teacher-id" name="id" value={teacher.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="teacher-name">Nome</label>
              <input type="text" id="teacher-name" name="name" value={teacher.name} onChange={handleChange} />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/teachers')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
              <button type="button" className="btn edit" onClick={() => setTeacher({ ...teacher })}>Editar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default TeacherEditingPage;
