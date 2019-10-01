import React from "react";

export default function UserCard(props) {
  return (
    <div>
      <img alt="avatar" src={props.card.avatar_url} />
      <p>{props.card.name}</p>
      <p>{props.card.location}</p>
      <p>{props.card.bio}</p>
    </div>
  );
}
