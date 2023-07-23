import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Cards from "./components/Cards";

const App = () => {
    return(
        <>
        <Header/>
        <Cards/>
        </>
    )
}

export default App;
