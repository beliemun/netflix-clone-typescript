import React from "react";
import {
  Container,
  Title,
  SliderFrame,
  SliderItem,
  PosterContainer,
  Poster,
  DetailContainer,
  VideoTitle,
} from "./style";
import { IVideo } from "types";
import Base from "Components/Base";

interface IProps {
  title: string;
  videos: IVideo[] | null;
}

const VideoSlider: React.FunctionComponent<IProps> = ({ title, videos }) => (
  <>
    {videos && videos.length > 0 && (
      <>
        <Base.GradientLine />
        <Title>{title}</Title>
        <Container>
          <SliderFrame>
            {videos.map((video, index) => (
              <SliderItem>{video.title}</SliderItem>
            ))}
          </SliderFrame>
        </Container>
      </>
    )}
  </>
);

export default VideoSlider;
