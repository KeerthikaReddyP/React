import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="heading" className="head">
    Namaste React from JSX🚀 
  </h1>
);
//Attribute names should be in camel case
//Enclose JSX within round brackets () in case of multiple lines

//Babel (JS compiler)(Transpiler)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
