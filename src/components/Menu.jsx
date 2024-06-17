// ? navigation container component
// ? at this point contains route and subroute iteration logic
// TODO: refactor

import { NavLink, useLoaderData } from "react-router-dom";
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
              <NavLink to={`${item.route}`}>{item.title}</NavLink>
              {item.subroutes.length > 0 && (
                <ul>
                  {item.subroutes.map((elem) => (
                    <li key={elem.id}>
                      <NavLink to={`${item.route}/${elem.id}`}>
                        {elem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
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
