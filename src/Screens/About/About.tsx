import React from "react";
import { Route, Switch } from "react-router";
import {
  GridContainer,
  Container,
  Banner,
  IconContainer,
  Icon,
  IconInfo,
} from "./style";
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
        <IconContainer>
          <Icon bgUrl={require("assets/icon_html.png").default}>
            <IconInfo>HTML</IconInfo>
          </Icon>
          <Icon bgUrl={require("assets/icon_css.png").default}>
            <IconInfo>CSS</IconInfo>
          </Icon>
          <Icon bgUrl={require("assets/icon_es6.png").default}>
            <IconInfo>ES6</IconInfo>
          </Icon>
          <Icon bgUrl={require("assets/icon_ts.png").default}>
            <IconInfo>Typescript</IconInfo>
          </Icon>
          <Icon bgUrl={require("assets/icon_react.png").default}>
            <IconInfo>React</IconInfo>
          </Icon>
          <Icon bgUrl={require("assets/icon_hooks.png").default}>
            <IconInfo>React Hooks</IconInfo>
          </Icon>
          <Icon bgUrl={require("assets/icon_fb.png").default}>
            <IconInfo>Firebase</IconInfo>
          </Icon>
          <Icon bgUrl={require("assets/icon_amplify.png").default}>
            <IconInfo>Amplify</IconInfo>
          </Icon>
        </IconContainer>
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
