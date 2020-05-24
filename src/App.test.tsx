import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders search and result", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.exists("Modal")).toEqual(true);
    expect(wrapper.exists("Search")).toEqual(true);
    expect(wrapper.exists("UserList")).toEqual(true);
  });
});
