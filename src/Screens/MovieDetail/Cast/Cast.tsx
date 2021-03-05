import React from "react";
import { Container, Title, Item, Poster, Name, Character } from "./style";
import { ICast } from "types";
import Base from "Components/Base";

interface IProps {
  cast: ICast[] | null;
}

const Cast: React.FunctionComponent<IProps> = ({ cast }) => {
  return (
    <>
      {cast && cast.length > 0 && (
        <>
          <Base.GradientLine />
          <Title>Top Billed Cast</Title>
          <Container>
            {cast
              .filter((_, i) => i < 20)
              .map((item, index) => (
                <Item to={`/person/${item.id}`} key={index}>
                  <Poster
                    bgUrl={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/w154${item.profile_path}`
                        : require("assets/no-image-person.png").default
                    }
                  />
                  <Name>{item.name}</Name>
                  <Character>{item.character}</Character>
                </Item>
              ))}
          </Container>
        </>
      )}
    </>
  );
};

export default Cast;
