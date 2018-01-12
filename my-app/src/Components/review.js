import React from 'react';

import { Footer } from './footer';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class Review extends React.Component{



  render(){
    const style1 = {
      marginTop: '30vh',
      marginBottom: '70vh',
      color: '#BBB'
    }



    return(
        <div>
          <div style={style1}>This is the review to a game, or something like that.</div>
          <Footer />
        </div>
    )
  }

}
