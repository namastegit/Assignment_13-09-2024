const cron = require('node-cron');
const Task = require('../models/Task');
const emailService = require('./emailService');

const updateDueTasks = async () => {
  const now = new Date();
  const dueTasks = await Task.find({
    status: 'pending',
    scheduledTime: { $lte: now }
  });

  for (const task of dueTasks) {
    task.status = 'due';
    await task.save();
    await emailService.sendTaskDueNotification(task);
  }
};

const start = () => {
  // Run every minute
  cron.schedule('* * * * *', updateDueTasks);
};

module.exports = { start };