import React from 'react';
import { Link } from 'react-router-dom';


export class Toolbar extends React.Component{
  render(){

    const style1 = {
      background: 'white',
      color: '#BBB',
      borderBottom: 'solid 1px #DDD',
      height: '10vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontWeight: '700'
    };

    const style2 = {
      float: 'left',
      marginLeft: '20vw'

    }

    const style3 = {
      float: 'right'
    }

    const style4 = {
      marginRight: '4vw',
    }

    const style5 = {
      marginRight: '19vw',
    }


    return(
      <div style={style1}>
        <div>
        <span style={style2}><Link to='/'>Game Rank</Link></span>
        <span style={style3}>
          <span style={style4}>Archive</span>
          <span style={style5}><Link to='/about'>About</Link></span>
        </span>
        </div>
      </div>
    );
  }

}
