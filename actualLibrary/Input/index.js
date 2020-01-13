/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';
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
  getRef,
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
  doWithState,
  ...rest
}) => {
  const ref = useRef(null);
  useEffect(
    () => {
      if (getRef) {
        getRef(ref);
      }
    },
    []
  );
  const [ error, setError ] = useState(false);
  const errorMsg = errorMessage || 'Invalid';
  const handleChange = e => {
    e.preventDefault();
    let isInputInvalid = error;
    if (validation) {
      isInputInvalid = validation(ref.current.value);
      if (isInputInvalid) {
        if (!error) {
          setError(isInputInvalid);
        }
        if (ref.current.validity.valid) {
          ref.current.setCustomValidity(errorMsg);
        }
      } else {
        if (error) {
          setError(isInputInvalid);
        }
        if (ref.current.validationMessage) {
          ref.current.setCustomValidity('');
        }
      }
    }
    if (!ref.current.validity.valid) {
      setError(true);
    } else {
      setError(false);
    }
    if (doWithState) {
      doWithState({
        inputValue: ref.current.value,
        isInputValid: !isInputInvalid
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
          name={uid}
          {...rest} // anything above can be overridden, anything below is strictly set here
          placeholder={disabled ? '' : placeholder}
          onChange={e => handleChange(e)}
          disabled={disabled}
          required={required}
          style={inputStyle(iconLeft, disabled, error)}
          ref={ref}
          id={uid}
        />
        {error && <div style={errorStyle()}>{errorMsg}</div>}
      </div>
    </div>
  );
};
