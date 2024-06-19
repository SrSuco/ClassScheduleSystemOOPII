const Teacher = require('../models/Teacher');

const getTeachers = async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
};

const getTeacherById = async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  res.json(teacher);
};

const createTeacher = async (req, res) => {
  const newTeacher = new Teacher(req.body);
  const savedTeacher = await newTeacher.save();
  res.status(201).json(savedTeacher);
};

const updateTeacher = async (req, res) => {
  const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTeacher);
};

const deleteTeacher = async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {
  getTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher
};
