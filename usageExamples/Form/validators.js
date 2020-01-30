import { CITY, NAME } from './constants';
import { toggleValidField } from './actions';

export const isValidForm = state => {
  const fields = Object.keys(state);
  for (let i = 0; i < fields.length; i++) {
    const field = state[fields[i]];
    if (!field.isValid) {
      console.log('Invalid form: ', state);
      return false;
    }
  }
  return true;
};

// Unlike for changeHandlers, these should be unique enough that
// it wouldn't make sense to get clever about ways to stay DRY
export const makeCityValidator = (state, dispatch) => inputValue => {
  // handle invalid values
  if (inputValue === 'LOL') {
    dispatch(toggleValidField(CITY));
    return true;
  }
  // reset for valid values
  if (!state[CITY].isValid) {
    dispatch(toggleValidField(CITY));
    return false;
  }
};

export const makeNameValidator = (state, dispatch) => inputValue => {
  // handle invalid values
  if (inputValue === 'NOPE') {
    dispatch(toggleValidField(NAME));
    return true;
  }
  // reset for valid values
  if (!state[NAME].isValid) {
    dispatch(toggleValidField(NAME));
    return false;
  }
};
