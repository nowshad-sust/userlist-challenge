import React from "react";
import UserDetails from "./UserDetails";
import dummydata from "../../dummydata";
import "./index.scss";

const Modal = () => {
  return (
    <div className="modal">
      <UserDetails {...dummydata[0]} />
    </div>
  );
};

export default Modal;
