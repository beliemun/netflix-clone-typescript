import React from "react";
import { RouteComponentProps } from "react-router-dom";
import CategoryHeader from "Components/Category/Header";
import Menu from "Components/Category/Menu";
import { ICategory } from "types";

interface IProps {
  items: ICategory[];
  props: RouteComponentProps;
}

const Category: React.FunctionComponent<IProps> = ({ items, props }) => {
  const {
    location: { pathname },
  } = props;
  return (
    <>
      {items.map((item, index) => (
        <CategoryHeader
          key={index}
          current={(pathname === item.pathname).toString()}
          title={item.title}
          description={item.description}
        />
      ))}
      <Menu items={items} {...props} />
    </>
  );
};

export default Category;
