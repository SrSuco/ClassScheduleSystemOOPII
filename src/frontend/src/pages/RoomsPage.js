import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import roomsService from '../services/roomsService';
import './RoomsPage.css';

const RoomsPage = () => {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const roomsList = await roomsService.getRooms();
                setRooms(roomsList);
            } catch (error) {
                console.error('Failed to fetch rooms:', error);
            }
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
                        <li><a href="/registered-courses">Cursos</a></li>
                        <li><a href="/teachers">Professores</a></li>
                        <li><a href="/subjects">Disciplinas</a></li>
                        <li><a href="/rooms">Salas</a></li>
                        <li><a href="/schedule">Horário</a></li>
                        <li><a href="/logout">Sair</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="main-content">
                <header>
                    <h1>Salas</h1>
                    <button className="new-room" onClick={() => navigate('/new-room')}>Novo</button>
                </header>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Capacidade</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map(room => (
                                <tr key={room._id}>
                                    <td>#{room._id}</td>
                                    <td>{room.name}</td>
                                    <td>{room.capacity}</td>
                                    <td>
                                        <button className="view" onClick={() => navigate(`/view-room/${room._id}`)}>Visualizar</button>
                                    </td>
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
