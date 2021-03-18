import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const Item = styled(Link)<{ current: string }>`
  width: max-content;
  color: ${(props) =>
    props.current === "true" ? Colors.text.emphasis : Colors.text.secondary};
  margin: 0 5px;
  padding: 12px;
  border: 1px solid
    ${(props) =>
      props.current === "true" ? Colors.text.emphasis : "transparent"};
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  text-align: center;
  @media (max-width: 1080px) {
    padding: 8px;
    border-radius: 8px;
    font-size: 13px;
  }
  @media (max-width: 480px) {
    padding: 6px;
    border-radius: 6px;
    font-size: 12px;
  }
`;
