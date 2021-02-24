import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Menu, Item, Header, Title, Description } from "./style";
import Base from "Components/Base";

interface IItem {
  pathname: string;
  title: string;
  description: string;
}

interface IProps {
  items: IItem[];
}

const Category: React.FunctionComponent<IProps & RouteComponentProps> = ({
  items,
  location: { pathname },
}) => (
  <>
    {items.map((item, index) => (
      <Header key={index} current={(pathname === item.pathname).toString()}>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Base.GradientLine />
      </Header>
    ))}
    <Menu>
      {items.map((item, index) => (
        <Item
          key={index}
          to={item.pathname}
          current={(pathname === item.pathname).toString()}
        >
          {item.title}
        </Item>
      ))}
    </Menu>
  </>
);

export default Category;
