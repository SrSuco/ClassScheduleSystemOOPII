import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import roomsService from '../services/roomsService';
import './EditRoomPage.css';

const RoomEditingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [room, setRoom] = useState({
    id: '',
    name: ''
  });

  useEffect(() => {
    const fetchRoom = async () => {
      const data = await roomsService.getRoom(id);
      setRoom(data);
    };
    fetchRoom();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await roomsService.updateRoom(id, room);
    navigate('/rooms');
  };

  return (
    <div className="room-editing-page">
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
          <h1>Editar Sala</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Salas</a> &gt; <a href="#">#{room.id}</a> &gt; Editar
          </nav>
        </header>
        <section>
          <form className="edit-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="room-id">ID</label>
              <input type="text" id="room-id" name="id" value={room.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="room-name">Nome</label>
              <input type="text" id="room-name" name="name" value={room.name} onChange={handleChange} />
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

export default RoomEditingPage;
