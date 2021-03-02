import React from "react";
import { Container, Item, VideoName, VideoType } from "./style";
import Youtube from "react-youtube";

interface IMovieVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  iso_639_1: string;
  iso_3166_1: string;
  type: string;
}

interface IProps {
  videos: IMovieVideo[];
}

const Players: React.FunctionComponent<IProps> = ({ videos }) => (
  <>
    {videos && videos.length > 0 && (
      <Container>
        {videos.map((video, index) => (
          <Item key={index}>
            <VideoType>{video.type}</VideoType>
            <Youtube
              videoId={video.key}
              opts={{ width: "160", height: "90" }}
            />
            <VideoName>{video.name}</VideoName>
          </Item>
        ))}
      </Container>
    )}
  </>
);

export default Players;
