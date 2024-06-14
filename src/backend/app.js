const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const teacherRoutes = require('./routes/teacherRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const roomRoutes = require('./routes/roomRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/teachers', teacherRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
