import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teachersService from '../services/teachersService';
import './NewTeacherRegistrationPage.css';

const NewTeacherRegistrationPage = () => {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState({
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await teachersService.createTeacher(teacher);
    navigate('/teachers');
  };

  return (
    <div className="new-teacher-registration-page">
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
          <h1>Novo Professor</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Professores</a> &gt; Novo
          </nav>
        </header>
        <section>
          <form className="new-teacher-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="teacher-name">Nome</label>
              <input type="text" id="teacher-name" name="name" placeholder="Informe o nome" value={teacher.name} onChange={handleChange} />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/teachers')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
              <button type="button" className="btn delete" onClick={() => setTeacher({ ...teacher })}>Excluir</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewTeacherRegistrationPage;
