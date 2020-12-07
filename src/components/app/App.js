/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
import TodoInput from '../todoinput/TodoInput';
import TodoList from '../todolist/TodoList';

import { allTodo, completedTodo, searchTodo } from '../../redux/actions/actions';

const Search = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.tasks);
  const [search, setSearch] = useState('');

  const searchword = (e) => {
    e.preventDefault();
    const word = e.target.value;
    setSearch(word);
    return word;
  };

  return (
    <div className="search-box">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Поиск записей"
          aria-label="Recipient's username with two button addons"
          aria-describedby="button-addon4"
          onChange={(e) => dispatch(searchTodo(searchword(e)))}
          value={search}
        />

        <div className="input-group-append" id="button-addon4">
          <button onClick={() => dispatch(allTodo(records))} className="btn btn-outline-secondary" type="button">All</button>
          <button onClick={() => dispatch(completedTodo(records))} className="btn btn-outline-secondary" type="button">Completed</button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const posts = useSelector((state) => state.tasks.tasks);
  // Выполненные посты, фильтруем по свойству done
  const doneTodo = posts.filter((todo) => todo.done).length;

  return (
    <div className="header">
      <h1>Todo list with redux </h1>
      <Search />
      <div className="header-info">
        <p>
          Всего задач:
          {` ${posts.length}`}
        </p>
        <p className="completed">
          Выполнено:
          {` ${doneTodo}`}
        </p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
