import React from 'react';

import { Footer } from './footer';
import { data } from '../data';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class Review extends React.Component{



  render(){

    const style1 = {
      marginTop: '8vh',
      marginBottom: '10vh',
      color: '#BBB'
    }

    const stylePara = {
      color: '#BBB',
      width: '50vw'
    }

    const styleTitle = {
      color: '#BBB',
      width: '50vw'
    }

    const styleImg = {
      width: '60vw'

    }


    const content = data.items[this.props.match.params.game].content.map((chunk)=>
      <div style={style1}>
        {(function(){
          switch(chunk[0]){
            case 'p': //paragraph
              return <div>{chunk[1]}</div>
            case 't': //title or quote
             return <h1>{chunk[1]}</h1>
            case 'i': //image URL
              return  <img style={styleImg} src={chunk[1]} />
            default:
              return null
          }
        })()}
      </div>
    )




    return(
      <ReactCSSTransitionGroup
        transitionName='AboutAppearTransition'
        transitionAppear={ true }
        transitionAppearTimeout={ 1000 }
        transitionEnter={ false }
        transitionLeave={ false }
      >
        <div>
          {content}
          <Footer />
        </div>
      </ReactCSSTransitionGroup>
    )
  }

}
