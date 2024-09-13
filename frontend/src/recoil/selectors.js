import { selector } from 'recoil';
import { tasksState } from './atoms';

export const filteredTasksState = selector({
  key: 'filteredTasksState',
  get: ({ get }) => {
    const tasks = get(tasksState);
    return tasks;
  },
});