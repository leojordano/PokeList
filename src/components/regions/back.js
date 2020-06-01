import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

// import { Container } from './styles';

function Back() {
  return (
      <Router forceRefresh='true'>
      <div className='cont-back'>
        <Link to='/regions/kanto'>Back</Link>
      </div>
      </Router>
  );
}

export default Back;