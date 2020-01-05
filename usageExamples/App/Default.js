/* eslint-disable react/prop-types */
import React from 'react';
import { DemoBox, PropsTable } from './nonShipped';
import { demoBoxProps } from '../propTypes';

const NotARealButton = ({ handleClick, nested }) =>
  <button onClick={() => handleClick(nested)}>For demo's sake</button>;

const Default = () => (
  <div>
    <h1>DemoBox</h1>
    <DemoBox>
      <DemoBox
        funcStrings={[
          'nested => nested()',
          '() => console.log(\'funcStrings accepts an array or a string\')'
        ]}>
        <NotARealButton
          handleClick={nested => nested()}
          nested={() => console.log('funcStrings accepts an array or a string')}
        />
      </DemoBox>
    </DemoBox>
    <h2>Props</h2>
    <PropsTable props={demoBoxProps} />
  </div>
);

export default Default;
