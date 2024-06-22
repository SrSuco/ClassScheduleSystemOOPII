import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import roomsService from '../services/roomsService';
import './ViewRoomPage.css';

const ViewRoomPage = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const roomData = await roomsService.getRoomById(id);
                setRoom(roomData);
            } catch (error) {
                console.error('Failed to fetch room:', error);
            }
        };

        fetchRoom();
    }, [id]);

    if (!room) {
        return <div>Loading...</div>;
    }

    return (
        <div className="view-room-page">
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
                    <h1>Detalhes da Sala</h1>
                    <nav className="breadcrumb">
                        <a href="/">Início</a> &gt; <a href="/rooms">Salas</a> &gt; Detalhes
                    </nav>
                </header>
                <section>
                    <div className="room-details">
                        <p><strong>ID:</strong> {room._id}</p>
                        <p><strong>Nome:</strong> {room.name}</p>
                        <p><strong>Capacidade:</strong> {room.capacity}</p>
                    </div>
                    <button className="edit-room" onClick={() => navigate(`/edit-room/${room._id}`)}>Editar</button>
                </section>
            </main>
        </div>
    );
};

export default ViewRoomPage;
