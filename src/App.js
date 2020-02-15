import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profiles from './components/profiles';
import Profile from './components/profile';
import WontMatch from './components/wontMatch';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={Profiles} />
        <Route path="/profile/:id" exact component={Profile} />
        <Route component={WontMatch} />
      </Switch>




    </BrowserRouter>
  );
}

export default App;
