import React from 'react'

import { Item } from './main-item';
import { Footer } from './footer';
import { data } from '../data';

export class Main extends React.Component{

  render(){

    console.log(data)
    const items = data.items.map((item) =>
      <Item item={item}/>
    );

    return(
      <div>
        {items}
        <Footer />
      </div>
    )
  }


}
