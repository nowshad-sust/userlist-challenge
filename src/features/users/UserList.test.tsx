import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../store";
import { updateKeyword } from "../search/store";
import UserList from "./UserList";

describe("UserList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
  });

  it("renders correctly", () => {
    // Initially users should be empty
    wrapper.update();
    // after mounting users should be populated
    expect(store.getState().users.allUsers.length).toBeGreaterThan(0);
  });

  it("data changes on keyword change", () => {
    store.dispatch(updateKeyword("leanne"));

    expect(store.getState().users.filteredUsers.length).toEqual(1);
    expect(store.getState().users.filteredUsers[0].name).toEqual(
      "Leanne Graham"
    );
  });
});
