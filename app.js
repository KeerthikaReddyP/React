import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React elememnt</span>;

const HeadingCOmponent = () => (
  <div>
    <h1>Namaste React from Functional Component</h1>
  </div>
);

//React component inside react element
const title = (
  <div>
    <HeadingCOmponent />
    <h1 id="heading" className="head">
      {elem}
      Namaste React from JSX🚀
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
