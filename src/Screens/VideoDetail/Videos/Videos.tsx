import React from "react";
import { Container, Item, VideoName, VideoType } from "./style";
import Youtube from "react-youtube";
import { IYoutube } from "types";

interface IProps {
  videos: IYoutube[];
}

const Players: React.FunctionComponent<IProps> = ({ videos }) => {
  return (
    <>
      {videos && videos.length > 0 && (
        <Container>
          {videos
            .filter((_, i) => i < 4)
            .map((video, index) => (
              <Item key={index}>
                <VideoType>{video.type}</VideoType>
                <Youtube
                  videoId={video.key}
                  opts={{
                    width: "160",
                    height: "90",
                  }}
                />
                <VideoName>{video.name}</VideoName>
              </Item>
            ))}
        </Container>
      )}
    </>
  );
};

export default Players;
