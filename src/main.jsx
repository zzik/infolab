import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Root from "./routes/root.jsx";
import { loader as rootLoader } from "./components/Menu.jsx";
// import Root, { loader as rootLoader } from "./routes/root.jsx";
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
