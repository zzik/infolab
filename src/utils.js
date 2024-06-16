import axios from "axios";

export const getRoutes = async () => {
  const routes = await axios.get("/ba.json");
  return routes;
};

// TODO: getSubroutes

export const getProducts = async () => {
  const products = await axios.get("/ba.json");
  return products;
};
