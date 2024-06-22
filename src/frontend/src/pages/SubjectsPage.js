import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import subjectsService from '../services/subjectsService';
import './SubjectsPage.css';

const SubjectsPage = () => {
    const [subjects, setSubjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSubjects = async () => {
            const subjectsData = await subjectsService.getSubjects();
            setSubjects(subjectsData);
        };

        fetchSubjects();
    }, []);

    return (
        <div className="subjects-page">
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
                    <h1>Disciplinas</h1>
                    <button className="new-subject" onClick={() => navigate('/new-subject')}>Novo</button>
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
                            {subjects.map(subject => (
                                <tr key={subject._id}>
                                    <td>#{subject._id}</td>
                                    <td>{subject.name}</td>
                                    <td>
                                        <button className="view" onClick={() => navigate(`/view-subject/${subject._id}`)}>Visualizar</button>
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

export default SubjectsPage;
