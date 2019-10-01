import React from "react";
import UserCard from "./UserCard";
import Styled from "styled-components";

const Div = Styled.div`
border:2px solid grey;
width:900px;
`;

export default function UserList(props) {
  return (
    <Div>
      {props.userInfo.map(card => (
        <UserCard key={card.id} card={card} />
      ))}
    </Div>
  );
}
