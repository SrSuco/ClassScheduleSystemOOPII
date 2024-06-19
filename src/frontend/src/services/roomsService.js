import axios from 'axios';

const API_URL = 'http://localhost:5000/api/rooms';

const getRooms = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getRoom = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createRoom = async (room) => {
  const response = await axios.post(API_URL, room);
  return response.data;
};

const updateRoom = async (id, room) => {
  const response = await axios.put(`${API_URL}/${id}`, room);
  return response.data;
};

const deleteRoom = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom
};
