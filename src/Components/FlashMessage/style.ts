import styled from "styled-components";
import Colors from "Components/Colors";
import { AuthType } from "types";

export const Container = styled.div<{ authType: AuthType }>`
  position: fixed;
  z-index: 200;
  top: 0px;
  left: 0;
  width: 100%;
  padding: 30px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${Colors.text.emphasis};
  background: ${(props) =>
    props.authType === "sign-in"
      ? "linear-gradient(to left, transparent, #27ae60, transparent)"
      : "linear-gradient(to left, transparent, #e74c3c, transparent)"};

  opacity: 0;
  animation: FlashMessage 4s ease-in-out forwards;

  @keyframes FlashMessage {
    0% {
      opacity: 0;
    }
    20%,
    75% {
      opacity: 1;
    }
    99.99% {
      opacity: 0;
    }
    100% {
      visibility: hidden;
    }
  }
  @media (max-width: 720px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
