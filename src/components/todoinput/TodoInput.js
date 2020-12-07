import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions/actions';

function TodoInput() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [idmax, setIdmax] = useState(4);

  const maxid = () => {
    setIdmax(idmax + 1);

    return idmax;
  };

  const disable = () => {
    if (name === '') {
      return true;
    }
    return false;
  };

  const pressKey = (e) => {
    if (e.key === 'Enter') {
      console.log('ENTER KEY');
    }
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <div className="row m-2">
        <input
          type="text"
          placeholder="Что нужно выполнить сегодня?"
          className="col form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
          onKeyPress={(e) => pressKey(e)}
        />

        <button
          type="button"
          disabled={disable()}
          onClick={() => {
            dispatch(addTodo({
              id: maxid(),
              name,
              done: false,
            }));
            setName('');
          }}
          className="btn btn-primary mx-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
