import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Toolbar } from './Components/toolbar';
import { Main } from './Components/main';
import { About } from './Components/about';
import { Review } from './Components/review';

import { data } from './data';
import { Route, Link, Switch } from "react-router-dom";
import TransitionGroup from 'react-transition-group/TransitionGroup'

import { BrowserRouter } from "react-router-dom";
import PageTransition from 'react-router-page-transition';



class App extends Component {
  render() {

    return (
      <div className="App">

        <Toolbar />
        <Route
          render={({ location }) => (
            <PageTransition timeout={1000}>
              <Switch location={location}>
                <Route exact path="/" component={Main} />
                <Route exact path="/about" component={About} />
                <Route path='/review/:game' component={Review} />
                <div></div>
              </Switch>
            </PageTransition>
          )}
        />
      </div>
    );
  }
}



export default App;
