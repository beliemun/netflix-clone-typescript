import styled from "styled-components";
import Colors from "Components/Colors";
import { Link } from "react-router-dom";

export const Conainter = styled.div``;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 11px;
  font-weight: 300;
  color: ${Colors.text.secondary};
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 15px 15px 0 0;
  @media (max-width: 720px) {
    font-size: 10px;
  }
  @media (max-width: 480px) {
    height: 30px;
    font-size: 9px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 11px;
  font-weight: 300;
  color: ${Colors.text.secondary};
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 15px 15px;
  @media (max-width: 720px) {
    font-size: 10px;
  }
  @media (max-width: 480px) {
    height: 30px;
    font-size: 9px;
  }
`;

export const Item = styled(Link)<{ current: string }>`
  text-align: center;
  padding: 20px 0;
  color: ${(props) =>
    props.current === "true" ? Colors.primary : Colors.text.primary};
  border-left: 4px solid
    ${(props) => (props.current === "true" ? Colors.primary : "transparent")};
  border-right: 4px solid
    ${(props) => (props.current === "true" ? Colors.primary : "transparent")};
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    font-size: 12px;
    padding: 12px 0;
  }
`;

export const Spacer = styled.div`
  background-color: red;
`;
