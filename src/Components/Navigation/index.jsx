import { NavLink } from "react-router";
import { publicRouter } from "../AppRouter";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__brand">
        {publicRouter.map((router) => (
          <NavLink
            key={router.path}
            to={router.path}
            end={router.path === "/"}
            className={({ isActive }) =>
              `navigation__link ${isActive ? "active" : ""}`
            }
          >
            {router.component}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
