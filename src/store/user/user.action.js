import { ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) => {
  return { type: ACTION_TYPES.SET_USER_ACTION, payload: user };
};
