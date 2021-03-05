import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  width: inherit;
  max-width: 1080px;
  margin: 10px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${Colors.text.primary};
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 650px) {
    font-size: 24px;
  }
`;

export const SliderFrame = styled.div`
  display: flex;
  overflow-y: hidden;
`;

export const SliderItem = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid white;
`;

export const PosterContainer = styled.div``;

export const Poster = styled.img``;

export const DetailContainer = styled.div``;

export const VideoTitle = styled.h3``;
