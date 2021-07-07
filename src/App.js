import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/Home/About/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">{/* <Dashboard /> */}</Route>

          <Route path="*">
            <h1>Fuck uh Hatters</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
