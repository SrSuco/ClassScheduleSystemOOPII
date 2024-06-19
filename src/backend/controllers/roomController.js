const Room = require('../models/Room');

const getRooms = async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
};

const getRoomById = async (req, res) => {
  const room = await Room.findById(req.params.id);
  res.json(room);
};

const createRoom = async (req, res) => {
  const newRoom = new Room(req.body);
  const savedRoom = await newRoom.save();
  res.status(201).json(savedRoom);
};

const updateRoom = async (req, res) => {
  const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedRoom);
};

const deleteRoom = async (req, res) => {
  await Room.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
};
