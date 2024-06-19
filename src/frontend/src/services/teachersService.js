import axios from 'axios';

const API_URL = 'http://localhost:5000/api/teachers';

const getTeachers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getTeacher = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createTeacher = async (teacher) => {
  const response = await axios.post(API_URL, teacher);
  return response.data;
};

const updateTeacher = async (id, teacher) => {
  const response = await axios.put(`${API_URL}/${id}`, teacher);
  return response.data;
};

const deleteTeacher = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default {
  getTeachers,
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher
};
