
import React from 'react';
import { useRecoilValue } from 'recoil';
import { tasksState } from '../recoil/atoms';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useRecoilValue(tasksState);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Tasks</h2>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
