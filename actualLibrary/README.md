# [dummies](https://johanfive.github.io/dummies)
## React Components Library
`Dummies` because functional components used to be strictly presentational, stateless and called "Dumb Components".
Now with `hooks`, they're anything but.
## Get started
Install dependencies. There's only *dev* dependencies and
it is assumed that you have npm installed **eslint** -globally at some point
```
npm i
```
Run the `usage examples` app to see the Components in action in the `devSandbox`:
```
npm start
```
+ This will read the `usageExamples` directory to generate the `devSandbox` build directory (which is gitignored)
+ Once the *build* is done, `http://localhost:1234` will open automatically in your default browser
## Development
### *Create* Components in `./actualLibrary` & do *Document* them in `./usageExamples`
```
mkdir ./actualLibrary/YourComponent \
&& touch ./actualLibrary/YourComponent/index.js \
&& touch ./actualLibrary/YourComponent/styles.js \
&& touch ./usageExamples/App/YourComponentExamples.js \
&& touch ./usageExamples/propTypes/yourComponentProps.js
```
Update actualLibrary/index.js with:
```js
export { YourComponent } from './YourComponent';
```
(Will most likely create an npm script to automate all that)
> Only Components listed in ./actualLibrary/index.js will be distributed
### Choices, consequences & conventions
+ *Dummies* has only `1 peerDependency`: **React v16.8** (because Hooks)
+ Styling
  + `CSS in JS` -> *React inline styles*, hence the styles.js files
    + This makes the components work in any environment regardless of the config of the user
  + Follow the convention:
    ```js
    export const nameStyle = () => ({ cssProp: 'cssValueString' });
    ```
    + even if a simple object would suffice
    + even if your component has only 1 style func that could be exported as default
    + Consistency makes things more readable,
      and easier to update
+ Favor `functional` components
  + Make and use `Hooks`
+ Even though the `sandbox` is not distributed, it is *version controlled* and should be maintained seriously
  + The sheer process of documenting component thoroughly is guaranteed to make you revisit and improve your initial design
  + Trying to keep only 1 peerDependency, `PropTypes` aren't defined in the library.
    Having said that, appending to `./usageExamples/propTypes` and using the `PropsTable` component
    brings a tremendous amount of value
    ```js
    import { PropsTable, yourComponentProps } from '../propTypes';
    ```
    + `propTypes files` must export a *named* **array of object** with the following *keys*:
      + *name*: the prop name, can be a string or JSX (to create internal links; see [inputProps.js](usageExamples/propTypes/inputProps.js))
      + *type*: the prop type
      + *xNotes*: Details & Examples. Ideally short. Use JSX for multiline
+ Bundling the devSandbox with `Parcel`
+ The published library is not bundled, it's only Babelified. (Assuming users will do their own bundlings and such)
## Workflow
1. Start fresh
    ```sh
    npm run clean && npm i
    # npm run clean is a good 1st step if things behave weird in the devSandbox
    # .cache might not always be generated reliably
    ```
2. Create component
3. Run the local devSandbox
    ```
    npm start
    ```
4. Use component in usageExamples (learn, improve, back to step 2 until not embarassed)
5. Babelify Dummies:
    ```
    npm run babz
    ```
6. Package up Dummies locally like *npm publish* would, by running:
    ```
    npm run tarball
    ```
7. Open another local project where you can install Dummies with:
    ```sh
    npm i <pathTo>/dummies/tarball/dummies-1.0.0.tgz # use the current version
    ```
8. Validate that your component works as expected in this project
9. Publish for realz:
    ```
    npm publish
    ```
