const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  number: {
    type: String,
    required: [true, 'Please add a room number'],
  },
  building: {
    type: String,
  },
  capacity: {
    type: Number,
  },
});

module.exports = mongoose.model('Room', RoomSchema);
