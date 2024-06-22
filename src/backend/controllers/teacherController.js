const Teacher = require('../models/teacherModel.js');

const createTeacher = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Name is required.' });
    }

    try {
        const newTeacher = new Teacher({ name });
        const savedTeacher = await newTeacher.save();
        res.status(201).json(savedTeacher);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found.' });
        }
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const updateTeacher = async (req, res) => {
    const { name } = req.body;
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found.' });
        }

        teacher.name = name || teacher.name;

        const updatedTeacher = await teacher.save();
        res.status(200).json(updatedTeacher);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found.' });
        }

        await teacher.remove();
        res.status(200).json({ message: 'Teacher deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    createTeacher,
    getTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher
};
