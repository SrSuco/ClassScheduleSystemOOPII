import axios from 'axios';

const API_URL = 'http://localhost:5000/api/courses';

const getCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getCourse = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createCourse = async (courseData) => {
  const response = await axios.post(API_URL, courseData);
  return response.data;
};

const updateCourse = async (id, courseData) => {
  const response = await axios.put(`${API_URL}/${id}`, courseData);
  return response.data;
};

const deleteCourse = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
