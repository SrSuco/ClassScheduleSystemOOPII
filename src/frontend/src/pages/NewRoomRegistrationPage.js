import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import roomsService from '../services/roomsService';
import './NewRoomRegistrationPage.css';

const NewRoomRegistrationPage = () => {
    const [room, setRoom] = useState({ name: '', capacity: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setRoom({ ...room, [e.target.name]: e.target.value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await roomsService.createRoom(room);
            alert('Room created successfully!');
            navigate('/rooms');
        } catch (error) {
            console.error('Failed to create room:', error);
        }
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
                    <h1>Nova Sala</h1>
                    <nav className="breadcrumb">
                        <a href="/">Início</a> &gt; <a href="/rooms">Salas</a> &gt; Novo
                    </nav>
                </header>
                <section>
                    <form className="new-room-form" onSubmit={handleSave}>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={room.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="capacity">Capacidade</label>
                            <input
                                type="number"
                                id="capacity"
                                name="capacity"
                                value={room.capacity}
                                onChange={handleChange}
                                required
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

export default NewRoomRegistrationPage;
