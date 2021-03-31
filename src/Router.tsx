import {
  HashRouter,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Screens/Home";
import Video from "Screens/Video";
import People from "Screens/People";
import Search from "Screens/Search";
import About from "Screens/About";
import SignUp from "Screens/SignUp";
import SignIn from "Screens/SignIn";
import { IUser } from "types";

const Router: React.FunctionComponent<IUser> = ({ user }) => (
  <HashRouter>
    <Header user={user} />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/movie" component={Video} />
      <Route path="/tv" component={Video} />
      <Route path="/person" component={People} />
      <Route path="/about" component={About} />
      <Route path="/search" component={Search} exact />
      <Route path="/search/:keyword" component={Search} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);

export default Router;
