import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import roomsService from '../services/roomsService';
import './NewRoomRegistrationPage.css';

const NewRoomRegistrationPage = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await roomsService.createRoom(room);
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
          <h1>Nova Sala</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Salas</a> &gt; Novo
          </nav>
        </header>
        <section>
          <form className="new-room-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="room-name">Nome</label>
              <input type="text" id="room-name" name="name" placeholder="Informe o nome" value={room.name} onChange={handleChange} />
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

export default NewRoomRegistrationPage;
