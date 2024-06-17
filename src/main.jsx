// ? InfoLab application entry point
// ? majority of routing logic can be found here
// ? remainder of routing logic can be found in src/routes/*.jsx
// ? routing logic helper functions can be found in src/utils.js

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Root from "./routes/root.jsx";
import { loader as rootLoader } from "./components/Menu.jsx";
import Product, { loader as productLoader } from "./routes/products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,

    children: [
      {
        path: "products/:productID",
        element: <Product />,
        loader: productLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
