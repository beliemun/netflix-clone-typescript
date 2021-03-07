import React, { useState } from "react";
import {
  VideoItemContainer,
  Title,
  SeeMoreContainer,
  SeeMoreButton,
} from "./style";
import { IVideo, MediaType } from "types";
import Base from "Components/Base";
import VideoItem from "Components/VideoItem";

interface IProps {
  videos: IVideo[] | null;
  title: string;
  mediaType: MediaType;
}

const MovieCredit: React.FunctionComponent<IProps> = ({
  videos,
  title,
  mediaType,
}) => {
  const [moreMovie, setMoreMovie] = useState(false);
  const [moreTv, setMoreTv] = useState(false);

  return (
    <>
      {videos && videos.length > 0 && (
        <>
          <Base.GradientLine />
          <Title>{title}</Title>
          <VideoItemContainer>
            {!moreMovie
              ? videos
                  .sort((a, b) => b.popularity - a.popularity)
                  .filter((_, i) => i < 7)
                  .map((video: IVideo, index: number) => (
                    <VideoItem
                      key={index}
                      index={index}
                      video={video}
                      mediaType={mediaType}
                    />
                  ))
              : videos
                  .sort((a, b) => b.popularity - a.popularity)
                  .map((video: IVideo, index: number) => (
                    <VideoItem
                      key={index}
                      index={index}
                      video={video}
                      mediaType={mediaType}
                    />
                  ))}
            {!moreMovie && (
              <SeeMoreContainer>
                <SeeMoreButton onClick={() => setMoreMovie(true)}>
                  <i className="fas fa-redo "></i>See more
                </SeeMoreButton>
              </SeeMoreContainer>
            )}
          </VideoItemContainer>
        </>
      )}
    </>
  );
};

export default MovieCredit;
