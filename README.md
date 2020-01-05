# [dummies](https://johanfive.github.io/dummies)
## React Components Library
`Dummies` because functional components used to be strictly presentational, stateless and called "Dumb Components".
Now with `hooks`, they're anything but.

This library focuses on building `functional components` responsible for managing their own state as much as possible,
and providing a `doWithState` prop to expose their state via `consumer functions` when it makes sense:
```js
const consumeInputState = ({ inputValue, isInputValid }) =>
  console.log(`${inputValue} is ${isInputValid ? '√' : 'x'}`);

<Input doWithState={consumeInputState} />
```