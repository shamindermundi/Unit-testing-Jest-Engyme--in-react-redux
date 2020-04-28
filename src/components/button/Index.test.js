import React from "react";

import { shallow } from "enzyme";
import { findByTestAttr } from "./../../../Utils/Index";
import SharedButton from "./Index";

describe("SharedButton Component", () => {
  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "EG Button text",
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it("Should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
