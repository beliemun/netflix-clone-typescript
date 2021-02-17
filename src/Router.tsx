import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "src/Screens/Home";
import Moive from "src/Screens/Moive";
import TV from "src/Screens/TV";
import People from "src/Screens/People";
import Search from "src/Screens/Search";
import VideoDetail from "src/Screens/VideoDetail";
import PeopleDetail from "src/Screens/PeopleDetail";
import About from "src/Screens/About";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact render={Home} />
      <Route path="/movie" exact render={Moive} />
      <Route path="/movie/:id" exact render={VideoDetail} />
      <Route path="/tv" exact render={TV} />
      <Route path="/tv/:id" exact render={VideoDetail} />
      <Route path="/people" exact render={People} />
      <Route path="/people/:id" exact render={PeopleDetail} />
      <Route path="/about/" exact render={About} />
      <Route path="/search" exact render={Search} />
      <Redirect to="/" from="*" />
    </Switch>
  </Router>
);
