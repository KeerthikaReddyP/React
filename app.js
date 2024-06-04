import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="head">
    Namaste React from JSX🚀
  </h1>
);
const number=1000;

const HeadingCOmponent = () => (
  <div>
    {number}
    <h2>{100+200}</h2>
    {console.log("Huhuuu")}
    <h1>Namaste React from Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCOmponent />);
