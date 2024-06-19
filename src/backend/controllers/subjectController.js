const Subject = require('../models/Subject');

const getSubjects = async (req, res) => {
  const subjects = await Subject.find();
  res.json(subjects);
};

const getSubjectById = async (req, res) => {
  const subject = await Subject.findById(req.params.id);
  res.json(subject);
};

const createSubject = async (req, res) => {
  const newSubject = new Subject(req.body);
  const savedSubject = await newSubject.save();
  res.status(201).json(savedSubject);
};

const updateSubject = async (req, res) => {
  const updatedSubject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedSubject);
};

const deleteSubject = async (req, res) => {
  await Subject.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {
  getSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject
};
