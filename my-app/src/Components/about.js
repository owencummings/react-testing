import React from 'react';

import { Footer } from './footer';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class About extends React.Component{
  render(){
    const style1 = {
      width: '60vw',
      margin: '30vh auto',
      color: '#BBB'
    }

    const styleTitle={
      color: '#333',
      fontSize: '2.2em',
      marginBottom: '3vh'

    }

    const styleContent={
      color: '#BBB',
      lineHeight: '180%',
      letterSpacing: '.5px',
      fontSize: '1.2em'
    }


    return(
        <div className='transition-item review-page'>

          <div style={style1}>
            <h1 className='sans' style={styleTitle}>
              Hey there.
            </h1>
            <div className='serif' style={styleContent}>
              This is just a little mockup I did to test using React over Angular. I like it a lot!
              <br />
              Nothing here is meant to be serious, but I hope you enjoyed it.
            </div>
          </div>
        </div>
    )
  }

}
