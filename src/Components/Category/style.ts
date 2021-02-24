import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

export const Header = styled.div<{ current: string }>`
  display: ${(props) => (props.current === "true" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.h1`
  color: ${Colors.text.primary};
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 15px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  color: ${Colors.text.secondary};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0px 30px 15px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Menu = styled.div`
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
  padding: 12px;
  width: 120px;
  border: 1px solid
    ${(props) =>
      props.current === "true" ? Colors.text.emphasis : "transparent"};
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  text-align: center;
  @media (max-width: 1000px) {
    padding: 8px;
    width: 95px;
    border-radius: 8px;
    font-size: 13px;
  }
`;
