import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (
  <h1 id="heading" className="head">
    Namaste React from JSX🚀 
  </h1>
);

//React Components (1. Class based)(2. Functional)

//React Functional Component
//is a normal JS function
//which returns some piece of JSX or React Element/elements
//Starts with Capital letter
const HeadingCOmponent=()=>{
  return <h1>Namaste React from Functional Component</h1>;
};

const HeadCOmp=()=><h2>Huhuuuu</h2>;
const HeadComp2=()=>(<h3>Heheee</h3>);
//These are the same thing

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
