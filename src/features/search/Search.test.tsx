import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../store";
import { updateKeyword } from "./store";
import Search from "./Search";

describe("Search", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });

  it("Search input field values", (done) => {
    // check the default value
    expect(wrapper.find("input").first().getElement().props.value).toEqual("");

    // input value changes if state is updated
    store.dispatch(updateKeyword("le"));
    process.nextTick(() => {
      wrapper.update();
      expect(wrapper.find("input").first().getElement().props.value).toEqual(
        "le"
      );
      done();
    });

    // state changes if input is updated
    wrapper.find("input").simulate("change", {
      target: { value: "eliza" },
    });

    expect(store.getState().search.keyword).toEqual("eliza");
  });
});
