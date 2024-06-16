import { Link, useLoaderData } from "react-router-dom";
import { getRoutes } from "../utils";

export async function loader() {
  const routes = await getRoutes();
  return { routes };
}

const Menu = () => {
  const { routes } = useLoaderData();
  const routeList = routes.data.menu;

  return (
    <nav>
      <ul>
        {routeList.length ? (
          routeList.map((item, index) => (
            <li key={index}>
              <Link to={`${item.route}`}>
                {item.title}
                {item.subroutes.length > 0 && <ul>
                  {item.subroutes.map((elem) => <li key={elem.id}>
                    <Link to={`${item.route}/${elem.id}`}>{elem.name}</Link>
                  </li>)}
                </ul>}
              </Link>
            </li>
          ))
        ) : (
          <p>No Items</p>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
