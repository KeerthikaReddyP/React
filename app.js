
// Order of the script files do matter.

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
//This code is not so clean and understandable.
//JSX is the solution.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
/*
    Anything inside the div (whose id is root) will be 
    replaced by this parent object.
    REPLACED. Not appended.
*/
/*
    Library Vs Framework

    React can be applied to a small portion of our app
    and it works independently.

    Whereas framework comes with loads of things.
*/