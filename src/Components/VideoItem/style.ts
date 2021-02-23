import styled from "styled-components";
import Colors from "Components/Colors";
import { Link } from "react-router-dom";

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
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export const PosterCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const HoverTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin: 5px 10px;
  text-align: center;
  color: ${Colors.text.emphasis};
  overflow: hidden;
`;

export const HoverYear = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin: 5px 20px;
  text-align: center;
  color: ${Colors.text.emphasis};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Title = styled.h3`
  color: ${Colors.text.secondary};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Genres = styled.h5`
  color: ${Colors.text.secondary};
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  vertical-align: middle;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
