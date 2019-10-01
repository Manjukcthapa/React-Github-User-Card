import React from "react";
import UserCard from "./UserCard"

export default function UserList(props){
    return(
        <div>
            {props.userInfo.map(card => (
      <UserCard key={card.id} card={card}  />
    ))}
        </div>
    )
}


