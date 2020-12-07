/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-shadow */
import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from '../todolistitem/TodoListItem';

function TodoList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const flag = useSelector((state) => state.tasks.flag);
  const searcheInput = useSelector((state) => state.tasks.search).toLowerCase();
  let data = tasks;

  if (flag) {
    data = tasks.filter((data) => data.done);
  }

  if (searcheInput) {
    data = data.filter((task) => task.name.toLowerCase().indexOf(searcheInput) > -1);
  }

  return (
    <div className="my-3">
      {
                data.map((todo) => <TodoListItem key={todo.id} todo={todo} />)
            }
    </div>
  );
}

export default TodoList;
