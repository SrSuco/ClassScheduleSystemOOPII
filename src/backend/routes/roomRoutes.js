const express = require('express');
const {
  getRooms,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom
} = require('../controllers/roomController');

const router = express.Router();

router.route('/')
  .get(getRooms)
  .post(createRoom);

router.route('/:id')
  .get(getRoomById)
  .put(updateRoom)
  .delete(deleteRoom);

module.exports = router;
