import { ACTION_TYPES } from './user.types';

export const userReducer = (state = { currentUser: null }, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_USER_ACTION:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
