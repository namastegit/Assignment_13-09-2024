
import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>
      <TaskForm />
       <TaskFilter />
      <TaskList />
    </div>
  );
}

export default Dashboard;