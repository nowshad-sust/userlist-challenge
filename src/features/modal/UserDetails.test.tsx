import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../store";
import UserDetails from "./UserDetails";

describe("UserDetails", () => {
  const props = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    website: "hildegard.org",
  };

  it("renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <UserDetails {...props} />
      </Provider>
    );
  });

  it("close button click", () => {
    const modalStatus = store.getState().modal.isOpen;
    const wrapper = mount(
      <Provider store={store}>
        <UserDetails {...props} />
      </Provider>
    );

    // check if modal state toggles on button click
    wrapper.find("button").simulate("click");
    expect(modalStatus).toBe(!store.getState().modal.isOpen);
  });
});
