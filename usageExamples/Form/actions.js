/* eslint-disable sort-keys */
import { SET_NEW_FIELD_VALUE, TOGGLE_VALID } from './constants';

export const newFieldValue = (field, inputValue) => ({
  type: SET_NEW_FIELD_VALUE,
  field,
  inputValue
});

export const toggleValidField = field => ({
  type: TOGGLE_VALID,
  field
});
