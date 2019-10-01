import React from "react";

export default function UserCard(props) {
  return (
    <div>
      <img alt="avatar" src={props.user.avatar_url} />
      <p>{props.user.name}</p>
      <p>{props.user.location}</p>
        <p>{props.user.bio}</p>
    </div>
  );
}
