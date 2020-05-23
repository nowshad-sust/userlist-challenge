import React from "react";
import ListItem from "./ListItem";
import dummydata from "../../dummydata";
import "./index.scss";

const UserList = () => {
  return (
    <div className="user-list">
      <h5>Results</h5>
      <ul className="green-blue-list">
        {dummydata.map((user) => (
          <ListItem key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
