import React from 'react'

import { Item } from './main-item';
import { Footer } from './footer';
import { data } from '../data';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




export class Main extends React.Component{

  render(){

    const items = data.items.map((item) =>
        <Item item={item}/>
    );

    return(
      <ReactCSSTransitionGroup
        transitionName='MainAppearTransition'
        transitionAppear={ true }
        transitionAppearTimeout={ 1000 }
        transitionEnter={ false }
        transitionLeave={ 1000 }
      >
        <div>
          {items}
          <Footer />
        </div>
      </ReactCSSTransitionGroup>
    )
  }


}
