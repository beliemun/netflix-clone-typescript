import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import Home from "src/Screens/Home";
import TV from "src/Screens/TV";
import Search from "src/Screens/Search";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact render={Home} />
      <Route path="/tv" exact render={TV} />
      <Route path="/search" exact render={Search} />
      <Redirect to="/" from="*" />
    </Switch>
  </Router>
);
