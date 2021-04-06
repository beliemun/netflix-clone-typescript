import React from "react";
import { Route, Switch } from "react-router";
import { GridContainer, Container, Banner } from "./style";
import Menu from "./Menu";
import Home from "./Home";
import Introduction from "./Introduction";
import Recommendation from "./Recommendation";
import Series from "./Series";
import Footer from "Components/Footer";
import Base from "Components/Base";
import { IUser } from "types";
import useScrollTop from "hooks/useScollTop";

interface IProps {
  user: IUser | null;
}

const About: React.FunctionComponent<IProps> = ({ user }) => {
  const { elementRef, onClick } = useScrollTop();
  return (
    <>
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
      <Base.ScrollUpButton ref={elementRef} onClick={onClick}>
        <i className="fas fa-angle-double-up"></i>
      </Base.ScrollUpButton>
    </>
  );
};

export default About;
