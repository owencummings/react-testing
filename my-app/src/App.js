import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Toolbar } from './Components/toolbar';
import { Item } from './Components/main-item';
import { Footer } from './Components/footer';

import { data } from './data';

class App extends Component {
  render() {

    const items = data.items.map((item) =>
      <Item item={item}/>
    );


    return (
      <div className="App">

        <Toolbar />
        {items}
        <Footer />
      </div>
    );
  }
}

export default App;
