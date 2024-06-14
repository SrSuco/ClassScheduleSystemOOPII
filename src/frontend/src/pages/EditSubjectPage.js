import React, { useState } from 'react';
import './EditSubjectPage.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditSubjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [subject, setSubject] = useState({
    id: 1,
    name: 'Mathematics',
  }); // This should be fetched from a data source

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubject((prevSubject) => ({
      ...prevSubject,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Save logic here
    navigate('/subjects');
  };

  return (
    <div className="edit-subject-page">
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
          <h1>Editar Disciplina</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <Link to="/subjects">Disciplinas</Link> &gt; <span>{subject.name}</span>
          </nav>
        </header>
        <section>
          <form className="edit-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="subject-id">ID</label>
              <input type="text" id="subject-id" value={subject.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="subject-name">Nome</label>
              <input
                type="text"
                id="subject-name"
                name="name"
                value={subject.name}
                onChange={handleChange}
              />
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

export default EditSubjectPage;
