const Room = require('../models/roomModel');

// Get all rooms
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new room
const createRoom = async (req, res) => {
  try {
    const { name, capacity } = req.body;
    const room = new Room({ name, capacity });
    const createdRoom = await room.save();
    res.status(201).json(createdRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single room by ID
const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room) {
      res.json(room);
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a room by ID
const updateRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room) {
      room.name = req.body.name || room.name;
      room.capacity = req.body.capacity || room.capacity;

      const updatedRoom = await room.save();
      res.json(updatedRoom);
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a room by ID
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room) {
      await room.remove();
      res.json({ message: 'Room removed' });
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRooms,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom
};
