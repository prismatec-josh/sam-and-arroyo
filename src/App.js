import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import GalleryList from "./components/GalleryList";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Page from "./components/Page";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={`/gallery/:galleryName`}>
            <Page>
              <Gallery></Gallery>
            </Page>
          </Route>
          <Route path="/mamas">
            <Page>
              <GalleryList name="mamas" />
            </Page>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
