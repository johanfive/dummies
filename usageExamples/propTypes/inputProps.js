/* eslint-disable sort-keys */
/* eslint-disable react/prop-types */
import React from 'react';
import { ToolTip } from '../../actualLibrary';

const InternalLink = ({ text, href }) => <a href={href} style={{ 'color': 'hotpink' }}>{text}</a>;
const listStyle = { textAlign: 'left', listStyleType: 'none' };
const preStyle = { textAlign: 'left' };
const toolTipStyle = {
  background: 'hotpink',
  color: 'white',
  padding: '.5rem',
  borderRadius: '5px'
};

export const inputProps = [
  {
    name: <InternalLink text="disabled" href="#disabled" />,
    types: ['boolean']
  },
  {
    name: <InternalLink text="doWithState" href="#doWithState" />,
    types: ['function'],
    notes: 'This function exposes the <Input /> state outside of the component',
    examples: (
      <pre style={preStyle}>
        {`({ inputValue, isInputValid }) =>
  console.log(
    \`\${inputValue}: \${isInputValid ? '√' : 'x'}\`
  )`}
      </pre>
    )
  },
  {
    name: <InternalLink text="errorMessage" href="#errorMessage" />,
    types: ['string', 'node'],
    notes: 'Message shown when validation returns true',
    examples: (
      <pre style={preStyle}>
        {`∙ "Five" is not a color
∙ <div style={{ border: "1px solid hotpink" }}>
    "hotpink" is not a number
  </div>`}
      </pre>
    )
  },
  {
    name: <InternalLink text="helpText" href="#helpText" />,
    types: ['string', 'node'],
    notes: 'Some valuable intel on how to populate the field',
    examples: (
      <pre style={preStyle}>
        {`∙ 3 digits number at the back of your card
∙ <div style={{ color: "deepskyblue" }}>
    3 digits number at the back of your card
  </div>`}
      </pre>
    )
  },
  {
    name: <InternalLink text="icon" href="#icon" />,
    types: ['string', 'node'],
    notes: 'A visual to display inside the inner input field',
    examples: (
      <ul style={listStyle}>
        <li>∙ <i className="fas fa-bolt"></i>, 😎, 🎧, # etc...</li>
        <li>∙ {'<i className="fas fa-bolt"></i>'}</li>
      </ul>
    )
  },
  {
    name: <InternalLink text="iconLeft" href="#iconLeft" />,
    types: ['boolean']
  },
  {
    name: <InternalLink text="id" href="#id" />,
    types: ['string'],
    notes: (
      <div>
        * If undefined, defaults to the label prop's value.
        <br />* Required when 2+ inputs have the same Label
        <br />Surprisingly (but fortunately) clicking the label will still focus the input
        <br /><em>even if</em> the id prop defaults to the label and the label is a node instead of a string
      </div>
    )
  },
  {
    name: <InternalLink text="inputWidth" href="#inputWidth" />,
    types: ['string'],
    notes: (
      <div>Control the width of the actual input tag within the Input component
        <br />Any CSS width value
      </div>
    ),
    examples: (
      <ul style={listStyle}>
        <li>∙ 90%</li>
        <li>∙ 25rem</li>
        <li>∙ 250px</li>
        <li>etc...</li>
      </ul>
    )
  },
  {
    name: <InternalLink text="label" href="#label" />,
    types: ['string', 'node'],
    notes: 'The fact that label can be a node means translation is possible',
    examples: (
      <ul style={listStyle}>
        <li>∙ First Name:</li>
        <li>∙ {'<FormattedMessage id="FIRST_NAME" />'}</li>
      </ul>
    )
  },
  {
    name: <InternalLink text="labelBlockOnTop" href="#labelBlockOnTop" />,
    types: ['boolean']
  },
  {
    name: <InternalLink text="placeholder" href="#placeholder" />,
    types: ['string'],
    notes: 'Cannot be anything other than a string. For translations use "injectIntl"'
  },
  {
    name: <InternalLink text="required" href="#required" />,
    types: ['boolean'],
    notes: 'Shows a red * by the label to indicate that the field must be... filled'
  },
  {
    name: <InternalLink text="style" href="#style" />,
    types: ['object'],
    notes: (
      <div>
        Standard react inline css prop
        <br />Controls the main wrapper of the component
        <br />Largely used for positioning
      </div>
    ),
    examples: (
      <pre style={preStyle}>{`
    {
      width: '55%',
      margin: '5rem'
    }
      `}
      </pre>
    )
  },
  {
    name: <InternalLink text="toolTip" href="#toolTip" />,
    types: ['string', 'node'],
    notes: (
      <div>
        Wrapped in a {'<BorderPatrol />'} component and positioned at the top-right of the icon.
        <br />BorderPatrol makes it so that the toolTip will always stays within the viewport
        <br />Any other styles can be applied by providing a styled component instead of a string
      </div>
    ),
    examples: (
      <pre style={preStyle}>
        {`∙ Some descriptive sentence
∙ <div style={{ background: "white" }}>
    Mad <em>z-index</em> bro!
  </div>`}
      </pre>
    )
  },
  {
    name: (
      <ToolTip
        content={<div style={toolTipStyle}>toolTipIcon can be plain text, like this...</div>}
        toolTipIcon="toolTipIcon"
      />
    ),
    types: ['string', 'node'],
    notes: (
      <div>
        If a value is provided to the toolTip prop but not to the toolTipIcon prop, it will default to: (?)
        <br />toolTipIcon without toolTip will be ignored
      </div>
    ),
    examples: (
      <ul style={listStyle}>
        <li>∙ <i className="far fa-question-circle"></i>, 😎, 🎧, # etc...</li>
        <li>∙ {'<i className="far fa-question-circle"></i>'}</li>
      </ul>
    )
  },
  {
    name: <InternalLink text="validation" href="#validation" />,
    types: ['function'],
    notes: <span>Receives the input field's value and must return <b>true</b> when the value is <b>not</b> valid</span>,
    examples: (
      <ul style={listStyle}>
        <li>∙ value => value === 'noGood'</li>
        <li>∙ value => value !== 'good'</li>
      </ul>
    )
  }
];
