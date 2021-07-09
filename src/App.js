import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/Home/About/About";
import HomeMain from "./Components/HomeMain/HomeMain";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import AddPortfolio from "./Components/Admin/AddPortfolio/AddPortfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
           <HomeMain></HomeMain>
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
          <Dashboard></Dashboard>
            </Route>


            {/* Admin */}

            <Route path="/dashbord/addPortfolio">
 <AddPortfolio></AddPortfolio>
            </Route>




          <Route path="*">
            <h1>Fuck uh Hatters</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
