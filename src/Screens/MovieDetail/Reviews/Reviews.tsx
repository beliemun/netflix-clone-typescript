import React from "react";
import {
  Container,
  Title,
  Item,
  Poster,
  DetailContainer,
  Name,
  Content,
  CreateAt,
  ReadMore,
} from "./style";
import { IReview } from "types";
import { getNumberFromString } from "functions/common";
import Base from "Components/Base";

interface IProps {
  reviews: IReview[] | null;
}

const readMoreHandler = (e: React.BaseSyntheticEvent, content: string) => {
  const target: HTMLElement = e.target;
  if (target.parentElement) {
    target.parentElement.innerHTML = content;
  }
};

const Reviews: React.FunctionComponent<IProps> = ({ reviews }) => {
  return (
    <>
      {reviews && reviews.length > 0 && (
        <>
          <Base.GradientLine />
          <Title>Reviews</Title>
          <Container>
            {reviews
              .sort(
                (a, b) =>
                  getNumberFromString(b.created_at) -
                  getNumberFromString(a.created_at)
              )
              .filter((_, i) => i < 6)
              .map((item, index) => (
                <Item key={index}>
                  <Poster
                    bgUrl={
                      item.author_details.avatar_path
                        ? `https://image.tmdb.org/t/p/w154${item.author_details.avatar_path}`
                        : require("assets/no-image-person.png").default
                    }
                  />
                  <DetailContainer>
                    <Name>{item.author_details.username}</Name>
                    <Content>
                      {item.content.length > 180 ? (
                        <>
                          {`"${item.content.slice(0, 180)}"`}...
                          <ReadMore
                            onClick={(e) => readMoreHandler(e, item.content)}
                          >
                            Read More
                          </ReadMore>
                        </>
                      ) : (
                        `"${item.content}"`
                      )}
                    </Content>
                    <CreateAt>{item.created_at.slice(0, 10)}</CreateAt>
                  </DetailContainer>
                </Item>
              ))}
          </Container>
        </>
      )}
    </>
  );
};

export default Reviews;
