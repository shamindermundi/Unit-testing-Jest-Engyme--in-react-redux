import React from "react";
import Header from "./components/header/Index";

import "./css/app.scss";
import Headline from "./components/headline/Index";

function App() {
  return (
    <header className="App">
      <Header />

      <section className="main">
        <h1>Unit Testing using jest & enzymes</h1>
        <Headline header="Posts" desc="Click the button to render posts" />
      </section>
    </header>
  );
}

export default App;
