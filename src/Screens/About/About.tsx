import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import { GridContainer, Container, Banner } from "./style";
import Menu from "./Menu";
import Home from "./Home";
import Introduction from "./Introduction";
import Recommendation from "./Recommendation";
import Series from "./Series";
import Footer from "Components/Footer";
import Base from "Components/Base";
import { IUser } from "types";

const About: React.FunctionComponent<IUser> = ({ user }) => (
  <Container>
    <Banner bgUrl={require("assets/title.png").default} />
    <Base.GradientLine />
    <GridContainer>
      <Menu />
      <Switch>
        <Route path="/about" render={() => <Home user={user} />} exact />
        <Route path="/about/introduction" component={Introduction} />
        <Route path="/about/recommendation" component={Recommendation} />
        <Route path="/about/series" component={Series} />
      </Switch>
    </GridContainer>
    <Footer />
  </Container>
);

export default About;
