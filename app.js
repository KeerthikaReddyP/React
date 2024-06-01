import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "Hiii,I'm first child of child1"),
        React.createElement("p", {}, "This is a pragraph, sibling of h1 tag's Hiii, second child of child1")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h3", {}, "first child of child2"),
        React.createElement("p", {}, "second child of child2,sibling of h3")]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);