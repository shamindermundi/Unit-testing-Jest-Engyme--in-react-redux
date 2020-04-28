import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/Index";

import Header from "./components/header/Index";
import "./css/app.scss";
import Headline from "./components/headline/Index";
import SharedButton from "./components/button/Index";
import ListItem from "./components/listItem/Index";

const App = ({ posts, fetchPosts }) => {
  const fetch = () => {
    fetchPosts();
  };

  const configButton = {
    buttonText: "Get posts",
    emitEvent: fetch,
  };
  return (
    <div className="App" data-test="appComponent">
      <Header />

      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" />
        <SharedButton {...configButton} />

        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body,
              };
              return <ListItem key={index} {...configListItem} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
