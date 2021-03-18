import React from "react";
import { Container } from "./style";
import VideoItem from "Components/VideoItem";
import { IVideo, MediaType } from "types";

interface IPorps {
  videos: IVideo[];
  mediaType: MediaType;
}

const List: React.FunctionComponent<IPorps> = ({ videos, mediaType }) => {
  return (
    <Container>
      {videos.map((video: IVideo, index: number) => (
        <VideoItem
          key={index}
          index={index}
          video={video}
          mediaType={mediaType}
        />
      ))}
    </Container>
  );
};

export default List;
