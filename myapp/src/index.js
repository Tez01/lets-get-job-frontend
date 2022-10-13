import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "./pages/Error/ErrorPage";
import Home from "./pages/Home/Home";
import Tracker from "./pages/Tracker/Tracker";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/Root/Root.css";
// Create routes with path / which points to Home component and add an error page for this Home page
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Tracker",
    element: <Tracker />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
