/* eslint-disable react/prop-types */
import React from 'react';
import './TodoListItem.css';
import { useDispatch } from 'react-redux';
import { delTodo, doneTodo } from '../../redux/actions/actions';

function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  const classNames = 'col';
  const classNamesDone = 'col done';
  const alldonefalse = 'alldone';
  const alldonetrue = 'alldone ok';

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <div className="row mx-2 align-items-center">
        <div className={todo.done ? alldonetrue : alldonefalse}>
          {todo.done ? (
            <svg width="40px" height="40px" viewBox="0 0 16 16" className="bi bi-check" fill="green" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
            </svg>
          ) : '' }
        </div>
        <div className={todo.done ? classNamesDone : classNames}>
          <h5>{todo.name}</h5>
        </div>
        <button type="button" onClick={() => dispatch(doneTodo(todo.id))} className="btn btn-success m-2">{todo.done ? 'Undone' : 'Done'}</button>
        <button type="button" onClick={() => dispatch(delTodo(todo.id))} className="btn btn-danger m-2">Delete</button>
      </div>
    </div>
  );
}

export default TodoListItem;
