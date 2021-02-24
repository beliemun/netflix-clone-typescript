import { Link } from "react-router-dom";
import styled from "styled-components";

export const Item = styled(Link)<{ index: number }>`
  @keyframes FadeIn {
    from {
      transform: scale(1.05) translateY(25px);
    }
    to {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px;
  opacity: 0;
  animation: FadeIn 1s ease-in forwards;
  animation-delay: ${(props) => props.index * 40}ms;
  &:first-child {
    animation-delay: 0;
  }
`;

export const Poster = styled.div<{ bgUrl: string }>`
  width: auto;
  height: 320px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(136, 165, 191, 0.2) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.2) -6px -2px 16px 0px;
  }
  @media (max-width: 700px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Detail = styled.div``;
