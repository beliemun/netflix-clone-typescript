import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Container, Item } from "./style";

interface IItem {
  pathname: string;
  title: string;
}

interface IProps {
  items: IItem[];
}

const Category: React.FunctionComponent<IProps & RouteComponentProps> = ({
  items,
  location: { pathname },
}) => (
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

export default Category;
