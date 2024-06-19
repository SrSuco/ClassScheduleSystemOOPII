import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import roomsService from '../services/roomsService';
import './RoomsPage.css';

const RoomsPage = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await roomsService.getRooms();
      setRooms(data);
    };
    fetchRooms();
  }, []);

  return (
    <div className="rooms-page">
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
          <h1>Salas</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Salas</a>
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
