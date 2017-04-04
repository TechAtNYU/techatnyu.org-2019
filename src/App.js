import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
        <hr/>
          <Match exactly pattern='/' component={Home}/>
      </div>
    </Router>
  );
};

export default App;