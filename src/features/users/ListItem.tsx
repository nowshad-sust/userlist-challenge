import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentUser } from "./store";
import { toggleModal } from "../modal/store";
import { ListUser } from "./types";

const ListItem = ({ id, name }: ListUser) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(updateCurrentUser(id));
    dispatch(toggleModal());
  };

  return (
    <li className="green-blue-list-item">
      <div onClick={openModal} className="listing">
        {name}
      </div>
    </li>
  );
};

export default ListItem;
