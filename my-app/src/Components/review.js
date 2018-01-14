import React from 'react';

import { Footer } from './footer';
import { data } from '../data';

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


    const content = data.items[this.props.match.params.game].content.map((chunk, index)=>
      <div key={index} style={style1}>
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

        <div className='transition-item review-page'>
          {content}
          <Footer />
        </div>

    )
  }

}
