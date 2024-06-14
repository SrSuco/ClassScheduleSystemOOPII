import React from 'react';
import './ViewRoomPage.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ViewRoomPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = {
    id: 1,
    name: 'Room A',
    lastUpdate: '10/06/2024'
  }; // This should be fetched from a data source

  return (
    <div className="view-room-page">
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
          <h1>Visualizar Sala</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <Link to="/rooms">Salas</Link> &gt; <span>{room.name}</span>
          </nav>
        </header>
        <section>
          <form className="view-form">
            <div className="form-group">
              <label htmlFor="room-id">ID</label>
              <input type="text" id="room-id" value={room.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="room-name">Nome</label>
              <input type="text" id="room-name" value={room.name} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="last-update">Data da Última atualização</label>
              <input type="text" id="last-update" value={room.lastUpdate} readOnly />
            </div>
            <div className="form-actions">
              <button type="button" className="btn edit" onClick={() => navigate(`/edit-room/${id}`)}>Editar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ViewRoomPage;
