import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teachersService from '../services/teachersService';
import './NewTeacherRegistrationPage.css';

const NewTeacherRegistrationPage = () => {
    const [teacher, setTeacher] = useState({ name: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await teachersService.createTeacher(teacher);
            alert('Teacher created successfully!');
            navigate('/teachers');
        } catch (error) {
            console.error('Failed to create teacher:', error);
        }
    };

    return (
        <div className="new-teacher-registration-page">
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
                    <h1>Novo Professor</h1>
                    <nav className="breadcrumb">
                        <a href="/">Início</a> &gt; <a href="/teachers">Professores</a> &gt; Novo
                    </nav>
                </header>
                <section>
                    <form className="new-teacher-form" onSubmit={handleSave}>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={teacher.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-actions">
                            <button type="button" className="btn cancel" onClick={() => navigate('/teachers')}>Cancelar</button>
                            <button type="submit" className="btn save">Salvar</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default NewTeacherRegistrationPage;
