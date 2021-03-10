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
  PlayButtonSmall,
  PlayButtonLarge,
  PlayButtonText,
  OverviewContainer,
  SeeMoreButton,
} from "./style";
import { IVideo, MediaType } from "types";
import Base from "Components/Base";
import Slider from "react-slick";
import RatingStars from "Components/RatingStars";

interface IProps {
  title: string;
  videos: IVideo[] | null;
  mediaType: MediaType;
  link?: string;
}

const VideoSlider: React.FunctionComponent<IProps> = ({
  title,
  videos,
  mediaType,
  link,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      {videos && videos.length > 0 && (
        <Container>
          {link && <SeeMoreButton to={link}>See More</SeeMoreButton>}
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
