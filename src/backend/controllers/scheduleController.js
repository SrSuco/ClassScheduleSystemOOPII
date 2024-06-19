const Schedule = require('../models/Schedule');

const getSchedules = async (req, res) => {
  const schedules = await Schedule.find();
  res.json(schedules);
};

const getScheduleById = async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  res.json(schedule);
};

const createSchedule = async (req, res) => {
  const newSchedule = new Schedule(req.body);
  const savedSchedule = await newSchedule.save();
  res.status(201).json(savedSchedule);
};

const updateSchedule = async (req, res) => {
  const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedSchedule);
};

const deleteSchedule = async (req, res) => {
  await Schedule.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {
  getSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule
};
