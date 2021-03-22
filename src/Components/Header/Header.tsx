import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Container, Item, List, Logo, Menu, Search } from "./style";
import { useLottie } from "lottie-react";
import data from "Components/Lottie";

const Header: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const LottieView = () => {
    const style = { height: 30 };
    const options = {
      animationData: data.Star,
      loop: true,
      autoplay: true,
    };
    const Lottie = useLottie(options, style);
    Lottie.setSpeed(1);

    return Lottie.View;
  };

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={require("assets/title.png").default} alt={"logo"} />
        </Link>
      </Logo>
      <Menu>
        <List>
          <Item to="/" current={(pathname === "/").toString()}>
            <span className="menu-icon-wr">HOME</span>
            <i className="fas fa-home menu-icon-sr"></i>
          </Item>
          <Item
            to="/movie"
            current={(pathname.slice(0, 6) === "/movie").toString()}
          >
            <span className="menu-icon-wr">MOVIES</span>
            <i className="fas fa-video menu-icon-sr"></i>
          </Item>
          <Item to="/tv" current={(pathname.slice(0, 3) === "/tv").toString()}>
            <span className="menu-icon-wr">TV Shows</span>
            <i className="fas fa-tv menu-icon-sr"></i>
          </Item>
          <Item
            to="/person"
            current={(pathname.slice(0, 7) === "/person").toString()}
          >
            <span className="menu-icon-wr">PEOPLE</span>
            <i className="fas fa-users menu-icon-sr"></i>
          </Item>
          <Item
            to="/about"
            current={(pathname.slice(0, 6) === "/about").toString()}
          >
            <span className="menu-icon-wr" style={{ marginLeft: "20px" }}>
              ABOUT
            </span>
            <LottieView />
          </Item>
        </List>
      </Menu>
      <Search current={(pathname === "/search").toString()}>
        <Link to="/search">
          <i className="fas fa-search"></i>
        </Link>
      </Search>
    </Container>
  );
};

export default withRouter(Header);
