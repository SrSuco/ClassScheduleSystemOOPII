import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import teachersService from '../services/teachersService';
import './ViewTeacherPage.css';

const ViewTeacherPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [teacher, setTeacher] = useState(null);

    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const teacherData = await teachersService.getTeacherById(id);
                setTeacher(teacherData);
            } catch (error) {
                console.error('Failed to fetch teacher:', error);
            }
        };

        fetchTeacher();
    }, [id]);

    if (!teacher) {
        return <div>Loading...</div>;
    }

    return (
        <div className="view-teacher-page">
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
                    <h1>Detalhes do Professor</h1>
                    <nav className="breadcrumb">
                        <a href="/">Início</a> &gt; <a href="/teachers">Professores</a> &gt; Detalhes
                    </nav>
                </header>
                <section>
                    <div className="teacher-details">
                        <p><strong>ID:</strong> {teacher._id}</p>
                        <p><strong>Nome:</strong> {teacher.name}</p>
                    </div>
                    <button className="btn edit" onClick={() => navigate(`/edit-teacher/${teacher._id}`)}>Editar</button>
                </section>
            </main>
        </div>
    );
};

export default ViewTeacherPage;
