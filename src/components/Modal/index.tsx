import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { selectModalStatus } from "../../store/modal";
import { selectUsers } from "../../store/users";
import UserDetails from "./UserDetails";
import "./index.scss";

const Modal = () => {
  const { currentUser } = useSelector(selectUsers);
  const isOpen = useSelector(selectModalStatus);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={200}
      classNames="modal-transition"
    >
      <div ref={nodeRef} className={`modal ${isOpen ? "open" : "close"}`}>
        {currentUser && <UserDetails {...currentUser} />}
      </div>
    </CSSTransition>
  );
};

export default Modal;
