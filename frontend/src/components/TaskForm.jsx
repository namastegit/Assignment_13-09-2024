import React, { useState } from 'react';
   import axios from 'axios';
   import { useRecoilState } from 'recoil';
   import { tasksState } from '../recoil/atoms';

   const TaskForm = () => {
     const [tasks, setTasks] = useRecoilState(tasksState);
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const [scheduledTime, setScheduledTime] = useState('');
     const [recurrence, setRecurrence] = useState('none');

     const handleSubmit = async (e) => {
       e.preventDefault();
       const token = localStorage.getItem('token');
       try {
         const response = await axios.post('/api/tasks', { title, description, scheduledTime, recurrence }, {
           headers: { Authorization: `Bearer ${token}` }
         });
         setTasks([...tasks, response.data]);
         setTitle('');
         setDescription('');
         setScheduledTime('');
         setRecurrence('none');
       } catch (error) {
         console.error('Error creating task:', error);
       }
     };

     return (
       <form onSubmit={handleSubmit} className="mb-4">
         <input
           type="text"
           placeholder="Title"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           className="p-2 border rounded mr-2"
           required
         />
         <input
           type="text"
           placeholder="Description"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           className="p-2 border rounded mr-2"
           required
         />
         <input
           type="datetime-local"
           value={scheduledTime}
           onChange={(e) => setScheduledTime(e.target.value)}
           className="p-2 border rounded mr-2"
           required
         />
         <select
           value={recurrence}
           onChange={(e) => setRecurrence(e.target.value)}
           className="p-2 border rounded mr-2"
         >
           <option value="none">No Recurrence</option>
           <option value="daily">Daily</option>
           <option value="weekly">Weekly</option>
         </select>
         <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Task</button>
       </form>
     );
   };

   export default TaskForm;