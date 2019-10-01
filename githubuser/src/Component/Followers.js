import React from "react";

export default function FollowersCard(props) {
  console.log(props.follower);
  return (
    <div>
      {props.follower.map(team => (
          <div>
        <img alt="avatar" src={team.avatar_url} />
        <p>{team.url}</p>
        <p>{team.login}</p>
        <p> {team.login}</p>
        </div>
      ))}
    </div>
  );
}

{
  /* <p> {props.follower.login}</p>
<img alt="avatar" src={props.follower.avatar_url} />
<p>{props.follower.html_url}</p> <p> {props.follower.login}</p>
 <img alt="avatar" src={props.follower.avatar_url} />
 <p>{props.follower.html_url}</p> <p> {props.follower.login}</p>
 <img alt="avatar" src={props.follower.avatar_url} />
 <p>{props.follower.html_url}</p> */
}
