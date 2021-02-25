import Colors from "Components/Colors";
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
  margin: 30px;
  border-radius: 30px;
  border-top-left-radius: 0;
  opacity: 0;
  animation: FadeIn 1s ease-in forwards;
  animation-delay: ${(props) => props.index * 40}ms;
  &:first-child {
    animation-delay: 0;
  }
  &:hover {
    transform: scale(1.1);
    /* box-shadow: rgba(136, 165, 191, 0.2) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.2) -6px -2px 16px 0px; */
    grid-template-columns: 1fr;
    & > div:first-child {
      opacity: 1;
    }
    & > div:last-child {
      display: none;
    }
  }
`;

export const ItemCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* backdrop-filter: blur(5px); */
  border-radius: 30px;
  border-top-left-radius: 0;
  opacity: 0;
  transition: opacity 0.3s ease-out;
`;

export const Poster = styled.div<{ bgUrl: string }>`
  width: auto;
  height: 265px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 30px;
  border-top-left-radius: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 700px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Detail = styled.div`
  grid-column: 2 span;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  &:hover {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${Colors.text.emphasis};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Department = styled.h5`
  font-size: 11px;
  font-weight: 300;
  margin-bottom: 20px;
  color: ${Colors.primary};
`;

export const KnownFor = styled.h5`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${Colors.bg.primary};
  background: linear-gradient(to right, #f12711, #f5af19);
  padding: 5px;
  text-align: center;
  border-radius: 10px 10px 0 0;
  font-style: italic;
`;

export const VideoItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 40px 1fr;
  margin-bottom: 10px;
`;

export const VideoPoster = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const VideoDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 10px;
`;

export const VideoTitle = styled.h4`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${Colors.text.emphasis};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VideoCreatedAt = styled.span`
  font-size: 11px;
  font-weight: 300;
  margin-bottom: 5px;
  color: ${Colors.text.secondary};
`;
