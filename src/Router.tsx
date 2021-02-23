import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Screens/Home";
import Moive from "Screens/Movie";
import TV from "Screens/TV";
import People from "Screens/People";
import Search from "Screens/Search";
import About from "Screens/About";

const Router = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/movie" component={Moive} />
      <Route path="/tv" component={TV} />
      <Route path="/people" render={People} />
      <Route path="/about" render={About} />
      <Route path="/search" render={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);

export default Router;
