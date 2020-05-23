import React from "react";
import { useSelector } from "react-redux";
import { selectModalStatus } from "../../store/modal";
import UserDetails from "./UserDetails";
import dummydata from "../../dummydata";
import "./index.scss";

const Modal = () => {
  const isOpen = useSelector(selectModalStatus);

  return (
    <div className={`modal ${isOpen ? "open" : "close"}`}>
      <UserDetails {...dummydata[0]} />
    </div>
  );
};

export default Modal;
