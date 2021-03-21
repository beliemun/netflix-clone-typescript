import Base from "Components/Base";
import React from "react";
import {
  Container,
  Section,
  Title,
  ProfileContainer,
  Poster,
  Message,
} from "../Home/style";

const Review: React.FunctionComponent = () => (
  <Container>
    <Section>
      <Title bgUrl={require("assets/texture.jpg").default} isHeader={true}>
        개발 후기
      </Title>
      <ProfileContainer>
        <Poster src={require("assets/profile.jpeg").default} />
        <Message>개발 후기입니다.</Message>
      </ProfileContainer>
      <Base.GradientLine />
    </Section>
  </Container>
);

export default Review;
