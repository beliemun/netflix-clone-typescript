import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Screens/Home";
import Video from "Screens/Video";
import People from "Screens/People";
import Search from "Screens/Search";
import About from "Screens/About";
import SignUp from "Screens/SignUp";
import SignIn from "Screens/SignIn";
import Profile from "Screens/Profile";
import PrivacyPolicy from "Screens/PrivacyPolicy";
import { IUser } from "types";

interface IProps {
  user: IUser | null;
}

const Router: React.FunctionComponent<IProps> = ({ user }) => (
  <HashRouter>
    <Header user={user} />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/movie" component={Video} />
      <Route path="/tv" component={Video} />
      <Route path="/person" component={People} />
      <Route path="/search" component={Search} exact />
      <Route path="/search/:keyword" component={Search} />
      <Route path="/about" render={() => <About user={user} />} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/profile" render={() => <Profile user={user} />} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);

export default Router;
