import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import ThemeContext, { pink, blue } from './themes';
import Default from './Default';
import InputExamples from './InputExamples';

const navStyle = { border: '1px solid #f5f5f5', float: 'right', padding: '1rem' };
const linkStyle = theme => ({ color: theme.mainColor, margin: '0 1rem' });
const activeStyle = { ...linkStyle, fontWeight: 'bolder' };

const App = () => {
  const [theme, setTheme] = useState(pink);
  const toggleTheme = () => theme.name === 'pink' ? setTheme(blue) : setTheme(pink);
  return (
    <ThemeContext.Provider value={theme.value}>
      <Router basename='/dummies'>
        <nav style={navStyle}>
          <button onClick={toggleTheme}>Toggle Styles</button>
          <NavLink exact to="/" style={linkStyle(theme.value)} activeStyle={activeStyle}>Home</NavLink>
          <NavLink to="/input" style={linkStyle(theme.value)} activeStyle={activeStyle}>Input</NavLink>
        </nav>
        <h1>Dummies</h1>
        <h2 style={{ marginBottom: '5rem' }}>React components library</h2>
        <Switch>
          <Route exact path="/" component={Default} />
          <Route path="/input" component={InputExamples} />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
