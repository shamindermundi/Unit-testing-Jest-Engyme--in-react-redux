import React from "react";

import { shallow } from "enzyme";
import { findByTestAttr } from "./../../../Utils/Index";
import ListItem from "./Index";

describe("ListItem Component", () => {
  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Eg Title",
        desc: "Desc here",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should render without error", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("should rende a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("should render a description", () => {
      const description = findByTestAttr(wrapper, "componentDescription");
      expect(description.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Desc here",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Component is not rendered", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
