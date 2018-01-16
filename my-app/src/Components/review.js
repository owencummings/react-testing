import React from 'react';

import { Footer } from './footer';
import { data } from '../data';

export class Review extends React.Component{



  render(){

    const styleCont = {
      height: '90vh',
      overflowY: 'scroll',
    }

    const style1 = {
      marginTop: '8vh',
      marginBottom: '10vh',
      color: '#BBB',

    }

    const stylePara = {
      color: '#BBB',
      width: '50vw',
      marginLeft: '25vw',
      textAlign: 'left',
      lineHeight: '180%',
      letterSpacing: '.5px',
      fontSize: '1.2em',
      textIndent: '50px'
    }

    const styleTitle = {
      color: '#333',
      width: '50vw',
      marginLeft: '25vw',
      textAlign: 'center',
      //textShadow: '0px 4px 0px #BBB',
      fontSize: '2.2em'
    }

    const styleImg = {
      width: '60vw'

    }


    const content = data.items[this.props.match.params.game].content.map((chunk, index)=>
      <div key={index} style={style1}>
        {(function(){
          switch(chunk[0]){
            case 'p': //paragraph
              return <div style={stylePara} className='serif'>{chunk[1]}</div>
            case 't': //title or quote
             return <h1 style={styleTitle} className='sans'>{chunk[1]}</h1>
            case 'i': //image URL
              return  <img style={styleImg} src={chunk[1]} />
            default:
              return null
          }
        })()}
      </div>
    )




    return(

        <div className='transition-item review-page' style={styleCont}>
          {content}
          <Footer />
        </div>

    )
  }

}
