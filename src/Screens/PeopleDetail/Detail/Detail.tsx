import React from "react";
import {
  Container,
  CenterContainer,
  Poster,
  DetailContainer,
  Name,
  Info,
  Subtitle,
  Biography,
  ReadMore,
} from "./style";
import { IPersonDetail } from "types";

interface IProps {
  person: IPersonDetail;
}

const readMoreHandler = (e: React.BaseSyntheticEvent, content: string) => {
  const target: HTMLElement = e.target;
  if (target.parentElement) {
    target.parentElement.innerHTML = content;
  }
};

const Detail: React.FunctionComponent<IProps> = ({ person }) => {
  return (
    <Container>
      <CenterContainer>
        <Poster
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w342${person.profile_path}`
              : require("assets/no-image-person.png").default
          }
        />
        <DetailContainer>
          <Name>{person.name}</Name>
          <Info>
            {`${person.gender === 0 ? "Male" : "Female"} • ${
              person.known_for_department
            }`}
          </Info>
          <Info>
            {`${person.birthday} (${
              person.birthday &&
              new Date().getFullYear() - Number(person.birthday.slice(0, 4)) + 1
            } years old)`}
          </Info>
          <Info>{person.place_of_birth}</Info>
          {person.biography.length > 0 && <Subtitle>Biagraphy</Subtitle>}
          <Biography>
            {person.biography.length > 280 ? (
              <>
                {`${person.biography.slice(0, 280)}...`}
                <ReadMore onClick={(e) => readMoreHandler(e, person.biography)}>
                  Read More
                </ReadMore>
              </>
            ) : (
              person.biography
            )}
          </Biography>
        </DetailContainer>
      </CenterContainer>
    </Container>
  );
};

export default Detail;
