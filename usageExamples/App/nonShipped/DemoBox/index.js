/* eslint-disable react/prop-types */
import React from 'react';
import prettyFormat from 'pretty-format';
import { wrapperStyle, componentBlockStyle, codeStringStyle } from './styles';

export const DemoBox = ({ children, funcStrings, style }) => {
  let formatted = prettyFormat(children, {
    plugins: [prettyFormat.plugins.ReactElement],
    printFunctionName: false
  })
    .replace(/Object {/g, '{')
    .replace(/Array \[/g, '[');
  if (funcStrings) {
    const replaceFunc = str => formatted = formatted.replace('[Function]', str);
    Array.isArray(funcStrings) ? funcStrings.forEach(replaceFunc) : replaceFunc(funcStrings);
  }
  return (
    <div style={wrapperStyle(style)}>
      <div style={componentBlockStyle()}>{children}</div>
      <pre style={codeStringStyle()}>{formatted}</pre>
    </div>
  );
};
