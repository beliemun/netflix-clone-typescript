import Base from "Components/Base";
import React from "react";
import {
  Container,
  Section,
  Title,
  ProfileContainer,
  Poster,
  Message,
  ImageContainer,
  Image,
  A,
  AlertText,
  SeriesContainer,
} from "../Home/style";

const Series: React.FunctionComponent = () => (
  <Container>
    <Section>
      <Title bgUrl={require("assets/texture.jpg").default} isHeader={true}>
        니꼬시리즈 소개
      </Title>
    </Section>
    <Section>
      <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
        #니꼬튜브(NicoTube)
      </Title>
      <ImageContainer>
        <Image src={require("assets/nicotube.png").default} />
      </ImageContainer>
      <ProfileContainer>
        <Poster src={require("assets/profile.jpeg").default} />
        <Message>Youtube Clone 6기 졸업 작품</Message>
      </ProfileContainer>
      <SeriesContainer>
        <A href="https://stormy-hollows-56478.herokuapp.com/" target="_blank">
          <AlertText>NicoTube 👉</AlertText>
        </A>
      </SeriesContainer>
      <Section>
        <Base.GradientLine />
      </Section>
      <Title bgUrl={require("assets/texture.jpg").default} isHeader={false}>
        #니꼬플릭스(NICOFLIX)
      </Title>
      <ImageContainer>
        <Image src={require("assets/nicoflix.png").default} />
      </ImageContainer>
      <ProfileContainer>
        <Poster src={require("assets/profile.jpeg").default} />
        <Message>ReactJS 8기 졸업 작품</Message>
      </ProfileContainer>
      <SeriesContainer>
        <A href="https://nicoflix.netlify.app/" target="_blank">
          <AlertText>NICOFLIX 👉</AlertText>
        </A>
      </SeriesContainer>
    </Section>
  </Container>
);

export default Series;
