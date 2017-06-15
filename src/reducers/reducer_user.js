import { SIGNED_IN } from '../constants';

let user = {
  email: null
}

export default (state = user, action) => { //If we just added the SET_GOALS to our switch to reduce it, we would have to change our whole state logic. So we are going to split them into two reducers. 

  switch(action.type) {
    case SIGNED_IN:
      const { email } = action;
      user = {
        email
      }
      return user;
    default:
      return state;
  }
}
