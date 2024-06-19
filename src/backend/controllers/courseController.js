const Course = require('../models/Course');

const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
};

const createCourse = async (req, res) => {
  const newCourse = new Course(req.body);
  const savedCourse = await newCourse.save();
  res.status(201).json(savedCourse);
};

const updateCourse = async (req, res) => {
  const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCourse);
};

const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
};
