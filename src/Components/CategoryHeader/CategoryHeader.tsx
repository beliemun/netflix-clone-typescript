import React from "react";
import { Header, Title, Description } from "./style";
import Base from "Components/Base";

interface IProps {
  current: string;
  title: string;
  description: string;
}

const CategoryHeader: React.FunctionComponent<IProps> = ({
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
