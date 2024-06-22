import axios from 'axios';

const API_URL = 'http://localhost:5000/api/schedule';

const getSchedules = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const createSchedule = async (scheduleData) => {
    const response = await axios.post(API_URL, scheduleData);
    return response.data;
};

const getScheduleById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

const updateSchedule = async (id, scheduleData) => {
    const response = await axios.put(`${API_URL}/${id}`, scheduleData);
    return response.data;
};

const deleteSchedule = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export default {
    getSchedules,
    createSchedule,
    getScheduleById,
    updateSchedule,
    deleteSchedule
};
