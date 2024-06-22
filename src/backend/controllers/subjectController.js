const Subject = require('../models/subjectModel.js');
const Course = require('../models/courseModel.js');

const createSubject = async (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({ message: 'Name and course are required.' });
    }

    try {
        const courseExists = await Course.findById(course);
        if (!courseExists) {
            return res.status(400).json({ message: 'Invalid course ID.' });
        }

        const newSubject = new Subject({ name, course });
        const savedSubject = await newSubject.save();
        res.status(201).json(savedSubject);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().populate('course');
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id).populate('course');
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found.' });
        }
        res.status(200).json(subject);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const updateSubject = async (req, res) => {
    const { name, course } = req.body;
    try {
        const subject = await Subject.findById(req.params.id);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found.' });
        }

        if (course) {
            const courseExists = await Course.findById(course);
            if (!courseExists) {
                return res.status(400).json({ message: 'Invalid course ID.' });
            }
            subject.course = course;
        }

        subject.name = name || subject.name;

        const updatedSubject = await subject.save();
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const deleteSubject = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found.' });
        }

        await subject.remove();
        res.status(200).json({ message: 'Subject deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    createSubject,
    getSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject
};
