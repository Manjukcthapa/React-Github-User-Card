import React from "react";
import Styled from "styled-components";

const Img = Styled.img`
height:200px;
margin-top:40px;

`;

const Div = Styled.div`
margin-left:160px;
border:2px solid grey;
width:950px;
display:flex;

`;

const Imges = Styled.img`

`;
const Divs = Styled.div`
margin-left:30px;
margin-top:160px;
`;

export default function FollowersCard(props) {
  console.log(props.follower);
  return (
    <div>
      {props.follower.map(team => (
        <Div>
          <div>
            <Img alt="avatar" src={team.avatar_url} />
            <p>{team.login}</p>
            <p>{team.name}</p>
            <p>{team.location}</p>
            <p>{team.bio}</p>
            <p>{team.link}</p>
          </div>
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
