import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../bootstrapStyle.css";
import Header from "./Header";
import Home from "./Home";
import ContactUs from "./ContactUs";
import GalleryPage from "./GalleryPage";
import Explained from "./Explained";
import Explained2 from "./Explained2";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/GalleryPage'>
            <GalleryPage />
          </Route>
          <Route path='/Explained'>
            <Explained />
          </Route>
          <Route path='/Explained2'>
            <Explained2 />
          </Route>
          <Route path='/ContactUs'>
            <ContactUs />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
