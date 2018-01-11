import React from 'react';


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
      paddingLeft: '20vw'

    }

    const style3 = {
      float: 'right'
    }

    const style4 = {
      paddingRight: '4vw',
    }

    const style5 = {
      paddingRight: '20vw',
    }


    return(
      <div style={style1}>
        <div>
        <span style={style2}>Game Rank</span>
        <span style={style3}>
          <span style={style4}>Archive</span>
          <span style={style5}>About</span>
        </span>
        </div>
      </div>
    );
  }

}
