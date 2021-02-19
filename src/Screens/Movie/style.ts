import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  height: 200vh;
`;

export const List = styled.div`
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
`;
