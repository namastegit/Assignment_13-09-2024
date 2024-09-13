const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

// Apply authentication middleware to all routes
router.use(authMiddleware); 

// Route to create a task
router.post('/', taskController.createTask);

// Route to get all tasks
router.get('/', taskController.getTasks);

// Route to update a task by ID
router.put('/:id', taskController.updateTask);

// Route to delete a task by ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;
