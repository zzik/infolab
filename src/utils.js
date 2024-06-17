// ? container of routing helper functions
// ? implementations of following helper functions can be found in:
// ? src/components/Menu.jsx
// ? src/routes/products.jsx

import axios from "axios";

export const getRoutes = async () => {
  const routes = await axios.get("/ba.json");
  return routes;
};

export const getProducts = async () => {
  const products = await axios.get("/ba.json");
  return products;
};
