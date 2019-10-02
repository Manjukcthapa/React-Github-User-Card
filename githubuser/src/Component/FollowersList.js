import React from "react";
import FollowersCard from "./Followers";




export default function UserList(props) {
  return (
    <div>
      {props.userFollowers.map((follow, index) => (
        <FollowersCard key={index} follower={follow} />
      ))}
    </div>
  );
}
