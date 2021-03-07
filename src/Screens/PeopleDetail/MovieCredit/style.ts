import Colors from "Components/Colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const VideoItemContainer = styled.div`
  display: grid;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding: 20px;
  @media (max-width: 534px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${Colors.text.primary};
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  @media (max-width: 650px) {
    font-size: 24px;
  }
`;

export const SeeMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeeMoreButton = styled.div`
  color: black;
  font-size: 13px;
  font-weight: 300;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${Colors.secondary};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  i {
    margin-right: 10px;
  }
  @keyframes rotateIcon {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  &:hover {
    transform: scale(1.1);
    color: black;
    background-color: ${Colors.text.emphasis};
    i {
      animation: rotateIcon 1s linear infinite;
    }
  }
  &:active {
    transform: scale(0.9);
  }
`;
