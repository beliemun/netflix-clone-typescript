import { HashRouter, Route } from "react-router-dom";
import Header from "Components/Header";
import Home from "Screens/Home";
import Moive from "Screens/Movie";
import TV from "Screens/TV";
import People from "Screens/People";
import Search from "Screens/Search";
import PeopleDetail from "Screens/PeopleDetail";
import About from "Screens/About";

const Router = () => (
  <HashRouter>
    <Header />
    <Route path="/" component={Home} />
    <Route path="/movie" component={Moive} />
    <Route path="/tv" render={TV} exact />
    <Route path="/people" render={People} />
    <Route path="/people/:id" render={PeopleDetail} />
    <Route path="/about" render={About} />
    <Route path="/search" render={Search} />
  </HashRouter>
);

export default Router;
