import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page from "./Page";

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
              <Link to="/cait" className="Nav-link">
                cait
              </Link>
            </li>
            <li className="Nav-item" key="hawaii">
              <Link to="/hawaii" className="Nav-link">
                hawaii
              </Link>
            </li>
            <li className="Nav-item" key="manon">
              <Link to="/manon" className="Nav-link">
                manon
              </Link>
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
            <Page name="cait" key="cait" galleryType="Page" />
          </Route>
          <Route exact path="/hawaii">
            <Page name="hawaii" key="hawaii" galleryType="Page" />
          </Route>
          <Route exact path="/manon">
            <Page name="manon" key="manon" galleryType="Page" />
          </Route>
          <Route exact path="/">
            <Page name="home" key="home" galleryType="Home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
