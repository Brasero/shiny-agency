import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, SurveyProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';

import Home from './pages/Home/Index'
import Survey from './pages/Survey';
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results/Index'
import Freelances from './pages/Freelances'
import Footer from './components/Footer';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/survey/:questionNumber">
            <SurveyProvider>
              <Survey />
            </SurveyProvider>
          </Route>
          <Route exact path="/results">
            <SurveyProvider>
              <Results />
            </SurveyProvider>
          </Route>
          <Route exact path="/freelances">
            <Freelances />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);