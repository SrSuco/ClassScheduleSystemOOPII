import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import teachersService from '../services/teachersService';
import './EditTeacherPage.css';

const EditTeacherPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [teacher, setTeacher] = useState({ name: '' });

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

    const handleChange = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await teachersService.updateTeacher(id, teacher);
            alert('Teacher updated successfully!');
            navigate('/teachers');
        } catch (error) {
            console.error('Failed to update teacher:', error);
        }
    };

    return (
        <div className="edit-teacher-page">
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
                    <h1>Editar Professor</h1>
                    <nav className="breadcrumb">
                        <a href="/">Início</a> &gt; <a href="/teachers">Professores</a> &gt; Editar
                    </nav>
                </header>
                <section>
                    <form className="edit-teacher-form" onSubmit={handleSave}>
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

export default EditTeacherPage;
