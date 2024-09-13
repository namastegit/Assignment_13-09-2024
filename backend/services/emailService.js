const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendTaskDueNotification = async (task) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: task.user.email,
      subject: 'Task Due Notification',
      text: `Your task "${task.title}" is due.`
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
};