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
          src={props.data.avatarUrl}
          alt=""
          className="round-img"
          style={{ width: "50px" }}
        />
      </div>
      <div className="center">
        <div className="user-name">Name: {props.data.name} </div>
        <div className="user-status">Status: {props.data.statusMessage} </div>
        <div className="created-user-profile">
          Created at: {props.data.createdAt}{" "}
        </div>
      </div>
      <div className="user-id"> {props.data.id} </div>
      <div className="ageofuser">Age : {props.data.age} </div>
    </div>
  );
};

export default UserItem;
