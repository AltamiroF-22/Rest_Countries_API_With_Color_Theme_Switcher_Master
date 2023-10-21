import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.sass";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//routes
import Home from "./routes/Home.jsx";
import SingleCountry from "./routes/SingleCountry.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/single_country/:countryName",
        element: <SingleCountry />
      }
    ]
  }
]);

import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
