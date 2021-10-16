import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Home from "./Home";
import Nav from "./Nav";
import Page from "./Page";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/cait">
            <Page>
              <Gallery name="cait" key="cait" />
            </Page>
          </Route>
          <Route exact path="/hawaii">
            <Page>
              <Gallery name="hawaii" key="hawaii" />
            </Page>
          </Route>
          <Route exact path="/manon">
            <Page>
              <Gallery name="manon" key="manon" />
            </Page>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
