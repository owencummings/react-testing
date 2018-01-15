import React from 'react';

import { Link } from "react-router-dom";
import styled from 'styled-components';


export class Item extends React.Component{
  render(){

    const Container = styled.div`
      width: 60vw;
      border: solid 1px #CCC;
      height: 40vh;
      margin: 0 auto;
      margin-top: 5vh;
      transition: border 1s, height 1s, width 1s;

      :hover{
        border: solid 3px rgba(255,85,170,1);;
        height: 44vh;
        width: 66vw;
      }
    `;

    const Image = styled.div`
      height: 100%;
      width: 70%;
      border-radius-top-left: 10px;
      border-radius-bottom-left: 10px;
      background-position: center;
      background-size: cover;
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `
    const styleImage = {
      backgroundImage: 'url("'+ this.props.item.imgUrl +'")',
    }

    const InternalTitle = styled.div`
      height: 0vh;
      width: 40vw;
      margin: 0 auto;
      opacity: 1;
      color: white;
      background-color: rgba(255,170,170,1);
      transition: all 1s;
      top: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;

      ${Container}:hover & {
        opacity: 1;
        margin: 0 auto;
        height: 30vh;
      }
    `

    const GameTitle = styled.div`
      font-weight: 700;
      font-size: 3em;
      width: 80%;
      margin-left: 10%;
      text-transform: uppercase;
      text-shadow: 0px 4px 0px rgba(255,85,170,1);
    `

    const GameSubtitle = styled.div`
      font-weight: 500;
      font-size: 1.3em;
      margin-top: 3vh;
      width: 80%;
      margin-left: 10%;
      text-shadow: 0px 2px 0px rgba(255,85,170,1);
    `

    const Content = styled.div`
      height: 100%;
      width: 30%;
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `

    const Author = styled.div`
      color: #CCC;
      margin-top: 3vh;
      font-weight: 700;
      font-size: 1.5em;
      transition: color 1s;

      ${Container}:hover & {
        color: rgba(255,170,170,1);
      }
    `


    const Date1 = styled.div`
      color: #CCC;
      margin-bottom: 3vh;
      transition: color 1s;
      font-weight: 600;

      ${Container}:hover & {
        color: rgba(255,170,170,1);
      }
    `


    const Rating = styled.div`
      color: black;
      font-size: 6em;
      font-weight: 700;
      color: #333;
      margin-bottom: 0px;
      text-shadow: 0px 0px 0px rgba(255,85,0,1),
                   0px 0px 0px rgba(255,170,0,1),
                   0px 0px rgba(255,255,0,1);
      transition: color 1s, text-shadow 1s, margin-bottom 1s;

      ${Container}:hover & {
        color: rgb(255,0,170);
        margin-bottom: 20px;
        text-shadow: 0px 4px 0px rgba(255,85,170,1),
                     0px 8px 0px rgba(255,170,170,1),
                     0px 12px 0px rgba(255,255,170,1);
      }
    `



    return(
        <Container>
            <Link to={'/review/' + this.props.item.id}>
              <Image style={styleImage}>
                <InternalTitle>
                  <GameTitle>
                    {this.props.item.game}
                  </GameTitle>
                  <GameSubtitle>
                    {this.props.item.title}
                  </GameSubtitle>
                </InternalTitle>
              </Image>
              <Content>
                <Author>
                  {this.props.item.author}
                </Author>
                <Rating>
                  {this.props.item.rating}
                </Rating>
                <Date1>
                  {this.props.item.date}
                </Date1>
              </Content>
            </Link>
        </Container>


    )

  }


}
