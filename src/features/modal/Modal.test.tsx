import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../store";
import { toggleModal } from "./store";
import Modal from "./Modal";

describe("Modal", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
  });

  it("renders modal", () => {
    expect(wrapper.html()).toEqual('<div class="modal close"></div>');
  });

  it("does not render UserDetails by default", () => {
    expect(wrapper.exists("UserDetails")).toEqual(false);
  });

  it("model is open when state is open", (done) => {
    store.dispatch(toggleModal());
    process.nextTick(() => {
      wrapper.update();
      // As transition involved with delay, check only if it's not in the initial state
      expect(wrapper.html()).not.toEqual('<div class="modal close"></div>');
      done();
    });
  });
});
