import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/modal";
import { updateCurrentUser } from "../../store/users";
import { UserType } from "./types";

const ListItem = ({ id, name }: UserType) => {
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
