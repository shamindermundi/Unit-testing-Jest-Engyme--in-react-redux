import React, { Component } from "react";
import PropTypes from "prop-types";

class Headline extends Component {
  render() {
    const { header, desc } = this.props;
    if (!header) {
      return null;
    }
    return (
      <div data-test="headline">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

Headline.propsTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
};

export default Headline;
