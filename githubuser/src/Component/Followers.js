import React from "react";
import Styled from "styled-components";

const Img = Styled.img`
height:200px;
margin-top:40px;

`;

const Div = Styled.div`
margin-left:160px;
border:2px solid grey;
width:980px;
display:flex;
background:#1D6A76; 

`;

const Imges = Styled.img`
border:2px solid grey;
height:150px;
width:700px;
`;
const Divs = Styled.div`
margin-left:30px;
margin-top:100px;

`;

const SecondDiv = Styled.div`
margin-left:40px;

`

const P = Styled.p`
color:white;
`



export default function FollowersCard(props) {
  console.log(props.follower);
  return (
    <div>
      {props.follower.map(team => (
        <Div>
          <SecondDiv>
            <Img alt="avatar" src={team.avatar_url} />
            <P>{team.login}</P>
            <p>{team.name}</p>
            <p>{team.link}</p>
          </SecondDiv>
          <Divs>
            <Imges
              src={"http://ghchart.rshah.org/" + team.login}
              alt="Github chart"
            />
          </Divs>
        </Div>
      ))}
    </div>
  );
}
