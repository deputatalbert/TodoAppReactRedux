/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import { todos } from '../state/state';

export const tasks = (state = todos, action) => {
  let newTasks;

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'DEL_TODO':
      newTasks = state.tasks.filter((task) => task.id !== action.payload);

      return {
        ...state,
        tasks: newTasks,
      };

    case 'DONE_TODO':
      newTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });

      return {
        ...state,
        tasks: newTasks,
      };

    case 'ALLRECORDS':
      return {
        ...state,
        flag: false,
      };

    case 'COMPLETED':
      return {
        ...state,
        flag: true,
      };

    case 'LIVE_SEARCH':
      state.search = action.payload;

      return state;
  }
  return state;
};
