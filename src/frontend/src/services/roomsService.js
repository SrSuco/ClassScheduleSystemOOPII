import axios from 'axios';

const API_URL = 'http://localhost:5000/api/rooms';

const getRooms = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const getRoomById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

const createRoom = async (roomData) => {
    const response = await axios.post(API_URL, roomData);
    return response.data;
};

const updateRoom = async (id, roomData) => {
    const response = await axios.put(`${API_URL}/${id}`, roomData);
    return response.data;
};

const deleteRoom = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export default {
    getRooms,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom
};
