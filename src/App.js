/** @format */

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Welcome from "./Welcome";
import Form1 from "./Form1";
import Buy from "./Buy";
import Sell1 from "./Sell1";
import Login from "./Login";
import Finalog from "./Finalog";

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Welcome'>
            <Welcome />
          </Route>
          <Route path='/Form1'>
            <Form1 />
          </Route>
          <Route path='/Buy'>
            <Buy />
          </Route>
          <Route path='/Sell1'>
            <Sell1 />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/Final'>
            <Finalog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
