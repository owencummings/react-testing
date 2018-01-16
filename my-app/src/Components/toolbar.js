import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export class Toolbar extends React.Component{
  render(){

    const styleMain = {
      fontWeight: '700',
      color: 'inherit',
      textTransform: 'uppercase',
      textDecoration: 'none'

    }

    const Container = styled.div`
      background: white;
      border-bottom: solid 2px  #BBB;
      height: 6vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 700;
      transition: border-bottom 1s, height 1s;

      :hover{
        border-bottom: solid 2px rgb(255, 85, 170);
        height: 9.5vh;
      }

    `;

    const Title = styled.span`
      float: left;
      margin-left: 19vw;
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

    /*
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
    */

    const About = styled.span`
      margin-right: 20vw;
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
        <Title className='serif'><Link to='/' style={styleMain}>Gamerank</Link></Title>
        <span style={style3}>
          <About className='serif'><Link to='/about' style={styleMain}>About</Link></About>
        </span>
        </div>
      </Container>
    );
  }

}
