import React, { useState } from "react";

const UserItem = (props) => {
  // const [avatarUrl, setAvatarUrl] = useState(
  //   "https://i.pravatar.cc/150?u=49358"
  // );
  // const [name, setName] = useState("officia");
  // const [statusMessage, setStatusMessage] = useState("working from home");
  // const [createdAt, setCreatedAt] = useState("2016-03-25T05:21:04Z");
  // const [age, setAge] = useState(77);

  return (
    <div className="user-profile">
      <div className="img-url">
        <img
          src={props.user.avatarUrl}
          alt=""
          className="round-img"
          style={{ width: "50px" }}
        />
      </div>
      <div className="center">
        <div className="user-name">Name: {props.user.name} </div>
        <div className="user-status">Status: {props.user.statusMessage} </div>
        <div className="created-user-profile">
          Created at: {props.user.createdAt}{" "}
        </div>
      </div>
      <div className="ageofuser">Age : {props.user.age} </div>
    </div>
  );
};

export default UserItem;
