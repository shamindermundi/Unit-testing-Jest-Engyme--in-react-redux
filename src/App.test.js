import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, testStore } from "./../Utils/Index";

import App from "./App";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();

  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Eg title",
          body: "Some text",
        },
        {
          title: "Eg title",
          body: "Some text",
        },
        {
          title: "Eg title",
          body: "Some text",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
