import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="Nav">
        <li key="home">
          <Link to="/" className="Nav-link-home">
            SAM AND ARROYO
          </Link>
        </li>
        <li className="Nav-item" key="mamas">
          <NavLink
            to="/mamas"
            className="Nav-link"
            activeClassName="Nav-link-active"
          >
            MAMAS
          </NavLink>
        </li>
        <li className="Nav-item" key="hawaii">
          <NavLink
            to="/gallery/hawaii"
            className="Nav-link"
            activeClassName="Nav-link-active"
          >
            HAWAII
          </NavLink>
        </li>
        <li className="Nav-item" key="about">
          <NavLink
            to="/about"
            className="Nav-link"
            activeClassName="Nav-link-active"
          >
            ABOUT
          </NavLink>
        </li>
        <li className="Nav-item" key="instagram">
          <a
            className="Nav-link"
            href="https://www.instagram.com/samandarroyo/"
          >
            @SAMANDARROYO
          </a>
        </li>
      </ul>
    </nav>
  );
}
