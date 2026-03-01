const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const authRoutes = require('./Routes/auth.routes');
const taskRoutes = require('./Routes/task.routes');
const cors = require('cors');
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
require('dotenv').config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

module.exports = app;