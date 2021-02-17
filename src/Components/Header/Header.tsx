import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Contianer, Item, List, Logo, Menu, Search } from "./styles";

const Header: React.FunctionComponent<RouteComponentProps> = ({
  location: { pathname },
}) => (
  <Contianer>
    <Logo>
      <Link to="/">
        <img src={require("src/assets/title.png").default} />
      </Link>
    </Logo>
    <Menu>
      <List>
        <Item to="/" current={(pathname === "/").toString()}>
          <span>HOME</span>
        </Item>
        <Item to="/movie" current={(pathname === "/movie").toString()}>
          <span>MOVIES</span>
          <i className="fas fa-angle-down"></i>
        </Item>
        <Item to="/tv" current={(pathname === "/tv").toString()}>
          <span>TV SHOWS</span>
          <i className="fas fa-angle-down"></i>
        </Item>
        <Item to="/people" current={(pathname === "/people").toString()}>
          <span>PEOPLE</span>
        </Item>
        <Item to="/about" current={(pathname === "/about").toString()}>
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
