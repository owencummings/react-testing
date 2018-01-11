import React from 'react';

import { Footer } from './footer';

export class About extends React.Component{
  render(){
    const style1 = {
      marginTop: '30vh',
      marginBottom: '70vh'
    }

    return(

      <div>
        <div style={style1}>I mean, there's no funny business going on here. Honest!</div>
        <Footer />
      </div>
    )
  }

}
