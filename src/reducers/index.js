import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import completeGoals from './reducer_completed_goals'

//we simply create an object to pass our two reducers to make them one.
export default combineReducers( {
  user,
  goals,
  completeGoals
})
