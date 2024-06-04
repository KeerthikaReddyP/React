import React from "react";
import ReactDOM from "react-dom/client";

const elem=<span>React elememnt</span>;

//React element inside a react element
const title =(
  <h1 id="heading" className="head">
    {elem}
    Namaste React from JSX🚀
  </h1>
);

//React element inside Component
const HeadingCOmponent = () => (
  <div>
    {title}
    <h1>Namaste React from Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCOmponent />);
