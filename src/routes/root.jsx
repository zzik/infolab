import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

//

export default function Root() {
  return (
    <>
      <section id="sidebar">
        <Menu />
      </section>
      <section id="outlet">
        <Outlet />
      </section>
    </>
  );
}
