import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {AboutApp} from "./pages/AboutApp";
import {Planet} from "./pages/Planet";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {PlanetState} from "./context/planet/planetState";

function App() {
  return (
      <PlanetState>
          <AlertState>
              <BrowserRouter>
                  <Navbar/>
                  <div className="container pt-4">
                      <Alert alert={{text: 'Test alert'}}/>
                      <Switch>
                          <Route path="/" exact component={Home}/>
                          <Route path="/about" exact component={AboutApp}/>
                          <Route path="/planet/:name" exact component={Planet}/>
                      </Switch>
                  </div>
              </BrowserRouter>
          </AlertState>
      </PlanetState>
  );
}

export default App;
