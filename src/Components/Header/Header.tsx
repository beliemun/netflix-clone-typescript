import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Contianer, Item, List, Logo, Menu, Search } from "./style";

const Header: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => (
  <Contianer>
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
          <i className="fas fa-angle-down menu-icon-wr"></i>
          <i className="fas fa-video menu-icon-sr"></i>
        </Item>
        <Item to="/tv" current={(pathname.slice(0, 3) === "/tv").toString()}>
          <span className="menu-icon-wr">TV Shows</span>
          <i className="fas fa-angle-down menu-icon-wr"></i>
          <i className="fas fa-tv menu-icon-sr"></i>
        </Item>
        <Item
          to="/people"
          current={(pathname.slice(0, 7) === "/people").toString()}
        >
          <span className="menu-icon-wr">PEOPLE</span>
          <i className="fas fa-users menu-icon-sr"></i>
        </Item>
        <Item
          to="/about"
          current={(pathname.slice(0, 6) === "/about").toString()}
        >
          <span className="menu-icon-wr">ABOUT</span>
          <i className="fas fa-star"></i>
        </Item>
      </List>
    </Menu>
    <Search current={(pathname === "/search").toString()}>
      <Link to="/search">
        <i className="fas fa-search"></i>
      </Link>
    </Search>
  </Contianer>
);

export default withRouter(Header);
