import React from "react";
import Home from "./Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Results from "./Results/Results";

// "/Tel-Aviv" "/Petah-Tikva"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ width: "100%", height: "100%", paddingTop: "100px", boxSizing: 'border-box' }}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forecast/:citykey" component={Results} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
