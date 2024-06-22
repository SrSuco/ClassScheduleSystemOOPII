const Schedule = require('../models/scheduleModel');

const createSchedule = async (req, res) => {
    const { course, teacher, subject, room, time } = req.body;

    if (!course || !teacher || !subject || !room || !time) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const newSchedule = new Schedule({ course, teacher, subject, room, time });
        const savedSchedule = await newSchedule.save();
        res.status(201).json(savedSchedule);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find().populate('course teacher subject room');
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id).populate('course teacher subject room');
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found.' });
        }
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const updateSchedule = async (req, res) => {
    const { course, teacher, subject, room, time } = req.body;

    try {
        const schedule = await Schedule.findById(req.params.id);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found.' });
        }

        schedule.course = course || schedule.course;
        schedule.teacher = teacher || schedule.teacher;
        schedule.subject = subject || schedule.subject;
        schedule.room = room || schedule.room;
        schedule.time = time || schedule.time;

        const updatedSchedule = await schedule.save();
        res.status(200).json(updatedSchedule);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const deleteSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found.' });
        }

        await schedule.remove();
        res.status(200).json({ message: 'Schedule deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    createSchedule,
    getSchedules,
    getScheduleById,
    updateSchedule,
    deleteSchedule
};
