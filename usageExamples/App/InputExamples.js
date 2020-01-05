import React, { useState } from 'react';
import { Input, useWindowSize } from '../../actualLibrary';
import { DemoBox, PropsTable } from './nonShipped';
import { inputProps } from '../propTypes';

const settersStyle = windowWidth => ({
  alignItems: 'flex-start',
  padding: '.5rem',
  width: windowWidth > 858 ? '45%' : '99%'
});

const toolTipStyle = {
  background: 'white',
  border: '1px solid black',
  borderRadius: '5px',
  padding: '1rem',
  width: '14rem'
};

const inputWidthDemoStyle = {
  border: '1px solid hotpink',
  width: '25%'
};

// eslint-disable-next-line react/prop-types
const Badge = ({ text }) => <span style={{ background: '#f5f5f5' }}>&nbsp;{text}&nbsp;</span>;

const InputExamples = () => {
  const [ windowWidth ] = useWindowSize();
  const placeholderInitState = 'Type things here...';
  const [placeholder, setPlaceholder] = useState(placeholderInitState);
  const labelInitState = 'Username:';
  const [label, setlabel] = useState(labelInitState);
  const helpTextInitState = 'Some valuable intel on how to populate the field';
  const [helpText, sethelpText] = useState(helpTextInitState);
  return (
    <>
      <Input
        required
        id="toolTip"
        toolTip={
          <div style={toolTipStyle}>
            This guy can never overflow outside the viewport :p even if the style object demands it...
          </div>
        }
        label="Demo BorderPatrol for toolTip"
        labelBlockOnTop
        inputWidth="95%"
        style={{ float: 'right', width: '25%' }}
      />
      <h1>Input</h1>
      <Input
        required
        id="required"
        placeholder='Some placeholder. Type "LOL"'
        label="Some truly super long label on top with required and toolTipIcon:"
        labelBlockOnTop
        helpText="Some help text that can get quite long describing the thing... This is an example with ALL the props ON (except 'disabled')"
        icon={<i className="far fa-credit-card"></i>}
        iconLeft
        toolTip={
          <div style={toolTipStyle}>Some toolTip message that can be a styled component or a string</div>
        }
        toolTipIcon={<i className="far fa-question-circle"></i>}
        validation={text => text === 'LOL'}
        errorMessage="Nooo LOL!"
        inputWidth="55%"
        style={{
          border: '1px solid grey',
          borderRadius: '5px',
          margin: '1.5rem',
          padding: '2rem'
        }}
        doWithState={state => console.log('value: ', state.inputValue, 'hasBombed: ', state.isInputValid)}
      />

      <h2>Props</h2>
      <PropsTable props={inputProps} />

      <h3 id="doWithState">The values of the inputs below will be applied to all relevant demos further down below.</h3>
      <Input
        placeholder="--> This guy <--"
        label="Placeholder:"
        helpText="Set the value for the placeholder prop"
        validation={text => text.length > 30}
        errorMessage="That's one unreasonably long placeholder isn't it?"
        inputWidth="70%"
        style={settersStyle(windowWidth)}
        doWithState={({ inputValue }) => setPlaceholder(inputValue || placeholderInitState)}
      />
      <Input
        label="--> This guy <--"
        helpText="Set the value for the label prop"
        placeholder={placeholder}
        validation={text => text.length > 30}
        errorMessage="That's one unreasonably long label isn't it?"
        inputWidth="70%"
        style={settersStyle(windowWidth)}
        doWithState={({ inputValue }) => setlabel(inputValue || labelInitState)}
      />
      <Input
        label="Help Text:"
        helpText="--> This guy <--"
        placeholder={placeholder}
        validation={text => text.toLowerCase().indexOf('fuck') !== -1}
        errorMessage="No swearing son!"
        inputWidth="70%"
        style={settersStyle(windowWidth)}
        doWithState={({ inputValue }) => sethelpText(inputValue || helpTextInitState)}
      />
      <Input
        placeholder="Type anything"
        label="Error message:"
        helpText="Set the value for the errorMessage prop"
        icon={<i className="fas fa-bolt"></i>}
        validation={text => text !== ''}
        errorMessage="--> This guy <--"
        inputWidth="70%"
        style={settersStyle(windowWidth)}
      />

      <h2>Demos</h2>

      <h3>Bare - no props</h3>
      <DemoBox><Input /></DemoBox>

      <h3 id="disabled">Disabled</h3>
      <p>When the <Badge text="disabled" /> prop is true, the <Badge text="placeholder" /> prop is ignored</p>
      <DemoBox><Input disabled placeholder={placeholder} /></DemoBox>

      <h3 id="placeholder">With placeholder</h3>
      <DemoBox><Input placeholder={placeholder} /></DemoBox>

      <h3 id="label">With label</h3>
      <p>There's a default margin when the label is on the left.</p>
      <DemoBox><Input label={label} /></DemoBox>

      <h3 id="labelBlockOnTop">With label on top</h3>
      <p id="id">
        Because this example uses the same "{label}" label as the input above,
        we run into the <Badge text="[DOM] Found 2 elements with non-unique id" /> error
        <br />(Again, the input's <Badge text="id" /> defaults to the <Badge text="label" />'s value if it is not explicitly defined)
        <br />This is a use case for the <Badge text="id" /> prop
      </p>
      <DemoBox><Input label={label} labelBlockOnTop id="unique" /></DemoBox>

      <h3 id="helpText">With help text</h3>
      <p>There's a default margin when the helpText is on the left.</p>
      <DemoBox><Input helpText={helpText} /></DemoBox>

      <h3>With help text on top</h3>
      <p>
        The help text is part of the label block, so to have it above the inner input field, use the <Badge text="labelBlockOnTop" /> prop.
      </p>
      <DemoBox><Input helpText={helpText} labelBlockOnTop /></DemoBox>

      <h3 id="icon">With icon</h3>
      <DemoBox><Input icon={<i className="fas fa-arrow-right"></i>} /></DemoBox>

      <h3 id="iconLeft">With icon on the left</h3>
      <DemoBox>
        <Input
          icon={<i className="fas fa-arrow-left"></i>}
          iconLeft
          placeholder="Notice the auto-spacing between the icon and the text for left icons..."
        />
      </DemoBox>

      <h3 id="inputWidth">Controlling the width of the inner input field</h3>
      <p>
        The default assumes that more often than not, the <Badge text="label" /> prop will be defined and the label will be on the left
        <br />The main wrapper being a flex blox, if <Badge text="label" /> is undefined it looks like the inner input field floats right:
      </p>
      <DemoBox><Input inputWidth="50%" /></DemoBox>
      <p>
        Passing the <Badge text="labelBlockOnTop" /> prop is equivalent to changing the flex-direction on the main wrapper (from row to column):
      </p>
      <DemoBox><Input labelBlockOnTop inputWidth="50%" /></DemoBox>
      <p id="style">
        If you prefer to be more explicit about things, just override with the <Badge text="style" /> prop
        <br />Understand that the <b>style</b> object will only be applied to the main wrapper (hence the separate <Badge text="inputWidth" /> prop)
      </p>
      <DemoBox><Input inputWidth="25%" style={{ border: inputWidthDemoStyle.border, flexDirection: 'column' }} /></DemoBox>
      <p>Now since the inner input field defaults to 100% of its parent, styling the main wrapper can be enough:</p>
      <DemoBox><Input style={inputWidthDemoStyle} /></DemoBox>
      <p>By default the label is centered vertically with the inner input field. If the helpText gets too long...</p>
      <DemoBox>
        <Input
          style={inputWidthDemoStyle}
          label="center"
          helpText="A long helpText to show what vertical-align looks like by default..."
        />
      </DemoBox>
      <p>You can simply override the behaviour with the <Badge text="style" /> prop setting the alignItems to "flex-start":</p>
      <DemoBox>
        <Input
          style={{ ...inputWidthDemoStyle, alignItems: 'flex-start' }}
          label="flex-start"
          helpText="A long helpText to show what vertical-align looks like by default..."
        />
      </DemoBox>

      <h3 id="validation">With validation</h3>
      <p>
        The <Badge text="validation" /> prop accepts a function.
        This function's sole concern should be to notify the component when the input is invalid,
        therefore it must return true on invalid, false otherwise
        <br />It receives only 1 argument: the input value
      </p>
      <DemoBox funcStrings={'text => text === \'LOL\''}>
        <Input validation={text => text === 'LOL'} placeholder='Type "LOL"' />
      </DemoBox>

      <h3 id="errorMessage">With errorMessage</h3>
      <p>
        On invalid input, the error message will default to "Invalid"
        <br />the <Badge text="errorMessage" /> prop is there to override this default
      </p>
      <DemoBox funcStrings={'text => text === \'LOL\''}>
        <Input validation={text => text === 'LOL'} placeholder='Type "LOL"' errorMessage="No jokes" />
      </DemoBox>
      <div style={{ marginTop: '34rem' }}></div>
    </>
  );
};

export default InputExamples;
