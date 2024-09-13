import React from 'react';
   import axios from 'axios';
   import { useRecoilState } from 'recoil';
   import { tasksState } from '../recoil/atoms';

   const TaskItem = ({ task }) => {
     const [tasks, setTasks] = useRecoilState(tasksState);

     const handleDelete = async () => {
       const token = localStorage.getItem('token');
       try {
         await axios.delete(`/api/tasks/${task._id}`, {
           headers: { Authorization: `Bearer ${token}` }
         });
         setTasks(tasks.filter(t => t._id !== task._id));
       } catch (error) {
         console.error('Error deleting task:', error);
       }
     };

     return (
       <div className="flex items

-center justify-between p-2 border rounded mb-2">
         <div>
           <h2 className="text-lg font-bold">{task.title}</h2>
           <p>{task.description}</p>
           <p>Scheduled: {task.scheduledTime}</p>
           <p>Recurrence: {task.recurrence}</p>
         </div>
         <button onClick={handleDelete} className="p-2 bg-red-500 text-white rounded">Delete</button>
       </div>
     );
   };

   export default TaskItem;