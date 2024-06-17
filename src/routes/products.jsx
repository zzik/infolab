// ? product fetching route component
// TODO: refactor

import { useLoaderData } from "react-router-dom";
import { getProducts } from "../utils";

export async function loader({ params }) {
  const products = await getProducts({ id: params.productID });
  return { products };
}

const Product = () => {
  const { data } = useLoaderData();
  return data.menu
};

export default Product;
