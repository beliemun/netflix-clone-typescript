import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Container, Item } from "./style";
import { ICategory } from "types";

interface IProps {
  items: ICategory[];
}

const Menu: React.FunctionComponent<IProps & RouteComponentProps> = ({
  items,
  location: { pathname },
}) => {
  return (
    <Container>
      {items.map((item, index) => (
        <Item
          key={index}
          to={item.pathname}
          current={(pathname === item.pathname).toString()}
        >
          {item.title}
        </Item>
      ))}
    </Container>
  );
};

export default Menu;
