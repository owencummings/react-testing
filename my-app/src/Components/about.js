import React from 'react';

import { Footer } from './footer';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class About extends React.Component{
  render(){
    const style1 = {
      marginTop: '30vh',
      marginBottom: '70vh',
      color: '#BBB'
    }

    return(
        <div className='transition-item review-page'>
          <div style={style1}>I mean, there is no funny business going on here. Honest!</div>
          <Footer />
        </div>
    )
  }

}
