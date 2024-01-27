import React from "react";
import ReactDOM from "react-dom/client";
import './styles/index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App";
import About from "./components/aboutMe";
import Home from "./components/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
       element: <Home />
      },
      {
        path:"about",
        element: <About />
      }
    ]
  }
    
  
])






ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);