import React from 'react'

import { Item } from './main-item';
import { Footer } from './footer';
import { data } from '../data';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




export class Main extends React.Component{
  render(){


    const items = data.items.map((item, index) =>
        <Item key={index} item={item}/>
    );

    const style1 = {
      height: '90vh',
      overflowY: 'scroll',
    }

    return(

        <div style={style1} className='transition-item main-page'>
          {items}
          <Footer />
        </div>

    )
  }

  /*
  <ReactCSSTransitionGroup
    transitionName='MainAppearTransition'
    transitionAppear={ true }
    transitionAppearTimeout={ 1000 }
    transitionEnter={ false }
    transitionLeave={ 1000 }
  >
  </ReactCSSTransitionGroup>
  */

}
