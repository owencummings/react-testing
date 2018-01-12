import React from 'react';

import { Link } from "react-router-dom";

export class Item extends React.Component{
  render(){

    const styleCont = {
      width: '60vw',
      border: 'solid 1px #CCC',
      //borderRadius: '10px',
      //boxShadow: '5px 5px #222',
      height: '40vh',
      marginLeft: '20vw',
      marginTop: '5vh'
    };

    const styleImg = {
      height: '40vh',
      width: '42vw',
      borderRadiusTopLeft: '10px',
      borderRadiusBottomLeft: '10px',

      //testing, testing
      backgroundImage: 'url("'+ this.props.item.imgUrl +'")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      float: 'left'
    }

    const styleContent = {
      height: '40vh',
      width: '18vw',
      float: 'right',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }

    const styleAuthor ={
      color: '#CCC',
      marginTop: '3vh',
      fontWeight: '700',
      fontSize: '1.5em'

    }

    const styleDate ={
      color: '#CCC',
      marginBottom: '3vh'

    }

    const styleRating ={
      color: 'black',
      fontSize: '4em',
      fontWeight: '700',
      color: '#333'

    }


    return(
      <Link to={'/review/' + this.props.item.id}>
        <div style={styleCont}>
            <div style={styleImg}>

            </div>
            <div style={styleContent}>
              <div style={styleAuthor}>
                {this.props.item.author}
              </div>
              <div style={styleRating}>
                {this.props.item.rating}
              </div>
              <div style={styleDate}>
                {this.props.item.date}
              </div>
            </div>
        </div>
      </Link>

    )

  }


}
