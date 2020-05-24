import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { fetchUsers, filterUsers, selectUsers } from "./store";
import { selectKeyword } from "../search/store";
import ListItem from "./ListItem";

import "./styles.scss";

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
    <CSSTransition timeout={400} classNames="fade">
      <div className="loading listing">Loading users...</div>
    </CSSTransition>
  );

  const NoResultsSection = (
    <CSSTransition timeout={400} classNames="animate">
      <div className="no-result listing">No results</div>
    </CSSTransition>
  );

  const List = (
    <ul className="green-blue-list">
      <TransitionGroup className="user-list-group">
        {filteredUsers.map((user, index) => (
          <CSSTransition key={user.id} timeout={400} classNames="fade">
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
        ? List
        : NoResultsSection}
    </div>
  );
};

export default UserList;
