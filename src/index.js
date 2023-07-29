import React from "react";
import ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "./App";
import About from "./components/About";
import ErrorElement from "./components/ErrorElement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorElement/>
    },
    {
        path:"/about",
        element: <About/>
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);