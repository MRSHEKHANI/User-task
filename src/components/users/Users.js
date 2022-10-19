import React, { useState } from "react";
import { json } from "react-router-dom";
import UserItem from "./UserItem";

const Users = () => {
  const [data, setData] = useState([]);

  const getApi = () => {
    fetch("http://localhost:3333/users")
      .then((Response) => Response.json())
      .then((json) => {
        setData(json);
      });
  };

  // const [user, setUser] = useState([
  //   {
  //     age: 77,
  //     avatarUrl: "https://i.pravatar.cc/150?u=49358",
  //     createdAt: "2016-03-25T05:21:04Z",
  //     id: 1,
  //     name: "officia",
  //     statusMessage: "working from home",
  //   },
  //   {
  //     age: 48,
  //     avatarUrl: "https://i.pravatar.cc/150?u=01140",
  //     createdAt: "2014-08-06T06:56:04Z",
  //     id: 2,
  //     name: "sed at",
  //     statusMessage: "working from home",
  //   },
  //   {
  //     age: 76,
  //     avatarUrl: "https://i.pravatar.cc/150?u=10010",
  //     createdAt: "2017-08-17T09:53:24Z",
  //     id: 3,
  //     name: "odio a",
  //     statusMessage: "working from home",
  //   },
  // ]);

  return (
    <div>
      {data.map((data) => {
        <UserItem key={data.id} user={data} />;
      })}
      {JSON.stringify(data)}
      {/* {user.map((user) => {
        <UserItem key={user.id} user={user} />;
      // })} */}
    </div>
  );
};

export default Users;
