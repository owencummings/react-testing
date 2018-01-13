import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export class Toolbar extends React.Component{
  render(){

    const styleMain = {
      fontWeight: '700',
      color: 'inherit',
      textDecoration: 'none'
    }

    const Container = styled.div`
      background: white;
      border-bottom: solid 2px  #BBB;
      height: 10vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 700;
      transition: border-bottom 1s, height 1s;

      :hover{
        border-bottom: solid 2px rgb(255, 85, 170);
        height: 12vh;
      }

    `;

    const Title = styled.span`
      float: left;
      margin-left: 20vw;
      color:  #BBB;
      transition: color 1s, font-size 1s;
      ${Container}:hover & {
        color: rgba(255,170,170,1);
      }
      :hover{
        font-size: 1.3em;
      }

      `;

    const style3 = {
      float: 'right'
    }

    const Archive = styled.span`
      margin-right: 4vw;
      color:  #BBB;
      transition: color 1s, font-size 1s;

      ${Container}:hover & {
        color: rgba(255,170,170,1);
      }

      :hover{
        font-size: 1.3em;
      }



    `

    const About = styled.span`
      margin-right: 19vw;
      color:  #BBB;
      transition: color 1s, font-size 1s;

      ${Container}:hover & {
        color: rgba(255,170,170,1);
      }

      :hover{
        font-size: 1.3em;
      }
    `


    return(
      <Container>
        <div>
        <Title><Link to='/' style={styleMain}>Game Rank</Link></Title>
        <span style={style3}>
          <Archive>Archive</Archive>
          <About><Link to='/about' style={styleMain}>About</Link></About>
        </span>
        </div>
      </Container>
    );
  }

}
