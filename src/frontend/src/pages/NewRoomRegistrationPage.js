import React from 'react';
import './NewRoomRegistrationPage.css';
import { Link, useNavigate } from 'react-router-dom';

const NewRoomRegistrationPage = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Placeholder function for saving logic
    alert('Room saved');
    navigate('/rooms');
  };

  return (
    <div className="new-room-registration-page">
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
          <h1>Nova Sala</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <Link to="/rooms">Salas</Link> &gt; <span>Novo</span>
          </nav>
        </header>
        <section>
          <form className="new-room-form">
            <div className="form-group">
              <label htmlFor="room-name">Nome</label>
              <input type="text" id="room-name" placeholder="Informe o nome" />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/rooms')}>Cancelar</button>
              <button type="button" className="btn save" onClick={handleSave}>Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default NewRoomRegistrationPage;
