import { combineReducers } from 'redux';
import { tasks } from './tasks';
import { find } from './find';

const allReducers = combineReducers({
  tasks,
  find,

});

export default allReducers;
