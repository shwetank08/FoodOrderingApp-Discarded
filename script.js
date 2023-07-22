import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("h1",{},"Heading");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);