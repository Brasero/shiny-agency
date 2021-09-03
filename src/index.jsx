import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Index'
import Survey from './pages/Survey';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router exact path="/">
      <Home />
    </Router>
    <Router path="/survey">
      <Survey />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

