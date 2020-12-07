/* eslint-disable arrow-body-style */
/* eslint-disable comma-dangle */
export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo
  };
};

export const delTodo = (todoId) => {
  return {
    type: 'DEL_TODO',
    payload: todoId
  };
};

export const doneTodo = (todoId) => {
  return {
    type: 'DONE',
    payload: todoId
  };
};

export const allTodo = (todo) => {
  return {
    type: 'ALLRECORDS',
    payload: todo
  };
};

export const completedTodo = (todoId) => {
  return {
    type: 'COMPLETED',
    payload: todoId
  };
};

export const searchTodo = (todo) => {
  return {
    type: 'LIVE_SEARCH',
    payload: todo
  };
};
