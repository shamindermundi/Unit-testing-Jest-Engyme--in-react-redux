import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../Utils/Index";

import Header from "./Index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "header");
    expect(wrapper.length).toBe(1);
  });

  it("Should renderlogo", () => {
    const logo = findByTestAttr(component, "logoImg");
    expect(logo.length).toBe(1);
  });
});
