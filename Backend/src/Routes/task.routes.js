const express = require('express');

const identifyUser = require('../middlewares/auth.middlewire');
const routes = express.Router();
const { createTask, getAlltasks, deleteTask, updateTask } = require('../Controllers/taskController');

routes.post('/',identifyUser,createTask);
routes.get('/',identifyUser,getAlltasks);
routes.delete('/:id',identifyUser,deleteTask);
routes.patch('/:id',identifyUser,updateTask);
module.exports = routes;