import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import subjectsService from '../services/subjectsService';
import './EditSubjectPage.css';

const SubjectEditingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [subject, setSubject] = useState({
    id: '',
    name: ''
  });

  useEffect(() => {
    const fetchSubject = async () => {
      const data = await subjectsService.getSubject(id);
      setSubject(data);
    };
    fetchSubject();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubject((prevSubject) => ({
      ...prevSubject,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await subjectsService.updateSubject(id, subject);
    navigate('/subjects');
  };

  return (
    <div className="subject-editing-page">
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
          <h1>Editar Disciplina</h1>
          <nav className="breadcrumb">
            <a href="#">Início</a> &gt; <a href="#">Disciplinas</a> &gt; <a href="#">#{subject.id}</a> &gt; Editar
          </nav>
        </header>
        <section>
          <form className="edit-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="subject-id">ID</label>
              <input type="text" id="subject-id" name="id" value={subject.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="subject-name">Nome</label>
              <input type="text" id="subject-name" name="name" value={subject.name} onChange={handleChange} />
            </div>
            <div className="form-actions">
              <button type="button" className="btn cancel" onClick={() => navigate('/subjects')}>Cancelar</button>
              <button type="submit" className="btn save">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SubjectEditingPage;
