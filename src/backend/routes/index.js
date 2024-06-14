const express = require('express');
const router = express.Router();

const courseRoutes = require('./courses');
const teacherRoutes = require('./teachers');
const subjectRoutes = require('./subjects');
const roomRoutes = require('./rooms');
const scheduleRoutes = require('./schedules');

router.use('/courses', courseRoutes);
router.use('/teachers', teacherRoutes);
router.use('/subjects', subjectRoutes);
router.use('/rooms', roomRoutes);
router.use('/schedules', scheduleRoutes);

module.exports = router;
