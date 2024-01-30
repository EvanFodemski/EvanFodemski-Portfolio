import React from "react";
import ReactDOM from "react-dom/client";
import './styles/index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App.jsx";
import About from "./components/aboutMe";
import Home from "./components/home";
import ContactForm from "./components/contact";
import Portfolio from "./components/port";
import Resume from "./components/resume";

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
      },
      {
        path:"contact",
        element: <ContactForm />
      },
      {
        path:"portfolio",
        element: <Portfolio />
      },
      {
        path: "resume",
        element: <Resume />
      }
    ]
  }
    
  
])






ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);