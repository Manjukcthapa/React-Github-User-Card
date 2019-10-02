import React from "react";
import Styled from "styled-components";

const Div = Styled.div`
margin-left:160px;
border:2px solid grey;
width:950px;
display:flex;

`;
const Img = Styled.img`
height:200px;
margin-top:40px;

`;
const Divs = Styled.div`
margin-left:30px;
margin-top:160px;
`;

export default function UserCard(props) {
  return (
    <Div>
      <div>
        <Img alt="avatar" src={props.card.avatar_url} />
        <p>{props.card.login}</p>
        <p>{props.card.name}</p>
        <p>{props.card.location}</p>
        <p>{props.card.bio}</p>
        <h3>Followers: {props.card.followers}</h3>
        <h3>Following: {props.card.following}</h3>
      </div>
      <Divs>
        <img
          src={"https://ghchart.rshah.org/" + props.card.login}
          alt="Github chart"
        />
      </Divs>
    </Div>
  );
}
