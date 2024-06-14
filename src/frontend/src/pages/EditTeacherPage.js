import React, { useState } from 'react';
import './EditTeacherPage.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditTeacherPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    id: 1,
    name: 'John Doe',
  }); // This should be fetched from a data source

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Save logic here
    navigate('/teachers');
  };

  return (
    <div className="edit-teacher-page">
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
          <h1>Editar Professor</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <Link to="/teachers">Professores</Link> &gt; <span>{teacher.name}</span>
          </nav>
        </header>
        <section>
          <form className="edit-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="teacher-id">ID</label>
              <input type="text" id="teacher-id" value={teacher.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="teacher-name">Nome</label>
              <input
                type="text"
                id="teacher-name"
                name="name"
                value={teacher.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/teachers')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default EditTeacherPage;
