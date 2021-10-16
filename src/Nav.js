import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="Nav">
        <li key="home">
          <Link to="/" className="Nav-link-home">
            sam and arroyo
          </Link>
        </li>
        <li className="Nav-item" key="cait">
          <NavLink
            to="/cait"
            className="Nav-link"
            activeClassName="Nav-link-active"
          >
            cait
          </NavLink>
        </li>
        <li className="Nav-item" key="hawaii">
          <NavLink
            to="/hawaii"
            className="Nav-link"
            activeClassName="Nav-link-active"
          >
            hawaii
          </NavLink>
        </li>
        <li className="Nav-item" key="manon">
          <NavLink
            to="/manon"
            className="Nav-link"
            activeClassName="Nav-link-active"
          >
            manon
          </NavLink>
        </li>
        <li className="Nav-item" key="instagram">
          <a
            className="Nav-link"
            href="https://www.instagram.com/samandarroyo/"
          >
            @samandarroyo
          </a>
        </li>
      </ul>
    </nav>
  );
}
