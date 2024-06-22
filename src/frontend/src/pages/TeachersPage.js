import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import teachersService from '../services/teachersService';
import './TeachersPage.css';

const TeachersPage = () => {
    const [teachers, setTeachers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeachers = async () => {
            const teachersData = await teachersService.getTeachers();
            setTeachers(teachersData);
        };

        fetchTeachers();
    }, []);

    return (
        <div className="teachers-page">
            <aside className="sidebar">
                <div className="profile">
                    <div className="avatar"></div>
                    <span className="username">leanderson</span>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><a onClick={() => navigate('/registered-courses')}>Cursos</a></li>
                        <li><a onClick={() => navigate('/teachers')}>Professores</a></li>
                        <li><a onClick={() => navigate('/subjects')}>Disciplinas</a></li>
                        <li><a onClick={() => navigate('/rooms')}>Salas</a></li>
                        <li><a onClick={() => navigate('/schedule')}>Horário</a></li>
                        <li><a onClick={() => navigate('/logout')}>Sair</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="main-content">
                <header>
                    <h1>Professores</h1>
                    <button className="new-teacher" onClick={() => navigate('/new-teacher')}>Novo</button>
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
                            {teachers.map(teacher => (
                                <tr key={teacher._id}>
                                    <td>#{teacher._id}</td>
                                    <td>{teacher.name}</td>
                                    <td>
                                        <button className="view" onClick={() => navigate(`/view-teacher/${teacher._id}`)}>Visualizar</button>
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

export default TeachersPage;
