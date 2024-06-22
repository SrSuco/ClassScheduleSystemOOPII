import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import subjectsService from '../services/subjectsService';
import coursesService from '../services/coursesService';
import './EditSubjectPage.css';

const EditSubjectPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [subject, setSubject] = useState({ name: '', course: '' });
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const fetchedSubject = await subjectsService.getSubjectById(id);
                setSubject(fetchedSubject);
            } catch (error) {
                console.error('Failed to fetch subject:', error);
            }
        };

        const fetchCourses = async () => {
            try {
                const coursesData = await coursesService.getCourses();
                setCourses(coursesData);
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            }
        };

        fetchSubject();
        fetchCourses();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubject({ ...subject, [name]: value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await subjectsService.updateSubject(id, subject);
            navigate('/subjects');
        } catch (error) {
            console.error('Failed to update subject:', error);
        }
    };

    return (
        <div className="edit-subject-page">
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
                    <h1>Editar Assunto</h1>
                    <nav className="breadcrumb">
                        <a onClick={() => navigate('/')}>Início</a> &gt; <a onClick={() => navigate('/subjects')}>Assuntos</a> &gt; <span>{id}</span>
                    </nav>
                </header>
                <section className="subject-edit-form">
                    <form onSubmit={handleSave}>
                        <div className="form-group">
                            <label htmlFor="name">Nome:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={subject.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="course">Curso:</label>
                            <select
                                id="course"
                                name="course"
                                value={subject.course}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione um curso</option>
                                {courses.map((course) => (
                                    <option key={course._id} value={course._id}>
                                        {course.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="save-button">Salvar</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default EditSubjectPage;
