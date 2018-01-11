import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Toolbar } from './Components/toolbar';
import { Main } from './Components/main';
import { About } from './Components/about';

import { data } from './data';
import { Route, Link } from "react-router-dom";



class App extends Component {
  render() {

    return (
      <div className="App">

        <Toolbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default App;
