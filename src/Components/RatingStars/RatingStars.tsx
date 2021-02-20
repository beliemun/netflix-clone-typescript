import React from "react";
import { Container } from "./style";

interface IRateProps {
  rate: number;
}

const Stars: React.FunctionComponent<IRateProps> = ({ rate }) => {
  const getStarsElements = (rate: number) => {
    let remainedRate = rate / 2;
    let stars = [];
    while (remainedRate > 1) {
      const i = React.createElement("i", {
        key: remainedRate,
        className: "fas fa-star",
      });
      stars.push(i);
      remainedRate -= 1;
    }
    if (remainedRate - 0.5 > 0) {
      const i = React.createElement("i", {
        key: remainedRate,
        className: "fas fa-star-half",
      });
      stars.push(i);
    }
    return stars;
  };

  const getRate = (rate: number) =>
    React.createElement("span", { key: rate }, rate / 2);

  return (
    <Container>
      {[
        getStarsElements(rate),
        rate === 0 ? <span key={rate}>(Not Rated)</span> : getRate(rate),
      ]}
    </Container>
  );
};

export default Stars;
