import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { fetchUsers, filterUsers, selectUsers } from "../../store/users";
import { selectKeyword } from "../../store/search";
import ListItem from "./ListItem";
import "./index.scss";

const UserList = () => {
  const { filteredUsers, loading } = useSelector(selectUsers);
  const keyword = useSelector(selectKeyword);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterUsers());
  }, [keyword, dispatch]);

  const LoadingSection = (
    <TransitionGroup className="user-list-group">
      <CSSTransition timeout={400} classNames="user-list-item">
        <div className="loading listing">Loading users...</div>
      </CSSTransition>
    </TransitionGroup>
  );

  const NoResultsSection = (
    <TransitionGroup className="user-list-group">
      <CSSTransition timeout={400} classNames="user-list-item">
        <div className="no-result listing">No results</div>
      </CSSTransition>
    </TransitionGroup>
  );

  const userList = (
    <ul className="green-blue-list">
      <TransitionGroup className="user-list-group">
        {filteredUsers.map((user, index) => (
          <CSSTransition
            key={user.id}
            timeout={400}
            classNames="user-list-item"
          >
            <ListItem key={user.id} {...user} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );

  return (
    <div className="user-list">
      <h5>Results</h5>
      {loading
        ? LoadingSection
        : filteredUsers.length > 0
        ? userList
        : NoResultsSection}
    </div>
  );
};

export default UserList;
