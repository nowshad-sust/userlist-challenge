import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/modal";
import { UserType } from "./types";

const ListItem = ({ name }: UserType) => {
  const dispatch = useDispatch();
  return (
    <li className="green-blue-list-item">
      <div onClick={() => dispatch(toggleModal())} className="listing">
        {name}
      </div>
    </li>
  );
};

export default ListItem;
