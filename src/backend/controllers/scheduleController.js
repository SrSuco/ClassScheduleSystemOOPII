const Schedule = require('../models/Schedule');

exports.getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find().populate('course teacher room subject');
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createSchedule = async (req, res) => {
    const schedule = new Schedule(req.body);
    try {
        const newSchedule = await schedule.save();
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id).populate('course teacher room subject');
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('course teacher room subject');
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndDelete(req.params.id);
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.status(200).json({ message: 'Schedule deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
