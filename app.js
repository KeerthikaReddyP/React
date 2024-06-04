import React from "react";
import ReactDOM from "react-dom/client";

const title =(
  <h1 id="heading" className="head">
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
