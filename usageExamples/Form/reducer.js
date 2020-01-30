/* eslint-disable sort-keys */
import { CITY, NAME, SET_NEW_FIELD_VALUE, TOGGLE_VALID } from './constants';

export const initialState = {
  [CITY]: {
    value: '',
    isValid: true
  },
  [NAME]: {
    value: '',
    isValid: true
  }
};

const fieldReducer = (state, action) => {
  switch (action.type) {
  case SET_NEW_FIELD_VALUE:
    return {
      ...state,
      value: action.inputValue
    };
  case TOGGLE_VALID:
    return {
      ...state,
      isValid: !state.isValid
    };
  default:
    return state;
  }
};

const formReducer = (state, action) => {
  switch (action.type) {
  case SET_NEW_FIELD_VALUE:
  case TOGGLE_VALID:
    return {
      ...state,
      [action.field]: fieldReducer(state[action.field], action)
    };
  default:
    return state;
  }
};

export default formReducer;
