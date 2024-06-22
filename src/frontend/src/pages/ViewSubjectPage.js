import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import subjectsService from '../services/subjectsService';
import './ViewSubjectPage.css';

const ViewSubjectPage = () => {
    const { id } = useParams();
    const [subject, setSubject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const subjectData = await subjectsService.getSubjectById(id);
                setSubject(subjectData);
            } catch (error) {
                console.error('Failed to fetch subject:', error);
            }
        };

        fetchSubject();
    }, [id]);

    if (!subject) {
        return <div>Loading...</div>;
    }

    return (
        <div className="view-subject-page">
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
                    <h1>Detalhes da Matéria</h1>
                    <nav className="breadcrumb">
                        <a onClick={() => navigate('/')}>Início</a> &gt; <a onClick={() => navigate('/subjects')}>Assuntos</a> &gt; <span>{subject._id}</span>
                    </nav>
                </header>
                <section className="subject-details">
                    <div className="details-box">
                        <p><strong>ID:</strong> {subject._id}</p>
                        <p><strong>Nome:</strong> {subject.name}</p>
                        <p><strong>Curso:</strong> {subject.course.name}</p>
                    </div>
                    <button className="edit-button" onClick={() => navigate(`/edit-subject/${subject._id}`)}>Editar</button>
                </section>
            </main>
        </div>
    );
};

export default ViewSubjectPage;
