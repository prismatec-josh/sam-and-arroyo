import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Gallery from "./Gallery";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="Nav">
          <ol className="Nav-top">
            <li key="home">
              <Link to="/" className="Nav-home">
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
          </ol>
          <ol className="Nav-bottom">
            <li className="Nav-item-bottom" key="instagram">
              <a href="https://www.instagram.com/samandarroyo/">
                @samandarroyo
              </a>
            </li>
          </ol>
        </nav>

        <Switch>
          <Route exact path="/cait">
            <Gallery name="cait" key="cait" />
          </Route>
          <Route exact path="/hawaii">
            <Gallery name="hawaii" key="hawaii" />
          </Route>
          <Route exact path="/manon">
            <Gallery name="manon" key="manon" />
          </Route>
          <Route exact path="/">
            <Gallery name="home" key="home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
