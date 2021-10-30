import React from "react";
import Home from "./Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from "./Nav/Nav";
import Results from "./Results/Results";

// "/Tel-Aviv" "/Petah-Tikva"

export default function App() {

  

  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forecast/:citykey" component={Results} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
