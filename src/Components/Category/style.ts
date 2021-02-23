import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 110px));
  place-content: center center;
`;

export const Item = styled(Link)<{ current: string }>`
  width: max-content;
  color: ${(props) =>
    props.current === "true" ? Colors.text.emphasis : Colors.text.secondary};
  margin: 0 5px;
  padding: 10px;
  width: 110px;
  border: 1px solid
    ${(props) =>
      props.current === "true" ? Colors.text.emphasis : "transparent"};
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  text-align: center;
  @media (max-width: 1000px) {
    padding: 10px;
    width: 100px;
    border-radius: 8px;
    font-size: 13px;
  }
  @media (max-width: 700px) {
    padding: 5px;
    width: 90px;
    border-radius: 5px;
    font-size: 12px;
  }
`;
