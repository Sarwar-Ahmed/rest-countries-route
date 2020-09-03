import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Countries from './Components/Countries/Countries';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/countries">
          <Countries />
        </Route>
        <Route path="/about/:countryName">
          <CountryDetails />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
