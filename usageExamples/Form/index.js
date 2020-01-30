import React, { useReducer } from 'react';
import formReducer, { initialState } from './reducer';
import { makeHandleSubmit, makeFieldChangeHandler } from './handlers';
import { isValidForm, makeCityValidator, makeNameValidator } from './validators';
import { CITY, NAME } from './constants';
import { capFirst } from './utils';
import Input from './Input';


// eslint-disable-next-line react/prop-types
function App({ parentDispatch }) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleSubmit = makeHandleSubmit(state, parentDispatch);
  const handleCityChange = makeFieldChangeHandler(CITY, dispatch);
  const handleNameChange = makeFieldChangeHandler(NAME, dispatch);
  const canSubmit = isValidForm(state);
  const cityValidation = makeCityValidator(state, dispatch);
  const nameValidation = makeNameValidator(state, dispatch);
  const cFcity = capFirst(CITY);
  const cFname = capFirst(NAME);
  return (
    <div className="App">
      <h1>Formidable</h1>
      <p>This is not a component meant to be part of the library. It is just an example to debate a thought.</p>
      <p>It seems that now that we have <b>hooks</b>, we could start thinking about project structures that fully embrace <b>composition</b>.</p>
      <p>
        It seems like separation of concern could be pushed to the extreme and for the best.
        There would still be one single parent reducer for the app, but each element making up the app
        could be <em>responsible for its own state and exposing it</em> to its parents/consumers/subscribers.
      </p>
      <p>
        It wouldn't be a lot unlike render prop, and state that has been <b>lifted up</b> would be easy to <em>track down</em>.
        <br />Most importantly, there would be a more direct correlation between what we <b>see</b> in the UI and where to look in the codebase.
      </p>
      <p>This would effectively be a collection of tiny apps glued together. Each with their own very familiar structure:</p>
      <pre>{`
        Thing
          |_actions
          |_constants
          |_handlers
          |_index
          |_Components
              |_Button
              |_Input
          |_reducer
          |_utils
          |_validation
      `}</pre>
      <p>
        A form is the perfect example to illustrate this.
        <br />The sole purpose of a form is to collect user inputs. The whole nudging into providing valid information thing could be entirely isolated.
        <br />All the app cares about is the outcome, the input values at submit time.
        <br />The form below is a component that only takes in 1 prop: a dispatch function from its parent's store. The mean to expose its state onSumit.
      </p>
      <fieldset>
        <legend>&nbsp;Inspect code for this to be slightly less underwhelming&nbsp;</legend>
        <Input
          label={`${cFcity}:`}
          id={CITY}
          validation={cityValidation}
          errorMsg="This city aint real brah!"
          onChange={handleCityChange}
        />
        <Input
          label={`${cFname}:`}
          id={NAME}
          validation={nameValidation}
          errorMsg="This name is funky..."
          onChange={handleNameChange}
        />
        <button onClick={handleSubmit} disabled={!canSubmit}>Ok</button>
      </fieldset>
      {!canSubmit && (
        <div>
          <pre>{cFcity}: {JSON.stringify(state[CITY], null, 2)}</pre>
          <pre>{cFname}: {JSON.stringify(state[NAME], null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
