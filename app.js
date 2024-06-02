import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement( //Core of react to create element
  "h1",
  { id: "heading" },
  "Namaste React👩‍🚀"
);


const jsxHeading=<h1 id="heading">Namaste React from JSX🚀</h1>; //JSX

console.log(heading);
console.log(jsxHeading);
//Both are react elements

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);