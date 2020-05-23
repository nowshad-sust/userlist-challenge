import React from "react";
import { UserType } from "./types";

const ListItem = ({ name }: UserType) => {
  return (
    <li className="green-blue-list-item">
      <div className="listing">{name}</div>
    </li>
  );
};

export default ListItem;
