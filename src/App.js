import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import GalleryList from "./components/GalleryList";
import Nav from "./components/Nav";
import Page from "./components/Page";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Page>
              <Gallery galleryName="home" galleryType="vertical"></Gallery>
            </Page>
          </Route>
          <Route path={`/gallery/:galleryName`}>
            <Page>
              <Gallery galleryType="horizontal"></Gallery>
            </Page>
          </Route>
          <Route path="/mamas">
            <Page>
              <GalleryList name="mamas" />
            </Page>
          </Route>
          <Route path="/about">
            <Page>
              <About />
            </Page>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
