import React from 'react';

export const pink = {
  name: 'pink',
  value: {
    mainColor: 'hotpink'
  }
};

export const blue = {
  name: 'blue',
  value: {
    mainColor: 'deepskyblue'
  }
};

const ThemeContext = React.createContext({});

export default ThemeContext;
