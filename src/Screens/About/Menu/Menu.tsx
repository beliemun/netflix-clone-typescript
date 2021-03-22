import React from "react";
import { RouteComponentProps } from "react-router";
import {
  Conainter,
  MenuContainer,
  Header,
  Footer,
  Item,
  Spacer,
} from "./style";
import Base from "Components/Base";
import { useLottie } from "lottie-react";
import data from "Components/Lottie";

const Menu: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const LottieView = () => {
    const style = { height: 130, marginBottom: -20 };
    const options = {
      animationData: data.Developer,
      loop: true,
      autoplay: true,
    };
    const Lottie = useLottie(options, style);
    Lottie.setSpeed(1);

    return Lottie.View;
  };

  return (
    <Conainter>
      <LottieView />
      <MenuContainer>
        <Header>ABOUT NICOFLIX</Header>
        <Item current={pathname === "/about"} to="/about">
          너는 누구냐?
        </Item>
        <Base.GradientLine />
        <Item
          current={pathname === "/about/introduction"}
          to="/about/introduction"
        >
          적용기술 소개
        </Item>
        <Base.GradientLine />
        <Item
          current={pathname === "/about/recommendation"}
          to="/about/recommendation"
        >
          도움이 된 핵심 강의
        </Item>
        <Base.GradientLine />
        <Item current={pathname === "/about/series"} to="/about/series">
          니꼬시리즈 소개
        </Item>
        <Footer>burngrit @ icloud.com</Footer>
      </MenuContainer>
      <Spacer />
    </Conainter>
  );
};

export default Menu;
