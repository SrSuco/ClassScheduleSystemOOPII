import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import subjectsService from '../services/subjectsService';
import coursesService from '../services/coursesService';
import './NewSubjectRegistrationPage.css';

const NewSubjectRegistrationPage = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCourses = async () => {
            const coursesData = await coursesService.getCourses();
            setCourses(coursesData);
        };

        fetchCourses();
    }, []);

    const handleSave = async () => {
        try {
            await subjectsService.createSubject({ name, course });
            navigate('/subjects');
        } catch (error) {
            console.error('Failed to create subject:', error);
        }
    };

    return (
        <div className="new-subject-registration-page">
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
                    <h1>Novo Assunto</h1>
                </header>
                <section>
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="course">Curso:</label>
                        <select
                            id="course"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                        >
                            <option value="">Selecione um curso</option>
                            {courses.map(course => (
                                <option key={course._id} value={course._id}>{course.name}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={handleSave}>Salvar</button>
                </section>
            </main>
        </div>
    );
};

export default NewSubjectRegistrationPage;
