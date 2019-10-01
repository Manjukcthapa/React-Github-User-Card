import React from "react";
import UserCard from "./UserCard"

const UserList = (props) => {
    return(
        <div>
            {props.userInfo.map((card) => (
      <UserCard key={card.id} {...card}  />
    ))}
        </div>
    )
}

export default UserList;
