import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import scheduleService from '../services/scheduleService';
import './ViewSchedulePage.css';

const ViewSchedulePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [schedule, setSchedule] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const data = await scheduleService.getScheduleById(id);
                setSchedule(data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch schedule:', error);
                setLoading(false);
            }
        };

        fetchSchedule();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!schedule) {
        return <div>Schedule not found</div>;
    }

    return (
        <div className="view-schedule-page">
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
                    <h1>Detalhes do Horário</h1>
                    <nav className="breadcrumb">
                        <a href="/">Início</a> &gt; <a href="/schedule">Horário</a> &gt; {schedule._id}
                    </nav>
                </header>
                <section>
                    <div className="schedule-detail">
                        <div><strong>ID:</strong> {schedule._id}</div>
                        <div><strong>Curso:</strong> {schedule.course ? schedule.course.name : 'N/A'}</div>
                        <div><strong>Professor:</strong> {schedule.teacher ? schedule.teacher.name : 'N/A'}</div>
                        <div><strong>Disciplina:</strong> {schedule.subject ? schedule.subject.name : 'N/A'}</div>
                        <div><strong>Sala:</strong> {schedule.room ? schedule.room.name : 'N/A'}</div>
                        <div><strong>Horário:</strong> {schedule.time}</div>
                        <button className="edit" onClick={() => navigate(`/edit-schedule/${schedule._id}`)}>Editar</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ViewSchedulePage;
