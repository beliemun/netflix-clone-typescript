import React from "react";
import {
  Container,
  Title,
  Item,
  Poster,
  DetailContainer,
  Name,
  Job,
} from "./style";
import { ICrew } from "types";
import Base from "Components/Base";

interface IProps {
  crew: ICrew[] | null;
}

const Crew: React.FunctionComponent<IProps> = ({ crew }) => {
  return (
    <>
      {crew && crew.length > 0 && (
        <>
          <Base.GradientLine />
          <Title>Crew</Title>
          <Container>
            {crew
              .filter((_, i) => i < 12)
              .map((item, index) => (
                <Item to={`/person/${item.id}`} key={index}>
                  <Poster
                    bgUrl={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/w154${item.profile_path}`
                        : require("assets/no-image-person.png").default
                    }
                  />
                  <DetailContainer>
                    <Job>
                      {item.job} / {item.known_for_department}
                    </Job>
                    <Name>{item.name}</Name>
                  </DetailContainer>
                </Item>
              ))}
          </Container>
        </>
      )}
    </>
  );
};

export default Crew;
