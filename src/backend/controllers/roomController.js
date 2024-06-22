const Room = require('../models/roomModel.js');

const createRoom = async (req, res) => {
    const { name, capacity } = req.body;

    if (!name || !capacity) {
        return res.status(400).json({ message: 'Name and capacity are required.' });
    }

    try {
        const newRoom = new Room({ name, capacity });
        const savedRoom = await newRoom.save();
        res.status(201).json(savedRoom);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found.' });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const updateRoom = async (req, res) => {
    const { name, capacity } = req.body;
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found.' });
        }

        room.name = name || room.name;
        room.capacity = capacity || room.capacity;

        const updatedRoom = await room.save();
        res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const deleteRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found.' });
        }

        await room.remove();
        res.status(200).json({ message: 'Room deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    createRoom,
    getRooms,
    getRoomById,
    updateRoom,
    deleteRoom
};
