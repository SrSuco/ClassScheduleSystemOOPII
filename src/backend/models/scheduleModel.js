const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    time: { type: String, required: true }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
