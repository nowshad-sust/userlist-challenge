import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../store";
import { toggleModal } from "./store";
import Modal from "./Modal";

describe("Modal", () => {
  it("renders modal", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    expect(wrapper.html()).toEqual('<div class="modal close"></div>');
  });

  it("does not render UserDetails by default", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    expect(wrapper.exists("UserDetails")).toEqual(false);
  });

  it("model is open when state is open", () => {
    store.dispatch(toggleModal());
    const wrapper = mount(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    expect(wrapper.html()).toEqual('<div class="modal open"></div>');
  });
});
