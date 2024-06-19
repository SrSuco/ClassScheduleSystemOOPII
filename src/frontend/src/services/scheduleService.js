import axios from 'axios';

const API_URL = 'http://localhost:5000/api/schedules';

const getSchedules = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching schedules:", error);
        throw error;
    }
};

const getSchedule = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching schedule with id ${id}:`, error);
        throw error;
    }
};

const createSchedule = async (scheduleData) => {
    try {
        const response = await axios.post(API_URL, scheduleData);
        return response.data;
    } catch (error) {
        console.error("Error creating schedule:", error);
        throw error;
    }
};

const updateSchedule = async (id, scheduleData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, scheduleData);
        return response.data;
    } catch (error) {
        console.error(`Error updating schedule with id ${id}:`, error);
        throw error;
    }
};

const deleteSchedule = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting schedule with id ${id}:`, error);
        throw error;
    }
};

export default {
    getSchedules,
    getSchedule,
    createSchedule,
    updateSchedule,
    deleteSchedule
};
