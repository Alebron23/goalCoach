//since we split the one reducer, index.js, into two reducers, there is now not a default reducer so we have to fix that. Luckily redux has a combinereducers function. 
import { SET_GOALS } from '../constants';

export default (state = [], action) => { //state parameter is set initially to an empty array becuase goals will always be an array because we are making them that way in our firebase listener in GoalList.
  switch(action.type) {
    case SET_GOALS:
      const { goals } = action; //grabbing the goals from the action
      return goals;
    default:
      return state;             //which is an empty array.
  }
}
