import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Input = ({ id, onChange, validation, label, errorMsg }) => {
  const [text, changeText] = useState('');
  const [error, setError] = useState(false);
  const handleChange = e => {
    e.preventDefault();
    const val = e.target.value;
    changeText(val);
    setError(validation(val));
    onChange(e);
  };
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} value={text} onChange={handleChange} />
      {error ? errorMsg || 'Invalid input' : null}
    </div>
  );
};

export default Input;
