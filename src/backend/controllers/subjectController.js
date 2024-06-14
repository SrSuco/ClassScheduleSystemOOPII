const Subject = require('../models/subjectModel');

// Get all subjects
const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find({});
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new subject
const createSubject = async (req, res) => {
  try {
    const { name, teacher } = req.body;
    const subject = new Subject({ name, teacher });
    const createdSubject = await subject.save();
    res.status(201).json(createdSubject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single subject by ID
const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (subject) {
      res.json(subject);
    } else {
      res.status(404).json({ message: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a subject by ID
const updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (subject) {
      subject.name = req.body.name || subject.name;
      subject.teacher = req.body.teacher || subject.teacher;

      const updatedSubject = await subject.save();
      res.json(updatedSubject);
    } else {
      res.status(404).json({ message: 'Subject not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a subject by ID
const deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (subject) {
      await subject.remove();
      res.json({ message: 'Subject removed' });
    } else {
      res.status(404).json({ message: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSubjects,
  createSubject,
  getSubjectById,
  updateSubject,
  deleteSubject
};
