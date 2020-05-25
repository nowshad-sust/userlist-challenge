import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../store";
import ListItem from "./ListItem";

describe("ListItem", () => {
  const props = {
    id: 1,
    name: "Leanne Graham",
  };

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ListItem {...props} />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(wrapper.find(ListItem).prop("name")).toEqual(props.name);
  });

  it("click username opens modal", () => {
    wrapper.find("div.listing").simulate("click");
    expect(store.getState().modal.isOpen).toBe(true);
  });
});
