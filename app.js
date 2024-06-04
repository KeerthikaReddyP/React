import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=>(
  <div>
    <h1 id="heading" className="head">
      Namaste React from JSX🚀
    </h1>
  </div>
);

//3 ways to render a functional component
const HeadingCOmponent = () => (
  <div>
    <Title />
    <Title></Title>
    {Title()}
    <h1>Namaste React from Functional Component</h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeadingCOmponent);
