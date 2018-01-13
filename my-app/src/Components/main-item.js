import React from 'react';

import { Link } from "react-router-dom";
import styled from 'styled-components';


export class Item extends React.Component{
  render(){

    const Container = styled.div`
      width: 60vw;
      border: solid 1px #CCC;
      height: 40vh;
      margin-left: 20vw;
      margin-top: 5vh;
    `;

    const Image = styled.div`
      height: 40vh;
      width: 42vw;
      border-radius-top-left: 10px;
      border-radius-bottom-left: 10px;
      background-position: center;
      background-size: cover;
      float: left;
    `
    const styleImage = {
      backgroundImage: 'url("'+ this.props.item.imgUrl +'")',
    }

    const InternalTitle = styled.div`
      height: 100%;
      width: 100%;
      opacity: 0;
      color: white;
      background-color: black;
      transition: opacity 1s;
      font-weight: 700;
      font-size: 2em;
      top: 30%;

      ${Container}:hover & {
        opacity: .7;
      }
    `

    const Content = styled.div`
      height: 40vh;
      width: 18vw;
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
        color: #809fff;
      }
    `


    const Date1 = styled.div`
      color: #CCC;
      margin-bottom: 3vh;
      transition: color 1s;

      ${Container}:hover & {
        color: #809fff;
      }
    `


    const Rating = styled.div`
      color: black;
      font-size: 4em;
      font-weight: 700;
      color: #333;
      transition: color 1s;

      ${Container}:hover & {
        color: #809fff;
      }
    `



    return(
        <Container>
            <Link to={'/review/' + this.props.item.id}>
              <Image style={styleImage}>
                <InternalTitle>
                  {this.props.item.game}
                  <br />
                  {this.props.item.title}
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
