import React from "react";
import Styled from "styled-components";

const Div = Styled.div`
margin-left:160px;
border:2px solid grey;
width:980px;
display:flex;
background:#1D6A76; 

`;
const Img = Styled.img`
height:200px;
margin-top:40px;

`;
const Divs = Styled.div`
margin-left:30px;
margin-top:160px;
`;
const SecondDiv = Styled.div`
margin-left:40px;

`

const Imges = Styled.img`
border:2px solid grey;
height:150px;
width:700px;

`;

const P =   Styled.p`
color: white;
`

export default function UserCard(props) {
  return (
    <Div>
      <SecondDiv >
        <Img alt="avatar" src={props.card.avatar_url} />
        <P>{props.card.login}</P>
        <P>{props.card.name}</P>
        <P>{props.card.location}</P>
        <P>{props.card.bio}</P>
        <P>Followers: {props.card.followers}</P>
        <P>Following: {props.card.following}</P>
      </SecondDiv >
      <Divs>
        <Imges
          src={"https://ghchart.rshah.org/" + props.card.login}
          alt="Github chart"
        />
      </Divs>
    </Div>
  );
}
