import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import InputExamples from './InputExamples';

const linkStyle = {
  color: 'hotpink',
  margin: '0 1rem'
};

const App = () => {
  return (
    <Router>
      <nav style={{ border: '1px solid #f5f5f5', float: 'right', padding: '1rem' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/input" style={linkStyle}>Input</Link>
      </nav>
      <h1>Dummies</h1>
      <h2>React components library</h2>
      <Switch>
        <Route exact path="/input" component={InputExamples} />
      </Switch>
    </Router>
  );
};

export default App;
