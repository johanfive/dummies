import { newFieldValue } from './actions';

export const makeHandleSubmit = (state, parentDispatch) => () => {
  // No further validation here, submit can only be called when the form is valid
  if (parentDispatch) {
    // eslint-disable-next-line sort-keys
    parentDispatch({ type: 'exposeState', state });
  }
  console.log('Valid form: ', state);
};

export const makeFieldChangeHandler = (field, dispatch) => e => {
  e.preventDefault();
  dispatch(newFieldValue(field, e.target.value));
};
