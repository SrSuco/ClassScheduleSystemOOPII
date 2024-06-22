import axios from 'axios';

const API_URL = 'http://localhost:5000/api/teachers';

const getTeachers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const getTeacherById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

const createTeacher = async (teacherData) => {
    const response = await axios.post(API_URL, teacherData);
    return response.data;
};

const updateTeacher = async (id, teacherData) => {
    const response = await axios.put(`${API_URL}/${id}`, teacherData);
    return response.data;
};

const deleteTeacher = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export default {
    getTeachers,
    getTeacherById,
    createTeacher,
    updateTeacher,
    deleteTeacher
};
