import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Default from './Default';
import InputExamples from './InputExamples';

const navStyle = { border: '1px solid #f5f5f5', float: 'right', padding: '1rem' };
const linkStyle = { color: 'hotpink', margin: '0 1rem' };
const activeStyle = { ...linkStyle, fontWeight: 'bolder' };

const App = () => {
  return (
    <Router basename='/dummies'>
      <nav style={navStyle}>
        <NavLink exact to="/" style={linkStyle} activeStyle={activeStyle}>Home</NavLink>
        <NavLink to="/input" style={linkStyle} activeStyle={activeStyle}>Input</NavLink>
      </nav>
      <h1>Dummies</h1>
      <h2>React components library</h2>
      <Switch>
        <Route exact path="/" component={Default} />
        <Route path="/input" component={InputExamples} />
      </Switch>
    </Router>
  );
};

export default App;
