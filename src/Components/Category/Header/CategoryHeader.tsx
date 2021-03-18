import React from "react";
import { Header, Title, Description } from "./style";
import Base from "Components/Base";
import { ICategoryHeader } from "types";

const CategoryHeader: React.FunctionComponent<ICategoryHeader> = ({
  current,
  title,
  description,
}) => (
  <Header current={current}>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Base.GradientLine />
  </Header>
);

export default CategoryHeader;
