import React from "react";
import {
  SliderContainer,
  Container,
  Title,
  Item,
  Poster,
  PostCover,
  DetailContainer,
  VideoTitle,
  VideoOverview,
  PlayButtonSmall,
  PlayButtonLarge,
  PlayButtonText,
  OverviewContainer,
} from "./style";
import { IVideo, MediaType } from "types";
import Base from "Components/Base";
import Slider from "react-slick";
import RatingStars from "Components/RatingStars";

interface IProps {
  title: string;
  videos: IVideo[] | null;
  mediaType: MediaType;
}

const VideoSlider: React.FunctionComponent<IProps> = ({
  title,
  videos,
  mediaType,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      {videos && videos.length > 0 && (
        <Container>
          <Base.GradientLine />
          <Title>{title}</Title>
          <SliderContainer>
            <Slider {...settings}>
              {videos.map((video, index) => (
                <Item
                  key={index}
                  to={
                    mediaType === "movie"
                      ? `/movie/${video.id}`
                      : `/tv/${video.id}`
                  }
                >
                  <Poster
                    bgUrl={
                      video.backdrop_path
                        ? `https://image.tmdb.org/t/p/w780${video.backdrop_path}`
                        : require("assets/no-image.jpg").default
                    }
                  >
                    <PostCover>
                      <OverviewContainer>
                        <VideoTitle>
                          {mediaType === "movie" ? video.title : video.name}
                        </VideoTitle>
                        <RatingStars rate={video.vote_average} />
                        <VideoOverview>{video.overview}</VideoOverview>
                      </OverviewContainer>
                      <PlayButtonLarge>
                        <i className="fas fa-play"></i>
                        <PlayButtonText>Play</PlayButtonText>
                      </PlayButtonLarge>
                    </PostCover>
                    <DetailContainer>
                      <VideoTitle>
                        {mediaType === "movie" ? video.title : video.name}
                      </VideoTitle>
                      <RatingStars rate={video.vote_average} />
                    </DetailContainer>
                    <PlayButtonSmall>
                      <i className="fas fa-play"></i>
                    </PlayButtonSmall>
                  </Poster>
                </Item>
              ))}
            </Slider>
          </SliderContainer>
        </Container>
      )}
    </>
  );
};

export default VideoSlider;
