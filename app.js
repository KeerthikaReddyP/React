import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (
  <h1 id="heading" className="head">
    Namaste React from JSX🚀 
  </h1>
);

//React Functional Component
const HeadingCOmponent=()=>{
  return <h1>Namaste React from Functional Component</h1>;
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //For react elements
root.render(<HeadingCOmponent />); //For functional components
