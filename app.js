const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Helloo from React!!"
);
console.log(heading); //JS Object (React Element)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);