/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ToolTip } from '../';
import {
  errorStyle,
  helpTextStyle,
  iconStyle,
  inputBlockStyle,
  inputStyle,
  requiredStyle,
  wrapperStyle
} from './styles';

export const Input = ({
  disabled,
  errorMessage,
  helpText,
  icon,
  iconLeft,
  id,
  inputWidth,
  label,
  labelBlockOnTop,
  placeholder,
  required,
  style,
  toolTip,
  toolTipIcon,
  validation,
  doWithState
}) => {
  const [ text, setText ] = useState('');
  const [ error, setError ] = useState(false);
  const handleChange = value => {
    setText(value);
    let isInputValid = error;
    if (validation) {
      isInputValid = validation(value);
      setError(isInputValid);
    }
    if (doWithState) {
      doWithState({
        inputValue: value,
        isInputValid
      });
    }
  };
  const uid = id || label;
  const labelBlockOnLeft = (label || helpText) && !labelBlockOnTop;
  return (
    <div style={wrapperStyle(style, labelBlockOnTop)}>
      <div>
        {required && <span style={requiredStyle()}>* </span>}
        {label && <label htmlFor={uid}>{label}</label>}
        {toolTip && <ToolTip content={toolTip} toolTipIcon={toolTipIcon} />}
        {helpText && <div style={helpTextStyle()}>{helpText}</div>}
      </div>
      <div style={inputBlockStyle(inputWidth, labelBlockOnLeft, labelBlockOnTop)}>
        {icon && <i style={iconStyle(iconLeft)}>{icon}</i>}
        <input
          onChange={e => handleChange(e.target.value)}
          placeholder={disabled ? '' : placeholder}
          style={inputStyle(iconLeft, disabled)}
          disabled={disabled}
          value={text}
          id={uid}
        />
        {error && <div style={errorStyle()}>{errorMessage || 'Invalid'}</div>}
      </div>
    </div>
  );
};
