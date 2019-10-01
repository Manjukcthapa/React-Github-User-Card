import React from "react";
import Styled from "styled-components";

const  Div = Styled.div`
margin-left:50px;
`
const Img = Styled.img`
height:200px;
margin-top:40px;

`

export default function UserCard(props) {
  return (
    <Div>
       
      <Img alt="avatar" src={props.card.avatar_url} />
      <p>{props.card.login}</p>
      <p>{props.card.name}</p>
      <p>{props.card.location}</p>
      <p>{props.card.bio}</p>
      <h3>Followers: {props.card.followers}</h3>
    <h3>Following: {props.card.following}</h3>
    <div>
    {/* <Img
        src={"http://ghchart.rshah.org/" + props.login}
        alt="Github chart"
          /> */}
    </div>
    </Div>
  );
}
