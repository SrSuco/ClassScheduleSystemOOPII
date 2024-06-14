const Teacher = require('../models/teacherModel');

// Get all teachers
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new teacher
const createTeacher = async (req, res) => {
  try {
    const { name, subject } = req.body;
    const teacher = new Teacher({ name, subject });
    const createdTeacher = await teacher.save();
    res.status(201).json(createdTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single teacher by ID
const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a teacher by ID
const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (teacher) {
      teacher.name = req.body.name || teacher.name;
      teacher.subject = req.body.subject || teacher.subject;

      const updatedTeacher = await teacher.save();
      res.json(updatedTeacher);
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a teacher by ID
const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (teacher) {
      await teacher.remove();
      res.json({ message: 'Teacher removed' });
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTeachers,
  createTeacher,
  getTeacherById,
  updateTeacher,
  deleteTeacher
};
