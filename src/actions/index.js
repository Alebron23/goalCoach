//This file is where we create action creators.
import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';

export function logUser(email) {

  const action = {
    type: SIGNED_IN,
    email
  }

  return action;
}

export function setGoals(goals) { //the argument are the goals that we passed as the array.

  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export function setCompleted(completeGoals) {
  const action = {
    type: SET_COMPLETED,
    completeGoals
  }

  return action;
}
