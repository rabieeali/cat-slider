import React from "react";
import ReactDOM from "react-dom/client";
import Slider from "./components/Slider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Slider />
  </React.StrictMode>
);

// this is the version 17 of react. here we use the render method of the ReactDOM library to render the App component inside the div with the id root in index.html file

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// )
