import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Contianer, Item, List, Logo, Menu, Search } from "./style";

const Header: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => (
  <Contianer>
    <Logo>
      <Link to="/">
        <img src={require("assets/title.png").default} />
      </Link>
    </Logo>
    <Menu>
      <List>
        <Item to="/" current={(pathname === "/").toString()}>
          <span>HOME</span>
        </Item>
        <Item
          to="/movie"
          current={(pathname.slice(0, 6) === "/movie").toString()}
        >
          <span>MOVIES</span>
          <i className="fas fa-angle-down"></i>
        </Item>
        <Item to="/tv" current={(pathname.slice(0, 3) === "/tv").toString()}>
          <span>TV Shows</span>
          <i className="fas fa-angle-down"></i>
        </Item>
        <Item
          to="/people"
          current={(pathname.slice(0, 7) === "/people").toString()}
        >
          <span>PEOPLE</span>
        </Item>
        <Item
          to="/about"
          current={(pathname.slice(0, 6) === "/about").toString()}
        >
          <span>ABOUT</span>
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
