import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",{id:"heading"},"Namaste React👩‍🚀");
console.log(heading);

const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);