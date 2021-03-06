import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div``;

export const GradientLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 5px 0;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
`;

export const ScrollUpButton = styled.button`
  @keyframes Bounce {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 1;
  width: 50px;
  height: 50px;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
  border-radius: 30px;
  border: 2px solid ${Colors.text.emphasis};
  opacity: 0;
  transition: all 0.5s ease-in-out;
  animation: Bounce 2s ease-in-out infinite;
  will-change: transform;
  cursor: pointer;
  i {
    color: ${Colors.text.emphasis};
    font-size: 20px;
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    width: 60px;
    height: 60px;
    bottom: 55px;
    right: 55px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    i {
      font-size: 40px;
      transition: all 0.2s ease-in-out;
    }
  }
  &:active {
    transform: scale(0.9);
    width: 50px;
    height: 50px;
    bottom: 60px;
    right: 60px;
    border-radius: 30px;
    transition: all 0.1s;
    i {
      font-size: 30px;
      transition: all 0.1s ease-in-out;
    }
  }
`;
