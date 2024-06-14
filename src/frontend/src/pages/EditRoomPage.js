import React, { useState } from 'react';
import './EditRoomPage.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditRoomPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState({
    id: 1,
    name: 'Room A',
  }); // This should be fetched from a data source

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Save logic here
    navigate('/rooms');
  };

  return (
    <div className="edit-room-page">
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
          <h1>Editar Sala</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <Link to="/rooms">Salas</Link> &gt; <span>{room.name}</span>
          </nav>
        </header>
        <section>
          <form className="edit-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="room-id">ID</label>
              <input type="text" id="room-id" value={room.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="room-name">Nome</label>
              <input
                type="text"
                id="room-name"
                name="name"
                value={room.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/rooms')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default EditRoomPage;
