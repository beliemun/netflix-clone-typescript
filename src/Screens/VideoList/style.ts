import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding: 20px;
  place-content: center center;
  @media (max-width: 534px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

export const GoToTopButton = styled.button`
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
  background-color: ${Colors.bg.secondary};
  border-radius: 30px;
  border: 2px solid ${Colors.text.emphasis};
  opacity: 0;
  transition: all 0.5s ease-in-out;
  animation: Bounce 2s ease-in-out infinite;
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
