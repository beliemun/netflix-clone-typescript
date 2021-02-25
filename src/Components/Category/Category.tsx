import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Menu, Item } from "./style";
import CategoryHeader from "Components/CategoryHeader";

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
      <CategoryHeader
        key={index}
        current={(pathname === item.pathname).toString()}
        title={item.title}
        description={item.description}
      />
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
