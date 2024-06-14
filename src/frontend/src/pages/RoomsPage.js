import React from 'react';
import './RoomsPage.css';
import { Link, useNavigate } from 'react-router-dom';

const RoomsPage = () => {
  const navigate = useNavigate();

  const rooms = [
    { id: 1, name: 'Room A' },
    { id: 2, name: 'Room B' }
  ];

  return (
    <div className="rooms-page">
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
          <h1>Salas</h1>
          <nav className="breadcrumb">
            <Link to="/">Início</Link> &gt; <span>Salas</span>
          </nav>
          <button className="new-room" onClick={() => navigate('/new-room')}>Novo</button>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rooms.map(room => (
                <tr key={room.id}>
                  <td>#{room.id}</td>
                  <td>{room.name}</td>
                  <td><button className="view" onClick={() => navigate(`/view-room/${room.id}`)}>Visualizar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default RoomsPage;
