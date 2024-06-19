import axios from 'axios';

const API_URL = 'http://localhost:5000/api/subjects';

const getSubjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getSubject = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createSubject = async (subject) => {
  const response = await axios.post(API_URL, subject);
  return response.data;
};

const updateSubject = async (id, subject) => {
  const response = await axios.put(`${API_URL}/${id}`, subject);
  return response.data;
};

const deleteSubject = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default {
  getSubjects,
  getSubject,
  createSubject,
  updateSubject,
  deleteSubject
};
