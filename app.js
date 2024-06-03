import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="head">
    Namaste React from JSX🚀
  </h1>
);

//Component Composition (Rendering component inside another component)
const HeadingCOmponent = () => (
  <div>
    <Title />
    <h1>Namaste React from Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCOmponent />);
