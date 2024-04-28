const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Hiii"),
    React.createElement("p", {}, "This is a pragraph, sibling of h1 tag's Hiii")]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
