import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import subjectsService from '../services/subjectsService';
import './NewSubjectRegistrationPage.css';

const NewSubjectRegistrationPage = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState({
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubject((prevSubject) => ({
      ...prevSubject,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await subjectsService.createSubject(subject);
    navigate('/subjects');
  };

  return (
    <div className="new-subject-registration-page">
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
          <h1>Nova Disciplina</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Disciplinas</a> &gt; Novo
          </nav>
        </header>
        <section>
          <form className="new-subject-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="subject-name">Nome</label>
              <input type="text" id="subject-name" name="name" placeholder="Informe o nome" value={subject.name} onChange={handleChange} />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/subjects')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewSubjectRegistrationPage;
