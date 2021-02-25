import Colors from "Components/Colors";
import styled from "styled-components";

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
