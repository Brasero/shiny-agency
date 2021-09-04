import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './pages/Home/Index'
import Survey from './pages/Survey';
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results/Index'
import Freelances from './pages/Freelances'

const GlobalStyle = createGlobalStyle`
        div {
            font-family: 'Trebuchet MS', Helvetica, sans-serif;
        }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
        <Route exact path="/freelances">
          <Freelances />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);